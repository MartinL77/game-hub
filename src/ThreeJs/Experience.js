import { CameraControls, ContactShadows, Environment, OrbitControls, Text, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Crtmonitor from './components/crtmonitor';
import { ReactThreeFiber } from "@react-three/fiber";
import * as THREE from 'three';
import { Float } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei";
import { StyledCanvasWrapper } from "../styles/experience.styled";

export default function Experience() {
    return (
       crtMonitorView()
    );
}

// function getMonitorView() {
//     currentMonitorView = true;
//     monitorView = currentMonitorView;

//     while (currentMonitorView === true) {
//             switch(monitorView) {
//                 case '': 

//                 case '':

//                 case '':
//             }

//         break;    
//     }
// }

function crtMonitorView() {
    return (
        <>
            <StyledCanvasWrapper>
                <Canvas className="r3f">
                    <Environment preset="city" />
                    <color args={['#695b5b']} attach="background"/>

                    <PresentationControls
                        global
                        rotation={[0.05, 0, 0]}
                        polar={[-0.03, 0.05]}
                        azimuth={[-0.10, 0.10]}
                        config={{mass: 2, tension: 400}}
                        snap={{mass: 3, tension: 400}}
                    >
                        <Float rotationIntensity={0.01} >
                            {/* <Crtmonitor position={[0,0, 3.5]} /> */}
                            <Crtmonitor position={[0, -0.05, 4]} />
                            {/* <Crtmonitor position-y={-1.2} /> */}
                            {/* <Crtmonitor></Crtmonitor> */}
                        </Float>
                    </PresentationControls>

                    <ContactShadows 
                    position-y={-0.5}
                    opacity={0.5}
                    scale={14}
                    blur={0.7}
                    />
                </Canvas>
            </StyledCanvasWrapper>
        </>
    );
}

// function retroMonitorView() {
//     return (
//         <>
//         </>
//     );
// }

// function widescreenMonitorView() {
//     return (
//         <>
//         </>
//     );
// }

// function fullscreenView() {
//     return (
//         <>
//         </>
//     );
// }

// function stopRotation() {
//     return (
//         <>
//         </>
//     );
// }