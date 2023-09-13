"use client"
import { OrbitControls, PerspectiveCamera, useCubeTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";


function Scene_ambient() {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[3,3,3]} intensity={2.5} />
            <OrbitControls/>
            <PerspectiveCamera makeDefault fov={50} position={[0,10,500]} />
        </>
    )
}

function Sphere_obj() {

    const sphere = useRef()
    var degree = 0
    const textures = useCubeTexture(["Spx.png", "Snx.png", "Spy.png", "Sny.png", "Spz.png", "Snz.png"],
    {path: "/assets/images/"})

    useFrame(() => {
        sphere.current.position.y += Math.sin((Math.PI/180)*degree)
        degree += 1
    })

    return (
        <mesh ref={sphere} >
            <sphereGeometry args={[20, 20, 20]} />
            <meshLambertMaterial color={"#FFD700"} emissive={'#000000'} envMap={textures}/>
        </mesh>
    )
}

export default function Sphere() {
  return (
    <Canvas>
        <Scene_ambient />
        <Sphere_obj />
    </Canvas>
  )
}
