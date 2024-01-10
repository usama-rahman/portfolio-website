"use client";

import { useForm, ValidationError } from "@formspree/react";
import React from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvoegpnd");
  if (state.succeeded) {
    return <p>Thank you for getting in touch with me!</p>;
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-10 ">
      <h2 className=" text-2xl"> Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="name"
          name="name"
          placeholder="Name"
          required
          className="rounded-md focus:outline-none focus:border-sky-500 px-3 py-2 border border-slate-300 text-md shadow-sm placeholder-slate-400 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email *"
          required
          className="rounded-md focus:outline-none focus:border-sky-500 px-3 py-2 border border-slate-300 text-md shadow-sm placeholder-slate-400 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          cols={40}
          rows={10}
          className="rounded-md focus:outline-none focus:border-sky-500 px-3 py-2 border border-slate-300 text-md shadow-sm placeholder-slate-400 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="w-full flex justify-center mt-7">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-sky-500 w-5/12 py-1 rounded-md text-white flex items-center justify-center hover:bg-pink-600 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
