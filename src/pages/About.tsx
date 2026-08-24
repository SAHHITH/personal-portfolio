import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();
  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");

  // TYPING EFFECT
  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10">
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >
          <img
            src="/assets/shahith.png"
            alt="G Shahith"
            className="
              w-[200px]
              sm:w-[280px]
              md:w-[320px]
              rounded-2xl
              border
              border-white/15
              object-cover
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              hover:border-white/25
              transition-all
              duration-300
            "
          />

          {/* DIVIDER LINE */}
          <div
            className="
              mt-6
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              w-[90vw]
              sm:w-[400px]
              md:w-[500px]
            "
          />
        </motion.div>

        {/* GLASS BOX CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-4xl
            h-[500px]
            sm:h-[550px]
            md:h-[600px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
        >
          {/* GLASS LIGHT EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* HEADER SECTION */}
          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
              "
            >
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </h1>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div
            className="
              relative
              z-10
              h-[calc(100%-80px)]
              overflow-y-auto
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >
            <div
              className="
                text-white/70
                text-sm
                sm:text-base
                leading-8
                tracking-wide
                space-y-6
              "
            >
              <p>
                I am an aspiring AI Engineer & MLOps Developer with a deep passion for
                building intelligent machine learning systems, training neural networks,
                and architecting reliable MLOps deployment pipelines.
              </p>

              <p>
                My core technical focus spans Artificial Intelligence, Machine Learning,
                Deep Learning, Generative AI, PyTorch, TensorFlow, FastAPI, Docker, Kubernetes,
                and MLOps workflows to take models from research into production environments.
              </p>

              <p>
                Currently pursuing Class 12 (PCMB), I dedicate my time to mastering AI/ML architectures,
                containerization, and model monitoring tools to deliver scalable, real-world AI applications.
              </p>

              <p>
                I actively work on projects involving conversational AI agents, real-time predictions,
                and intelligent decision systems — continually refining my engineering practices.
              </p>

              <p>
                For me, technology is not just a career option anymore —
                it's something I truly connect with and see myself doing
                in the future.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RESUME ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              overflow-hidden
              flex
              items-center
              justify-center
              gap-3
              px-8
              sm:px-10
              py-3
              sm:py-4
              rounded-2xl
              border
              border-white/15
              bg-white/8
              backdrop-blur-xl
              hover:bg-white/15
              hover:border-white/30
              transition-all
              duration-300
              shadow-[0_10px_40px_rgba(0,0,0,0.4)]
              hover:shadow-[0_15px_50px_rgba(255,255,255,0.08)]
            "
          >
            <div className="relative z-10 flex items-center gap-3">
              <span className="font-semibold tracking-wide uppercase text-sm">View Resume ↗</span>
            </div>
          </a>

          <a
            href="/resume.pdf"
            download="Shahith_G_Resume.pdf"
            className="
              group
              relative
              overflow-hidden
              flex
              items-center
              justify-center
              gap-3
              px-8
              sm:px-10
              py-3
              sm:py-4
              rounded-2xl
              border
              border-white/15
              bg-white/8
              backdrop-blur-xl
              hover:bg-white/15
              hover:border-white/30
              transition-all
              duration-300
              shadow-[0_10px_40px_rgba(0,0,0,0.4)]
              hover:shadow-[0_15px_50px_rgba(255,255,255,0.08)]
            "
          >
            <div className="relative z-10 flex items-center gap-3">
              <Download
                size={20}
                className="
                  group-hover:scale-110
                  group-hover:-translate-y-1
                  transition-all
                  duration-300
                "
              />
              <span className="font-semibold tracking-wide uppercase text-sm">Download Resume</span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}