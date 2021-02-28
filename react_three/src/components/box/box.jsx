import {MeshWobbleMaterial} from 'drei/MeshWobbleMaterial';
import React, { useRef, useState } from 'react';
import { useFrame } from "react-three-fiber";
import { useSpring, a} from 'react-spring/three';

const Box = ({position, args, color, clickColor,speed, factor}) => {
    
    
    const boxRef = useRef();
    useFrame(() => (boxRef.current.rotation.x = boxRef.current.rotation.y += 0.01) );
  
    const [clickBox, setClickBox] = useState(false);
  
    const onClickBox = useSpring({
        scale : clickBox?[1.4, 1.4, 1.4]:[1, 1, 1]
    })
  
    return(
      <a.mesh
        castShadow
        onClick={() => setClickBox(!clickBox)}
        position={position}
        scale={onClickBox.scale}
        ref={boxRef}>
        <boxBufferGeometry attach='geometry' args={args}/>
        <MeshWobbleMaterial attach='material' color={clickBox?clickColor:color} speed={speed} factor={factor} />
      </a.mesh>
    );

};

export default Box;