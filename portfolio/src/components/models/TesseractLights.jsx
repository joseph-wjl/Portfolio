import React from 'react'

export default function TesseractLights() {
  return (
    <>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={7} color="#ffffff" />

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
    </>
  )
}

