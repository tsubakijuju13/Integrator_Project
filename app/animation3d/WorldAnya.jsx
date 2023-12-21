"use client"
import { Canvas} from "@react-three/fiber"
import { Sky, OrbitControls } from "@react-three/drei"
import { useState } from "react";
import { Model as Room } from "./Room"
import { Anya } from "./Anya"
import EyeAnimation from "./eye";

function Light() {
  return(
    <>
      <ambientLight intensity={0.4} />
      
      <group>
        <directionalLight position={[-5, 4,-8]} castShadow intensity={3} shadow-mapSize={2048} shadow-bias={-0.001}>
          <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
        </directionalLight>
      </group>
    </>
  )
}

export default function WorldAnya() {
    const [cameraFace, setCameraFace] = useState(0)

  return (
    <Canvas shadows camera={{ fov: 50 }}>
      <OrbitControls makeDefault enablePan={false} enableZoom={false} minAzimuthAngle={(11* Math.PI) / 6} maxAzimuthAngle={Math.PI / 3} minPolarAngle={Math.PI/3} maxPolarAngle={(Math.PI)/2}/>
      <EyeAnimation preset={cameraFace} />
      <Light />
      <Room scale={0.5} position={[0, -1, 0]} />
      <Anya 
        scale={2} 
        position={[4,-1.85,0]}
        rotation={[0,1,0]} 
        setBack={() => setCameraFace(0)} 
        viewAnya={cameraFace != 1}
        setViewAnya={() => setCameraFace(1)}/>
      <Sky inclination={0.52} scale={25} />

    </Canvas>
  )
}