/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 src/assets/threejs/xbox/xbox.gltf -t 
Author: sm_sahil (https://sketchfab.com/sm_sahil)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/xbox-series-x-free-3d-model-08d4fd565ae64e6bbcda044c9195a639
Title: Xbox Series X Free 3D Model
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_4: THREE.Mesh
  }
  materials: {
    Xbox_Series_X: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/threejs/xbox/xbox.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.159, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Xbox_Series_X} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Xbox_Series_X} position={[0, 0.072, 0]} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Xbox_Series_X} position={[0, -0.155, 0]} scale={[0.08, 0.001, 0.08]} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Xbox_Series_X} position={[-0.003, -0.146, -0.078]} rotation={[Math.PI / 2, 0, 0]} scale={0.003} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/threejs/xbox/xbox.gltf')
