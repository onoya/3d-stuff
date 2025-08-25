import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Car } from './Car';
import { angleToRadians } from './angle';

function MyCanvas() {
  // Code to move the camera around
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);
  useFrame((state) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  // Animation
  const ballRef =
    useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>(
      null
    );
  useEffect(() => {
    if (ballRef.current) {
      const timeline = gsap.timeline();

      // x-axis motion
      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: 'power2.out',
      });

      // y-axis motion
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1,
          ease: 'bounce.out',
        },
        '<'
      );

      // Altrernative way to bounce
      // const coefficient = 0.8;
      // for (let i = 1; i <= 4; i++) {
      //   // Going up
      //   timeline.to(ballRef.current.position, {
      //     y: Math.pow(coefficient, i) * 1.5,
      //     duration: 0.2,
      //     ease: 'power2.out',
      //   }, '>');

      //   // Coming back down
      //   timeline.to(ballRef.current.position, {
      //     y: 0.5,
      //     duration: 0.2,
      //     ease: 'power2.in',
      //   }, '>');
      // }

      // Play
      timeline.play();
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
      />

      {/* Ball */}
      <mesh position={[-2, 1.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#fff" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Car */}
      <Car />

      {/* Floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={['#fff', 0.25]} />

      {/* Spotlight light */}
      <spotLight
        args={['#fff', 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}

export default MyCanvas;
