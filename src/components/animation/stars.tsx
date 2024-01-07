"use client";
import StarSvg from "@/assets/star-svgrepo-com.svg";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { STAR_COUNT, STAR_HW } from "@/constants/animation_constants";

export const Stars = ({
  id,
  initY,
  initX,
}: {
  id: number;
  initY: number;
  initX: number;
}) => {
  const { scrollY } = useScroll();
  const [moveStars, setMoveStars] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest < 40) {
      setMoveStars(false);
    } else {
      setMoveStars(true);
    }
  });
  console.log(id, STAR_COUNT);
  return (
    <motion.div
      className="absolute"
      initial={{
        left: `${initX}vw`,
        top: `${initY}vh`,
        rotate: Math.random() * 360,
      }}
      animate={{
        scale: moveStars ? 1 : Math.random() * 0.5 + 0.5,
        left: moveStars
          ? `${Math.floor((id * 2) / STAR_COUNT) * (100 - STAR_HW)}vw`
          : `${initX}vw`,
        top: moveStars
          ? `${
              (id - Math.floor((id * 2) / STAR_COUNT) * (STAR_COUNT / 2)) *
              STAR_HW
            }vh`
          : `${initY}vh`,
        // height: `${STAR_HW * 5}vh`,
        // width: `${STAR_HW * 5}vh`,
        // scale: scale * 3,
      }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <motion.div
        animate={{
          scale: [1, 0.5, 1],
        }}
        transition={{
          delay: -1 * Math.random() * 2,
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <Image
          style={{
            height: `${STAR_HW / 2}vh`,
            width: `${STAR_HW / 2}vh`,
          }}
          src={StarSvg}
          alt="Star SVG"
        />
      </motion.div>
    </motion.div>
  );
};
