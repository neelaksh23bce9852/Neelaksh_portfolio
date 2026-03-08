"use client";

import { Variants, motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding bg-mesh overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-[0.4] pointer-events-none" />

      {/* Ambient gradient orbs - Higher visibility */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-blue/[0.12] rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-purple/[0.12] rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2/60 border border-white/[0.06] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-text-secondary tracking-wide">
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight mb-4"
        >
          Manda{" "}
          <span className="gradient-text">Neelaksh</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base text-text-secondary font-medium tracking-wide mb-6"
        >
          AI Enthusiast{" "}
          <span className="text-accent-blue/60">·</span>{" "}
          Generative AI Learner{" "}
          <span className="text-accent-blue/60">·</span>{" "}
          Builder of Intelligent Systems
        </motion.p>

        {/* Introduction */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10 bg-white/[0.02] backdrop-blur-sm p-4 rounded-xl border border-white/[0.04]"
        >
          I am a technology enthusiast passionate about Artificial Intelligence
          and building practical solutions that solve real-world problems. I
          enjoy experimenting with AI tools, creating intelligent applications,
          and participating in innovation-driven hackathons.
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-white font-medium text-sm hover:bg-accent-blue-light transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://github.com/neelaksh23bce9852"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-2 border border-white/[0.06] text-text-secondary font-medium text-sm hover:text-text-primary hover:border-white/[0.12] transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manda-neelaksh-99404a298"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-2 border border-white/[0.06] text-text-secondary font-medium text-sm hover:text-text-primary hover:border-white/[0.12] transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
