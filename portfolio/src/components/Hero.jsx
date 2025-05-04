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

  const [isLoading, setIsLoading] = useState(true);

  // Ref for Spline to apply GSAP animation (optional if clip-path applies to parent)
  const splineRef = useRef(null);

    // Detect when all DOM elements are rendered
    useEffect(() => {
      const handleLoad = () => {
        // Ensure the loader stays for at least _ seconds
        setTimeout(() => {
          setIsLoading(false); // Hide loader
        }, 1300);
      };
    
      // Use window.onload for generic detection
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }, []);

    // // Hide scrollbar while loading
    // useEffect(() => {
    //   if (isLoading) {
    //     document.body.style.overflow = "hidden"; // Disable scrolling
    //   } else {
    //     document.body.style.overflow = "auto"; // Enable scrolling
    //   }
    // }, [isLoading]);

     
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
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden bg-violet-900">
      {isLoading && (
        <div className="flex-center fixed inset-0 z-[100] bg-black">
            <div className="three-body">
                <div className="three-body__dot" />
                <div className="three-body__dot" />
                <div className="three-body__dot" />
            </div>
        </div>
      )}

      <div id="video-frame" className="relative">

        <div className="absolute left-0 top-0 size-full z-0">
            <video src="/videos/chips.mp4" autoPlay loop muted></video>
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

            <p className="mb-5 font-robert-regular text-xl text-blue-100">
              I turn ideas into visually epic websites.
            </p>


          {/* Default Scrolling */}
            {/* <div className="relative z-50">
              <button
                className="bg-violet-300 hover:bg-yellow-400 transition duration-300 flex items-center justify-center 
                  gap-1 px-7 py-3 mt-5 rounded-full uppercase font-robert-medium text-xs"
                onClick={() => {
                  const nextSection = document.querySelector("#about");
                  if (nextSection) {
                    const sectionTop = nextSection.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: sectionTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <TiLocationArrow className="text-lg"/>
                Learn More
              </button>
            </div> */}


          {/* Slow Scrolling */}
            <div className="relative z-50">
              <button
                className="bg-violet-300 hover:bg-yellow-400 transition duration-300 flex items-center justify-center 
                  gap-1 px-7 py-3 mt-5 rounded-full uppercase font-robert-medium text-xs"
                onClick={() => {
                  const nextSection = document.querySelector("#about");
                  if (nextSection) {
                    const targetPosition = nextSection.getBoundingClientRect().top + window.scrollY;
                    const startPosition = window.scrollY;
                    const distance = targetPosition - startPosition;
                    const duration = 1200;
                    let startTime = null;

                    const scrollAnimation = (currentTime) => {
                      if (!startTime) startTime = currentTime;
                      const timeElapsed = currentTime - startTime;
                      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                      window.scrollTo(0, run);
                      if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
                    };

                    const easeInOutQuad = (t, b, c, d) => {
                      t /= d / 2;
                      if (t < 1) return (c / 2) * t * t + b;
                      t--;
                      return (-c / 2) * (t * (t - 2) - 1) + b;
                    };

                    requestAnimationFrame(scrollAnimation);
                  }
                }}
              >
                <TiLocationArrow className="text-lg" />
                Learn More
              </button>
            </div>

          </div>
        </div>
      </div>


      <h1 className="absolute bottom-5 right-5 text-6xl mr-5 z-40 font-zentry text-white">
          I am a <span className="text-violet-300 bg-black">Front End Developer</span>
      </h1>
      <h1 className="absolute bottom-5 right-5 text-6xl mr-5 font-zentry text-black">
          I am a <span>Front End Developer</span>
      </h1>


    </div>
  );
}
  
  
  