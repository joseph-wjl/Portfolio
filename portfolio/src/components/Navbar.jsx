import React, { useRef } from 'react'

export default function Navbar() {
    const navContainerRef = useRef(null);

    const navItems = ['Home', 'About Me', 'Projects', 'Resume', 'Contact'];

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none 
        transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-end p-4">
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                <a className="nav-hover-btn">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
    }

