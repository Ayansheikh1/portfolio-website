import React, { useRef, useEffect, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function RobotModel(props) {
  const group = useRef()

  const { scene, animations } = useGLTF('/robotModel.glb')

  // Clone for proper skinned mesh animation
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

  const { nodes, materials } = useGraph(clone)

  const { actions, names } = useAnimations(animations, group)

  // ✅ PLAY ANIMATIONS HERE (MAIN FIX)
  useEffect(() => {
    if (!actions || names.length === 0) {
      console.log("❌ No animations found in model")
      return
    }

    console.log("✅ Animations found:", names)

    // Play all animations
    names.forEach((name) => {
      actions[name]
        ?.reset()
        .fadeIn(0.5)
        .play()
    })

    return () => {
      // Cleanup (important for React strict mode)
      names.forEach((name) => {
        actions[name]?.fadeOut(0.5)
      })
    }
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clone} />
    </group>
  )
}

useGLTF.preload('/robotModel.glb')