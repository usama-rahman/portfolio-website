"use client";
// import Paragraph from "@/components/Paragraph";
import Word from "./Word";
// import Character from "@/components/Character";

const paragraph =
  "Hey! I'm Usama Rahman, a freelance Web Designer and Developer. My goal is to bring simplicity and sophistication to every project, ensuring a seamless online experience.";

export default function Home() {
  const words = paragraph.split(" ");
  return (
    <main id="about">
      {/* <div style={{ height: "100vh" }}></div> */}
      {/* <Paragraph paragraph={paragraph} /> */}
      {/* <div style={{ height: "100vh" }}></div> */}
      {/* <div style={{ height: "60vh" }}></div> */}
      <Word paragraph={paragraph} />
      <div style={{ height: "80vh" }}></div>
      {/* <Character paragraph={paragraph} /> */}
      {/* <div style={{ height: "100vh" }}></div> */}
    </main>
  );
}
