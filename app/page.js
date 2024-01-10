import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/about/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#f2f2f2" }}>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
