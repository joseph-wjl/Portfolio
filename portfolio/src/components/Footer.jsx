import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex justify-center h-10 items-center gap-4">
            <FaLinkedin className="cursor-hover"/>
            <FaGithub />
        </div>
    )
}