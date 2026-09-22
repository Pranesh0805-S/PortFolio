import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-bg">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
