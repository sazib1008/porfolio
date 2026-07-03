// Inline SVG icon components to avoid lucide-react hook conflicts
function SmartphoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function ServerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}

function DatabaseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

function CompassIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

const STACK_DATA = [
  {
    title: 'Mobile',
    Icon: SmartphoneIcon,
    skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Coroutines'],
  },
  {
    title: 'Backend',
    Icon: ServerIcon,
    skills: ['Spring Boot', 'Java/Kotlin', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Databases',
    Icon: DatabaseIcon,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Room'],
  },
  {
    title: 'Tools',
    Icon: CompassIcon,
    skills: ['Docker', 'Git', 'CI/CD', 'Firebase'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-28 relative">
      {/* Background aurora glows */}
      <div className="absolute top-[30%] left-[5%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-glow-spot bg-[radial-gradient(circle,rgba(19,230,196,0.06)_0%,transparent_70%)]" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-glow-spot bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 w-full z-10 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
          Technical Stack 🛠️
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mb-10 sm:mb-16 max-w-lg mx-auto leading-relaxed">
          Architecture-first approach using modern industry standards.
        </p>

        {/* 4-column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {STACK_DATA.map(({ title, Icon, skills }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-5 sm:p-7 flex flex-col items-start"
            >
              {/* Category Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-[#13e6c4]/5 border border-[#13e6c4]/15 mb-4 sm:mb-6 text-[#13e6c4]">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-xl font-bold text-white mb-4 sm:mb-6 tracking-wide">
                {title}
              </h3>

              {/* Tags wrap */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-auto w-full">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#13e6c4]/10 bg-[#13e6c4]/5 text-[#13e6c4]/90 hover:border-[#13e6c4]/25 hover:bg-[#13e6c4]/10 transition duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
