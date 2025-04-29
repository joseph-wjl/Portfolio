import React from 'react'
import Tesseract from './models/Tesseract'

export default function About() {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden flex items-center justify-center ">

        <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/public/videos/particles.mp4"
        autoPlay
        loop
        muted
        ></video>
       
       <div className="about-text flex flex-col h-dvh mt-10 justify-center font-robert-regular text-md">
            <p className="py-7 pl-10 font-inter">
                I am an aspiring web developer with a passion for crafting 
                websites that are as beautiful as they are functional. As a self-taught developer, 
                I’m on a journey of constant learning, diving into new technologies to bring my creative 
                visions to life. My artistic roots drive me to prioritize design and aesthetics, blending 
                them seamlessly with solid functionality to create digital experiences that stand out.</p>
            <p className="py-7 pl-10">
                I believe that great web development is about more than just code—it’s immerse telling a story 
                through thoughtful design and intuitive user experiences. Whether it’s a sleek layout, a 
                responsive interface, or a perfect balance of form and function, I’m dedicated to making 
                every project I tackle both visually captivating and technically sound.</p>
            <p className="py-7 pl-10">
                When I’m not behind the screen, I’m usually out in the world that inspires me—hiking through 
                rugged trails, camping under a starry sky, or soaking up the sun at the beach. Photography is 
                my way of capturing those moments, while fitness keeps me energized and pushing my limits. These 
                passions fuel my creativity and shape my approach to building web experiences that feel alive, 
                dynamic, and connected to the user.</p>
        </div> 

        <Tesseract className="h-dvh"/>

    </div>
  )
}

