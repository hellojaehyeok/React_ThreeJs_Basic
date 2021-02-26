import React from 'react';

const Ground = () => {
    
    return(
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeBufferGeometry attach='geometry' args={[20, 20]}/>
        <shadowMaterial attach='material' color='#fff'/>
      </mesh>
    );
};

export default Ground;