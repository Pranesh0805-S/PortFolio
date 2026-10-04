import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import AboutBento from "@/components/sections/AboutBento";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import ResumeSection from "@/components/sections/ResumeSection";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Experience />
      <AboutBento />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}
