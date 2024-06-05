/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 src/assets/threejs/retromonitor/retromonitor.gltf -t 
Author: CGI Tutorials (https://sketchfab.com/cgitutorials)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-1980s-retro-tv-with-2k-texture-6c7d823eaaca40af9ac9be3be116fb99
Title: Old 1980s retro TV with 2k texture
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    polySurface3_wood_0: THREE.Mesh
    polySurface3_back_0: THREE.Mesh
    pCube2_back_0: THREE.Mesh
    pCube3_back_0: THREE.Mesh
    polySurface5_back_0: THREE.Mesh
    polySurface6_back_0: THREE.Mesh
    polySurface7_back_0: THREE.Mesh
    polySurface8_back_0: THREE.Mesh
    polySurface9_back_0: THREE.Mesh
    polySurface13_back_0: THREE.Mesh
    polySurface11_back_0: THREE.Mesh
    pCube6_back_0: THREE.Mesh
    pasted__polySurface2_screenReflect_0: THREE.Mesh
    pCube7_back_0: THREE.Mesh
  }
  materials: {
    wood: THREE.MeshStandardMaterial
    back: THREE.MeshStandardMaterial
    screenReflect: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/retromonitor.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0.491, 0, 0]} scale={[1.211, 1, 1]}>
          <mesh geometry={nodes.polySurface3_wood_0.geometry} material={materials.wood} />
          <mesh geometry={nodes.polySurface3_back_0.geometry} material={materials.back} />
        </group>
        <group position={[0, 0, 5.571]}>
          <mesh geometry={nodes.pasted__polySurface2_screenReflect_0.geometry} material={materials.screenReflect} position={[0.491, 0, 0]} scale={[1.211, 1, 1]} />
        </group>
        <mesh geometry={nodes.pCube2_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.pCube3_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.polySurface5_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.polySurface6_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.polySurface7_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.polySurface8_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.polySurface9_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.polySurface13_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.polySurface11_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.pCube6_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.pCube7_back_0.geometry} material={materials.back} />
      </group>
    </group>
  )
}

useGLTF.preload('/retromonitor.gltf')
