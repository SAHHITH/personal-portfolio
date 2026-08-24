export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  tech: string[];
  thumbnail: string;
  github: string;
  keyFeatures: string[];
  coreFocus: string;
}

export interface Certificate {
  slug: string;
  title: string;
  issuer: string;
  issued: string;
  credentialUrl: string;
  skills: string[];
  credentialId?: string;
  description: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    slug: "metahuman-chat-bot",
    title: "METAHUMAN CHAT BOT",
    category: "AI CONVERSATIONAL DIGITAL HUMAN",
    shortDescription:
      "An AI-powered conversational digital human built using Unreal Engine 5 and MetaHuman Creator. The system combines natural language processing, voice interaction, and facial animation to create realistic real-time conversations.",
    detailedDescription:
      "MetaHuman Chat Bot is an AI-powered conversational digital human built using Unreal Engine 5 and MetaHuman Creator. The system combines natural language processing, voice interaction, and facial animation to create realistic real-time conversations. It demonstrates how AI avatars can communicate naturally while synchronizing speech, expressions, and lip movements.",
    tech: [
      "UNREAL ENGINE 5",
      "METAHUMAN CREATOR",
      "OPENAI",
      "FASTAPI",
      "PYTHON",
      "REST API",
    ],
    thumbnail: "/images/projects/metahuman-chatbot.png",
    github: "https://github.com/SAHHITH/META-HUMAN-CHATBOT-",
    keyFeatures: [
      "Real-time facial animation & lip-syncing",
      "Voice-to-voice natural conversation loop",
      "Low-latency FastAPI Python inference backend",
      "Unreal Engine 5 MetaHuman rendering integration",
    ],
    coreFocus:
      "Merging advanced generative AI models with photorealistic 3D avatars for immersive digital human interaction.",
  },
  {
    slug: "aquacast",
    title: "AQUACAST",
    category: "AI-POWERED MARINE WEATHER & FISHING INTELLIGENCE",
    shortDescription:
      "An AI-powered marine weather and fishing intelligence platform designed to help fishermen make smarter decisions using weather data, marine intelligence, and predictive analytics.",
    detailedDescription:
      "An AI-powered marine weather and fishing intelligence platform designed to help fishermen make smarter decisions using weather data, marine intelligence, and predictive analytics.",
    tech: [
      "REACT",
      "FASTAPI",
      "MAPBOX",
      "PYTHON",
      "MACHINE LEARNING",
      "WEATHER APIs",
    ],
    thumbnail: "/images/projects/aquacast.png",
    github: "https://github.com/SAHHITH/Aqua-cast",
    keyFeatures: [
      "Real-time marine weather forecasting & wind tracking",
      "AI/ML predictive fishing zone intelligence",
      "Interactive Mapbox geospatial marine visualization",
      "Multi-language decision support for marine operators",
    ],
    coreFocus:
      "Leveraging machine learning predictive analytics and oceanographic data to improve safety and yield for marine operators.",
  },
  {
    slug: "carbontrack-ai",
    title: "CARBONTRACK AI",
    category: "AI-POWERED SUSTAINABILITY PLATFORM",
    shortDescription:
      "A full-stack AI-powered sustainability platform that tracks carbon emissions, visualizes environmental data, and helps users understand and reduce their carbon footprint.",
    detailedDescription:
      "A full-stack AI-powered sustainability platform that tracks carbon emissions, visualizes environmental data, and helps users understand and reduce their carbon footprint.",
    tech: ["NEXT.JS", "NODE.JS", "MONGODB", "AI", "MACHINE LEARNING"],
    thumbnail: "/images/projects/carbontrack-ai.png",
    github: "https://github.com/SAHHITH/Carbon-Track-AI-",
    keyFeatures: [
      "Automated carbon footprint calculation & tracking",
      "Predictive emission analytics and AI reduction advice",
      "Interactive environmental data dashboards",
      "Full-stack scalable data pipeline and MongoDB storage",
    ],
    coreFocus:
      "Empowering organizations and individuals with AI-driven actionable insights for sustainability and carbon reduction.",
  },
];

