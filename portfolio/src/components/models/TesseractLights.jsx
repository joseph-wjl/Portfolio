import React from 'react'
import * as THREE from 'three'

export default function TesseractLights() {
  return (
    <>
        <ambientLight intensity={15} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={10} color="#d93716 " />

        {/* <spotLight 
        position = { [2, 5, 6] }
        angle = { 0.15 }
        intensity = {200}
        penubra = {0.2}
        color = "white"
        />

        <spotLight 
        position = { [4, 5, 4] }
        angle = { 0.3 }
        intensity = {40}
        penubra = {2.5}
        color = "4cc9f0"
        /> */}

        <primitive
        object = { new THREE.RectAreaLight('#f37731', 8, 3, 2) }
        position = { [1, 3, 4] }
        intensity = {10}
        rotation = {[-Math.PI/4, Math.PI/4, 0]}
        />

        <pointLight 
        position = { [0, 1, 0] }
        intensity = {10}
        color = "#d93716"
        />

        <pointLight 
        position = { [1, 2, -2] }
        intensity = {10}
        color = "#d93716"
        />
        
    </>
  )
}

