"use client";
import StarSvg from "@/assets/star-svgrepo-com.svg";
import Image from "next/image";
import { STAR_COUNT, STAR_MARGIN } from "@/constants/animation_constants";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";
export const Stars = ({ id }: { id: number }) => {
  const LEFT_POS = Math.floor(
    STAR_MARGIN + ((100 - 2 * STAR_MARGIN) * id) / STAR_COUNT,
  );
  const { scrollYProgress } = useScroll();
  console.log("get");
  return (
    <motion.div
      style={{ scaleX: scrollYProgress.get() < 0.1 ? 2 : 100 }}
      className="absolute"
      initial={{
        // scale: "5%",
        left: `${LEFT_POS}%`,
        y: Math.floor(Math.random() * 50),
      }}
      transition={{ rotate: 45, repeat: Infinity }}
    >
      {scrollYProgress.get()}
      {/* <Image src={StarSvg} alt="Rocket Svg" /> */}
    </motion.div>
  );
};
