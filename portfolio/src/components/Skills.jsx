import react from 'react';
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
    return (
        <section id="skills" className="relative w-full min-h-screen bg-grey-1000 py-16 text-white ">
            <div>
                <h1 className="text-white text-center">My Stack</h1>
            </div>    
            <div className="flex items-center justify-center">
                <div className="flex text-center gap-10">
                    <div>
                        <FaHtml5 className="text-white text-7xl"/>HTML
                    </div>
                    <div>
                        <SiCss3 className="text-white text-7xl"/>CSS
                    </div>
                    <div>
                        <IoLogoJavascript className="text-white text-7xl"/>JavaScript
                    </div>
                    <div>
                        <FaReact className="text-white text-7xl"/>React
                    </div>
                    <div>
                        <RiNextjsFill className="text-white text-7xl"/>Next.js
                    </div>
                    <div>
                        <FaNodeJs className="text-white text-7xl"/>Node.js
                    </div>
                    <div>
                        <SiExpress className="text-white text-7xl"/>Express.js
                    </div>
                    <div>
                        <BiLogoMongodb className="text-white text-7xl"/>MongoDB
                    </div>
                    <div>
                        <FaBootstrap className="text-white text-7xl"/>Bootstrap
                    </div>
                    <div>
                        <RiTailwindCssFill className="text-white text-7xl"/>Tailwind CSS
                    </div>
                </div>
            </div>   
        </section>
    )
}