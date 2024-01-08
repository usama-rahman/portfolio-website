/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../Blog/RoundedButton";
// import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../Blog/Magnetic";
import { useRef } from "react";
import Link from "next/link";

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/u.png`} />
            </div>
            <h2>Let&apos;s work</h2>
          </span>
          <h2>Together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#f2f2f2"} className={styles.button}>
              <Link href="/contact">
                <p>Get in touch</p>
              </Link>
            </Rounded>
          </motion.div>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>rahmanusama390@gmail.com</p>
          </Rounded>
          {/* <Rounded>
            <p>+31 6 27 84 74 30</p>
          </Rounded> */}
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © UsamaRahman</p>
            </span>
          </div>
          <div>
            <span>
              <h3>Socials</h3>
              <Magnetic>
                <p>Facebook</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Instagram</p>
            </Magnetic>
            <Magnetic>
              <p>Twitter</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
