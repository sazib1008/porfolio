import { useRef, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ParticleField from './components/three/ParticleField'
import HeroGeometry from './components/three/HeroGeometry'

// ── Hardcoded data (updated to match design mockups) ────────────────────────
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Duralap',
    description:
      'Premium performance tracking app built with a focus on buttery-smooth UI and precise data visualization.',
    tags: ['Android', 'Room DB'],
  },
  {
    id: 2,
    title: 'Meal Management',
    description:
      'Scalable backend solution for food supply chains. Features real-time inventory and smart scheduling.',
    tags: ['Spring Boot', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Bazar Monitor',
    description:
      'Real-time marketplace price tracking tool. Integrated with complex external APIs for live data feeds.',
    tags: ['Kotlin', 'Firebase'],
  },
]

// ── 3D Background Canvas (fixed, behind all content) ───────────────────────
function BackgroundCanvas({ mouse, scrollY }) {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 6], fov: 70, near: 0.1, far: 1000 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 1.5]}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <ambientLight intensity={0.15} />
      <Suspense fallback={null}>
        <ParticleField />
        <HeroGeometry mouse={mouse} scrollY={scrollY} />
      </Suspense>
    </Canvas>
  )
}

// ── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-12 bg-[#06090e]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-bold text-lg text-[#13e6c4]">
            Sazib Hossain
          </span>
          <p className="text-slate-500 text-xs font-medium">
            © 2024 Sazib Hossain. Built with precision.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center gap-8 text-xs font-semibold tracking-wider text-slate-400">
          <a
            href="https://github.com/sazib1008"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/sazib-1008-hossain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            TWITTER
          </a>
        </div>

      </div>
    </footer>
  )
}

// ── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const mouse   = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    const onScroll = () => { scrollY.current = window.scrollY }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll',    onScroll,    { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll',    onScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#06090e]">
      {/* Fixed 3D background scene */}
      <BackgroundCanvas mouse={mouse} scrollY={scrollY} />

      {/* Scrollable content overlay */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects projects={PROJECTS_DATA} />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
