import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// A wireframe TorusKnot that slowly self-rotates and reacts to mouse parallax.
// It scales and moves back as the user scrolls away from the hero section.
export default function HeroGeometry({ mouse, scrollY }) {
  const groupRef = useRef()
  const meshRef  = useRef()
  const ringRef  = useRef()

  // Scratch quaternion / vector for smooth rotation
  const targetRotX = useRef(0)
  const targetRotY = useRef(0)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const scroll = scrollY.current  // read ref — no re-render

    if (!groupRef.current || !meshRef.current) return

    // ── Self-rotation ──────────────────────────────────────────
    targetRotX.current += 0.003
    targetRotY.current += 0.005

    // ── Mouse parallax (soft lerp) ────────────────────────────
    const mx = mouse.current.x
    const my = mouse.current.y
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x, targetRotX.current + my * 0.35, 0.04
    )
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y, targetRotY.current + mx * 0.35, 0.04
    )

    // ── Floating bob ──────────────────────────────────────────
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.18

    // ── Scroll: scale down + push back ────────────────────────
    const scrollFactor = Math.max(0, 1 - scroll / 600)
    groupRef.current.scale.setScalar(scrollFactor)
    groupRef.current.position.z = -scroll * 0.006

    // Outer ring counter-rotation
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.006
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main torus knot — wireframe gold */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.15, 0.38, 200, 20, 2, 3]} />
        <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.90} />
      </mesh>

      {/* Rotating outer decorative ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.4, 0.025, 12, 120]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.35} />
      </mesh>

      {/* Second ring at 45° */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.0, 0.015, 8, 80]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.2} />
      </mesh>

      {/* Central point light to make the geometry glow */}
      <pointLight color="#d4af37" intensity={3} distance={6} decay={2} />
      <pointLight color="#10b981" intensity={1.5} distance={6} decay={2} position={[2, -2, 1]} />
    </group>
  )
}
