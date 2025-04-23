import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { TesseractGlb } from './TesseractGlb.jsx'
import TesseractLights from './TesseractLights.jsx'

export default function Tesseract() {

    const isTablet = useMediaQuery( { query: '(max-width: 1024px)' } );
    const isMobile = useMediaQuery( { query: '(max-width: 768px)' } );

    const handlePointerOver = () => {
      document.body.style.cursor = 'grab'; 
    };
    const handlePointerOut = () => {
      document.body.style.cursor = 'default'; 
    };
    const handlePointerDown = () => {
      document.body.style.cursor = 'grabbing'; 
    };
    const handlePointerUp = () => {
      document.body.style.cursor = 'grab'; 
    };

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        
        <OrbitControls
            enablePan = {false}
            enableZoom = {false}
            maxDistance = {20}
            minDistance = {5}
            minPolarAngle = {Math.PI / 5}
            maxPolarAngle = {Math.PI / 2}
        />

        <TesseractLights />
        <group 
        scale={isMobile? 7 : 4}
        // position = {[0, -3.5, 0]}
        rotation = {[0, -Math.PI/4, 0]}
        onPointerOver={handlePointerOver} 
        onPointerOut={handlePointerOut} 
        onPointerDown={handlePointerDown} 
        onPointerUp={handlePointerUp} 
         >
            <TesseractGlb />
        </group>    
        
    </Canvas>
  )
}
