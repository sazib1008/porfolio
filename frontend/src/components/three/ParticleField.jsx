import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

const PARTICLE_COUNT = 1500

export default function ParticleField() {
  const pointsRef = useRef()

  // Build positions and colors once — memoised for performance
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors    = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      // Spread across a wide volume
      positions[i3]     = (Math.random() - 0.5) * 30
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = (Math.random() - 0.5) * 20

      // 30 % gold, 70 % emerald/cyan  
      if (Math.random() > 0.7) {
        colors[i3] = 0.83; colors[i3 + 1] = 0.69; colors[i3 + 2] = 0.22 // #d4af37 gold
      } else {
        colors[i3] = 0.06; colors[i3 + 1] = 0.73; colors[i3 + 2] = 0.50 // #10b981 emerald
      }
    }
    return { positions, colors }
  }, [])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      pointsRef.current.rotation.y = 0
      pointsRef.current.rotation.x = 0
      return
    }
    const t = clock.elapsedTime
    pointsRef.current.rotation.y = t * 0.025
    pointsRef.current.rotation.x = t * 0.012
  })

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  )
}
