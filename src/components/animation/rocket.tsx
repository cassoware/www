// pages/AnimatedSquare.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import RocketSvg from "@/assets/rocket.svg";
import { Line } from "./line";

const VELOCITY_LINES_COUNT = 5;

export const Rocket = () => {
  const shakeAnimation = {
    y: ["50vh", "-100vh"],
    transition: {
      y: {
        duration: 3,
        ease: "easeIn",
      },
    },
  };
  return (
    <motion.div
      initial={{ y: "-100vh" }} // Start position
      animate={shakeAnimation} // End position (off the bottom of the screen)
      className="flex flex-col justify-center space-y-10"
    >
      <Image
        src={RocketSvg}
        alt="Rocket Svg"
        style={{ rotate: "-45deg", scale: "200%" }} // cant use tailwind for this
      />
      <motion.div className="flex flex-row justify-between">
        {Array.from({ length: VELOCITY_LINES_COUNT }).map((_, idx) => (
          <Line key={idx} delay={idx / VELOCITY_LINES_COUNT} />
        ))}
      </motion.div>
    </motion.div>
  );
};
