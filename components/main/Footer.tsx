import React from "react";

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