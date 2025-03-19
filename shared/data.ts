// Contact information
export const contactInfo = [
  {
    icon: "bx-envelope",
    label: "Email",
    value: "lakshyajain.work@gmail.com"
  },
  {
    icon: "bx-phone",
    label: "Phone",
    value: "+1 (707)727-5354"
  },
  {
    icon: "bx-map",
    label: "Location",
    value: "Tempe, AZ, US"
  }
];

// Social media links
export const linkedInUrl = "https://www.linkedin.com/in/lakshya-jain-a747a41b5/";
export const githubUrl = "https://github.com/lakshya-asu/IntuitionAI";

export const socialLinks = [
  {
    name: "LinkedIn",
    url: linkedInUrl,
    icon: "bxl-linkedin",
    bgClass: "bg-[#0A66C2]/20",
    textClass: "text-[#0A66C2]",
    hoverClass: "hover:bg-[#0A66C2]/30"
  },
  {
    name: "GitHub",
    url: githubUrl,
    icon: "bxl-github",
    bgClass: "bg-gray-700/20",
    textClass: "text-gray-300",
    hoverClass: "hover:bg-gray-700/30"
  },
  {
    name: "Twitter",
    url: "#",
    icon: "bxl-twitter",
    bgClass: "bg-blue-400/20",
    textClass: "text-blue-400",
    hoverClass: "hover:bg-blue-400/30"
  },
  {
    name: "YouTube",
    url: "#",
    icon: "bxl-youtube",
    bgClass: "bg-red-500/20",
    textClass: "text-red-500",
    hoverClass: "hover:bg-red-500/30"
  }
];

// Skills
export const mlSkills = [
  "Causal Reasoning",
  "Deep Reinforcement Learning",
  "Graph Neural Networks",
  "Transformers"
];

export const roboticsSkills = [
  "Motion Planning",
  "SLAM",
  "Sensor Networks",
  "HRI",
  "Control Systems",
  "Soft Robotics"
];

export const devSkills = [
  "Python",
  "C++",
  "MATLAB",
  "MLflow",
  "Docker",
  "AWS/GCP",
  "FPGA",
  "Embedded Systems"
];

// Projects
export const projects = [
  {
    title: "Personalized AI Learning Agent",
    description: "Developed an AI tutor that adapts to individual learning styles and provides personalized feedback",
    technologies: ["Reinforcement Learning", "NLP"],
    type: "hackathon",
    typeLabel: "Hackathon Winner",
    icon: "bx-brain",
    link: "#"
  },
  {
    title: "Causal Discovery through Cooperative Imitation Learning",
    description: "Research on leveraging imitation learning to discover causal relationships in robotic systems",
    technologies: ["Causal Inference", "Imitation Learning"],
    type: "research",
    typeLabel: "Research",
    icon: "bx-network-chart",
    link: "#"
  },
  {
    title: "Metric-Semantic Query System",
    description: "System that enables robots to understand and interact with 3D scenes using natural language queries",
    technologies: ["Computer Vision", "NLP", "3D Perception"],
    type: "robotics",
    typeLabel: "Robotics",
    icon: "bx-cube-alt",
    link: "#"
  },
  {
    title: "Causal RL Agent for Montezuma's Revenge",
    description: "Reinforcement learning agent that uses causal reasoning to solve sparse reward game environments",
    technologies: ["Deep RL", "Causal Reasoning"],
    type: "hackathon",
    typeLabel: "Game AI",
    icon: "bx-game",
    link: "#"
  },
  {
    title: "AI Therapist in VR",
    description: "Virtual reality environment with AI-driven therapy assistant for mental health support",
    technologies: ["VR/AR", "NLP", "HCI"],
    type: "research",
    typeLabel: "VR",
    icon: "bx-glasses",
    link: "#"
  },
  {
    title: "Forest Surveillance Rover",
    description: "Autonomous rover for forest monitoring and wildfire detection using sensor fusion",
    technologies: ["Robotics", "Computer Vision", "IoT"],
    type: "robotics",
    typeLabel: "Robotics",
    icon: "bx-car",
    link: "#"
  }
];

// Experience
export const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company: "Logos Robotics Lab, ASU",
    period: "2024-Present",
    description: [
      "Courses: CSE 310 Data Structures and Algorithms, CSE 598 Perception in Robotics",
      "Assisted in coursework, developed programming assignments, and guided students."
    ],
    color: "primary",
    icon: "bx-book"
  },
  {
    title: "Research Aide",
    company: "DeSmart Lab, NSF Brain Center",
    period: "2024-Present",
    description: [
      "AI-driven lighting prototypes integrating reinforcement learning.",
      "Optimized ML models for adaptive light control."
    ],
    color: "secondary",
    icon: "bx-brain"
  },
  {
    title: "Systems Engineer - Avionics",
    company: "Indrones",
    period: "2022-2023",
    description: [
      "Developed drone electronics and control systems.",
      "Enhanced drone video transmission (20km range), reduced crashes by 50%."
    ],
    color: "accent",
    icon: "bx-code-alt"
  },
  {
    title: "Research Intern",
    company: "LTA Lab, IIT Bombay",
    period: "2021-2022",
    description: [
      "Developed precision landing algorithm for UAVs using Deep Reinforcement Learning."
    ],
    color: "primary",
    icon: "bx-search"
  },
  {
    title: "Lead Avionics Engineer",
    company: "Team Onyx India",
    period: "2020-2021",
    description: [
      "Led avionics design for telemetry, gliders, and data acquisition systems."
    ],
    color: "secondary",
    icon: "bx-chip"
  }
];

// Publications
export const publications = [
  {
    title: "Causal Discovery Through Iterative Structured Interventions",
    journal: "NeurIPS 2026",
    description: "Novel approach to discovering causal relationships in complex systems through carefully designed intervention strategies.",
    paperLink: "#",
    codeLink: "#"
  },
  {
    title: "Probabilistic Spatial Reasoning in 3D Scene Graphs",
    journal: "RAL 2025",
    description: "Framework for robots to reason about 3D spaces using probabilistic methods and scene graph representations.",
    paperLink: "#",
    codeLink: "#"
  },
  {
    title: "Multi-level architecture for surveillance rovers",
    journal: "IJRASET",
    description: "Hierarchical control architecture for autonomous surveillance rovers operating in complex environments.",
    paperLink: "#"
  },
  {
    title: "Image Classification for Mobile Robots",
    journal: "IJRASET",
    description: "Efficient image classification algorithms designed specifically for resource-constrained mobile robotic platforms.",
    paperLink: "#"
  }
];
