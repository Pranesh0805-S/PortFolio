"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import OrbitingTools from "./OrbitingTools";

const featured = projects[0];

export default function Hero() {
  return (
    <section id="top" className="hero-shell relative flex min-h-[100svh] items-center overflow-hidden">
      <div aria-hidden className="hero-orbit hero-orbit-one" />
      <div aria-hidden className="hero-orbit hero-orbit-two" />
      <div aria-hidden className="hero-stargazers"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="hero-grid relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-4 px-6 pb-24 pt-32 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-0 lg:px-14 xl:px-20">
        <div className="hero-copy relative z-20 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#57433e]/15 bg-[#fffaf4]/55 px-4 py-2 shadow-[0_8px_30px_rgba(81,56,43,0.06)] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a65e54] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a65e54]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#64564e] sm:text-[11px]">
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-1 font-mono text-[11px] uppercase tracking-[0.24em] text-[#79675c] sm:text-xs"
          >
            Full-stack developer <span className="px-1 text-[#b17b6c]">/</span> AI builder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.27, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title mt-4 text-[clamp(4.5rem,12.4vw,11rem)] font-semibold leading-[0.77] tracking-[-0.09em] text-[#302522]"
          >
            Pranesh<span className="hero-period">.</span>
            <span className="hero-title-second mt-3 block pl-[0.07em] text-[0.61em] font-light leading-[0.95] tracking-[-0.075em] text-[#70564f] sm:mt-5">
              makes things.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.43 }}
            className="mt-8 max-w-[430px] text-[15px] leading-[1.8] text-[#665a51] sm:mt-9 sm:text-base"
          >
            I&apos;m a developer and computer science student turning curious ideas into useful,
            thoughtfully crafted software — with a little help from AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.56 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9"
          >
            <a href="#projects" className="hero-primary group inline-flex items-center gap-3 rounded-full bg-[#382a28] px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.13em] text-[#fff9f1] shadow-[0_9px_22px_rgba(62,43,39,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5a3a48] sm:px-6">
              Explore my work
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#5d4942]/20 bg-[#fff9f1]/35 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.13em] text-[#54453e] transition duration-300 hover:border-[#5d4942]/45 hover:bg-[#fff9f1]/75">
              Say hello <span aria-hidden className="text-[#a65e54]">↗</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.68 }}
            className="hero-featured"
          >
            <span className="hero-featured-number">01</span>
            <div className="hero-featured-copy">
              <span className="hero-featured-kicker">Current focus · {featured.category}</span>
              <a href="#envoy-mail" className="hero-featured-name">{featured.name}<span> · Explore project</span></a>
            </div>
            <a href={featured.github} target="_blank" rel="noopener noreferrer" aria-label="Open Envoy Mail on GitHub" className="hero-featured-github">GitHub <ArrowUpRight size={13} /></a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-11 flex items-center gap-3 text-[#796c61]"
          >
            <div className="flex -space-x-2" aria-hidden>
              <span className="h-7 w-7 rounded-full border-2 border-[#e8ded2] bg-[#a87d72]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#e8ded2] bg-[#d9ab7d]" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#e8ded2] bg-[#55404f] text-[9px] text-white">PS</span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.13em] sm:text-[10px]">Curious by nature · Coimbatore, IN</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.91, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="hero-art relative mx-auto -mt-3 h-[310px] w-full max-w-[540px] sm:h-[430px] md:mt-0 md:h-[580px]"
        >
          <div aria-hidden className="hero-art-halo absolute left-1/2 top-1/2 h-[78%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <OrbitingTools />
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-7 left-6 z-20 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#77665a] transition-colors hover:text-[#392b29] sm:flex sm:left-10 md:left-14 lg:left-20">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#6c5149]/20"><ArrowDown size={13} /></span>
        Scroll to explore
      </a>
      <span className="absolute bottom-9 right-6 hidden font-mono text-[9px] uppercase tracking-[0.15em] text-[#8d7c6e] md:block lg:right-20">01 — Selected work</span>
    </section>
  );
}
