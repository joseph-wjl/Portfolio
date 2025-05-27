import React, { useEffect } from 'react';
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
                <h1 className="text-white text-center">My Stack</h1>
            </div>    
            <div className="flex flex-col items-center justify-center">
                <div >
                    <div className="flex text-center gap-10">
                        <div className="animated-logo-hidden logo">
                            <FaHtml5 className="text-white text-7xl"/>HTML
                        </div>
                        <div className="animated-logo-hidden logo">
                            <FaCss3Alt className="text-white text-7xl"/>CSS
                        </div>
                        <div className="animated-logo-hidden logo">
                            <IoLogoJavascript className="text-white text-7xl"/>JavaScript
                        </div>
                        <div className="animated-logo-hidden logo">
                            <FaReact className="text-white text-7xl"/>React
                        </div>
                        <div className="animated-logo-hidden logo">
                            <RiNextjsFill className="text-white text-7xl"/>Next.js
                        </div>
                    </div>
                    <div className="flex text-center gap-10">
                        <div className="animated-logo-hidden logo">
                            <FaNodeJs className="text-white text-7xl"/>Node.js
                        </div>
                        <div className="animated-logo-hidden logo">
                            <SiExpress className="text-white text-7xl"/>Express.js
                        </div>
                        <div className="animated-logo-hidden logo">
                            <BiLogoMongodb className="text-white text-7xl"/>MongoDB
                        </div>
                        <div className="animated-logo-hidden logo">
                            <FaBootstrap className="text-white text-7xl"/>Bootstrap
                        </div>
                        <div className="animated-logo-hidden logo">
                            <RiTailwindCssFill className="text-white text-7xl"/>Tailwind CSS
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    )
}