import { Plane, useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";

export default function Terrain() {
	const textures = useTexture({
		map: '/assets/textures/map.jpg',
		displacementMap: '/assets/textures/displacement.jpg',
		aoMap: '/assets/textures/ao.jpg',
		roughnessMap: '/assets/textures/arm.jpg',
		metalnessMap: '/assets/textures/arm.jpg',
		normalMap: '/assets/textures/normalMap.jpg',
		})

	// const repeat = new Vector2(8,8)

	// for (const map of [textures.map, textures.displacementMap, textures.aoMap, textures.roughnessMap, textures.metalnessMap,textures.normalMap]) {
	// 	map.repeat = repeat
	// }

	// const repeatW = RepeatWrapping
	// for (const map of [textures.map, textures.displacementMap, textures.aoMap, textures.roughnessMap, textures.metalnessMap,textures.normalMap]) {
	// 	map.wrapS = map.wrapT = repeatW
	// }

	// textures.map.offset = textures.displacementMap.offset = textures.aoMap.offset = textures.roughnessMap.offset = textures.metalnessMap.offset = textures.normalMap.offset = new Vector2(0.03, 0.03)


	return (
		<Plane args={[10, 10, 150, 150]} rotation-x={-Math.PI/2}>
			<meshStandardMaterial {...textures} displacementScale={0.20}/>
		</Plane>
	)
}
