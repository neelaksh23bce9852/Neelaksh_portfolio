"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cpu, 
  Brain, 
  Code2, 
  Database, 
  Globe, 
  Network, 
  Github, 
  Microscope
} from "lucide-react";

const skills = [
  { name: "Artificial Intelligence", icon: Brain, color: "text-blue-400" },
  { name: "Machine Learning", icon: Cpu, color: "text-purple-400" },
  { name: "Python", icon: Microscope, color: "text-amber-400" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
  { name: "Web Development", icon: Globe, color: "text-emerald-400" },
  { name: "Data Analysis", icon: Database, color: "text-rose-400" },
  { name: "GitHub", icon: Github, color: "text-slate-400" },
  { name: "API Integration", icon: Network, color: "text-cyan-400" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 section-padding bg-surface-1/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center md:text-left"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-blue">
            Technical Stack
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight mb-14 text-center md:text-left"
        >
          Core <span className="gradient-text">Competencies</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl premium-card group flex flex-col items-center justify-center gap-4 text-center"
            >
              <div className={`p-4 rounded-2xl bg-surface-1 border border-white/[0.04] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg ${skill.color}`}>
                <skill.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
