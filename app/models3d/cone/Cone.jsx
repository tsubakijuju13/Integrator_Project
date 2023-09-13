"use client"
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Scene_ambient_cone() {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[3,3,3]} intensity={1} />
            <OrbitControls makeDefault />
        </>
    )
}

function Cone_obj() {
    const cone = useRef()
    var degree = 0

    useFrame(() => {
        cone.current.position.y += Math.cos((Math.PI/180)*degree)
        cone.current.rotation._y += 50
        cone.current.rotation._x += 50
        cone.current.rotation._z += 50
        degree += 1
    })

    return (
        <mesh ref={cone}>
            <coneGeometry args={[6.40, 34.349, 64]} />
            <meshToonMaterial color={'#7CFC00'} />
        </mesh>
    )
}

export default function Cone() {
  return (
    <Canvas>
        <Scene_ambient_cone />
        <Cone_obj />
    </Canvas>
  )
}
