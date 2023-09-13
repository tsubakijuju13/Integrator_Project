"use client"
import { Canvas } from "@react-three/fiber"
import { Box, OrbitControls, Torus, useCubeTexture } from "@react-three/drei"
import { useControls } from "leva"


function Scene_three() {

    const {color} = useControls("Fog", {color: "#000"})
    return (
        <>
            <ambientLight intensity={1} />
            {/* <directionalLight position={[2,4,5]} intensity={2} /> */}
            <pointLight position={[5,5,5]} intensity={1} />
            <pointLight position={[-3,-3,2]} />
            <OrbitControls makeDefault />

            <fog attach="fog" args={[color, 2, 10]} />
        </>
    )
}


function Object_scene() {
    
    const t = useCubeTexture(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    {path: "/assets/images/"})

    return (
        <Torus args={[1.48, 0.72, 30, 200, 6.2831]}>
            <meshBasicMaterial color={"#E6E6FA"} envMap={t} />
        </Torus>
    )
}


export default function TorusComponent() {
  return (
    <Canvas>
      <Scene_three />
      <Object_scene />
    </Canvas>
  )
}
