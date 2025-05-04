import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex justify-center h-20 items-center gap-4 bg-violet-950">
            <a
            href="mailto:jlau.dev@gmail.com"
            className=" 
             font-robert-regular text-blue-100 text-sm font-bold"
            >
                jlau.dev@gmail.com
            </a>

        </div>
    )
}