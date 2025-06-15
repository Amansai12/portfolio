import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  
  return (
    <>
    
    <Navbar />
    <Hero />
    <About />
    <Achievements />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
