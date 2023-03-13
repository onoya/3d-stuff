import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CarShow from './CarShow';

const CarShowApp = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
};
export default CarShowApp;
