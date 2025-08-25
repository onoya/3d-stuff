import { useFrame } from '@react-three/fiber';
import { type FC, useRef, useState } from 'react';
import { BufferGeometry, Material, Mesh, Vector3 } from 'three';

interface BoxProps {
  color: [r: number, g: number, b: number];
}

const Box: FC<BoxProps> = ({ color }) => {
  const box = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const time = useRef(0);
  const [xRotSpeed] = useState(() => Math.random());
  const [yRotSpeed] = useState(() => Math.random());
  const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);
  const [position, setPosition] = useState<Vector3>(getInitialPosition());

  function getInitialPosition() {
    const v = new Vector3(
      (Math.random() * 2 - 1) * 3,
      Math.random() * 2.5 + 0.1,
      (Math.random() * 2 - 1) * 15
    );
    if (v.x < 0) v.x -= 1.75;
    if (v.x > 0) v.x += 1.75;

    return v;
  }

  function resetPosition() {
    const v = new Vector3(
      (Math.random() * 2 - 1) * 3,
      Math.random() * 2.5 + 0.1,
      Math.random() * 10 + 10
    );
    if (v.x < 0) v.x -= 1.75;
    if (v.x > 0) v.x += 1.75;

    setPosition(v);
  }

  // Animate the box
  useFrame((_state, delta) => {
    if (!box.current) return;

    time.current += delta * 1.2;
    const newZ = position.z - time.current;

    // Reset position when it goes off screen
    if (newZ < -10) {
      resetPosition();
      time.current = 0;
    }

    box.current.position.set(position.x, position.y, newZ);
    box.current.rotation.x += delta * xRotSpeed;
    box.current.rotation.y += delta * yRotSpeed;
  });

  return (
    <mesh ref={box} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
};

const Boxes: FC = () => {
  const [arr] = useState(() => {
    const a = [];
    for (let i = 0; i < 100; i++) a.push(0);
    return a;
  });

  return (
    <>
      {arr.map((_, i) => (
        <Box
          key={i}
          color={i % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]}
        />
      ))}
    </>
  );
};

export default Boxes;
