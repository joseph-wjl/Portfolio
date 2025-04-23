import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex justify-center h-10 items-center gap-4">
            <a href="https://linkedin.com/in/joseph-wjl" target="_blank">
                <FaLinkedin className="cursor-pointer" />
            </a>
            <a href="https://github.com/joseph-wjl" target="_blank">
                <FaGithub className="cursor-pointer"/>
            </a>
        </div>
    )
}