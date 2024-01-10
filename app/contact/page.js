import React from "react";
// import Link from "next/link";
import Header from "../../components/Header";
import ContactForm from "./form/ContactForm";
export default function index() {
  return (
    <div id="#contact" className="h-screen bg-slate-50 ">
      <Header />
      <ContactForm />
    </div>
  );
}
