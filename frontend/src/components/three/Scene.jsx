import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import ParticleField from './ParticleField'
import HeroGeometry from './HeroGeometry'

export default function Scene({ mouse, scrollY }) {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none', // Let HTML receive mouse events
      }}
      camera={{ position: [0, 0, 6], fov: 70, near: 0.1, far: 1000 }}
      gl={{
        antialias: false,  // off for performance; particles look fine
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 1.5]}       // Cap pixel ratio — major perf win on retina
    >
      {/* Adaptive performance helpers */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      {/* Ambient light so particles have minimal illumination */}
      <ambientLight intensity={0.15} />

      <Suspense fallback={null}>
        <ParticleField />
        <HeroGeometry mouse={mouse} scrollY={scrollY} />
      </Suspense>
    </Canvas>
  )
}
