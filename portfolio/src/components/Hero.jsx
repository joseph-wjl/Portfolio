import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import HeroVid from './hero-1.mp4'
import Button from "./Button";

// gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    // const [currentIndex, setCurrentIndex] = useState(1);
    // const [hasClicked, setHasClicked] = useState(false);
  
    // const [loading, setLoading] = useState(true);
    // const [loadedVideos, setLoadedVideos] = useState(0);
  
    // const totalVideos = 4;
    // const nextVdRef = useRef(null);
  
    // const handleVideoLoad = () => {
    //   setLoadedVideos((prev) => prev + 1);
    // };
  
    // useEffect(() => {
    //   if (loadedVideos === totalVideos - 1) {
    //     setLoading(false);
    //   }
    // }, [loadedVideos]);
  
    // const handleMiniVdClick = () => {
    //   setHasClicked(true);
  
    //   setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    // };
  
    // useGSAP(
    //   () => {
    //     if (hasClicked) {
    //       gsap.set("#next-video", { visibility: "visible" });
    //       gsap.to("#next-video", {
    //         transformOrigin: "center center",
    //         scale: 1,
    //         width: "100%",
    //         height: "100%",
    //         duration: 1,
    //         ease: "power1.inOut",
    //         onStart: () => nextVdRef.current.play(),
    //       });
    //       gsap.from("#current-video", {
    //         transformOrigin: "center center",
    //         scale: 0,
    //         duration: 1.5,
    //         ease: "power1.inOut",
    //       });
    //     }
    //   },
    //   {
    //     dependencies: [currentIndex],
    //     revertOnUpdate: true,
    //   }
    // );
  
    // useGSAP(() => {
    //   gsap.set("#video-frame", {
    //     clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
    //     borderRadius: "0% 0% 40% 10%",
    //   });
    //   gsap.from("#video-frame", {
    //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //     borderRadius: "0% 0% 0% 0%",
    //     ease: "power1.inOut",
    //     scrollTrigger: {
    //       trigger: "#video-frame",
    //       start: "center center",
    //       end: "bottom center",
    //       scrub: true,
    //     },
    //   });
    // });
  
    // const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  
    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
        })
    })

    return (
      <div className="relative h-dvh w-screen overflow-x-hidden">
        
  
        <div
          id="video-frame" className="bg-yellow-100"
        //   className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
  
          {/* <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-black-75">
            G<b>A</b>MING
          </h1> */}
  
          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-black-100">
                Hi, I am Joseph.
              </h1>
  
              <p className="mb-5 max-w-64 font-robert-regular text-black-100">
                I build sleek & stunning websites.
              </p>
  
              <Button
                id="watch-trailer"
                title="More about me"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-blue-300 flex-center gap-1"
              />
            </div>
          </div>
        </div>
  
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-lg text-black">
          I am a Web Developer. 
        </h1>
      </div>
    );
  };
  
  