import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import MyCanvas from './MyCanvas';

/**
 * Three js, React Three Fiber, React Three Drei Tutorial 2022
 * @link https://www.youtube.com/playlist?list=PLIRTsuB0iPJvxaYyg8MOrjffPPcYnccL0
 */
function App() {
  return (
    <Canvas id="canvas" shadows>
      <Suspense fallback={null}>
        <MyCanvas />
      </Suspense>
    </Canvas>
  );
}

export default App;
