import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { LinearEncoding, RepeatWrapping, TextureLoader } from 'three';

const Ground = () => {
  const [roughness, normal, displacement, ao] = useLoader(TextureLoader, [
    '/textures/mars/terrain-roughness.jpeg',
    '/textures/mars/terrain-normal.jpeg',
    '/textures/mars/terrain-displacement.jpeg',
    '/textures/mars/terrain-ao.jpeg',
  ]);

  useEffect(() => {
    [normal, roughness, displacement, ao].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(40, 40);
    });

    normal.encoding = LinearEncoding;
  }, [normal, roughness]);

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 0.058;
    roughness.offset.set(0, t);
    normal.offset.set(0, t);
    displacement.offset.set(0, t);
    ao.offset.set(0, t);
  });

  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial
        displacementScale={0}
        map={normal}
        normalMap={normal}
        roughnessMap={roughness}
        displacementMap={displacement}
        aoMap={ao}
        color="#85452d"
      />
    </mesh>
  );
};
export default Ground;
