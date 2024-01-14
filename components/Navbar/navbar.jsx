"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <NavbarFixed />
    </>
  );
}

function NavbarFixed() {
  return (
    <nav className="fixed  z-10 flex justify-center w-full  top-2">
      <ul className="flex items-center text-black bg-slate-300 px-8 py-2 rounded-3xl">
        <li className="px-2  text-md">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"#project"}>Projects</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"#about"}>About</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
