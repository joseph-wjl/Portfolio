import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Tesserat() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

        <OrbitControls />

        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#ff0000" wireframe />
        </mesh>
    </Canvas>
  )
}
