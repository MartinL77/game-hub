/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 src/assets/threejs/ps5/ps5.gltf -t 
Author: rtql8d (https://sketchfab.com/rtql8d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ps5-d788de3735964151a3e24fd59c0f1956
Title: PS5
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
  }
  materials: {
    ['Glass_-_Heavy_Color']: THREE.MeshStandardMaterial
    ['Plastic_-_Textured_-_Regular']: THREE.MeshStandardMaterial
    ['Plastic_-_Translucent_Glossy_Blue']: THREE.MeshStandardMaterial
    ['Plastic_-_Translucent_Glossy_Gray']: THREE.MeshStandardMaterial
    ['Plastic_-_Translucent_Matte_Gray']: THREE.MeshStandardMaterial
    ['Plastic_-_Translucent_Matte_Gray_1']: THREE.MeshStandardMaterial
    ['Steel_-_Satin']: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/ps5.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, -199.067, 197.453]} rotation={[-1.57, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Glass_-_Heavy_Color']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Plastic_-_Textured_-_Regular']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Plastic_-_Translucent_Glossy_Blue']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Plastic_-_Translucent_Glossy_Gray']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Plastic_-_Translucent_Matte_Gray']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Plastic_-_Translucent_Matte_Gray_1']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Steel_-_Satin']} />
      </group>
    </group>
  )
}

useGLTF.preload('/ps5.gltf')
