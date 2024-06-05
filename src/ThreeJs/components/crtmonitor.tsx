import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder003_Material008_0: THREE.Mesh;
    Cylinder003_Material005_0: THREE.Mesh;
    Cylinder003_Material006_0: THREE.Mesh;
    Cylinder003_Material006_0_1: THREE.Mesh;
    Cylinder003_Material006_0_2: THREE.Mesh;
    Cylinder003_Material003_0: THREE.Mesh;
    Cylinder003_Material004_0: THREE.Mesh;
    Cylinder003_Material002_0: THREE.Mesh;
    Cylinder003_Material007_0: THREE.Mesh;
    Cylinder003_Material001_0: THREE.Mesh;
  };
  materials: {
    ['Material.008']: THREE.MeshStandardMaterial;
    ['Material.005']: THREE.MeshStandardMaterial;
    ['Material.006']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.007']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/threejs/crtmonitor/crtmonitor.gltf') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.19}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[101.443, 52.045, 216.859]} rotation={[3.094, -0.165, 3.134]} scale={2.501}>
            <mesh geometry={nodes.Cylinder003_Material008_0.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Cylinder003_Material005_0.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Cylinder003_Material006_0.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Cylinder003_Material006_0_1.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Cylinder003_Material006_0_2.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Cylinder003_Material003_0.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Cylinder003_Material004_0.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Cylinder003_Material002_0.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Cylinder003_Material007_0.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Cylinder003_Material001_0.geometry} material={materials['Material.001']} />
          </group>
        </group>
      </group>
    </group>
  );
}

// Preload the GLTF file
useGLTF.preload('/assets/threejs/crtmonitor/crtmonitor.gltf');