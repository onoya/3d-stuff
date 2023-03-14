/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.glb --types -T --shadows
Author: Karol Miklas (https://sketchfab.com/karolmiklas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-1975-porsche-911-930-turbo-8568d9d14a994b9cae59499f0dbed21e
Title: FREE 1975 Porsche 911 (930) Turbo
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { angleToRadians } from './angle';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_47: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_51: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_55: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_59: THREE.Mesh;
    Object_61: THREE.Mesh;
    Object_63: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_66: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_74: THREE.Mesh;
    Object_76: THREE.Mesh;
    Object_78: THREE.Mesh;
    Object_79: THREE.Mesh;
    Object_80: THREE.Mesh;
    Object_82: THREE.Mesh;
    Object_84: THREE.Mesh;
    Object_86: THREE.Mesh;
    Object_88: THREE.Mesh;
    Object_89: THREE.Mesh;
    Object_91: THREE.Mesh;
    Object_93: THREE.Mesh;
    Object_95: THREE.Mesh;
    Object_97: THREE.Mesh;
    Object_99: THREE.Mesh;
    Object_101: THREE.Mesh;
    Object_103: THREE.Mesh;
    Object_105: THREE.Mesh;
    Object_107: THREE.Mesh;
    Object_109: THREE.Mesh;
    Object_111: THREE.Mesh;
    Object_113: THREE.Mesh;
    Object_115: THREE.Mesh;
    Object_117: THREE.Mesh;
    Object_118: THREE.Mesh;
    Object_120: THREE.Mesh;
    Object_122: THREE.Mesh;
    Object_124: THREE.Mesh;
    Object_126: THREE.Mesh;
    Object_128: THREE.Mesh;
    Object_130: THREE.Mesh;
    Object_132: THREE.Mesh;
    Object_134: THREE.Mesh;
    Object_136: THREE.Mesh;
    Object_138: THREE.Mesh;
    Object_140: THREE.Mesh;
  };
  materials: {
    ['930_plastics']: THREE.MeshStandardMaterial;
    ['930_stickers']: THREE.MeshStandardMaterial;
    plate: THREE.MeshStandardMaterial;
    ['930_rim']: THREE.MeshStandardMaterial;
    ['930_tire']: THREE.MeshStandardMaterial;
    ['930_lights']: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    ['930_chromes']: THREE.MeshStandardMaterial;
    paint: THREE.MeshPhysicalMaterial;
    coat: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
    ['930_lights_refraction']: THREE.MeshPhysicalMaterial;
    ['930_wunderbaum']: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
  };
};

