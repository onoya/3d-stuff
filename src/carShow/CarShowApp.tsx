import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CarShow from './CarShow';

const CarShowApp = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <CarShow />
      </Suspense>
    </Canvas>
  );
};
export default CarShowApp;
