import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { ServerModel } from "./ServerModel"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const ServerModelContainer = () => {
  return (
    <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="studio" intensity={10} >
                     <ServerModel />
                </Stage>
               
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-6,-1,2]} zoom={0.7} makeDefault/>
    
    
            </Suspense>
        </Canvas>
  )
}

export default ServerModelContainer