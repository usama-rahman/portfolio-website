"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
  return (
    <nav className="fixed z-10 flex justify-center w-full px-8 py-2 top-4">
      <ul className="flex items-center text-white">
        <li className="px-2 text-md">
          <Link href={"#project"}>Projects</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"#blog"}>Blog</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"#about"}>About</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      style={{ backdropFilter: "blur(2px)" }}
      className="fixed z-10 flex justify-between px-4 py-2 rounded-full ts-bg left-1/2 top-10"
    >
      <ul className="flex items-center">
        <li className="px-2  text-md">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-2 text-black text-md">
          <Link href={"#project"}>Project</Link>
        </li>
        <li className="px-2 text-black text-md">
          <Link href={"#about"}>About</Link>
        </li>
        <li className="px-2 text-black text-md">
          <Link href={"#blog"}>Blog</Link>
        </li>
        <li className="px-2 text-black text-md">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
