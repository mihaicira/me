import {Canvas, useThree, useFrame } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useEffect,useState,useRef} from "react";

function Box(props){
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.y = mesh.current.rotation.x -= 0.01;
    });

    return(
        <mesh ref={mesh} position={[props.xyz[0],props.xyz[1],props.xyz[2]]} rotation={[(-Math.PI / 2),0,0]}>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color="#056D65" />
        </mesh>
    )
}

function ConeShape(props) {
    const mesh = useRef();
    useFrame(() => {
        mesh.current.rotation.y = mesh.current.rotation.x -= 0.01;
    });
    return (
        <mesh ref={mesh} position={[props.xyz[0],props.xyz[1],props.xyz[2]]} scale={(0.5, 0.5, 0.8)}>
            <coneGeometry
                attach="geometry"
                args={[1, 2.5, 3]}
                smoothness={5}
                {...props}/>
            <meshPhongMaterial
                color="#D8F0EE"
                attach="material"
                transparent
                roughness={0.1}
                metalness={0.1}/>
        </mesh>
    );
}




const deg2rad = degrees => degrees * (Math.PI / 180);
export default function Shapes(){

    const [cubexyz,setCubexyz] = useState([-7,-5,0])
    const [prismxyz,setPrismxyz] = useState([-8,-8,-6])

    function checkScroll(e){
        let scroll = window.scrollY
        if(scroll === 0) scroll = 0.01
        let windowHeight = window.innerHeight

        let calc = ((scroll/windowHeight))
        let x = ( calc * -14) + 7
        let y = (calc * -10) + 5
        let z = (calc * 3)
        // console.log(x,y)

        setCubexyz([x,y,z])

        x = (calc * 9)-8
        y = (calc * 8)-8
        z = (calc * 10)-6

        setPrismxyz([x,y,z])

    }
    useEffect(()=>{
        document.addEventListener('scroll',checkScroll)
    },[])

    useThree(({camera})=>{
        camera.rotation.set(deg2rad(-5),0,0)
    })
    return(<>
        {/*<OrbitControls/>*/}
        <ambientLight intensity={0.1}/>
        {/*<spotLight position={[10,15,10]} angle={0.3}/>*/}
        <pointLight position={[5, 20, 30]} />
        <Box xyz={cubexyz}/>
        <ConeShape xyz={prismxyz}/>
        </>)
}