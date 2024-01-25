"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex sm:flex-col sm:gap-12 items-center justify-center px-20 md:px-10 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 md:gap-2 justify-center m-auto text-start sm:text-center sm:items-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] sm:hidden"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Desenvolvedor Web Full Stack
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl md:text-4xl sm:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Fornecendo
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              a melhor{" "}
            </span>
            experiência de projeto
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Sou Desenvolvedor Web Full Stack com experiência em desenvolvimento de sites, dispositivos móveis e software. Confira meus projetos e habilidades.
        </motion.p>
        <motion.a
          href="#skills"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] sm:px-8"
        >
          Saiba mais!
        </motion.a>
      </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
    </motion.div>
  );
};

export default HeroContent;
