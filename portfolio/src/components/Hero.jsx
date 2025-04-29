import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState, Suspense, lazy } from "react";
// import Spline from "@splinetool/react-spline"; 
import Button from "./Button";
import { ScrollTrigger } from "gsap/all";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tesseract from "./models/Tesseract";

gsap.registerPlugin(ScrollTrigger);

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  // Ref for Spline to apply GSAP animation (optional if clip-path applies to parent)
  const splineRef = useRef(null);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(40% 0, 90% 0, 65% 100%, 10% 100%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden bg-violet-300">
      {/* 3D Background */}
      {/* <div id="video-frame" className="absolute inset-0 z-0">
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}> */}
            {/* <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" /> */}
            {/* <OrbitControls enablePan={false} enableZoom={true} /> */}
            {/* <Tesseract />
          </Canvas>
        </Suspense> */}
      <div id="video-frame" className="relative">
        {/* Spline Background */}
        <div className="absolute left-0 top-0 size-full z-0">
          {/* <Suspense fallback={<div>Loading...</div>}>
              <Spline
                scene="https://prod.spline.design/FY-1Ma71iKrhvppj/scene.splinecode"
                className="w-full h-full object-cover"
              />
            </Suspense> */}

            {/* <figure>
              <div>
                <Tesseract />
              </div>
            </figure> */}
            <video src="./img/chips.mp4" autoPlay loop muted></video>

        </div>
        {/* Overlay for Readability */}
        <div className="absolute left-0 top-0 size-full bg-black bg-opacity-40 z-5"></div>
        {/* Placeholder Section (Maintains Structure) */}
        <section className="z-0 min-h-screen bg-transparent" />
        {/* Overlay Content */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Hi, I am Joseph.
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              I build sleek & stunning websites.
            </p>
            <Button
              id="watch-trailer"
              title="Learn More"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-blue-300 flex-center gap-1"
              onClick={() => {
                const aboutMeSection = document.getElementById("about");
                if (aboutMeSection) {
                  aboutMeSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>
        </div>
      </div>
      <h1 className="absolute bottom-5 right-5 text-6xl font-bold text-black bg-white">
        I am a Front End Developer.
      </h1>
    </div>
  );
}
  
  
  