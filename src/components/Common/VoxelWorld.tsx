'use client';

import { Mesh, MeshStandardMaterial } from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { motion } from 'framer-motion-3d';
import { easeIn } from 'framer-motion';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: Mesh;
    Object_6: Mesh;
  };
  materials: {
    Clouds: MeshStandardMaterial;
    Material: MeshStandardMaterial;
  };
};

export const VoxelWorld = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    '/portfolio/voxel_world.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <motion.group
        scale={2}
        rotation={[-Math.PI / 2, 0, 0]}
        animate={{ rotateZ: 6.29 }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 6,
        }}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Clouds}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Material}
          />
        </group>
      </motion.group>
    </group>
  );
};
