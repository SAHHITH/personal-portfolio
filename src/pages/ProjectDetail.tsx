import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "@/data/showcaseData";
import { ArrowLeft, ExternalLink, Github, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Showcase
        </button>

        <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/50 uppercase font-mono hidden sm:block">
          Project Detail · {project.title}
        </span>
      </nav>

      {/* Main Content */}
      <main className="pt-28 md:pt-36 pb-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto relative z-10">
        {/* Subtle Background Pattern */}
        <div
          className="fixed inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50 font-mono mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            <span>{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase italic leading-[1.05] text-white mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl leading-relaxed font-light">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Image & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Project Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Tech Tags */}
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-white/50 mb-4">
                <Code2 size={16} />
                <span>Technologies Used</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-xl text-xs font-mono tracking-wider bg-white/5 border border-white/15 text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Info & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Overview Box */}
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-white/50 flex items-center gap-2">
                <Sparkles size={16} />
                <span>Project Overview</span>
              </h3>

              <p className="text-white/80 leading-relaxed text-sm md:text-base font-light">
                {project.detailedDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-white/50 flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Key Features</span>
              </h3>

              <ul className="space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Purpose & GitHub Link */}
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-2">
                  Core Purpose
                </h4>
                <p className="text-sm text-white/70 leading-relaxed italic">
                  "{project.coreFocus}"
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                >
                  <Github size={18} />
                  GITHUB REPOSITORY
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
