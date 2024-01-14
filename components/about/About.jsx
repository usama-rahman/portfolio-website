"use client";
import Word from "./Word";
const paragraph =
  "Hey! I'm Usama Rahman, a freelance Web Designer and Developer. My goal is to bring simplicity and sophistication to every project, ensuring a seamless online experience.";

export default function about() {
  const words = paragraph.split(" ");
  return (
    <main id="about">
      <Word paragraph={paragraph} />
    </main>
  );
}
