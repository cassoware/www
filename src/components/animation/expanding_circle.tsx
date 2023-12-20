"use client";
import React, { useEffect, useState } from "react";
import { None, motion, useAnimation } from "framer-motion";

type ColorOptions = {
  white: string;
  yellow: string;
  red: string;
};

export const ExpandingCircle = ({
  children,
  delay,
  color,
}: {
  children?: React.ReactNode;
  delay: number;
  color: string;
}) => {
  // Has to be a static class so that tailwind can pick up on this
  const colorVariants: ColorOptions = {
    white: "bg-white",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
  };
  const controls = useAnimation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000); // Delay in milliseconds

    return () => clearTimeout(timer);
  }, [delay]);

  // THIS IS INCONSISTENT
  // useEffect(() => {
  //   let scale = 0;
  //   let scaleRate = 0.2;
  //   const scaleUp = () => {
  //     scale += scaleRate;
  //     controls.start({ scale: scale });
  //
  //     // Continuously call this function to keep scaling
  //     requestAnimationFrame(scaleUp);
  //   };
  //
  //   if (isVisible) scaleUp();
  //
  //   return () => cancelAnimationFrame(0);
  // }, [controls, isVisible]);

  if (!isVisible) {
    return null; // Or return a placeholder/loading component
  }

  const FINAL_H_W = Math.sqrt((100 / 2) ** 2 + (100 / 2) ** 2) * 2;
  return (
    <motion.div
      initial={{ height: 0, width: 0, y: 0 }}
      animate={{ height: `${FINAL_H_W}%`, width: `${FINAL_H_W}%` }} // 25 is arbitrary: how  can I make it cover entire viewport?
      transition={{ duration: 2, ease: "easeInOut" }}
      className={`${colorVariants[color]} absolute z-[-1] w-24 h-24 bottom-0 transform
      left-1/2-w/2 mb-0 rounded-full flex overflow-hidden justify-center items-center`} // initial styles with Tailwind
      layout
    >
      {/* figure out how to make this not scale with circlr */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 / 25 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute h-1/2 w-1/2"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
