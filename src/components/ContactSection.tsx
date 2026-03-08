"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 section-padding bg-surface-1/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-blue block mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight mb-8">
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto mb-12">
            I’m always open to collaborations, innovative projects, and
            opportunities to build impactful technology. Whether you have a 
            question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://github.com/neelaksh23bce9852"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl premium-card transition-all duration-300 w-full md:w-auto"
          >
            <Github className="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-text-muted">Explore</p>
              <p className="text-base font-semibold text-text-primary">GitHub Profile</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/manda-neelaksh-99404a298"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl premium-card transition-all duration-300 w-full md:w-auto"
          >
            <Linkedin className="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-text-muted">Connect</p>
              <p className="text-base font-semibold text-text-primary">LinkedIn Profile</p>
            </div>
          </a>

          <a
            href="mailto:neelaksh23bce9852@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent-blue text-white hover:bg-accent-blue-light transition-all duration-300 w-full md:w-auto glow-blue"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/70">Say Hello</p>
              <p className="text-base font-semibold">Shoot an Email</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-white/[0.04]"
        >
          <p className="text-xs font-medium text-text-muted uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Manda Neelaksh • Designed with Impact
          </p>
        </motion.div>
      </div>
    </section>
  );
}
