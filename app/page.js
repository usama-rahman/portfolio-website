"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/about/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main style={{ backgroundColor: "#f2f2f2" }}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
