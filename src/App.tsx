import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import MyCanvas from './MyCanvas';
import './App.css';

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
