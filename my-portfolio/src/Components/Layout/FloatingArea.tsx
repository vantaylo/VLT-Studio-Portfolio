import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Sparkles, GitBranch, Cpu } from 'lucide-react';

type FloatingIconConfig = {
  id: number;
  x: number; // starting %
  y: number;
  driftX: number;
  driftY: number;
  size: number;
  duration: number;
  delay: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ICON_SET = [Code2, Palette, Sparkles, GitBranch, Cpu];

// (center 50% of container)
const CENTER_FLOAT_AREA = {
  left: 25,   // % from left
  top: 20,    // % from top
  width: 50,  // % width of floating zone
  height: 60, // % height of floating zone
};

const FloatingArea: React.FC = () => {
  const [icons, setIcons] = useState<FloatingIconConfig[]>([]);

  useEffect(() => {
  
    // icons – inside the central box only
    const makeIcons = () =>
      ICON_SET.map((Icon, i) => ({
        id: i,
        Icon,
        x:
          CENTER_FLOAT_AREA.left +
          Math.random() * CENTER_FLOAT_AREA.width, // stays in center region
        y:
          CENTER_FLOAT_AREA.top +
          Math.random() * CENTER_FLOAT_AREA.height,
        driftX: (Math.random() - 0.5) * 40, // ±20px
        driftY: (Math.random() - 0.5) * 40,
        size: 28 + Math.random() * 16,
        duration: 14 + Math.random() * 10,
        delay: Math.random() * 4,
      }));

    setIcons(makeIcons());
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.floatingIconsContainer}>
        {icons.map(({ id, Icon, x, y, driftX, driftY, size, duration, delay }) => (
          <motion.div
            key={id}
            className={classes.floatingIcon}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              x: [0, driftX, 0],
              y: [0, driftY, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          >
            <Icon
              width={size}
              height={size}
              className={classes.iconStyle}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingArea;

const classes = {
  container: "relative w-full h-full min-h-[320px] overflow-hidden rounded-3xl",
  floatingIconsContainer: "absolute inset-0",
  floatingIcon: "absolute text-cyan-200/80",
  iconStyle: "drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]",
};