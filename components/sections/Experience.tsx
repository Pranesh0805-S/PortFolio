"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="chapter experience-section">
      <div className="chapter-shell">
        <div className="chapter-heading">
          <span className="chapter-index">03 <i /> THE PATH SO FAR</span>
          <span className="chapter-coordinate">Learning by making, helping, showing up.</span>
        </div>
        <div className="experience-intro">
          <h2>Learning<br /><em>in motion.</em></h2>
          <p>My path so far is a mix of formal study, college projects, and being curious enough to show up where people are building.</p>
        </div>
        <div className="experience-list">
          {experience.map((entry, index) => (
            <motion.article
              className="experience-row"
              key={entry.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: .45, delay: index * .06 }}
            >
              <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="experience-period">{entry.period}</p>
              <div className="experience-detail">
                <h3>{entry.title}</h3>
                <p className="experience-place">{entry.place}</p>
                <ul>{entry.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
              <ArrowUpRight className="experience-arrow" size={16} aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
