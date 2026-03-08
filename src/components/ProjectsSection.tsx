"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Leaf,
  BrainCircuit,
  FileSearch,
  Apple,
  ShieldAlert,
} from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  github: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  iconColor: string;
}

const projects: Project[] = [
  {
    title: "EcoLens",
    subtitle: "AI Digital Sustainability Impact Analyzer",
    description:
      "An AI-powered platform that evaluates the environmental impact of digital platforms and websites. The system analyzes digital resource usage, calculates sustainability scores, and provides recommendations for reducing digital carbon footprints.",
    technologies: ["AI Analysis", "Web Technologies", "Data Processing"],
    github: "https://github.com/neelaksh23bce9852/ecolens",
    icon: Leaf,
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-400",
  },
  {
    title: "Gravity Intelligence",
    subtitle: "AI Early Risk Detection System",
    description:
      "An AI-based predictive platform designed to detect early signs of academic or emotional distress in students. Using machine learning and data analysis, the system identifies risk indicators and provides early warnings to help educators intervene.",
    technologies: ["Machine Learning", "JavaScript", "Data Analysis"],
    github: "https://github.com/neelaksh23bce9852/gravity-intel",
    icon: BrainCircuit,
    gradient: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-400",
  },
  {
    title: "AuditAI",
    subtitle: "Intelligent Invoice Analysis System",
    description:
      "An intelligent financial auditing platform that automates invoice verification and anomaly detection. The system analyzes invoice data, detects inconsistencies, highlights suspicious transactions, and helps organizations reduce financial risk.",
    technologies: ["JavaScript", "Data Processing", "Automation Logic"],
    github: "https://github.com/neelaksh23bce9852/audit-ai",
    icon: FileSearch,
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    title: "AI Food Health Scanner",
    subtitle: "Intelligent Nutrition Analysis",
    description:
      "An intelligent web application that identifies food items from images and provides instant nutritional insights. The system analyzes the food content, calculates health metrics, and offers personalized dietary guidance.",
    technologies: ["AI Image Analysis", "Web Application", "Health Data"],
    github: "https://github.com/neelaksh23bce9852/food-scanner",
    icon: Apple,
    gradient: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-400",
  },
  {
    title: "Vigilant Eye",
    subtitle: "Online Scam Detection Tool",
    description:
      "A browser-based security tool designed to protect users from online scams and phishing attacks. It analyzes suspicious content, detects deceptive language patterns, and warns users about potentially malicious websites in real time.",
    technologies: ["JavaScript", "Browser Extension APIs", "Security Algorithms"],
    github: "https://github.com/neelaksh23bce9852/vigilant-eye",
    icon: ShieldAlert,
    gradient: "from-red-500/10 to-rose-500/10",
    iconColor: "text-red-400",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative p-6 sm:p-8 rounded-2xl premium-card overflow-hidden h-full">
        {/* Subtle background glow on hover */}
        <div
          className={`absolute -inset-[1px] bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
        />

        <div className="relative z-10">
          {/* Icon and title row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-xl bg-surface-2 border border-white/[0.04] group-hover:border-white/[0.08] transition-colors`}
              >
                <project.icon className={`w-5 h-5 ${project.iconColor}`} />
              </div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-bold text-text-primary">
                  {project.title}
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-accent-blue hover:bg-surface-2 transition-all duration-200"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-surface-2/80 text-text-muted border border-white/[0.04]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-purple">
            Featured Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight mb-4"
        >
          Projects that{" "}
          <span className="gradient-text">make a difference</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-muted text-sm max-w-xl mb-14"
        >
          A collection of AI-powered tools built to solve real-world problems
          across sustainability, security, health, and finance.
        </motion.p>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
