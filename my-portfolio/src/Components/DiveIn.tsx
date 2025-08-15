import React from "react";
import Image from 'next/image'
import FirstCompImage from '../assets/firstCompImg.jpg';

const DiveIn = () => {
  return (
    <div>
      <div>
        <Image
          alt="first computer"
          src={FirstCompImage}
          height={700}
          priority={true}
          width={500}
        />
    </div>
    <div>
      <h1 className="text-3xl font-bold underline">Hi, I'm Vanessa! I'm a Senior Software Engineer ...</h1>
      <p>That's me!</p>
    </div>
    
    </div>
  );
}

export default DiveIn;

