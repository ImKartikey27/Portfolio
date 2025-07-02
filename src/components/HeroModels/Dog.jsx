
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Dog(props) {
  const { nodes, materials } = useGLTF('/models/dog.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.main.geometry} material={materials.palette} position={[3.686, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[-3.399, 0, -2.954]} scale={[7.05, 1, 7.05]} />
    </group>
  )
}

useGLTF.preload('/dog copy.glb')
