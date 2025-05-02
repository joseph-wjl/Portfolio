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
        // Ensure the loader stays for at least 2 seconds
        setTimeout(() => {
          setIsLoading(false); // Hide loader after 2 seconds
        }, 1500);
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

// Typewriter effect
  const [text, setText] = useState(""); // State to hold the current text
  const fullText = "Hi, I am Joseph."; // The full text to type
  const speed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let i = 0;

    const typeWriter = () => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i)); // Append the next character
        i++;
        setTimeout(typeWriter, speed); // Call the function again after `speed` ms
      }
    };

    typeWriter(); // Start the typewriter effect
  }, []); // Empty dependency array ensures this runs only once
// 

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden bg-violet-900">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
            <div className="three-body">
                <div className="three-body__dot" />
                <div className="three-body__dot" />
                <div className="three-body__dot" />
            </div>
        </div>
      )}

      <div id="video-frame" className="relative">
        {/* Spline Background */}
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
            <h1 className="special-font hero-heading text-blue-100" id="demo">
            {text}
              {/* Hi, I am Joseph. */}
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              I build sleek & stunning websites.
            </p>
            <div className="relative z-50">
  <Button
    title="Learn More"
    leftIcon={<TiLocationArrow />}
    containerClass="bg-violet-300 hover:bg-yellow-400 transition duration-300 flex-center gap-1"
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
  />
</div>
          </div>
        </div>
      </div>
      <h1 className="absolute bottom-5 right-5 text-6xl mr-5 font-zentry text-white">
        I am a <span className="text-violet-300">Front End Developer</span>
      </h1>
    </div>
  );
}
  
  
  