

import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { section } from "motion/react-client";

const Test3d = () => {
    return (
        //3d box
        // <section style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        //     <Canvas>
        //         <mesh>
        //             <boxGeometry args={[2, 2, 2]}/>
        //             {/* <meshStandardMaterial color="red"/> */}
        //             <MeshDistortMaterial color="red" attach="material" distort={0.5} speed={2}/>
        //             <ambientLight intensity={0.2} />
        //              <directionalLight color="red" position={[1, 2, 3]} />
        //              <OrbitControls enableZoom={false}/>
        //         </mesh>
        //     </Canvas>
        // </section>

        <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Canvas>
                <mesh>
                    <Sphere args={[1,100,200]} scale={2} >
                    <MeshDistortMaterial
                        color="#DB8B9B"
                        attach="material"
                        distort={0.5}
                        speed={2} />
                    </Sphere>
                    {/* <meshStandardMaterial color="red"/> */}

                    <ambientLight intensity={2} />
                    <directionalLight  position={[1, 2, 3]} />
                    {/* <OrbitControls enableZoom={false} /> */}
                </mesh>
            </Canvas>
        </section>

    );
};

export default Test3d;