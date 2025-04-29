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
            {/* <h2 className="font-general text-sm uppercase md:text-[10px]">
                About Me</h2> */}
            
            <AnimatedTitle title="Take a deeper dive into my works" containerClass="mb-10 text-center"
            className="text-violet-300"/>

            {/* <AnimatedTitle title="I build stunning & user-friendly interfaces" containerClass="mt-10 mb-5 text-black text-center font-robert-medium"
            className="text-black"/> */}

            <div className="immerse-subtext">
                {/* <p>Hi, I’m Joseph, an aspiring web developer with a passion for crafting 
                    websites that are as beautiful as they are functional. As a self-taught developer, 
                    I’m on a journey of constant learning, diving into new technologies to bring my creative 
                    visions to life. My artistic roots drive me to prioritize design and aesthetics, blending 
                    them seamlessly with solid functionality to create digital experiences that stand out.</p>
                <p>I believe that great web development is about more than just code—it’s immerse telling a story 
                    through thoughtful design and intuitive user experiences. Whether it’s a sleek layout, a 
                    responsive interface, or a perfect balance of form and function, I’m dedicated to making 
                    every project I tackle both visually captivating and technically sound.</p>
                <p>When I’m not behind the screen, I’m usually out in the world that inspires me—hiking through 
                    rugged trails, camping under a starry sky, or soaking up the sun at the beach. Photography is 
                    my way of capturing those moments, while fitness keeps me energized and pushing my limits. These 
                    passions fuel my creativity and shape my approach to building web experiences that feel alive, 
                    dynamic, and connected to the user.</p> */}
                {/* <h2 className="text-3xl font-robert-medium font-bold">Take a deeper dive into my works</h2> */}
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path immerse-image">
                <img src="img/immerse.jpg" alt="Background" 
                className="absolute left-0 top-0 size-full object-cover"></img>
                
                {/* <Spline scene="https://prod.spline.design/3ArfHPRWmgJbL5vN/scene.splinecode" 
                className="absolute left-0 top-0 size-full object-cover"/> */}
            </div>
        </div>
    </div>
  )
}

