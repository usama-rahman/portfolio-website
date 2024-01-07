import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/about/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "./contact/page";
import Header from "../components/Header";

export default function Home() {
  return (
    <main
      // style={{ backgroundImage: "url(/Stars.png)" }}
      // className="relative flex flex-col justify-between w-full min-h-screen bg-black "
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <Navbar />
      {/* <Header /> */}
      <Hero />
      <Projects />
      <About />
      {/* <Contact /> */}
      <Blog />
      <Footer />
    </main>
  );
}
