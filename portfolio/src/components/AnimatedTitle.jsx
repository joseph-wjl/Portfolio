import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function AnimatedTitle({ title, containerClass }) {

    const containerRef = React.useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottm',
                    toggleActions: 'play none none reverse',

                }
            })
            titleAnimation.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.out',
                stagger: 0.02,
            })
        }, containerRef)

        return () => context.revert(); // Cleanup function to revert the animation

    }, []);

    return (
        <div 
        ref={containerRef}
        className={`animated-title ${containerClass}`}>
            {title.split('<br />').map((line, index) => (
                <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3 text-black">
                    {line.split(' ').map((word, i) => (
                        <span key={i} className="animated-word"
                        dangerouslySetInnerHTML={{ __html: word }}/>
                    ))}
                </div>
            ))}            
        </div>
    )
}

