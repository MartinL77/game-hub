import { useGLTF } from '@react-three/drei';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Crtmonitor from './ThreeJs/components/crtmonitor';
import Xbox from './ThreeJs/components/xbox';

function App() {
  return (
    <>
      <HomePage />
      {/* <Canvas>
        <ambientLight intensity={0.5}>
          <Suspense fallback={null}>
            <Crtmonitor />
          </Suspense>
        </ambientLight>
      </Canvas> */}
      {/* <Canvas>
      <ambientLight intensity={0.5}>
          <Suspense fallback={null}>
            <Xbox></Xbox>
          </Suspense>
        </ambientLight>
      </Canvas> */}
    </>
  );
}

export default App;
