import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import Ground from './Ground';
import Car from './Car';
import Rings from './Rings';
import Boxes from './Boxes';
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Vector2 } from 'three';
// import FloatingGrid from './FloatingGrid';

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      {/* Captures the surrounding */}
      <CubeCamera resolution={256} frames={Infinity}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {(texture) => (
          <>
            <Environment map={texture} />
            {/* By placing the car inside, it gets excluded */}
            <Car />
          </>
        )}
      </CubeCamera>

      <Rings />
      <Boxes />
      {/* <FloatingGrid /> */}

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={50}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={100}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />

      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={new Vector2(0.0005, 0.0012)}
        />
      </EffectComposer>
    </>
  );
};

export default CarShow;
