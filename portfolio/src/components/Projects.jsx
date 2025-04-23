import React, { useEffect } from "react";
import "../style/Projects.css";
import { applyProjectsLogic } from "../logic/projectsLogic";

export default function Projects() {

  useEffect(() => {
    applyProjectsLogic();
  }, []); 

  return (
    <div className="bg-black">
        <div className="steps">
        <div className="step-counter">
            <div className="counter-title">
            <h1 className="bg-black z-10">Projects</h1>
            </div>
            <div className="count">
            <div className="count-container">
                <h1>Altruism Healthcare</h1>
                <h1>Eat Out</h1>
                <h1>Portfolio</h1>
                <h1>Coming Soon</h1>
                <h1>Coming Soon</h1>
            </div>
            </div>
        </div>
        
        <div className="cards">
            <a href="https://altruism-hk.netlify.app/" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/altruism-img.JPG" className="project-img cursor-pointer" alt="Project" />
                    </div>
                    <div className="card-content">
                        <p>Card description</p>
                    </div>
                </div>
            </a>
            <a href="https://eatout-hk.netlify.app/" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/eatout-img.JPG" className="project-img" alt="Project" />
                    </div>
                    <div className="card-content">
                        <p>Card description</p>
                    </div>
                </div>
            </a>
            <a href="https://eatout-hk.netlify.app/" target="_blank">
                <div className="card cursor-pointer">
                    <div className="card-img">
                        <img src="/img/ui.jpeg" className="project-img" alt="Project" />
                    </div>
                    <div className="card-content">
                        <p>Card description</p>
                    </div>
                </div>
            </a>        
            <div className="card cursor-pointer">
                <div className="card-img">
                    <img src="/img/ui.jpeg" className="project-img" alt="Project" />
                </div>
                <div className="card-content">
                    <p>Card description</p>
                </div>
            </div>
            <div className="card-empty"></div>
            <div className="card-empty"></div>
        </div>
        </div>
    </div>
  );
}