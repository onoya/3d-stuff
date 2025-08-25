import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CarShow from './CarShow';
import LoadingScreen from '../loading-screen';

const CarShowApp = () => {
  return (
    <>
      <LoadingScreen text="Revving Up Engines" />
      <Canvas shadows>
        <Suspense fallback={null}>
          <CarShow />
        </Suspense>
      </Canvas>
    </>
  );
};
export default CarShowApp;
