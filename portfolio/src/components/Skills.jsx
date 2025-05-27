import React, { useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {

    // Logo animation
      useEffect(() => {
        // Initialize IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated-logo-show');
            } else {
              entry.target.classList.remove('animated-logo-show');
            }
          });
        });
    
        // Select elements to observe
        const hiddenElements = document.querySelectorAll('.animated-logo-hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    
        // Cleanup observer on component unmount
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
      }, []);

    return (
        <section id="skills" className="relative w-full min-h-screen bg-grey-1000 py-16 text-white ">
            <div>
                <AnimatedTitle title="My Stack" 
                containerClass="mb-10 mt-10 text-center special-font font-zentry text-white"/>
            </div>    
            <div className="flex flex-col items-center justify-center">
                <div >
                    <div className="flex items-center text-center gap-10 text-black font-semibold py-20">
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <FaHtml5 className="text-black text-7xl"/>HTML
                        </div>
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <FaCss3Alt className="text-black text-7xl"/>CSS
                        </div>
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <IoLogoJavascript className="text-black text-7xl"/>JavaScript
                        </div>
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <FaReact className="text-black text-7xl"/>React
                        </div>
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <RiNextjsFill className="text-black text-7xl"/>Next.js
                        </div>
                    </div>
                    <div className="flex text-center gap-10 text-black font-semibold pb-20">
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <FaNodeJs className="text-black text-7xl"/>Node.js
                        </div>
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <SiExpress className="text-black text-7xl"/>Express.js
                        </div>
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <BiLogoMongodb className="text-black text-7xl"/>MongoDB
                        </div>
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <FaBootstrap className="text-black text-7xl"/>Bootstrap
                        </div>
                        <div className="animated-logo-hidden logo bg-violet-300 p-8 rounded-lg">
                            <RiTailwindCssFill className="text-black text-7xl"/>Tailwind CSS
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    )
}