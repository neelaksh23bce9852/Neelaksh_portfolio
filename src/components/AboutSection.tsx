"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Target, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    label: "AI & ML",
    description: "Exploring intelligent systems and machine learning applications",
  },
  {
    icon: Target,
    label: "Problem Solver",
    description: "Building practical solutions for real-world challenges",
  },
  {
    icon: Lightbulb,
    label: "Innovator",
    description: "Constantly experimenting with emerging technologies",
  },
  {
    icon: Rocket,
    label: "Builder",
    description: "Turning ideas into impactful AI-powered tools",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-blue">
            About Me
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight mb-8"
        >
          Crafting intelligence,{" "}
          <span className="gradient-text">one project at a time</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              I am a student at VIT-AP University with a growing
              interest in Artificial Intelligence, Generative AI, and emerging
              technologies. I actively explore how intelligent systems can be
              used to address real-world challenges across sustainability,
              cybersecurity, health, and productivity.
            </p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              Through my continuous experimentation and project development, I
              focus on building practical AI-powered tools that demonstrate the
              potential of machine learning and intelligent automation. My work
              reflects curiosity, problem-solving, and a drive to create
              impactful technology.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group p-4 rounded-xl bg-surface-1 border border-white/[0.04] hover:border-white/[0.1] transition-all duration-300 hover:bg-surface-2"
              >
                <item.icon className="w-5 h-5 text-accent-blue mb-3 group-hover:text-accent-blue-light transition-colors" />
                <h3 className="text-sm font-semibold text-text-primary mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
