"use client"
import { Cloud, OrbitControls, Sky, useHelper } from "@react-three/drei";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Terrain from "./Terrain";


function Ambient() {


  return (
      <>
          <Sky distance={10} sunPosition={[0,30,0]}/>
          <ambientLight intensity={1} />
          <directionalLight position={[10,10,10]} intensity={2.5} />
          {/* <pointLight position={[10,10,10]} intensity={5} /> */}
          <OrbitControls makeDefault />
      </>
  )
}


function Figure(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/junkrat.glb");
    console.log(animations)
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
      actions['Take 001'].play()
    })

    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.004}
          >
            <group
              name="81a39b0745054f9bb436371b8536adedfbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Object_4">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <skinnedMesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_21.skeleton}
                    />
                    <skinnedMesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_23.skeleton}
                    />
                    <skinnedMesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_25.skeleton}
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <skinnedMesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_29.skeleton}
                    />
                    <skinnedMesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_31.skeleton}
                    />
                    <skinnedMesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_33.skeleton}
                    />
                    <skinnedMesh
                      name="Object_35"
                      geometry={nodes.Object_35.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_35.skeleton}
                    />
                    <skinnedMesh
                      name="Object_37"
                      geometry={nodes.Object_37.geometry}
                      material={materials.Material_34}
                      skeleton={nodes.Object_37.skeleton}
                    />
                    <skinnedMesh
                      name="Object_38"
                      geometry={nodes.Object_38.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_38.skeleton}
                    />
                    <skinnedMesh
                      name="Object_39"
                      geometry={nodes.Object_39.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_39.skeleton}
                    />
                    <skinnedMesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_41.skeleton}
                    />
                    <skinnedMesh
                      name="Object_43"
                      geometry={nodes.Object_43.geometry}
                      material={materials.Material_34}
                      skeleton={nodes.Object_43.skeleton}
                    />
                    <skinnedMesh
                      name="Object_45"
                      geometry={nodes.Object_45.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_45.skeleton}
                    />
                    <skinnedMesh
                      name="Object_47"
                      geometry={nodes.Object_47.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_47.skeleton}
                    />
                    <skinnedMesh
                      name="Object_49"
                      geometry={nodes.Object_49.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_49.skeleton}
                    />
                    <skinnedMesh
                      name="Object_51"
                      geometry={nodes.Object_51.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_51.skeleton}
                    />
                    <skinnedMesh
                      name="Object_53"
                      geometry={nodes.Object_53.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_53.skeleton}
                    />
                    <skinnedMesh
                      name="Object_55"
                      geometry={nodes.Object_55.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_55.skeleton}
                    />
                    <skinnedMesh
                      name="Object_57"
                      geometry={nodes.Object_57.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_57.skeleton}
                    />
                    <skinnedMesh
                      name="Object_59"
                      geometry={nodes.Object_59.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_59.skeleton}
                    />
                    <skinnedMesh
                      name="Object_61"
                      geometry={nodes.Object_61.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_61.skeleton}
                    />
                    <skinnedMesh
                      name="Object_63"
                      geometry={nodes.Object_63.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_63.skeleton}
                    />
                    <skinnedMesh
                      name="Object_65"
                      geometry={nodes.Object_65.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_65.skeleton}
                    />
                    <skinnedMesh
                      name="Object_67"
                      geometry={nodes.Object_67.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_67.skeleton}
                    />
                    <skinnedMesh
                      name="Object_69"
                      geometry={nodes.Object_69.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_69.skeleton}
                    />
                    <skinnedMesh
                      name="Object_71"
                      geometry={nodes.Object_71.geometry}
                      material={materials.Material_22}
                      skeleton={nodes.Object_71.skeleton}
                    />
                    <skinnedMesh
                      name="Object_73"
                      geometry={nodes.Object_73.geometry}
                      material={materials.Material_34}
                      skeleton={nodes.Object_73.skeleton}
                    />
                    <skinnedMesh
                      name="Object_75"
                      geometry={nodes.Object_75.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_75.skeleton}
                    />
                    <skinnedMesh
                      name="Object_77"
                      geometry={nodes.Object_77.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_77.skeleton}
                    />
                    <skinnedMesh
                      name="Object_79"
                      geometry={nodes.Object_79.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_79.skeleton}
                    />
                    <skinnedMesh
                      name="Object_81"
                      geometry={nodes.Object_81.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_81.skeleton}
                    />
                    <skinnedMesh
                      name="Object_83"
                      geometry={nodes.Object_83.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_83.skeleton}
                    />
                    <skinnedMesh
                      name="Object_85"
                      geometry={nodes.Object_85.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_85.skeleton}
                    />
                    <skinnedMesh
                      name="Object_87"
                      geometry={nodes.Object_87.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_87.skeleton}
                    />
                    <skinnedMesh
                      name="Object_89"
                      geometry={nodes.Object_89.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_89.skeleton}
                    />
                    <skinnedMesh
                      name="Object_91"
                      geometry={nodes.Object_91.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_91.skeleton}
                    />
                    <skinnedMesh
                      name="Object_93"
                      geometry={nodes.Object_93.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_93.skeleton}
                    />
                    <skinnedMesh
                      name="Object_95"
                      geometry={nodes.Object_95.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_95.skeleton}
                    />
                    <skinnedMesh
                      name="Object_97"
                      geometry={nodes.Object_97.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_97.skeleton}
                    />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials.Material_19}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name="Object_101"
                      geometry={nodes.Object_101.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_101.skeleton}
                    />
                    <skinnedMesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name="Object_105"
                      geometry={nodes.Object_105.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_105.skeleton}
                    />
                    <skinnedMesh
                      name="Object_107"
                      geometry={nodes.Object_107.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_107.skeleton}
                    />
                    <skinnedMesh
                      name="Object_109"
                      geometry={nodes.Object_109.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_109.skeleton}
                    />
                    <skinnedMesh
                      name="Object_111"
                      geometry={nodes.Object_111.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_111.skeleton}
                    />
                    <skinnedMesh
                      name="Object_113"
                      geometry={nodes.Object_113.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_113.skeleton}
                    />
                    <skinnedMesh
                      name="Object_115"
                      geometry={nodes.Object_115.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_115.skeleton}
                    />
                    <skinnedMesh
                      name="Object_117"
                      geometry={nodes.Object_117.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_117.skeleton}
                    />
                    <skinnedMesh
                      name="Object_119"
                      geometry={nodes.Object_119.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_119.skeleton}
                    />
                    <skinnedMesh
                      name="Object_121"
                      geometry={nodes.Object_121.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_121.skeleton}
                    />
                    <skinnedMesh
                      name="Object_123"
                      geometry={nodes.Object_123.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_123.skeleton}
                    />
                    <skinnedMesh
                      name="Object_125"
                      geometry={nodes.Object_125.geometry}
                      material={materials.Material_20}
                      skeleton={nodes.Object_125.skeleton}
                    />
                    <skinnedMesh
                      name="Object_127"
                      geometry={nodes.Object_127.geometry}
                      material={materials.Material_34}
                      skeleton={nodes.Object_127.skeleton}
                    />
                    <skinnedMesh
                      name="Object_129"
                      geometry={nodes.Object_129.geometry}
                      material={materials.Material_34}
                      skeleton={nodes.Object_129.skeleton}
                    />
                    <group
                      name="Object_6"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_8"
                      position={[-148.655, 523.017, -76.179]}
                      rotation={[2.642, 0.091, -0.077]}
                      scale={[0.215, 0.215, 0.248]}
                    />
                    <group
                      name="Object_10"
                      position={[-163.558, 554.629, -60.853]}
                      rotation={[-1.855, -0.518, 0.083]}
                      scale={[0.215, 0.215, 0.248]}
                    />
                    <group
                      name="Object_12"
                      position={[63.946, 598.712, 32.979]}
                      rotation={[-0.486, 0.123, -3.094]}
                      scale={0.576}
                    />
                    <group
                      name="Object_14"
                      position={[64.922, 621.798, 7.435]}
                      rotation={[-1.254, 0.171, -3.104]}
                      scale={0.576}
                    />
                    <group
                      name="Object_16"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_18"
                      position={[-52.093, 598.726, 29.194]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_20"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_22"
                      position={[-145.752, 546.872, -74.735]}
                      rotation={[-2.559, 0.26, -0.314]}
                      scale={[0.215, 0.215, 0.248]}
                    />
                    <group
                      name="Object_24"
                      position={[70.981, 637.073, -24.956]}
                      rotation={[-1.575, 0.276, -3.128]}
                      scale={0.576}
                    />
                    <group
                      name="Object_26"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_28"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_30"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_32"
                      position={[0, 524.535, -74.357]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_34"
                      position={[41.446, 565.084, 48.92]}
                      rotation={[1.348, 0.013, -0.479]}
                      scale={0.576}
                    />
                    <group
                      name="Object_36"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_40"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_42"
                      position={[0, 690.65, 27.947]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_44"
                      position={[-41.193, 416.206, 62.583]}
                      rotation={[-Math.PI / 2, 0.229, -0.421]}
                      scale={0.706}
                    />
                    <group
                      name="Object_46"
                      position={[-273.707, 441.474, 8.016]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_48"
                      position={[0, 503.18, -48.898]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_50"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_52"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_54"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_56"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_58"
                      position={[-260.239, 445.076, 43.324]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_60"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_62"
                      position={[-232.144, 482.65, 4.603]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_64"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_66"
                      position={[-154.157, 533.881, -60.594]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_68"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_70"
                      position={[-262.832, 458.997, 41.954]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_72"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_74"
                      position={[-58.456, 150.499, -9.256]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_76"
                      position={[-64.237, 87.883, -24.316]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_78"
                      position={[-61.175, 118.381, -16.588]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_80"
                      position={[-59.342, 139.284, -11.989]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_82"
                      position={[-57.559, 158.065, 29.488]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_84"
                      position={[-54.932, 187.275, 6.908]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_86"
                      position={[-66.503, 60.24, -30.5]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_88"
                      position={[-58.781, 145.827, 15.307]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_90"
                      position={[-66.163, 64.836, -29.376]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_92"
                      position={[-51.743, 222.336, 0.77]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_94"
                      position={[-53.09, 206.816, 42.157]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_96"
                      position={[-58.781, 145.827, 15.307]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_98"
                      position={[-49.386, 248.194, -0.584]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Object_100"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_102"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_104"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_106"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_108"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_110"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_112"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_114"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_116"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_118"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_120"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_122"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_124"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Object_126"
                      position={[0, 690.65, 27.947]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object_128"
                      position={[0, 690.65, 28.242]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Base_Human003"
                      position={[0.505, 0, -3.551]}
                      rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    />
                    <group
                      name="K��rper_Riemen_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Cylinder003"
                      position={[-148.655, 523.017, -76.179]}
                      rotation={[2.642, 0.091, -0.077]}
                      scale={[0.215, 0.215, 0.248]}
                    />
                    <group
                      name="Cylinder001"
                      position={[-163.558, 554.629, -60.853]}
                      rotation={[-1.855, -0.518, 0.083]}
                      scale={[0.215, 0.215, 0.248]}
                    />
                    <group
                      name="Granate_low001"
                      position={[52.905, 596.556, 29.976]}
                      rotation={[-0.486, 0.123, -3.094]}
                      scale={0.576}
                    />
                    <group
                      name="Granate_low002"
                      position={[53.714, 618.7, 6.84]}
                      rotation={[-1.254, 0.171, -3.104]}
                      scale={0.576}
                    />
                    <group
                      name="Hand_Unten_Grundk��rper_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Granate_low006"
                      position={[-52.093, 598.726, 29.194]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="R��ckenhalterung_Rad_oben_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Cylinder002"
                      position={[-145.752, 546.872, -74.735]}
                      rotation={[-2.559, 0.26, -0.314]}
                      scale={[0.215, 0.215, 0.248]}
                    />
                    <group
                      name="Granate_low003"
                      position={[59.501, 635.137, -24.801]}
                      rotation={[-1.575, 0.276, -3.128]}
                      scale={0.576}
                    />
                    <group
                      name="Tasche_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Schuh_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="R��ckenhalterung_unten_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="R��ckenhalterung_Zylinder_low"
                      position={[0, 524.535, -74.357]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Granate_low"
                      position={[50.718, 568.996, 43.063]}
                      rotation={[1.348, 0.013, -0.479]}
                      scale={0.576}
                    />
                    <group
                      name="K��rper_Fleisch_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="K��rper_Stoff_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Augen_low"
                      position={[0, 690.65, 27.947]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Wasserflasche_low"
                      position={[-41.193, 416.206, 62.583]}
                      rotation={[-Math.PI / 2, 0.229, -0.421]}
                      scale={0.706}
                    />
                    <group
                      name="Hand_runde_platte_low"
                      position={[-273.707, 441.474, 8.016]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="R��ckenhalterung_Ring_unten_low"
                      position={[0, 503.18, -48.898]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Hand_Obenteil_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Armring_rechts_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Verband_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="K��rper_Handschuh_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Hand_4eck_unten_low"
                      position={[-260.239, 445.076, 43.324]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Hand_Finger_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Hand_Kugel_low"
                      position={[-232.144, 482.65, 4.603]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Hose_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Ellebogenpanzer_low"
                      position={[-154.157, 533.881, -60.594]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="K��rper_R��ckendinger_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Hand_4eck_oben_low"
                      position={[-262.832, 458.997, 41.954]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Haare_low"
                      position={[0, 283.495, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Bein_Rolle_unten_low"
                      position={[-58.456, 150.499, -9.256]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_Spirale_low"
                      position={[-64.109, 89.276, -23.974]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_Spirale_Ende_oben_low"
                      position={[-61.175, 118.381, -16.588]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_Verbindung_unten_low"
                      position={[-59.342, 139.284, -11.989]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_gro��e_Platte_unten_low"
                      position={[-57.559, 158.065, 29.488]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_Rolle_oben_low"
                      position={[-54.932, 187.275, 6.908]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_Spirale_Ende_unten_low"
                      position={[-66.503, 60.24, -30.5]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_B��gel_gro��_low"
                      position={[-58.781, 145.827, 15.307]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_Beinstab_low"
                      position={[-66.163, 64.836, -29.376]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_Kasten_low"
                      position={[-51.743, 222.336, 0.77]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_gro��e_Platte_oben_low"
                      position={[-53.09, 206.816, 42.157]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_B��gel_klein_low"
                      position={[-58.781, 145.827, 15.307]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Bein_Verbindung_oben_low"
                      position={[-49.386, 248.194, -0.584]}
                      rotation={[-1.331, 0.089, -0.02]}
                      scale={[1.181, 1.111, 1.066]}
                    />
                    <group
                      name="Rad_Gummiding_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Stachel_3_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Kettenglieder_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Rad1_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Schrauben_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Stachel_2_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Stachel_4_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Platte_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Deckel_gelb_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Rad2_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_rand_l��cher_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Rand_silber_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Rad_Stachel_1_low"
                      position={[0.382, 557.546, -137.683]}
                      rotation={[Math.PI, 0, 0]}
                      scale={1.142}
                    />
                    <group
                      name="Augelow2"
                      position={[0, 690.65, 27.947]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Augen_low001"
                      position={[0, 690.65, 28.242]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    );
  }
  
  useGLTF.preload("/assets/models/junkrat.glb");
  
  

export default function World() {
  return (
    <Canvas>
        <Ambient />
        <Figure scale={0.5} position={[0, 0.05, 0]}/>
        <Terrain />
    </Canvas>
  )
}
