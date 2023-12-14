"use client";
import { motion } from "framer-motion";
export const Line = () => {
  return (
    <motion.div
      animate={{ height: ["20%", "50%", "20%"] }}
      transition={{ duration: 0.5, ease: "easeOut", repeat: Infinity }}
      style={{
        height: "2px",
        width: "2px",
        backgroundColor: "black",
        margin: "2px 0",
      }}
    />
  );
};
