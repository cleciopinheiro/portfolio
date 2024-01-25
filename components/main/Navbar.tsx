import Image from "next/image";
import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-20 md:px-10 sm:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex items-center"
        >
          <Image
            src="/NavLogo.svg"
            alt="logo"
            width={120}
            height={120}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="w-[500px] h-full flex items-center justify-between md:mr-20 md:hidden sm:hidden">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Sobre mim
            </a>
            <a href="#skills" className="cursor-pointer">
              Habilidades
            </a>
            <a href="#projects" className="cursor-pointer">
              Projetos
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/cleciopinheiro" target="_blank"><TfiGithub className='text-white transition ease-in-out delay-150 hover:text-purple-500' size={24} /></a>
          <a href="https://www.linkedin.com/in/cleciopinheiro/" target="_blank"><IoLogoLinkedin className='text-white transition ease-in-out delay-150 hover:text-purple-500' size={24} /></a>
          <a href="https://www.behance.net/cleciopinheiro" target="_blank"><FaBehance className='text-white transition ease-in-out delay-150 hover:text-purple-500' size={28} /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
