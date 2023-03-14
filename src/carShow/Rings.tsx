import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import {
  BufferGeometry,
  Color,
  Material,
  Mesh,
  MeshStandardMaterial,
} from 'three';

const Rings = () => {
  const itemsRef = useRef<Array<Mesh<BufferGeometry, Material | Material[]>>>(
    []
  );

  useFrame((state) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      // [-7, 6]
      // let z = (i - 7) * 3.5;
      let z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
      mesh.position.set(0, 0, -z);
      // Add space between rings
      let dist = Math.abs(z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      // Fade out the color of the rings
      let colorScale = 1;
      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }
      colorScale *= 0.5;

      // Alternate ring color
      if (mesh.material instanceof MeshStandardMaterial) {
        if (i % 2 === 1) {
          mesh.material.emissive = new Color(6, 0.15, 0.7).multiplyScalar(
            colorScale
          );
        } else {
          mesh.material.emissive = new Color(0.1, 0.7, 3).multiplyScalar(
            colorScale
          );
        }
      }
    }
  });

  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => {
            if (el) itemsRef.current[i] = el;
          }}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0, 0, 0]} />
        </mesh>
      ))}
    </>
  );
};
export default Rings;
