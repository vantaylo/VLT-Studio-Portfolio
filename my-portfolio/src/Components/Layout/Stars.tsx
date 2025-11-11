import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const makeStars = (n = 120) =>
      Array.from({ length: n }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 6 + 4,
      }));

    setStars(makeStars());
  }, []);

  return (
    <div aria-hidden className={styles.background}>
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className={styles.star}
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const styles = {
  background:`absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950`,
  star:`absolute rounded-full bg-white shadow-sm`,
};