"use client";
import { motion } from "framer-motion";
export const Line = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      animate={{
        height: [0, 50, 50, 50],
        opacity: [1, 1, 1, 0],
      }}
      transition={{
        delay: -1 * delay, // -1 creates an offset
        duration: 0.75, // sweet spot
        repeat: Infinity,
      }}
      className="bg-yellow-300 w-0.5 margin-auto"
    />
  );
};
