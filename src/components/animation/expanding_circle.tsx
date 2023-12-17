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

  useEffect(() => {
    let scale = 0;
    let scaleRate = 0.2;
    const scaleUp = () => {
      scale += scaleRate;
      controls.start({ scale: scale });

      // Continuously call this function to keep scaling
      requestAnimationFrame(scaleUp);
    };

    if (isVisible) scaleUp();

    return () => cancelAnimationFrame(0);
  }, [controls, isVisible]);

  if (!isVisible) {
    return null; // Or return a placeholder/loading component
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={controls}
      className={`${colorVariants[color]} absolute z-[-1] w-24 h-24 bottom-0 transform
      left-1/2-w/2 mb-0 rounded-full flex overflow-hidden justify-center items-center`} // initial styles with Tailwind
      layout
    >
      {/* figure out how to make this not scale with circlr */}
      <motion.div layout="position" className="absolute h-1/2 w-1/2">
        {children}
      </motion.div>
    </motion.div>
  );
};
