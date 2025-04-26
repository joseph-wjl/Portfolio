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
            <h1 className="bg-black z-10">Projects</h1>
            </div>
            <div className="count">
            <div className="count-container">
                <h1>Portfolio</h1>
                <h1>Altruism Healthcare</h1>
                <h1>Eat Out</h1>
                <h1>Coming Soon</h1>
                <h1>Coming Soon</h1>
            </div>
            </div>
        </div>
        
        <div className="cards">
            <a href="https://eatout-hk.netlify.app/" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/portfolio.JPG" className="project-img" alt="Project" />
                    </div>
                    <div className="card-content font-robert-regular">
                        <p>A dynamic personal portfolio showcasing my journey as a self-taught web developer. Built with React and Tailwind CSS 
                            for a sleek, responsive design, it features immersive 3D visuals powered by Three.js and smooth animations via GSAP. 
                            My artistic passion shines through in the carefully crafted UI, blending aesthetics with seamless functionality to 
                            create an engaging user experience.</p>
                    </div>
                </div>
            </a>
            <a href="https://altruism-hk.netlify.app/" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/altruism-img.JPG" className="project-img cursor-pointer" alt="Project" />
                    </div>
                    <div className="card-content font-robert-regular">
                        <p>A real-world web application developed for a Chinese medicine clinic - Altruism Healthcare, designed to streamline 
                            patient interactions and showcase services. Built with React and React Router for seamless 
                            navigation, and styled with custom CSS for a clean, professional aesthetic. 
                            This project reflects my ability to deliver functional, user-centered solutions with a focus 
                            on elegant design.</p>
                    </div>
                </div>
            </a>
            <a href="https://eatout-hk.netlify.app/" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/eatout-img.JPG" className="project-img" alt="Project" />
                    </div>
                    <div className="card-content font-robert-regular">
                        <p>An early-stage personal project born from my passion for fitness, Eat Out is a mobile-first responsive web app for  
                            fitness enthusiasts to track calories and macros while dining out. Built with vanilla JavaScript and CSS, it features a 
                            user-friendly interface for browsing and filtering restaurant menu data. Designed with both aesthetics and usability in mind, 
                            it empowers users to stay on track with their nutrition goals.</p>
                    </div>
                </div>
            </a>   
            <div className="card cursor-pointer">
                <div className="card-img">
                    <img src="" className="project-img" alt="Project" />
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