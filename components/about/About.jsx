"use client";
// import Paragraph from "@/components/Paragraph";
import Word from "./Word";
// import Character from "@/components/Character";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export default function Home() {
  const words = paragraph.split(" ");
  return (
    <main id="about">
      {/* <div style={{ height: "100vh" }}></div> */}
      {/* <Paragraph paragraph={paragraph} /> */}
      {/* <div style={{ height: "100vh" }}></div> */}
      {/* <div style={{ height: "60vh" }}></div> */}
      <Word paragraph={paragraph} />
      <div style={{ height: "20vh" }}></div>
      {/* <Character paragraph={paragraph} /> */}
      {/* <div style={{ height: "100vh" }}></div> */}
    </main>
  );
}
