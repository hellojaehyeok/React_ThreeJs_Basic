// import styles from './app.module.css';

import {OrbitControls} from 'drei/OrbitControls';
import {softShadows} from 'drei/softShadows';
import React from 'react';
import { Canvas } from "react-three-fiber";
import Box from './components/box/box';
import Ground from './components/ground/ground';
 
softShadows();

function App() {

  

  return (
    <>
      <Canvas shadowMap colorManagement camera={{ position:[-5, 2, 10], fov:60 }}>

        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={[1.5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, 20]} intensity={1} />

        <group>
          <Ground />
          <Box position={[0, 0, 0]} args={[1, 2, 2]} color={'lightblue'} speed={0.6} factor={1}/>
          <Box position={[3, 0 , 0]} args={[1, 1, 1]} color={'pink'} speed={0.3} factor={1}/>
          <Box position={[-3, 0, 0]} args={[1, 1, 1]} color={'pink'} speed={0.3} factor={1}/>
        </group>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
