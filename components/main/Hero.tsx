import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="sm:opacity-80 rotate-180 absolute top-[-340px] md:top-[-220px] sm:top-[-500px] h-full w-full left-0 z-[1] object-cover sm:-scale-100 sm:-rotate-0"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
