import React, { useState, useEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

export default function Navbar() {
    const navContainerRef = useRef(null);

    const navItems = ['Home', 'About', 'Projects', 'Resume', 'Contact'];

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const { y: currentScrollY } = useWindowScroll();

    // Effect to handle scroll events
    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible? 0 : -100,
            opacity: isNavVisible? 1 : 0,
            duration: 0.2,
        })
    })

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none 
        transition-all duration-700 sm:inset-x-6 ">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-end p-4">
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                <button
                                key={item}
                                onClick={() => {
                                  const section = document.getElementById(item.toLowerCase().replace(" ", "-"));
                                  if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                  }
                                }}
                                className="nav-hover-btn"
                              >
                                {item}
                              </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
    }

