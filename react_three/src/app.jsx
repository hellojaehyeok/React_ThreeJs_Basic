import styles from './app.module.css';

import { Canvas, useFrame } from "react-three-fiber";
import { useRef } from 'react';



function App() {

  const Box = () => {
    const boxRef = useRef();
    useFrame(() => (boxRef.current.rotation.x = boxRef.current.rotation.y += 0.01) );

    return(
      <mesh ref={boxRef}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]}/>
      <meshStandardMaterial attach='material' color='lightblue'/>
    </mesh>
    );
  }




  return (
    <>
      <Canvas colorManagement camera={{ position:[-5, 2, 10], fov:60 }}>
        <ambientLight intensity={0.3} />
        <Box />
      </Canvas>
    </>
  );
}

export default App;