export function Car(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/models/car/model-transformed.glb'
  ) as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      scale={0.7}
      position={[0, 0, -2]}
      rotation={[0, angleToRadians(-60), 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.81}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0.47, 3.12]}
            rotation={[-2.83, 0, Math.PI]}
            scale={[1, 0.96, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials['930_plastics']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials['930_stickers']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.plate}
            />
          </group>
          <group position={[-1.16, 0.56, -1.21]} rotation={[0.48, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials['930_rim']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials['930_tire']}
            />
          </group>
          <group position={[-1.02, 0.56, 1.97]} rotation={[0.5, -0.29, 0.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials['930_rim']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials['930_tire']}
            />
          </group>
          <group
            position={[0.66, 0.48, 3.11]}
            rotation={[0.16, 0.1, -0.02]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials['930_plastics']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials['930_chromes']}
            />
          </group>
          <group position={[0.01, 1.67, 0.65]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials['930_plastics']}
            />
          </group>
          <group
            position={[0.79, 0.49, -2.38]}
            rotation={[-1.77, -0.01, -0.46]}
            scale={6.31}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials['930_chromes']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials.black}
            />
          </group>
          <group
            position={[0, 0.87, 2.92]}
            rotation={[0.46, 0, 0]}
            scale={0.03}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials['930_plastics']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials['930_stickers']}
            />
          </group>
          <group
            position={[-0.25, 1.33, 1.32]}
            rotation={[0.58, 0.32, -0.01]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials['930_plastics']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_70.geometry}
              material={materials['930_plastics']}
              position={[37.47, -1.97, 0.92]}
              rotation={[-2.95, -1.38, -2.99]}
              scale={[14.49, 9.23, 13.31]}
            />
          </group>
          <group position={[0, 0.68, -2.62]} scale={[1, 0.96, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={materials['930_plastics']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials['930_stickers']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_80.geometry}
              material={materials.plate}
            />
          </group>
          <group position={[1.02, 0.56, 1.97]} rotation={[0.52, -0.28, 0.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_88.geometry}
              material={materials['930_rim']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_89.geometry}
              material={materials['930_tire']}
            />
          </group>
          <group
            position={[1.16, 0.56, -1.21]}
            rotation={[0.48, 0, 0]}
            scale={[0.89, 0.94, 0.94]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_117.geometry}
              material={materials['930_rim']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_118.geometry}
              material={materials['930_tire']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials['930_stickers']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials['930_stickers']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials['930_stickers']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials['930_lights']}
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={0.24}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials['930_lights']}
            position={[0, 0.69, -2.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials['930_lights']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.coat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials['930_plastics']}
            position={[0.25, 1.33, 1.33]}
            rotation={[0.62, 0.44, -0.1]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials['930_chromes']}
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={0.24}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials['930_plastics']}
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={0.24}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials['930_chromes']}
            position={[-1.01, 1.26, 1.5]}
            rotation={[0.05, 0, 0.05]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials['930_plastics']}
            position={[0, 0.98, -2.49]}
            rotation={[2.32, 0, -Math.PI]}
            scale={0.02}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_66.geometry}
            material={materials['930_chromes']}
            position={[0.01, 1.67, 0.65]}
            scale={0.06}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_72.geometry}
            material={materials['930_plastics']}
            position={[0.63, 1.55, -1.29]}
            rotation={[-0.35, 0.04, -0.1]}
            scale={[0.2, 0.13, 0.19]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_74.geometry}
            material={materials['930_plastics']}
            position={[0.67, 1.36, 1.11]}
            rotation={[0.07, -1.09, -0.48]}
            scale={[0.2, 0.13, 0.18]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials['930_plastics']}
            position={[0.32, 1.39, -1.83]}
            rotation={[-0.51, -0.83, -0.19]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials['930_plastics']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_84.geometry}
            material={materials['930_lights']}
            rotation={[0, -0.05, 0.15]}
            scale={[0.72, 0.82, 0.82]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_86.geometry}
            material={materials['930_chromes']}
            position={[0, 1.05, 1.38]}
            rotation={[0, -0.05, 0.15]}
            scale={[0.72, 0.82, 0.82]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_93.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_95.geometry}
            material={materials['930_lights_refraction']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_97.geometry}
            material={materials['930_lights']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={materials['930_plastics']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials['930_plastics']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_109.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials['930_chromes']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={materials.paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_115.geometry}
            material={materials['930_chromes']}
            position={[1.08, 1.21, 0.93]}
            rotation={[0, 0, -0.06]}
            scale={0.93}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_120.geometry}
            material={materials['930_rim']}
            position={[1.02, 0.56, 1.97]}
            rotation={[0.52, -0.28, 0.16]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_122.geometry}
            material={materials['930_wunderbaum']}
            position={[0, 1.58, 0.67]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_124.geometry}
            material={materials['930_lights']}
            position={[0, 0.69, -2.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_126.geometry}
            material={materials['930_lights']}
            position={[-1.8, 0.14, 3.2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_128.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_130.geometry}
            material={materials['930_lights']}
            position={[0, 0.89, 4.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_132.geometry}
            material={materials['930_lights']}
            position={[0, 0.9, -3.5]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_134.geometry}
            material={materials['930_lights']}
            position={[1.8, 0.14, 3.2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_136.geometry}
            material={materials['930_stickers']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_138.geometry}
            material={materials['930_stickers']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/car/model-transformed.glb');
