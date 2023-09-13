import { Plane, useTexture } from "@react-three/drei";

export default function Terrain() {
	const textures = useTexture({
		map: '/assets/textures/map.jpg',
		displacementMap: '/assets/textures/displacement.jpg',
		aoMap: '/assets/textures/ao.jpg',
		roughnessMap: '/assets/textures/arm.jpg',
		metalnessMap: '/assets/textures/arm.jpg',
		normalMap: '/assets/textures/normalMap.jpg',
		})


	return (
		<Plane args={[10, 10, 150, 150]} rotation-x={-Math.PI/2}>
			<meshStandardMaterial {...textures} displacementScale={0.20}/>
		</Plane>
	)
}
