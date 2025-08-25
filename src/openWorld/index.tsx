import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Game from './Game';

const OpenWorldGame = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Game />
      </Suspense>
    </Canvas>
  );
};
export default OpenWorldGame;
