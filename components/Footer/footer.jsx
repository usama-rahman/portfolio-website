/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Footer() {
  const [isCopy, setIsCopy] = useState(false);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const copyTextToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const handleCopyClick = (e) => {
    e.preventDefault();
    const textToCopy = "rahmanusama390@gmail.com";
    copyTextToClipboard(textToCopy);
    setIsCopy(!isCopy);
  };
  return (
    <motion.div
      ref={container}
      className="text-black flex  mx-2 flex-col items-center justify-center  relative"
    >
      <div className="pt-20 w-full max-w-screen-2xl bg-neutral-200 rounded-2xl ">
        <div>
          <div className="sm:flex justify-center items-center sm:justify-between sm:items-center sm:mr-3 ml-5 lg:mx-20">
            <div className="pb-24 relative">
              <span className="flex items-center">
                <div className="w-24 h-24 relative rounded-full overflow-hidden">
                  <Image
                    className="object-cover"
                    fill={true}
                    alt={"image"}
                    src={`/images/u.png`}
                  />
                </div>
                <h2 className="ml-1 text-3xl m-0 font-light">
                  Let&apos;s work
                </h2>
              </span>
              <h2 className="text-3xl ml-24 font-light">Together</h2>
            </div>
            <button
              onClick={handleCopyClick}
              className="bg-sky-500 w-72 py-2 rounded-md text-white flex items-center justify-center hover:bg-pink-600  "
            >
              {!isCopy
                ? `rahmanusama390@gmail.com`
                : `Email Copied - Show Mail`}
            </button>
          </div>
        </div>
        <div className=" flex flex-col-reverse items-center p-5 mt-5 lg:mx-20">
          <p className="mt-5">2024 © UsamaRahman</p>
          <div className="flex sm:flex-row gap-6  items-start sm:flex ">
            <p className="cursor-pointer text-xl">Facebook</p>
            <p className="cursor-pointer text-xl">GitHub</p>
            <p className="cursor-pointer text-xl">Twitter</p>
            <p className="cursor-pointer text-xl">Linkedin</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
