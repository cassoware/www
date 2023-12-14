// pages/AnimatedSquare.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import RocketSvg from "@/assets/rocket.svg";
import { Line } from "./line";

export const Rocket = () => {
  const shakeAnimation = {
    y: ["50vh", "-100vh"],
    x: [-5, 5, -5],
    transition: {
      y: {
        duration: 4,
        ease: "easeIn",
      },
      x: {
        repeat: Infinity,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      initial={{ y: "-100vh" }} // Start position
      animate={shakeAnimation} // End position (off the bottom of the screen)
    >
      <Image
        src={RocketSvg}
        alt="Rocket Svg"
        style={{ rotate: "-45deg", scale: "200%" }} // cant use tailwind for this
      />
      <Line />
    </motion.div>
  );
};
