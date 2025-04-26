import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex justify-center h-20 items-center gap-4">
            <a
            href="mailto:jlau.dev@gmail.com"
            className=" 
             font-robert-regular text-black text-sm font-bold py-1 px-2 rounded shadow-lg"
            >
                jlau.dev@gmail.com
            </a>

            {/* <a href="https://linkedin.com/in/joseph-wjl" target="_blank">
                <FaLinkedin className="cursor-pointer text-3xl" />
            </a>
            <a href="https://github.com/joseph-wjl" target="_blank">
                <FaGithub className="cursor-pointer text-3xl"/>
            </a> */}
        </div>
    )
}