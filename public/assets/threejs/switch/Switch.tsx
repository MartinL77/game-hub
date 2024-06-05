/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 src/assets/threejs/switch/switch.gltf -t 
Author: Arcadiax (https://sketchfab.com/arcadiax)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nintendo-switch-fdeffafacb124fbc92db95f7beedfdfd
Title: Nintendo Switch
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    RedJoycon_0: THREE.Mesh
    BlueJoycon_0: THREE.Mesh
    Body_0: THREE.Mesh
  }
  materials: {
    Standard: THREE.MeshBasicMaterial
  }
  // animations: GLTFAction[]
}

type ActionName = 'Take 01'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/switch.gltf') as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Body" position={[0, 0.002, 0.05]}>
              <group name="RedJoycon" position={[0.099, -0.003, 0.011]}>
                <mesh name="RedJoycon_0" geometry={nodes.RedJoycon_0.geometry} material={materials.Standard} />
              </group>
              <group name="BlueJoycon" position={[-0.1, -0.002, 0.01]}>
                <mesh name="BlueJoycon_0" geometry={nodes.BlueJoycon_0.geometry} material={materials.Standard} />
              </group>
              <mesh name="Body_0" geometry={nodes.Body_0.geometry} material={materials.Standard} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/switch.gltf')
