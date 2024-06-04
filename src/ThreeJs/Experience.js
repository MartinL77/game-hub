import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Experience() {
    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')

    return <>
        <Canvas>
            

            <color args={['#695b5b']} attach="background"/>
            <OrbitControls makeDefault />

            <mesh>
                {/* <boxGeometry />
                <meshNormalMaterial /> */}
                computer
            </mesh>
        </Canvas>
    </>
}