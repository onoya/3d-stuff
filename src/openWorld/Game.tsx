import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from '@react-three/drei';
import { BackSide } from 'three';
import { Astronaut } from './Astronaut';
import Ground from './Ground';
import { SolarPanel } from './SolarPanel';

const Game = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 6, 5]} />

      <OrbitControls
        minPolarAngle={0.5}
        maxPolarAngle={1.5}
        maxDistance={40}
        minDistance={7}
      />

      <Astronaut />

      <Stars radius={1000} />

      {/* Render SolarPanel 100 times */}
      {[...Array(50)].map((_, i) => (
        <SolarPanel key={i} />
      ))}

      <Ground />

      <directionalLight
        position={[-5, 5, 5]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#000" side={BackSide} />
        </mesh>
      </Environment>
    </>
  );
};
export default Game;
