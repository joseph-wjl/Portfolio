import React from 'react';
import './Projects.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    // const lenis = new Lenis();
    // lenis.on("scroll", scrollTrigger.update);
    // gsap.ticker.add((time) => {
    //     lenis.raf(time * 1000);
    // })
    // gsap.ticker.lagSmoothing(0);

    return (
        <div className="steps">
            <div className="step-counter">
                <div className="counter-title">
                    <h1>Projects</h1>
                </div>
                <div className="count">
                    <div className="count-container">
                        <h1>Altruism Healthcare</h1>
                        <h1>Eat Out</h1>
                        <h1>03</h1>
                        <h1>04</h1>
                        <h1>05</h1>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="card-img">
                        <img src="/img/ui.jpeg" className="project-img"></img>
                    </div>
                    <div className="card-content">
                        <p>Card description</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/public/img/ui.jpeg" className="project-img"></img>
                    </div>
                    <div className="card-content">
                        <p>Card description</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/public/img/ui.jpeg" className="project-img"></img>
                    </div>
                    <div className="card-content">
                        <p>Card description</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/public/img/ui.jpeg" className="project-img"></img>
                    </div>
                    <div className="card-content">
                        <p>Card description</p>
                    </div>
                </div>

                <div className="card-empty"></div>
                <div className="card-empty"></div>

            </div>
        </div>
    )
}