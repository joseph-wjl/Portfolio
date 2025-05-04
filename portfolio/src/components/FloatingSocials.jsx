import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FloatingSocials() {
  return (
    <>

        <div className="fixed right-0 top-1/2 flex flex-col gap-3 transform -translate-y-1/2 translate-x-0.5  
           mr-2 bg-grey-900 text-white font-bold py-3 px-2 rounded-full shadow-lg">
            
            <a href="https://linkedin.com/in/joseph-wjl" target="_blank">
                <FaLinkedin className="cursor-pointer text-xl hover:text-violet-300 transition duration-200" />
            </a>
            <a href="https://github.com/joseph-wjl" target="_blank">
                <FaGithub className="cursor-pointer text-xl hover:text-violet-300 transition duration-200"/>
            </a>
            <a href="mailto:jlau.dev@gmail.com">
                <MdEmail className="cursor-pointer text-xl hover:text-violet-300 transition duration-200"/>
            </a>
        </div>
        
    </>
  );
}