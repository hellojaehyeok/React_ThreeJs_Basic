// import styles from './app.module.css';

import {OrbitControls} from 'drei/OrbitControls';
import {softShadows} from 'drei/softShadows';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, a} from 'react-spring/three';
 
softShadows();

const Box = ({position, args, color}) => {
  const boxRef = useRef();
  useFrame(() => (boxRef.current.rotation.x = boxRef.current.rotation.y += 0.01) );

  const [clickBox, setClickBox] = useState(false);

  const onClickBox = useSpring({scale : clickBox?[1.4, 1.4, 1.4]:[1, 1, 1] })

  return(
    <a.mesh
      castShadow
      onClick={() => setClickBox(!clickBox)}
      position={position}
      scale={onClickBox.scale}
      ref={boxRef}>
      <boxBufferGeometry attach='geometry' args={args}/>
      <meshStandardMaterial attach='material' color={color} speed={1} factor={0.6} />
    </a.mesh>
  );
}

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
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeBufferGeometry attach='geometry' args={[20, 20]}/>
            <shadowMaterial attach='material' color='#fff'/>
          </mesh>
          <Box position={[0, 0, 0]} args={[1, 2, 2]} color={'lightblue'}/>
          <Box position={[3, 0 , 0]} args={[1, 1, 1]} color={'pink'}/>
          <Box position={[-3, 0, 0]} args={[1, 1, 1]} color={'pink'}/>
        </group>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
