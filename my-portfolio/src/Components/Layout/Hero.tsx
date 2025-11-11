import React from "react";
// import Image from "next/image";

export default function Hero() {
  return (
    <header className={classes.header}>
      {/* Center stack: portrait + headline */}
      <div className={classes.stack}>
        {/* Portrait placeholder */}
        <div className={classes.portraitContainer}>
          {/* <Image
            src={""}
            alt=""
            width={}
            height={}
            className={classes.portraitImage}
            priority
          /> */}
        </div>
        <h1 className={classes.title}>Vanessa Taylor</h1>
        <p className={classes.subtitle}>Bridging imagination and implementation</p>
      </div>

      {/* Gradient overlay */}
      <div
        className={classes.gradientOverlay}
        style={{ background: styles.gradientBackground }}
      />
    </header>
  );
}

const classes = {
  header: "relative h-screen flex items-center justify-center overflow-hidden",
  stack: "relative z-20 text-center max-w-2xl",
  portraitContainer:
    "rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/20 mb-8 mx-auto w-[300px] h-[500px] bg-gray-300 flex items-center justify-center text-gray-600",
  portraitImage: "w-[300px] h-[500px] object-cover",
  title: "text-4xl sm:text-5xl font-semibold leading-tight",
  subtitle: "mt-4 text-lg text-white/80",
  gradientOverlay:
    "absolute inset-0 z-[9] pointer-events-none opacity-80 mix-blend-screen",
};

const styles = {
  gradientBackground:
    "linear-gradient(90deg, #FFF1E6 0%, #FFD166 14%, #FDBA74 26%, #FB7185 42%, #C084FC 58%, #7C3AED 76%, #312E81 90%, #0B1220 100%)",
};