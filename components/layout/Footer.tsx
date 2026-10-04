import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Reveal className="footer-main">
        <div className="footer-cta"><span className="section-kicker">HAVE A PROJECT IN MIND?</span><a href="mailto:pranesh8506s@gmail.com">Let&apos;s build<br /><em>something good.</em><ArrowUpRight size={28} /></a></div>
        <div className="footer-directory">
          <div><span>EXPLORE</span><a href="/#top">Home</a><a href="/#about">About me</a><a href="/#projects">Selected work</a><a href="/work">All projects</a><a href="/toolkit">Toolkit</a><a href="/activity">Activity</a><a href="/#contact">Contact</a></div>
          <div><span>ELSEWHERE</span><a href="https://github.com/Pranesh0805-S" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/pranesh0805/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/pranesh0805-s/" target="_blank" rel="noopener noreferrer">LeetCode ↗</a></div>
        </div>
      </Reveal>
      <div className="footer-marquee" aria-hidden="true"><span>PRANESH S. — FULL-STACK DEVELOPER — </span><span>PRANESH S. — FULL-STACK DEVELOPER — </span></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} PRANESH S.</span><span>DESIGNED & BUILT IN COIMBATORE, INDIA</span><a href="/#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}
