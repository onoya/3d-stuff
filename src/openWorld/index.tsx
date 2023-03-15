import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Game from './Game';

const OpenWorldGame = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Game />
      </Canvas>
    </Suspense>
  );
};
export default OpenWorldGame;
