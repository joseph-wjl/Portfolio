import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
import '/public/videos/particles.mp4'
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

export default function Immerse() {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                ease: "power2.inOut",
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
    <div id="immerse" className="min-h-screen w-screen ">

        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            
            <AnimatedTitle title="Take a deeper dive into my works" 
            containerClass="mb-10 text-center special-font font-zentry text-white"/>

            <div className="immerse-subtext">
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path immerse-image">
                <img src="img/immerse.jpg" alt="Background" 
                className="absolute left-0 top-0 size-full object-cover"></img>
            </div>
        </div>
    </div>
  )
}

