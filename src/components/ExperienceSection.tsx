"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Trophy, Code, Lightbulb } from "lucide-react";

const experiences = [
  {
    type: "Internship",
    title: "Generative AI Internship",
    organization: "Sure Trust",
    period: "6-month duration",
    description: "Participating in a 6-month internship focused on learning and applying Generative AI technologies, exploring practical AI applications, and building intelligent solutions using modern AI tools.",
    icon: Lightbulb,
  },
];

const activities = [
  { text: "AI Hackathons", icon: Trophy },
  { text: "Technology Experimentation", icon: Code },
  { text: "Project Development", icon: Briefcase },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-blue block mb-4">
                Experience
              </span>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight">
                Professional <span className="gradient-text">Journey</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="relative pl-8 border-l border-white/[0.06]"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-surface-0 border-2 border-accent-blue" />
                  
                  <div className="p-6 rounded-2xl premium-card leading-relaxed">
                    <div className="flex items-center gap-3 mb-3">
                      <exp.icon className="w-5 h-5 text-accent-blue" />
                      <span className="text-xs font-semibold text-accent-blue/80 uppercase tracking-widest">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{exp.title}</h3>
                    <p className="text-sm font-medium text-text-secondary mb-4">
                      {exp.organization} <span className="text-text-muted mx-2">|</span> {exp.period}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      I am currently participating in a 6-month internship focused on learning and applying Generative AI technologies, exploring practical AI applications, and building intelligent solutions using modern AI tools.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Activities Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-purple block mb-4">
                Activities
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight">
                Beyond the <span className="gradient-text">Code</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-1 gap-4">
              {activities.map((activity, i) => (
                <motion.div
                  key={activity.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-5 p-5 rounded-2xl premium-card group"
                >
                  <div className="p-3 rounded-xl bg-surface-1 border border-white/[0.04] group-hover:bg-accent-purple/10 transition-colors">
                    <activity.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <span className="text-base font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                    {activity.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
