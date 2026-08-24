import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectsData, certificatesData, Project, Certificate } from "@/data/showcaseData";
import { ExternalLink, Award, ArrowUpRight, X, ShieldCheck, Calendar, CheckCircle2, FileText } from "lucide-react";

const techStack = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
  { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C", color: "#EE4C2C" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00", color: "#FF6F00" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688", color: "#009688" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5", color: "#326CE5" },
  { name: "MLflow", icon: "https://cdn.simpleicons.org/mlflow/0194E2", color: "#0194E2" },
  { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E", color: "#FFD21E" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624", color: "#FCC624" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/232F3E", color: "#FF9900" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function ProjectCard({ item }: { item: Project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${item.slug}`)}
      className="group relative rounded-3xl border border-white/15 overflow-hidden bg-white/[0.04] 
      hover:border-white/30 transition-all duration-500 cursor-pointer
      hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col justify-between"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div>
        {/* Thumbnail Image */}
        <div className="relative h-52 overflow-hidden bg-white/5 border-b border-white/10">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md text-white/80 border border-white/20">
              Project
            </span>

            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-8 h-8 rounded-full 
              bg-black/60 border border-white/20 text-white/70 
              hover:bg-white hover:text-black hover:border-white 
              transition-all duration-200"
            >
              <GithubIcon />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors mb-2 uppercase italic">
            {item.title}
          </h3>

          <p className="text-xs text-white/70 leading-relaxed font-light line-clamp-3 mb-5">
            {item.shortDescription}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {item.tech.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-[9px] font-mono tracking-wider bg-white/5 border border-white/10 text-white/80"
              >
                {tag}
              </span>
            ))}
            {item.tech.length > 4 && (
              <span className="px-2 py-1 rounded-lg text-[9px] font-mono bg-white/5 text-white/40">
                +{item.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
        <span>View Details</span>
        <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  );
}

function CertCard({
  item,
  onOpenDetails,
}: {
  item: Certificate;
  onOpenDetails: (cert: Certificate) => void;
}) {
  return (
    <div
      onClick={() => onOpenDetails(item)}
      className="group relative rounded-3xl border border-white/15 overflow-hidden bg-white/[0.04]
      hover:border-white/30 transition-all duration-500 cursor-pointer
      hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md flex flex-col justify-between p-6"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <Award size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">
                {item.issuer}
              </span>
              <span className="text-[10px] font-mono text-white/40 block">
                {item.issued}
              </span>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase bg-white/5 text-white/70 border border-white/10">
            VERIFIED
          </span>
        </div>

        <h3 className="text-base font-bold text-white leading-snug group-hover:text-white/90 transition-colors mb-3">
          {item.title}
        </h3>

        {item.description && (
          <p className="text-xs text-white/60 leading-relaxed line-clamp-2 font-light mb-4">
            {item.description}
          </p>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-md text-[9px] font-mono tracking-wider bg-white/5 border border-white/10 text-white/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
        <span className="flex items-center gap-1">
          VIEW DETAILS ↗
        </span>
        <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  );
}

function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certificate | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (cert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const isPdf = cert.credentialUrl.toLowerCase().includes(".pdf");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-[fadeIn_0.25s_ease_forwards]"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0a0a0d] border border-white/20 rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 shadow-2xl text-white my-auto max-h-[90vh] overflow-y-auto animate-[scaleUp_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-10"
        >
          <X size={18} />
        </button>

        {/* Verified Badge */}
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 mb-3">
          <ShieldCheck size={14} className="text-white/80" />
          <span>VERIFIED CREDENTIAL</span>
        </div>

        {/* Title */}
        <h2 id="modal-cert-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6 uppercase leading-snug pr-8">
          {cert.title}
        </h2>

        {/* Issuer & Issued Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1 flex items-center gap-1.5">
              <Award size={13} /> Issuer
            </span>
            <span className="text-sm font-semibold text-white">{cert.issuer}</span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1 flex items-center gap-1.5">
              <Calendar size={13} /> Issued Date
            </span>
            <span className="text-sm font-semibold text-white">{cert.issued}</span>
          </div>

          {cert.credentialId && (
            <div className="sm:col-span-2 pt-3 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                Credential ID
              </span>
              <span className="text-xs font-mono text-white/80 break-all">{cert.credentialId}</span>
            </div>
          )}
        </div>

        {/* Certificate Display Area */}
        {cert.image ? (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/15 bg-black/60 p-2 sm:p-4 flex flex-col items-center justify-center">
            <img
              src={cert.image}
              alt={`${cert.title} Certificate`}
              className="w-full h-auto max-h-[450px] object-contain rounded-xl shadow-lg"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ) : isPdf ? (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/15 bg-black/60 p-2 h-[320px] sm:h-[420px]">
            <iframe
              src={`${cert.credentialUrl}#toolbar=0`}
              title={cert.title}
              className="w-full h-full rounded-xl bg-white/5 border-0"
            />
          </div>
        ) : null}

        {/* Skills */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-2 flex items-center gap-1.5">
            <CheckCircle2 size={13} /> Skills Demonstrated
          </span>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider bg-white/5 border border-white/15 text-white/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        {cert.description && (
          <div className="mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
              Description
            </span>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              {cert.description}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-white/40 flex items-center gap-2">
            <FileText size={14} /> Verifiable Credential
          </span>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
          >
            SHOW CREDENTIAL ↗
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── 3D Dome Sphere Tech Stack ────────────────────────────────────────────────
function TechGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const rotX = useRef(0.3);
  const rotY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0.004);
  const isDragging = useRef(false);
  const lastMX = useRef(0);
  const lastMY = useRef(0);
  const dragVX = useRef(0);
  const dragVY = useRef(0);
  const rafId = useRef<number | undefined>(undefined);
  const itemEls = useRef<HTMLDivElement[]>([]);

  const RADIUS = 160;
  const n = techStack.length;

  const positions = useRef<{ x: number; y: number; z: number }[]>([]);
  useEffect(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    positions.current = Array.from({ length: n }, (_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  }, [n]);

  function project(pos: { x: number; y: number; z: number }, rx: number, ry: number) {
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const x1 = pos.x * cosY - pos.z * sinY;
    const z1 = pos.x * sinY + pos.z * cosY;
    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    const y2 = pos.y * cosX - z1 * sinX;
    const z2 = pos.y * sinX + z1 * cosX;
    return { x: x1, y: y2, z: z2 };
  }

  useEffect(() => {
    const els = itemEls.current;

    function render() {
      if (!isDragging.current) {
        rotY.current += velY.current;
        rotX.current += velX.current;
        velX.current *= 0.97;
        velY.current = velY.current * 0.99 + 0.004 * 0.01;
        if (rotX.current > 0.6) velX.current -= 0.0005;
        if (rotX.current < -0.1) velX.current += 0.0005;
      }

      const projected = positions.current.map((pos, i) => ({
        el: els[i],
        p: project(pos, rotX.current, rotY.current),
      }));

      projected
        .slice()
        .sort((a, b) => a.p.z - b.p.z)
        .forEach(({ el, p }, idx) => {
          if (!el) return;
          const x = p.x * RADIUS + 210 - 36;
          const y = p.y * RADIUS + 210 - 36;
          const depth = (p.z + 1) / 2;
          const opacity = 0.25 + depth * 0.75;
          const scale = 0.55 + depth * 0.55;
          el.style.cssText = `position:absolute;left:${x}px;top:${y}px;opacity:${opacity};transform:scale(${scale});z-index:${idx};width:72px;height:72px;`;
        });

      rafId.current = requestAnimationFrame(render);
    }

    rafId.current = requestAnimationFrame(render);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMX.current = e.clientX;
    lastMY.current = e.clientY;
    dragVX.current = 0;
    dragVY.current = 0;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastMX.current;
      const dy = e.clientY - lastMY.current;
      dragVX.current = dy * 0.005;
      dragVY.current = dx * 0.005;
      rotX.current += dragVX.current;
      rotY.current += dragVY.current;
      lastMX.current = e.clientX;
      lastMY.current = e.clientY;
    };
    const onMouseUp = () => {
      if (isDragging.current) {
        velX.current = dragVX.current;
        velY.current = dragVY.current || 0.004;
        isDragging.current = false;
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    lastMX.current = e.touches[0].clientX;
    lastMY.current = e.touches[0].clientY;
    dragVX.current = 0;
    dragVY.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastMX.current;
    const dy = e.touches[0].clientY - lastMY.current;
    dragVX.current = dy * 0.005;
    dragVY.current = dx * 0.005;
    rotX.current += dragVX.current;
    rotY.current += dragVY.current;
    lastMX.current = e.touches[0].clientX;
    lastMY.current = e.touches[0].clientY;
  };
  const onTouchEnd = () => {
    velX.current = dragVX.current;
    velY.current = dragVY.current || 0.004;
    isDragging.current = false;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3 text-white/40">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono">
          {techStack.length} technologies · daily stack
        </span>
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
      </div>

      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center select-none"
        style={{ height: "460px", cursor: "grab" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        <div
          ref={sceneRef}
          className="relative"
          style={{ width: "420px", height: "420px" }}
        >
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              ref={(el) => { if (el) itemEls.current[i] = el; }}
              style={{ position: "absolute", width: 72, height: 72 }}
            >
              <div
                className="w-full h-full rounded-[18px] flex flex-col items-center justify-center gap-[5px] transition-[border-color] duration-200 hover:scale-110"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 20px -8px ${tech.color}55`,
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  style={{ width: 30, height: 30, objectFit: "contain" }}
                />
                <span
                  style={{
                    fontSize: 9,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{ boxShadow: "inset 0 0 80px 40px rgba(0,0,0,0.7)" }}
        />
      </div>
    </div>
  );
}

type TabId = "projects" | "certificates" | "tech";

const tabs: { id: TabId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
];

export default function ShowcaseSection() {
  const [active, setActive] = useState<TabId>("projects");
  const [animKey, setAnimKey] = useState(0);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const touchStartX = useRef<number | null>(null);

  const switchTab = useCallback(
    (id: TabId) => {
      if (id === active) return;
      setActive(id);
      setAnimKey((k) => k + 1);
    },
    [active]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < 50) return;
    const order = tabs.map((t) => t.id);
    const idx = order.indexOf(active);
    if (dx < 0 && idx < order.length - 1) switchTab(order[idx + 1]);
    if (dx > 0 && idx > 0) switchTab(order[idx - 1]);
    touchStartX.current = null;
  };

  const activePillLeft =
    active === "projects"
      ? "8px"
      : active === "certificates"
      ? "calc(33.333% + 4px)"
      : "calc(66.666% + 0px)";

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden text-white px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20 select-none">
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        {/* Label */}
        <div className="relative flex items-center justify-center gap-4 mb-5 opacity-0 animate-[fadeSlideDown_0.8s_ease_forwards]">
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-mono">
            Showcase
          </span>
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
        </div>

        {/* Heading */}
        <div className="relative overflow-hidden mb-12">
          <h1
            className="text-center font-black tracking-tight leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] text-white opacity-0 whitespace-nowrap animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
            style={{ fontSize: "clamp(32px,6vw,80px)" }}
          >
            <span className="inline-block bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h1>
        </div>

        {/* Tab Switcher */}
        <div
          className="relative flex items-center p-1.5 rounded-full border border-white/20 bg-white/[0.08] mb-14 w-full max-w-md opacity-0 animate-[fadeSlideUp_0.6s_ease_0.3s_forwards] shadow-2xl shadow-black/40"
          style={{ backdropFilter: "blur(30px)" }}
        >
          <div
            className="absolute top-1.5 bottom-1.5 rounded-full bg-white/20 border border-white/40 transition-[left] duration-300 ease-out shadow-xl shadow-white/10"
            style={{
              width: "calc(33.333% - 4px)",
              left: activePillLeft,
              backdropFilter: "blur(15px)",
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className="relative z-10 flex-1 h-12 rounded-full text-xs font-medium tracking-wide transition-colors duration-200"
            >
              <span
                className={
                  active === tab.id
                    ? "text-white font-semibold"
                    : "text-white/35 hover:text-white/60"
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content area with swipe */}
        <div
          key={animKey}
          className="w-full opacity-0 animate-[contentIn_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {active === "projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projectsData.map((item, i) => (
                <div
                  key={item.slug}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "certificates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {certificatesData.map((item, i) => (
                <div
                  key={item.slug}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.04}s forwards` }}
                >
                  <CertCard item={item} onOpenDetails={setActiveCert} />
                </div>
              ))}
            </div>
          )}

          {active === "tech" && (
            <div
              className="opacity-0"
              style={{ animation: "fadeSlideUp 0.5s ease forwards" }}
            >
              <TechGrid />
            </div>
          )}
        </div>
      </div>

      {/* Certificate Details Modal */}
      <CertificateModal
        cert={activeCert}
        onClose={() => setActiveCert(null)}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes headingReveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineMove {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
