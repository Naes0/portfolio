'use client';

import { Mesh, MeshStandardMaterial } from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { motion } from 'framer-motion-3d';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: Mesh;
  };
  materials: {
    palette: MeshStandardMaterial;
  };
};

export const JapaneseCherry = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    '/portfolio/japanese_cherry.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <motion.mesh
        geometry={nodes.Object_2.geometry.translate(0, 0, -23)}
        material={materials.palette}
        rotation={[-Math.PI / 2, 0, 0]}
        animate={{ rotateZ: 6.29 }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 6,
        }}
      />
    </group>
  );
};

useGLTF.preload('/japanese_cherry.glb');
