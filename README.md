# React_ThreeJs_Basic
React와 Three.js를 같이 사용하는 데 있어 기초를 정리한 곳입니다.       


<hr />


## 사용 기술
 - HTML, CSS, PostCSS, JavaScript, React, Three.js


<hr />


### 설치
npm 을 활용하여 아래 코드를 설치합니다.       

    npm add three react-three-fiber drei react-spring


<hr />


### Canvas
react-three-fiber 안에 있는 canvas를 이용하여 3D 그래픽의 큰틀을 잡습니다.       
Canvas 컬러 값을 조절하고 카메라를 원하는 상태로 변경할 수 있습니다.       

    <Canvas shadowMap colorManagement camera={{ position:[-5, 2, 10], fov:60 }}>

Canvas 안에는 light와 mesh Controls 등 나타낼 요소들을 넣습니다.       


<hr />


### 3D Object
1. 3D 오브젝트를 만들기 위해서는 <mesh><mesh />안에 geometry와 material를 생성하여야 합니다.       
2. rotation, position, scale 등은 mesh에서 조절합니다.       
3. geometry의 args를 size를 의미합니다.       
4. useFrame을 이용하여 동적인 움직임을 추가합니다. (useRef를 이용하여 움직이고자 하는 오브젝트를 가져옵니다.)       
5. useSpring을 이용하여 인터랙션 기능을 추가합니다.       
6. 좌표는 배열 안에 넣습니다. ex) position={[x, y, z]}       


    const Box = ({position, args, color, speed, factor}) => {
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
            <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={factor} />
            </a.mesh>
        );
    }


<hr />


### Shadow
그림자를 사용하기 위해서는 아래의 조건에 맞아야 합니다.       
1. canvas에 shadowmap을 적용합니다.  

```
    <Canvas shadowMap>
```

2. 원하는 라이트와 그림자를 주고자 하는 오브젝트에 castShadow를 적용합니다.      
 
```
    <directionalLight castShadow />
    <mesh castShadow/>
```

3. 그림자가 맺히는 오브젝트에는 receiveShadow를 적용합니다.       


<hr />


### drei
처음 설치한 drei에는 여러 효과들이 있으며 이번에는 사용한 효과는       
오브젝트가 움직일 때 굴절되는 효과와 컨트롤, 부드러운 그림자 효과를 추가하였습니다.       


<hr />


### react-spring/three
인터랙션 효과를 주기 위하여 react-spring를 처음에 설치하였습니다.       
오브젝트에 useSpring을 사용하여 인터랙션 효과를 주었습니다.       
움직이는 mesh에 적용할 시에는 mesh 앞에 a를 추가하여야 합니다.       

    <a.mesh></a.mesh>


<hr />


