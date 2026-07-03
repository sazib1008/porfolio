import heroImg from '../../assets/hero.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-24 sm:pt-32 pb-16 sm:pb-24"
    >
      {/* Background aurora glows */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-glow-spot bg-[radial-gradient(circle,rgba(19,230,196,0.12)_0%,transparent_70%)]" />
      <div className="absolute top-[30%] right-[5%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-glow-spot bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#13e6c4]/20 bg-[#13e6c4]/5 text-[9px] sm:text-xs font-semibold tracking-wider text-[#13e6c4] uppercase mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13e6c4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13e6c4]" />
              </span>
              AVAILABLE FOR SELECT PROJECTS
            </div>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-[#13e6c4] tracking-tight leading-[0.9] uppercase mb-6 sm:mb-8 font-sans">
              SAZIB <br />
              HOSSAIN
            </h1>

            {/* Subheadings */}
            <div className="space-y-1 mb-6 sm:mb-8">
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide">
                Android Developer • Kotlin & Jetpack Compose
              </h2>
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide">
                Backend: <span className="text-[#13e6c4]">Spring Boot 🚀</span>
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8 sm:mb-10">
              Building end-to-end mobile experiences — from high-fidelity Compose UI to scalable, high-performance backends. CSE student at MEC focused on engineering precision.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-primary px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-center cursor-pointer shadow-lg shadow-[#13e6c4]/10 hover:shadow-[#13e6c4]/25"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="btn-secondary px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-center cursor-pointer"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Right Column: Developer Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full order-1 lg:order-2">
            <div className="relative w-[220px] sm:w-[280px] md:max-w-[400px] lg:max-w-[420px] md:w-full aspect-square group">
              {/* Outer soft glowing backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#13e6c4] to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-45 transition duration-500" />
              
              {/* Frame Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 aspect-square">
                <img
                  src={heroImg}
                  alt="Sazib Hossain"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
