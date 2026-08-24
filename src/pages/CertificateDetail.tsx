import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { certificatesData } from "@/data/showcaseData";
import { ArrowLeft, ExternalLink, Award, Calendar, CheckCircle2, ShieldCheck, FileText } from "lucide-react";

export default function CertificateDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const cert = certificatesData.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cert) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Certificate Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    );
  }

  const isPdf = cert.credentialUrl.toLowerCase().includes(".pdf");

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
          Certificate Detail · {cert.issuer}
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
            <ShieldCheck size={16} className="text-white/70" />
            <span>VERIFIED CREDENTIAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.1] text-white mb-6">
            {cert.title}
          </h1>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Certificate Preview Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {cert.image ? (
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.03] p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={`${cert.title} Official Certificate`}
                  className="w-full h-auto max-h-[550px] object-contain rounded-2xl"
                  loading="lazy"
                />
              </div>
            ) : isPdf ? (
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-2">
                <iframe
                  src={`${cert.credentialUrl}#toolbar=0`}
                  title={cert.title}
                  className="w-full h-[450px] sm:h-[550px] rounded-2xl bg-white/5"
                />
              </div>
            ) : (
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.03] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between min-h-[400px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-widest text-white/80">{cert.issuer}</h4>
                      <p className="text-xs font-mono text-white/40">{cert.issued}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/10 text-white/80 border border-white/20">
                    Official Certificate
                  </span>
                </div>

                <div className="py-8 my-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-white/60 tracking-wider">
                    Credential ID: {cert.credentialId || "Verified Online"}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/40 flex items-center gap-2">
                    <FileText size={14} /> Official Verifiable Credential
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white hover:underline"
                  >
                    SHOW CREDENTIAL <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: Certificate Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Meta Information */}
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-1 flex items-center gap-1.5">
                    <Award size={14} /> Issuer
                  </h4>
                  <p className="text-base font-semibold text-white">{cert.issuer}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-1 flex items-center gap-1.5">
                    <Calendar size={14} /> Issued
                  </h4>
                  <p className="text-base font-semibold text-white">{cert.issued}</p>
                </div>
              </div>

              {cert.credentialId && (
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-1">
                    Credential ID
                  </h4>
                  <p className="text-xs font-mono text-white/80 break-all">{cert.credentialId}</p>
                </div>
              )}
            </div>

            {/* Skills & Description */}
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Skills Demonstrated
                </h4>
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

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-2">
                  Certificate Description
                </h4>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {cert.description}
                </p>
              </div>

              {/* Verify Certificate Action */}
              <div className="pt-2">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                >
                  SHOW CREDENTIAL ↗
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
