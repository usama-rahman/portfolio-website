import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url(/Stars.png)" }}
      className="relative flex flex-col justify-between w-full min-h-screen bg-black "
    >
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
