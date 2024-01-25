import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div>
            <div>
                
            </div>
            <div className="mb-[20px] text-[15px] text-center">
                &copy; Clécio Pinheiro {year} - Todos os direitos reservados.
            </div>
        </div>
    </div>
  )
}

export default Footer