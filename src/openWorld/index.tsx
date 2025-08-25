import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Game from './Game';
import LoadingScreen from '../loading-screen';

const OpenWorldGame = () => {
  return (
    <>
      <LoadingScreen text="Entering Mars Colony" />
      <Canvas shadows>
        <Suspense fallback={null}>
          <Game />
        </Suspense>
      </Canvas>
    </>
  );
};
export default OpenWorldGame;
