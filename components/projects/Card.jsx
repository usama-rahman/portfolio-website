"use client";
import { useRef } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import GithubIcon from "../ui/GithubIcon";
const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div className="h-screen flex items-center justify-center top-0 sticky ">
      <div
        className="flex flex-col relative h-[500px] w-[1000px] rounded-3xl p-12 origin-top"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-center m-0 text-3xl ">{title}</h2>

        <div className="flex  flex-col-reverse sm:flex-row sm:h-[100%] sm:mt-12 sm:gap-12">
          <div className="relative">
            <p className="text-base">{description}</p>
            <div className="flex">
              <button className="mt-2 mx-1 px-2 py-1 hover:bg-pink-500 rounded-md bg-black text-white">
                Details
              </button>
              <button className="mt-2 mx-1 px-2 py-1 hover:bg-pink-500 rounded-md bg-black text-white">
                View
              </button>
              <button className="mt-2 flex hover:bg-pink-500 items-center justify-center mx-1 px-2 py-1 rounded-md bg-white text-black">
                <GithubIcon />
                <span className="px-1">Github</span>
              </button>
            </div>
          </div>
          <div className="flex mt-4 mb-3 m-auto relative rounded-3xl w-52 h-44 overflow-hidden sm:w-[60%] sm:h-[100%] sm:m-0 sm:flex-none ">
            <motion.div className="size-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
