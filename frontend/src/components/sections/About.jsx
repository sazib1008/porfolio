import { useEffect, useRef } from 'react'

const TIMELINE = [
  {
    date: '2021 – Present',
    role: 'CSE Undergraduate',
    org: 'Mymensingh Engineering College',
    desc: 'Pursuing BSc in Computer Science & Engineering. Active in competitive programming, Android development, and backend systems engineering.',
    color: '#d4af37',
  },
  {
    date: '2023 – 2024',
    role: 'Android Developer (Project)',
    org: 'Duralap — Real-time Comms App',
    desc: 'Built a full-stack real-time messaging and video-calling app using Jetpack Compose, WebRTC, Spring Boot, MongoDB & Redis.',
    color: '#10b981',
  },
  {
    date: '2023',
    role: 'Backend Developer (Project)',
    org: 'Meal Management System',
    desc: 'Designed and built a multi-role university dining management system with analytics, PostgreSQL, and Kotlin / Spring Boot.',
    color: '#818cf8',
  },
  {
    date: '2024',
    role: 'Full-Stack Developer',
    org: 'Bazar — Market Monitor',
    desc: 'Created a commodity price tracking and inflation analytics platform with crowd-sourced data verification and Spring Boot backend.',
    color: '#f472b6',
  },
]

const STRENGTHS = [
  { icon: '📱', title: 'Android Mastery',    desc: 'Native Android using Kotlin, Jetpack Compose, Hilt, CameraX & modern Android SDK.' },
  { icon: '⚙️', title: 'Backend Systems',    desc: 'RESTful APIs and microservices with Spring Boot, Node.js, WebRTC & WebSockets.' },
  { icon: '🗄️', title: 'Database Design',   desc: 'Relational and NoSQL: PostgreSQL, MongoDB, MySQL, Redis caching layers.' },
  { icon: '🏗️', title: 'Clean Architecture', desc: 'MVVM, Clean Architecture, DI patterns — making codebases maintainable at scale.' },
]

function useReveal(ref, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, threshold])
}

export default function About() {
  const ref = useRef()
  useReveal(ref)

  return (
    <section id="about" className="py-32 relative">
      {/* Subtle section bg tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(212,175,55,0.04),transparent)] pointer-events-none" />

      <div ref={ref} className="section-fade max-w-6xl mx-auto px-6 relative">

        {/* Section heading */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono-custom text-[#d4af37] text-sm tracking-[0.3em] uppercase">01 /</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ── LEFT: Bio + Strengths ──────────────────────────────── */}
          <div>
            <p className="text-slate-200 text-lg leading-relaxed mb-5">
              I'm <span className="text-[#d4af37] font-bold">Sazib Hossain</span>, a final-year CSE
              student at{' '}
              <span className="text-white font-semibold">Mymensingh Engineering College</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              My core expertise lies in{' '}
              <span className="text-[#10b981] font-medium">Native Android development</span> using{' '}
              <span className="text-white">Kotlin & Jetpack Compose</span>, and building{' '}
              <span className="text-[#d4af37] font-medium">scalable backend systems</span> with{' '}
              <span className="text-white">Spring Boot & Node.js</span>. I enjoy solving hard
              engineering problems with clean, testable, maintainable code.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              I've shipped real-time apps with WebRTC, multi-role management systems, market analytics
              platforms, and this 3D portfolio. I'm actively seeking internship and collaboration
              opportunities.
            </p>

            {/* Strength cards */}
            <div className="grid grid-cols-2 gap-4">
              {STRENGTHS.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="glass border border-white/5 rounded-xl p-5 hover:border-[#d4af37]/20 transition-all duration-300 group"
                >
                  <span className="text-2xl mb-3 block">{icon}</span>
                  <h4 className="text-white font-semibold text-sm mb-1.5 group-hover:text-[#d4af37] transition-colors">
                    {title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/sazib1008"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-5 py-2.5 glass border border-white/8 hover:border-[#d4af37]/40 text-slate-300 hover:text-[#d4af37] rounded-lg transition-all duration-200"
              >
                GitHub Profile ↗
              </a>
              <a
                href="https://www.linkedin.com/in/sazib-1008-hossain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-5 py-2.5 glass border border-white/8 hover:border-[#10b981]/40 text-slate-300 hover:text-[#10b981] rounded-lg transition-all duration-200"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* ── RIGHT: Timeline ───────────────────────────────────── */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37]/40 via-white/5 to-transparent" />

            <div className="space-y-10">
              {TIMELINE.map(({ date, role, org, desc, color }, i) => (
                <div key={i} className="relative pl-14">
                  {/* Dot */}
                  <div
                    className="absolute left-3 top-1 w-4 h-4 rounded-full border-2 transition-all duration-300"
                    style={{ borderColor: color, background: '#0a0a0c', boxShadow: `0 0 10px ${color}50` }}
                  />

                  <span
                    className="font-mono-custom text-xs tracking-widest uppercase block mb-1"
                    style={{ color }}
                  >
                    {date}
                  </span>
                  <h3 className="text-white font-bold text-base mb-0.5">{role}</h3>
                  <p className="text-sm mb-2" style={{ color }}>{org}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
