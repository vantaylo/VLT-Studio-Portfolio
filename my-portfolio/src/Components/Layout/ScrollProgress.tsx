import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  
  return (
    <motion.div
      className={classes.progressBar}
      style={{ scaleX }}
    />
  );
}

const classes = {
    progressBar: [
      "fixed",
      "left-0",
      "right-0",
      "top-0",
      "z-50",
      "h-1",
      "bg-gradient-to-r",
      "from-cyan-400",
      "to-amber-300",
      "origin-left"
    ].join(" "),
  };