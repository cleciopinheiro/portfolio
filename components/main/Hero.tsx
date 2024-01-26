import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] md:top-[-220px] sm:top-[-420px] h-full w-full left-0 z-[1] object-cover sm:object-contain sm:scale-[2.5]"
      >
        <source src="/blackhole.webm" type="video/webm" />
        <source src="/blackhole.h264" type="video/h264" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
