'use client';

import React from 'react';
import Stars from './Stars';
import ProfileImg from './ProfileImg'; 

const Hero: React.FC = () => {
  // Hourglass layout 
  const topStyle = { clipPath: 'polygon(0 0, 100% 0, 50% 50%)' };
  const rightStyle = { clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' };
  const bottomStyle = { clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' };
  const leftStyle = { clipPath: 'polygon(0 0, 0 100%, 50% 50%)' };

  const sunriseSunsetBackground =
  'absolute inset-0 bg-[linear-gradient(90deg,#FFF1E6_0%,#FFD166_14%,#FDBA74_26%,#FB7185_42%,#C084FC_58%,#7C3AED_76%,#312E81_90%,#0B1220_100%)]';

  return (
    <div className="relative w-full aspect-square overflow-hidden">
      <div style={topStyle} className={sunriseSunsetBackground}>
        <ProfileImg />
      </div>
      <div style={rightStyle} className={sunriseSunsetBackground} />
      <div style={leftStyle} className={sunriseSunsetBackground} />
      <div style={bottomStyle}>
        <Stars />
      </div>
    </div>
  );
};

export default Hero;


// <p>Vanessa Taylor</p>
// <p>Bridging imagination and implementation</p>