export const certificatesData: Certificate[] = [
  {
    slug: "ai-agents-fundamentals",
    title: "AI Agents Fundamentals",
    issuer: "Hugging Face",
    issued: "Aug 2026",
    credentialUrl: "https://huggingface.co/Shahith565",
    skills: ["Large Language Model Operations (LLMOps)"],
    credentialId: "Shahith565",
    description:
      "Comprehensive certification in AI Agents architecture, autonomous LLM workflows, tool invocation, and Large Language Model Operations (LLMOps) by Hugging Face.",
  },
  {
    slug: "aws-educate-machine-learning-foundations",
    title: "AWS Educate Machine Learning Foundations - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jul 2026",
    credentialUrl: "https://www.credly.com/org/amazon-web-services",
    skills: ["Machine Learning"],
    image: "/assets/certificates/aws-ml-badge.png",
    description:
      "Training badge certifying foundational machine learning concepts, predictive modeling algorithms, and practical ML implementation on AWS.",
  },
  {
    slug: "jpmorgan-software-engineering",
    title: "JPMorganChase - Software Engineering Job Simulation",
    issuer: "Forage",
    issued: "Jul 2026",
    credentialUrl:
      "https://www.theforage.com/simulations/jpmorganchase/software-engineering-6a6481f4d3a970278a0ffb6b",
    skills: ["Spring Framework"],
    credentialId: "6a6481f4d3a970278a0ffb6b",
    description:
      "Completed virtual job simulation covering enterprise software engineering, financial application development, Java architecture, and Spring Framework integration.",
  },
  {
    slug: "forage-solutions-architecture",
    title: "Forage Academy - Solutions Architecture Job Simulation",
    issuer: "Forage",
    issued: "Aug 2026",
    credentialUrl:
      "https://www.theforage.com/simulations/forage-academy/solutions-architecture-6a756438350ada73ed90fbb1",
    skills: ["Solutions Architecture", "System Design", "Cloud Infrastructure"],
    credentialId: "6a756438350ada73ed90fbb1",
    description:
      "Completed virtual job simulation covering enterprise solutions architecture, cloud infrastructure design, technical requirements synthesis, and system scalability.",
  },
  {
    slug: "foundations-of-prompt-engineering",
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    issued: "Aug 2026",
    credentialUrl: "https://aws.amazon.com/training/",
    skills: ["Prompt Engineering"],
    credentialId: "244a0429-421-4c2b-8e7b-7fd6ab47cc66",
    image: "/assets/certificates/aws-prompt-engineering.jpg",
    description:
      "Official AWS Training & Certification in Prompt Engineering principles, generative AI model prompting techniques, in-context learning, and LLM optimization.",
  },
  {
    slug: "dataops-methodology",
    title: "DataOps Methodology",
    issuer: "Cognitive Class",
    issued: "Aug 2026",
    credentialUrl:
      "https://cognitiveclass.ai/certificates/54371cb0a2b741288d8de2ffdbc9a759",
    skills: ["Data Operations"],
    credentialId: "54371cb0a2b741288d8de2ffdbc9a759",
    description:
      "Certification in DataOps methodology, continuous data pipeline automation, data governance, quality benchmarking, and collaborative lifecycle management.",
  },
  {
    slug: "networking-basics",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    issued: "Aug 2026",
    credentialUrl:
      "https://www.credly.com/badges/25ac3fcc-c5a1-41a7-9004-085b3f18b8fc",
    skills: ["Networking"],
    credentialId: "25ac3fcc-c5a1-41a7-9004-085b3f18b8fc",
    description:
      "Official Cisco Networking Academy certification covering computer networking fundamentals, network architecture, TCP/IP protocols, and network security.",
  },
  {
    slug: "oracle-certified-foundations-associate",
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    issued: "August 19, 2026",
    credentialUrl: "https://mylearn.oracle.com/",
    skills: ["Oracle Cloud Infrastructure", "AI Foundations", "Machine Learning"],
    credentialId: "SHAHITH G - Oracle Certified AI Associate",
    image: "/assets/certificates/oracle-ecertificate.jpg",
    description:
      "Official Oracle Cloud Infrastructure Certified AI Foundations Associate certification issued to SHAHITH G on August 19, 2026, demonstrating expertise in OCI AI services and cloud machine learning solutions.",
  },
  {
    slug: "quantium-data-analytics",
    title: "Quantium - Data Analytics Job Simulation",
    issuer: "Forage",
    issued: "July 2026",
    credentialUrl:
      "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_6a44b85cf3ebbedb9598bca0_1783093286974_completion_certificate.pdf",
    skills: ["Data Analytics", "Python", "Data Visualization", "Data Mining", "Commercial Insights"],
    credentialId: "32A6DqtsbF7LbKdcq",
    description:
      "Completed virtual job simulation involving data preparation, customer analytics, commercial metrics benchmarking, and strategic recommendations for retail analytics.",
  },
  {
    slug: "datacom-cloud",
    title: "Datacom - Introduction to Cloud Job Simulation",
    issuer: "Forage",
    issued: "July 2026",
    credentialUrl:
      "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/qsuRRyXDZ7Dj2QFx4_gCW7Xki5Y3vNpBmnn_6a44b85cf3ebbedb9598bca0_1782984339563_completion_certificate.pdf",
    skills: ["Cloud Computing", "Infrastructure", "System Design", "Cloud Architecture"],
    credentialId: "gCW7Xki5Y3vNpBmnn",
    description:
      "Completed virtual simulation analyzing cloud infrastructure requirements, evaluating cloud migration strategies, and architecting scalable cloud solutions.",
  },
  {
    slug: "tata-genai-data-analytics",
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    issued: "July 2026",
    credentialUrl:
      "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a44b85cf3ebbedb9598bca0_1782897138351_completion_certificate.pdf",
    skills: ["Generative AI", "Data Analytics", "Prompt Engineering", "Business Insights"],
    credentialId: "ifobHAoMjQs9s6bKS",
    description:
      "Completed virtual simulation applying Generative AI algorithms to augment data analytics, extract executive insights, and automate analytical report generation.",
  },
  {
    slug: "tata-cybersecurity",
    title: "Tata - Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    issued: "July 2026",
    credentialUrl:
      "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_6a44b85cf3ebbedb9598bca0_1783328294324_completion_certificate.pdf",
    skills: ["Cybersecurity", "Threat Analysis", "Security Risk Management", "IAM Protocols"],
    credentialId: "ifobHAoMjQs9s6bKS-SEC",
    description:
      "Completed practical cybersecurity simulation involving security architecture evaluation, threat vectors analysis, and IAM security policy design.",
  },
  {
    slug: "deloitte-data-analytics",
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    issued: "July 2026",
    credentialUrl:
      "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a44b85cf3ebbedb9598bca0_1783326925291_completion_certificate.pdf",
    skills: ["Data Analytics", "Data Modeling", "Dashboard Design", "Business Intelligence"],
    credentialId: "9PBTqmSxAf6zZTseP",
    description:
      "Completed virtual simulation designing interactive data dashboards, creating telemetry analytics models, and synthesizing data-driven executive recommendations.",
  },
  {
    slug: "nvidia-jetson-ai",
    title: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA",
    issued: "July 2026",
    credentialUrl: "https://learn.nvidia.com/certificates?id=ptXB9_FfTwSk7-5rhmksHA",
    skills: ["Edge AI", "NVIDIA Jetson", "Deep Learning", "Computer Vision", "PyTorch"],
    credentialId: "ptXB9_FfTwSk7-5rhmksHA",
    description:
      "Official NVIDIA Deep Learning Institute certification covering edge AI deployment, deep learning inference optimization, and computer vision model training on Jetson Nano.",
  },
  {
    slug: "ai-devops-analyst",
    title: "AI DEVOPS ANALYST",
    issuer: "NASSCOM / Skill India Digital",
    issued: "July 2026",
    credentialUrl:
      "https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2026070858910887-6d136b29-9b3a-4b26-9d76-b05369cb648c",
    skills: ["AI DevOps", "CI/CD for ML", "Automated Pipelines", "MLOps Infrastructure"],
    credentialId: "2026070858910887",
    description:
      "National certification in AI DevOps certified by NASSCOM and Skill India Digital covering machine learning operations, automated deployment pipelines, and cloud ML monitoring.",
  },
  {
    slug: "ai-foundations-machine-learning",
    title: "Artificial Intelligence Foundations: Machine Learning",
    issuer: "LinkedIn Learning",
    issued: "July 2026",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/916040126f3d6dd8d130cf6b6ac45b97156291f2c72ffb4749f753e90dd8005c?trk=share_certificate",
    skills: ["Machine Learning Foundations", "Neural Networks", "Supervised Learning", "Algorithm Optimization"],
    credentialId: "916040126f3d6dd8d130cf6b6ac45b97156291f2c72ffb4749f753e90dd8005c",
    description:
      "Comprehensive certification covering core machine learning algorithms, model evaluation techniques, decision trees, and neural network fundamentals.",
  },
];

