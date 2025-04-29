import React from 'react'
import './PlusAnimationStyles.css'
import './PlusAnimationEffects.js'

export default function PlusAnimation() {
  return (
    <>
        <div id="container" className="container">
            <section className="hero">
                <h1>Symphonia</h1>
            </section>
            <section className="info">
                <div className="header-rows">
                    <div className="header-row">
                        <h1>Motion</h1>
                    </div>
                    <div className="header-row">
                        <h1>Stills</h1>
                    </div>
                </div>
            </section>
            <section className="header-info">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus excepturi, adipisci dolorum unde rerum.</p>
            </section>
            <section className="whitespace"></section>
            <section className="pinned">
                <div className="revealer">
                    <div className="revealer-1">+</div>
                    <div className="revealer-2"></div>
                </div>
            </section>

            <section className="website-content">
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam ipsa. Dolor consequatur quas eos!
                </h1>
            </section>
        </div>
    </>
    
  )
}

