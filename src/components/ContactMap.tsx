"use client";

import React, { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Compass, MapPin } from "lucide-react";

// Default Fallback Coordinates: Chennai City Land Area, India
const CHENNAI_COORDS = { lat: 13.0674, lng: 80.2376 };

// 1. Dark Theme Tile Style (Matches portfolio dark aesthetic)
const DARK_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  name: "Dark Theme",
  sources: {
    "carto-dark": {
      type: "raster",
      tiles: [
        "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
        "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
        "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
        "https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      ],
      tileSize: 256,
      maxzoom: 19,
      attribution: "&copy; OpenStreetMap &copy; CARTO",
    },
  },
  layers: [
    {
      id: "carto-dark-layer",
      type: "raster",
      source: "carto-dark",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

// 2. OpenStreetMap Standard Bright Style
const OSM_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  name: "OpenStreetMap",
  sources: {
    "osm-tiles": {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      maxzoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    },
  },
  layers: [
    {
      id: "osm-tiles-layer",
      type: "raster",
      source: "osm-tiles",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

// 3. OpenFreeMap 3D Vector Style URL
const THREE_D_STYLE = "https://tiles.openfreemap.org/styles/liberty";

type StyleMode = "default" | "openstreetmap" | "3d";

export default function ContactMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);

  const [coords, setCoords] = useState<{ lat: number; lng: number }>({
    lat: CHENNAI_COORDS.lat,
    lng: CHENNAI_COORDS.lng,
  });

  const [locationStatus, setLocationStatus] = useState<"loading" | "live" | "fallback">("loading");
  const [styleMode, setStyleMode] = useState<StyleMode>("default");

  // Geolocation lookup
  useEffect(() => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setLocationStatus("fallback");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        setCoords({ lat: userLat, lng: userLng });
        setLocationStatus("live");
      },
      (error) => {
        console.warn("Geolocation fallback to Chennai, India:", error.message);
        setCoords({ lat: CHENNAI_COORDS.lat, lng: CHENNAI_COORDS.lng });
        setLocationStatus("fallback");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  }, []);

  // Map initialization & lifecycle
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const initialStyle: maplibregl.StyleSpecification | string =
      styleMode === "default"
        ? DARK_STYLE
        : styleMode === "openstreetmap"
        ? OSM_STYLE
        : THREE_D_STYLE;

    // Create MapLibre map instance with explicit center [longitude, latitude]
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: initialStyle,
      center: [coords.lng, coords.lat],
      zoom: 13,
      pitch: styleMode === "3d" ? 60 : 0,
      bearing: styleMode === "3d" ? -20 : 0,
      attributionControl: false,
    });

    mapRef.current = map;

    // Navigation Controls
    map.addControl(
      new maplibregl.NavigationControl({ showCompass: true, showZoom: true }),
      "bottom-right"
    );

    // Style load error fallback
    map.on("error", (e) => {
      console.warn("Map style load warning, restoring fallback style:", e);
      if (e && e.error && e.error.message && e.error.message.includes("style")) {
        try {
          map.setStyle(OSM_STYLE);
        } catch (err) {
          console.error("Fallback error:", err);
        }
      }
    });

    // Custom pulse marker
    const el = document.createElement("div");
    el.className = "relative flex items-center justify-center cursor-pointer z-10";
    el.innerHTML = `
      <div class="relative flex items-center justify-center">
        <span class="animate-ping absolute inline-flex h-9 w-9 rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 border-2 border-white shadow-[0_0_20px_rgba(16,185,129,0.9)]"></span>
      </div>
    `;

    const marker = new maplibregl.Marker({ element: el })
      .setLngLat([coords.lng, coords.lat])
      .addTo(map);

    markerRef.current = marker;

    // Recalculate dimensions on load & mount
    map.on("load", () => {
      map.resize();
    });

    const timer = setTimeout(() => {
      map.resize();
    }, 200);

    // ResizeObserver for dynamic layout changes
    const resizeObserver = new ResizeObserver(() => {
      if (mapRef.current) {
        mapRef.current.resize();
      }
    });

    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Smooth camera update when coordinates change
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.easeTo({
        center: [coords.lng, coords.lat],
        zoom: 13,
        duration: 1200,
      });
    }
    if (markerRef.current) {
      markerRef.current.setLngLat([coords.lng, coords.lat]);
    }
  }, [coords]);

  // Handle Style Switching & 3D Pitch
  const handleStyleChange = (mode: StyleMode) => {
    setStyleMode(mode);
    if (!mapRef.current) return;

    const map = mapRef.current;
    const nextStyle: maplibregl.StyleSpecification | string =
      mode === "default"
        ? DARK_STYLE
        : mode === "openstreetmap"
        ? OSM_STYLE
        : THREE_D_STYLE;

    map.setStyle(nextStyle);

    map.once("style.load", () => {
      if (!mapRef.current) return;
      if (mode === "3d") {
        mapRef.current.easeTo({
          pitch: 60,
          bearing: -20,
          zoom: 14,
          duration: 700,
        });
      } else {
        mapRef.current.easeTo({
          pitch: 0,
          bearing: 0,
          zoom: 13,
          duration: 700,
        });
      }
      mapRef.current.resize();
    });
  };

  return (
    <div className="relative w-full h-[520px] min-h-[480px] rounded-3xl border border-white/15 bg-[#0a0a0d] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
      {/* Top Controls Overlay */}
      <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-black/60 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
            <Compass size={16} />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 block">
              CURRENT LOCATION
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                    locationStatus === "live" ? "bg-emerald-400" : "bg-amber-400"
                  } opacity-75`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    locationStatus === "live" ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
              </span>
              <span className="text-[11px] sm:text-xs font-mono tracking-widest text-white/90 uppercase font-semibold">
                {locationStatus === "live"
                  ? "● LIVE DEVICE LOCATION"
                  : locationStatus === "loading"
                  ? "● LOCATING DEVICE..."
                  : "LOCATION UNAVAILABLE (CHENNAI, INDIA)"}
              </span>
            </div>
          </div>
        </div>

        {/* Compact Style Controls */}
        <div className="flex items-center gap-1 bg-black/80 p-1 rounded-xl border border-white/15 backdrop-blur-md z-10">
          <button
            onClick={() => handleStyleChange("default")}
            className={`px-2.5 py-1 rounded-lg text-[9px] font-mono tracking-wider uppercase transition-all ${
              styleMode === "default"
                ? "bg-white text-black font-semibold shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            DEFAULT
          </button>
          <button
            onClick={() => handleStyleChange("openstreetmap")}
            className={`px-2.5 py-1 rounded-lg text-[9px] font-mono tracking-wider uppercase transition-all ${
              styleMode === "openstreetmap"
                ? "bg-white text-black font-semibold shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            OPENSTREETMAP
          </button>
          <button
            onClick={() => handleStyleChange("3d")}
            className={`px-2.5 py-1 rounded-lg text-[9px] font-mono tracking-wider uppercase transition-all ${
              styleMode === "3d"
                ? "bg-white text-black font-semibold shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            3D VIEW
          </button>
        </div>
      </div>

      {/* Map Canvas Wrapper */}
      <div className="relative w-full flex-1 min-h-[380px] bg-[#0c0c0e] z-0">
        <div ref={mapContainerRef} className="absolute inset-0 w-full h-full min-h-[380px]" />
      </div>

      {/* Bottom Coordinates Bar */}
      <div className="p-4 border-t border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-between font-mono text-[10px] sm:text-xs text-white/70 tracking-widest z-10">
        <div className="flex items-center gap-4">
          <span>
            LAT: <strong className="text-white">{coords.lat.toFixed(4)}</strong>
          </span>
          <span>
            LNG: <strong className="text-white">{coords.lng.toFixed(4)}</strong>
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-white/40">
          <MapPin size={12} />
          <span className="uppercase text-[9px] tracking-wider">MapCN Dev · OpenStreetMap</span>
        </div>
      </div>
    </div>
  );
}
