import React from "react";
// import Image from "next/image";

export default function ProfileImg() {
  return (
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
  );
}

const classes = {
  portraitContainer:
  "rounded-full overflow-hidden shadow-2xl ring-2 ring-white/20 mb-8 mx-auto w-[250px] h-[250px] bg-gray-300 flex items-center justify-top text-gray-600"
};