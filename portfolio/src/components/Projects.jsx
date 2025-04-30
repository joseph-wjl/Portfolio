import React, { useEffect } from "react";
import "../style/Projects.css";
import { applyProjectsLogic } from "../logic/projectsLogic";

export default function Projects() {

  useEffect(() => {
    applyProjectsLogic();
  }, []); 

  return (
    <div id="projects" className="bg-black">
        <div className="steps">
        <div className="step-counter">
            <div className="counter-title">
            <h1 className="bg-black z-10" id="projects-text">Projects</h1>
            </div>
            <div className="count">
            <div className="count-container">
                <h1>Portfolio</h1>
                <h1>Altruism</h1>
                <h1>Eat Out</h1>
                <h1>Coming Soon</h1>
                <h1>Coming Soon</h1>
            </div>
            </div>
        </div>
        
        <div className="cards">
            <a href="" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/portfolio.JPG" className="project-img" alt="Screenshot of project - Portfiolio" />
                    </div>
                    <div className="card-content font-robert-regular">
                        <span className="pill">React</span>
                        <span className="pill">Tailwind CSS</span>
                        <span className="pill">CSS</span>
                        <span className="pill">Three.js</span>
                        <span className="pill">GSAP</span>
                        <p>
                            <div className="py-3">
                                A dynamic personal portfolio showcasing my journey as a self-taught web developer.
                            </div> 
                            
                            <div className="py-3">
                                Built with React and Tailwind CSS 
                                for a sleek, responsive design, it features immersive 3D visuals powered by Three.js and smooth animations via GSAP.
                            </div>
                            <div className="py-3">
                                My artistic passion shines through in the carefully crafted UI, blending aesthetics with seamless functionality to 
                                create an engaging user experience.
                            </div>
                        </p>
                    </div>
                </div>
            </a>
            <a href="https://altruism-hk.netlify.app/" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/altruism.JPG" className="project-img cursor-pointer" alt="Screenshot of project - Altruism" />
                    </div>
                    <div className="card-content font-robert-regular">
                        <span className="pill">React</span>
                        <span className="pill">React Router</span>
                        <span className="pill">Bootstrap</span>
                        <span className="pill">CSS</span>
                        <p>  
                            <div className="py-1">
                            A real-world web application developed for a Chinese medicine clinic — Altruism Healthcare, designed to streamline 
                            patient interactions and showcase services.
                            </div> 
                            
                            <div className="py-1">
                            Built with React and React Router for seamless 
                            navigation, and styled with custom CSS for a clean, professional aesthetic.
                            </div>
                            <div className="py-1">
                                This project reflects my ability to deliver functional, user-centered solutions with a focus 
                                on elegant design.
                            </div>
                            <div className="py-1">
                                (Desktop version in progress)
                            </div>
                        </p>
                    </div>
                </div>
            </a>
            <a href="https://eatout-hk.netlify.app/" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/eatout.JPG" className="project-img" alt="Screenshot of project - Eat Out" />
                    </div>
                    <div className="card-content font-robert-regular">
                        <span className="pill">JavaScript</span>
                        <span className="pill">CSS</span>
                        <p>  
                            <div className="py-2">
                                An early-stage personal project born from my passion for fitness, Eat Out is a mobile-first responsive web app for  
                                fitness enthusiasts to track calories and macros while dining out.
                            </div> 
                            
                            <div className="py-2">
                                Built with vanilla JavaScript and CSS, it features a 
                                user-friendly interface for browsing and filtering restaurant menu data.
                            </div>
                            <div className="py-2">
                                Designed completely from scratch with both aesthetics and usability in mind, 
                                it empowers users to stay on track with their nutrition goals.
                            </div>
                        </p>
                    </div>
                </div>
            </a>   
            <div className="card cursor-pointer">
                <div className="card-img">
                </div>
                <div className="card-content">
                    <p>Coming soon</p>
                </div>
            </div>
            <div className="card-empty"></div>
            <div className="card-empty"></div>
        </div>
        </div>
    </div>
  );
}