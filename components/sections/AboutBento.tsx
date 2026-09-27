"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Code2, GraduationCap, Sparkles } from "lucide-react";
import TiltCard from "@/components/bento/TiltCard";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] } },
};

const LINKS = [
  { label: "GitHub", handle: "@Pranesh0805-S", href: "https://github.com/Pranesh0805-S", mark: "⌘", tone: "social-github" },
  { label: "LinkedIn", handle: "Let's connect", href: "https://www.linkedin.com/in/pranesh0805/", mark: "in", tone: "social-linkedin" },
  { label: "LeetCode", handle: "Problem solving", href: "https://leetcode.com/u/pranesh0805-s/", mark: "◒", tone: "social-leetcode" },
];

export default function AboutBento() {
  return (
    <section id="about" className="about-section border-b border-line py-24 sm:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl px-6 sm:px-10"
      >
        <div className="mb-10 flex items-end justify-between gap-5 sm:mb-12">
          <div>
            <motion.p variants={fadeUp} className="mb-3 font-mono text-[10px] uppercase tracking-[0.19em] text-accent-cyan">A little about me</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-medium tracking-[-0.055em] text-ink sm:text-4xl"><span className="about-title-main">Curious mind.</span> <span className="about-title-accent">Practical builder.</span></motion.h2>
          </div>
          <motion.span variants={fadeUp} className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-ink-dim sm:block">A few coordinates ↘</motion.span>
        </div>

        <div className="about-bento-grid">
          <motion.div variants={fadeUp} className="about-cell about-intro-cell">
            <TiltCard className="h-full" intensity={4}>
              <div className="about-card about-intro-card relative flex h-full min-h-[370px] flex-col justify-between overflow-hidden p-6 sm:min-h-[410px] sm:p-8">
                <div aria-hidden className="about-card-wash absolute -right-14 -top-20 h-72 w-72 rounded-full" />
                <div className="relative z-10 flex items-start justify-between">
                  <span className="about-avatar flex h-14 w-14 items-center justify-center rounded-[18px] text-lg font-semibold tracking-[-0.08em] text-[#fff8ed] sm:h-16 sm:w-16 sm:text-xl">PS<span className="text-[#f2b88f]">.</span></span>
                  <span className="about-status inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.13em]"><span className="h-1.5 w-1.5 rounded-full bg-[#65a88c]" /> learning &amp; building</span>
                </div>
                <div className="relative z-10 mt-16 max-w-[540px] sm:mt-20">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#c69a83]">Hello, I&apos;m</p>
                  <h3 className="mt-2 text-3xl font-medium tracking-[-0.055em] text-[#f7eee4] sm:text-4xl">Pranesh S</h3>
                  <p className="mt-4 max-w-[490px] text-sm leading-[1.85] text-[#c4b6ab] sm:text-[15px]">
                    A full-stack developer and computer science student in Coimbatore. I enjoy making useful products, exploring how AI can help, and learning by taking ideas all the way to a working build.
                  </p>
                  <a href="mailto:pranesh8506s@gmail.com" className="about-email mt-5 inline-flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[10px] text-[#e8d8c9] transition hover:border-[#e6a77a]/60 hover:text-white">pranesh8506s@gmail.com <ArrowUpRight size={12} /></a>
                </div>
                <span aria-hidden className="about-card-watermark absolute bottom-[-0.22em] right-2 font-semibold tracking-[-0.12em]">PS</span>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div variants={fadeUp} className="about-cell about-study-cell">
            <TiltCard className="h-full" intensity={6}>
              <div className="about-card about-study-card flex h-full min-h-[180px] flex-col justify-between p-5 sm:p-6">
                <div className="flex items-center justify-between"><span className="about-icon-wrap"><GraduationCap size={17} /></span><span className="font-mono text-[9px] text-[#cdb19c]">01 / LEARNING</span></div>
                <div><span className="about-big-stat">BCA</span><p className="mt-1 text-xs text-[#c5b5a8]">Computer applications · 3rd year</p></div>
                <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#977c70]">Coimbatore, India</span>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div variants={fadeUp} className="about-cell about-build-cell">
            <TiltCard className="h-full" intensity={6}>
              <div className="about-card about-build-card flex h-full min-h-[180px] flex-col justify-between p-5 sm:p-6">
                <div className="flex items-center justify-between"><span className="about-icon-wrap about-icon-warm"><Code2 size={16} /></span><span className="font-mono text-[9px] text-[#ba9985]">02 / PRACTICE</span></div>
                <div><span className="about-big-stat">05<span className="text-[#d98d68]">+</span></span><p className="mt-1 text-xs text-[#c5b5a8]">Projects shipped and growing</p></div>
                <div className="flex -space-x-1.5" aria-label="Core tools include React, Node.js, MongoDB, and Python"><span className="about-stack-dot">R</span><span className="about-stack-dot">N</span><span className="about-stack-dot">M</span><span className="about-stack-dot">Py</span></div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div variants={fadeUp} className="about-cell about-feature-cell">
            <TiltCard className="h-full" intensity={5}>
              <a href="#projects" className="about-card about-feature-card group relative flex h-full min-h-[230px] flex-col justify-between overflow-hidden p-5 sm:min-h-[250px] sm:p-6">
                <div aria-hidden className="about-feature-orb absolute -right-8 -top-12 h-48 w-48 rounded-full transition-transform duration-700 group-hover:scale-125" />
                <div className="relative z-10 flex items-center justify-between"><span className="about-feature-tag"><Sparkles size={12} /> FEATURED BUILD</span><ArrowUpRight size={17} className="text-[#f1c5a6] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                <div className="relative z-10"><h3 className="text-2xl font-medium tracking-[-0.055em] text-[#fff4e8] sm:text-3xl">Envoy Mail</h3><p className="mt-2 max-w-md text-xs leading-relaxed text-[#c8b6aa] sm:text-sm">An AI-powered inbox workbench that helps organize, summarize, and draft replies.</p><div className="mt-4 flex flex-wrap gap-1.5"><span className="about-tech-tag">React</span><span className="about-tech-tag">Node.js</span><span className="about-tech-tag">Claude API</span></div></div>
              </a>
            </TiltCard>
          </motion.div>

          <motion.div variants={fadeUp} className="about-cell about-cert-cell">
            <TiltCard className="h-full" intensity={7}>
              <div className="about-card about-cert-card flex h-full min-h-[160px] flex-col justify-between p-5 sm:p-6">
                <div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#dfa980]">Little milestones</span><span className="text-lg text-[#dfa980]">✳</span></div>
                <div><p className="text-sm font-medium text-[#f4eadd]">MongoDB for Students</p><p className="mt-1 text-[11px] text-[#bba99b]">Certified · competition organizer</p></div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div variants={fadeUp} className="about-cell about-social-cell">
            <div className="about-social-grid">
              {LINKS.map((item) => (
                <TiltCard key={item.label} intensity={0} className="social-tilt-card h-full">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={`about-card about-social-card ${item.tone} group flex h-full min-h-[120px] flex-col justify-between p-4 transition-all duration-300 hover:-translate-y-1 sm:min-h-[136px] sm:p-5`}>
                    <div className="flex items-start justify-between"><span className="about-social-mark">{item.mark}</span><ArrowUpRight size={13} className="text-[#9b887c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" /></div>
                    <div><span className="block text-sm font-medium text-[#f2e7dc]">{item.label}</span><span className="mt-1 block text-[10px] text-[#aa988c]">{item.handle}</span></div>
                  </a>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
