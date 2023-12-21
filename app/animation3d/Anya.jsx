"use client"
import { Text, useGLTF } from "@react-three/drei";
import { useLayoutEffect, useState } from "react";
import { Color } from "three";


function Texto_to_show(props) {

    const arr_text = ["¿Cual es tu sapa joda?", "ehhh, khubo?, soy Anya", "waku waku", "Me gusta el mani", "Odio las sanahorias", "Puedo leerte la mente prro", "Asi k no pienses cosas malas", "aun seguís aquí?",  "SAQUECE"]

    return(
        <Text 
            visible={props.show}
            fontSize={0.3}
            position={[-4.3, 1.8, 0]}
            rotation={[0, 1, 0]}
            textAlign="center"
            color={new Color(0xDC143C)}
            font="/fonts/Pixel.ttf"
            >
            {arr_text[props.i]}
        </Text>
    )
}

export function Anya(props) {
    const [chat, setChat] = useState(false)
    const [index, setIndex] = useState(0)
    const { nodes, materials ,scene } = useGLTF("/assets/models/anya.glb");

    const showFirstText = () => {setChat(true)}
    const hideFirstText = () => {if (index == 0) setChat(false)}
    const clickText = () => {
        if (index == 8) {
            setChat(false)
            setIndex(0)
            props.setBack()
        } else {
            setIndex(index + 1)
            if (props.viewAnya) props.setViewAnya()
        }
    }

    useLayoutEffect(() => {
        scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
    })

    /**
     * Necesito varios casos:
     *      * El puntero entra en el area de Anya
     *         * Se muestra el primer texto 
     *      * El puntero sale del area de Anya
     *          * Desaparece el texto
     *      * El usuario hace click en Anya
     *          * Se acerca la camara
     *          * Se muestra el segundo texto
     *          * Si se sale el puntero del area de Anya no pasa nada
     *      * Cuando se termina todo se vuelve a la posicion inicial
     */

    return (
        <>
            <group 
                {...props} 
                dispose={null} 
                onPointerEnter={showFirstText} 
                onPointerLeave={hideFirstText}
                onClick={clickText}
            >

                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Main}
                    skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Outline}
                    skeleton={nodes.Object_8.skeleton}
                />
                <skinnedMesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.Main}
                    skeleton={nodes.Object_10.skeleton}
                />
                <skinnedMesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.Hair}
                    skeleton={nodes.Object_12.skeleton}
                />
                <skinnedMesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.Outline}
                    skeleton={nodes.Object_13.skeleton}
                />
            </group>

            <Texto_to_show show={chat} i={index}/>
        </>
        
    );
}

useGLTF.preload("/assets/models/anya.glb");