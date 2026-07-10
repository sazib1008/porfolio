import { useRef, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import NotFound from './components/sections/NotFound'
import CommandPalette from './components/ui/CommandPalette'
import ParticleField from './components/three/ParticleField'
import HeroGeometry from './components/three/HeroGeometry'

// ── Hardcoded data (updated with problem-focused descriptions and tags) ────────
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Duralap',
    description:
      'Provides athletes and sports enthusiasts with a premium, offline-first performance tracker that works without lag. It features millisecond-precise timing and local database caching for seamless metric analysis.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Coroutines'],
    github: 'https://github.com/sazib1008',
    live: null,
  },
  {
    id: 2,
    title: 'Meal Management System',
    description:
      'Solves the problem of inefficient food resource allocation and manual expense tracking in university dining halls. It automates daily meal bookings, tracks expenses, and generates real-time analytical reports.',
    tags: ['Spring Boot', 'Kotlin', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/sazib1008',
    live: null,
  },
  {
    id: 3,
    title: 'Bazar Monitor',
    description:
      'Aggregates commodity prices from multiple retail markets to protect consumers from artificial inflation. It detects inflation trends and allows crowd-sourced price reporting with admin verification.',
    tags: ['Spring Boot', 'Kotlin', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/sazib1008',
    live: null,
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
          <p className="text-slate-400 text-xs font-medium">
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

// ── Main Page Layout (SPA Sections) ──────────────────────────────────────────
function MainPage() {
  return (
    <>
      <Helmet>
        <title>Sazib Hossain | Mobile & Backend Developer</title>
        <meta name="description" content="Sazib Hossain is a mobile developer & backend engineer specializing in Android (Kotlin, Jetpack Compose) and Spring Boot, building scalable systems." />
        <link rel="canonical" href="https://porfolio-sazib1008.vercel.app/" />
        <meta property="og:title" content="Sazib Hossain | Mobile & Backend Developer" />
        <meta property="og:description" content="I build scalable, user-centric mobile and web experiences with Kotlin, Jetpack Compose, and Spring Boot." />
        <meta property="og:url" content="https://porfolio-sazib1008.vercel.app/" />
        <meta property="og:image" content="https://porfolio-sazib1008.vercel.app/og-image.png" />
        <meta name="twitter:title" content="Sazib Hossain | Mobile & Backend Developer" />
        <meta name="twitter:description" content="I build scalable, user-centric mobile and web experiences with Kotlin, Jetpack Compose, and Spring Boot." />
        <meta name="twitter:image" content="https://porfolio-sazib1008.vercel.app/og-image.png" />
      </Helmet>
      <Hero />
      <Skills />
      <Projects projects={PROJECTS_DATA} />
      <Contact />
    </>
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
    <Router>
      <div className="relative min-h-screen bg-[#06090e]">
        {/* Fixed 3D background scene */}
        <BackgroundCanvas mouse={mouse} scrollY={scrollY} />

        {/* Global Spotlight Command Palette */}
        <CommandPalette />

        {/* Scrollable content overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}
