import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function FrontendDeveloperSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.3 });

  // Mouse tilt interaction for portrait
  const portraitRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      ref={ref}
      id="frontend"
      initial={{
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      animate={{
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-20 pt-24 md:pt-28 pb-16 select-none gap-10 lg:gap-12"
    >
      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-2xl lg:max-w-xl">
        <motion.div className="flex items-center mb-6">
          <motion.span
            animate={{
              width: ["0ch", "32ch", "32ch", "0ch"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.8, 1],
            }}
            className="inline-block overflow-hidden whitespace-nowrap text-[11px] tracking-[0.3em] uppercase text-white/60 font-mono"
          >
            ✦ Available for work
          </motion.span>

          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="text-white/60 font-mono ml-[2px]"
          >
            |
          </motion.span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 50 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[1.05] tracking-tight text-white text-[clamp(44px,7.5vw,100px)]"
          >
            AI Engineer
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -80, rotate: -4 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -80, rotate: -4 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[1.05] tracking-tight text-white/70 text-[clamp(44px,7.5vw,100px)] mb-6"
          >
            & MLOps Developer
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative text-sm sm:text-base lg:text-xl
    leading-relaxed max-w-md
    font-[Poppins] font-medium
    tracking-wide
    text-transparent bg-clip-text
    bg-[length:200%_auto]
    bg-gradient-to-r
    from-white via-white/60 to-white
    animate-[shine_4s_linear_infinite]"
        >
          Building intelligent AI and machine learning systems, deploying scalable models, and creating reliable MLOps pipelines for real-world applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 flex flex-wrap gap-4 max-w-xl"
        >
          {["Python", "Machine Learning", "Deep Learning", "Generative AI", "MLOps", "Docker", "Kubernetes", "PyTorch"].map((tech) => (
            <div
              key={tech}
              className="
        relative group px-5 py-2.5 rounded-2xl
        text-sm font-medium text-white/90
        bg-white/5 backdrop-blur-xl
        border border-white/10
        overflow-hidden
        transition-all duration-300
      "
            >
              {/* animated border fill */}
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></span>

              {/* glowing border line */}
              <span className="absolute inset-0 rounded-2xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* text */}
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT PORTRAIT SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full lg:w-auto flex justify-center lg:justify-end items-center mt-6 lg:mt-0"
      >
        <motion.div
          ref={portraitRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1.2, 0],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.025 }}
          className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 hover:border-white/25 transition-colors duration-500 bg-white/[0.02] backdrop-blur-sm group"
        >
          {/* Ambient Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

          {/* Actual User Portrait Image */}
          <img
            src="/assets/shahith-portrait.jpg"
            alt="G Shahith - AI Engineer & MLOps Developer"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Subtle Bottom Vignette */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black via-black/50 to-transparent z-20 pointer-events-none" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}