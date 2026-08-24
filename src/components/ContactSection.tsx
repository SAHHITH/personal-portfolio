import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import ContactMap from "./ContactMap";

export default function ContactSection() {
  return (
    <section
      className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden
      px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 text-white flex flex-col justify-between"
    >
      {/* Premium grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/10 blur-[140px] opacity-20" />
        <div className="absolute bottom-[-220px] right-[-120px] w-[350px] h-[350px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute top-[30%] left-[-120px] w-[300px] h-[300px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        {/* Label */}
        <div className="relative flex items-center justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-[fadeSlideDown_0.8s_ease_forwards]">
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-mono">
            Contact
          </span>

          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
        </div>

        {/* Two Column Layout on Desktop, Stacked on Mobile/Tablet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Contact Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {/* Title */}
            <div className="relative overflow-hidden">
              <h1
                className="font-black tracking-tight leading-none
                drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
                text-white opacity-0
                animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
                style={{
                  fontSize: "clamp(36px,5vw,72px)",
                }}
              >
                <span className="inline-block bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
                  Let's Build Together
                </span>
              </h1>
            </div>

            {/* Descriptive Text */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light text-white/80 tracking-wide">
              Have an idea, project, or collaboration in mind?
              <br className="hidden sm:block" />
              Let's create something clean, modern, and impactful together.
            </p>

            {/* Contact & Resume Options Grid */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full">
              {/* EMAIL */}
              <a
                href="mailto:shahithgilbert@gmail.com"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl
                border border-white/15 bg-white/[0.04] backdrop-blur-xl
                transition-all duration-300 hover:scale-105 hover:border-white/40
                hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <FaEnvelope className="text-white/80 group-hover:text-white text-base transition-all duration-300" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-white/90 group-hover:text-white">
                  EMAIL
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/shahith-gilbert-379bb1333"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl
                border border-white/15 bg-white/[0.04] backdrop-blur-xl
                transition-all duration-300 hover:scale-105 hover:border-sky-400/40
                hover:bg-sky-500/10 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
              >
                <FaLinkedin className="text-white/80 group-hover:text-sky-400 text-base transition-all duration-300" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-white/90 group-hover:text-white">
                  LINKEDIN
                </span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/SAHHITH"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl
                border border-white/15 bg-white/[0.04] backdrop-blur-xl
                transition-all duration-300 hover:scale-105 hover:border-white/40
                hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <FaGithub className="text-white/80 group-hover:text-white text-base transition-all duration-300" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-white/90 group-hover:text-white">
                  GITHUB
                </span>
              </a>

              {/* DOWNLOAD RESUME */}
              <a
                href="/resume.pdf"
                download="Shahith_G_Resume.pdf"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl
                border border-white/15 bg-white/[0.04] backdrop-blur-xl
                transition-all duration-300 hover:scale-105 hover:border-white/40
                hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <FaDownload className="text-white/80 group-hover:text-white text-base transition-all duration-300" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold text-white/90 group-hover:text-white">
                  DOWNLOAD RESUME
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: MapCN Dev Interactive Location Map */}
          <div className="lg:col-span-7 w-full">
            <ContactMap />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-16 border-t border-white/10 pt-8 pb-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-center text-xs tracking-[0.22em] text-white/35 font-mono uppercase">
            Copyright © {new Date().getFullYear()} All Rights Reserved | Created by{" "}
            <span className="text-white/70 font-semibold">SHAHITH G</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes headingReveal {
          from { opacity: 0; transform: translateY(40px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        @keyframes lineMove {
          from { transform: translateX(-120%); }
          to { transform: translateX(120%); }
        }
      `}</style>
    </section>
  );
}
