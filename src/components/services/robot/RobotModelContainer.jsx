import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { RobotModel } from "./RobotModel"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const RobotModelContainer = () => {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [2, 1.5, 3], fov: 45 }}>
  <Suspense fallback={null}>

    {/* Lighting + Environment */}
    <Stage
      environment="city"
      intensity={1}
      shadows={{ type: 'accumulative', color: '#000000', opacity: 0.5, blur: 2 }}
      adjustCamera={false}
    >
      <RobotModel scale={0.65} position={[0, -1, 0]} />
    </Stage>

    {/* Controls */}
    <OrbitControls
      enableZoom={false}
      autoRotate
      autoRotateSpeed={1.5}
    />

     

  </Suspense>
</Canvas>
  )
}

export default RobotModelContainer