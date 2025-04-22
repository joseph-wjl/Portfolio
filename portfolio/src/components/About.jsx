import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
import Spline from '@splinetool/react-spline';


gsap.registerPlugin(ScrollTrigger);

export default function About() {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
            }
        )
    })

  return (
    <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[10px]">
                About Me</h2>
            
            <AnimatedTitle title="I build stunning & user-friendly interfaces" containerClass="mt-5 text-black text-center"
            className="text-black"/>

            <div className="about-subtext">
                <p>text filler text filler</p>
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                {/* <img src="img/ui.jpeg" alt="Background" 
                className="absolute left-0 top-0 size-full object-cover"></img> */}
                <Spline scene="https://prod.spline.design/3ArfHPRWmgJbL5vN/scene.splinecode" 
                className="absolute left-0 top-0 size-full object-cover"/>
            </div>
        </div>
    </div>
  )
}

