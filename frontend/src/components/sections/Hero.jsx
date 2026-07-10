import heroImg from '../../assets/hero.webp'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-24 sm:pt-32 pb-16 sm:pb-24"
    >
      {/* Background aurora glows */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-glow-spot bg-[radial-gradient(circle,rgba(19,230,196,0.12)_0%,transparent_70%)]" />
      <div className="absolute top-[30%] right-[5%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-glow-spot bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#13e6c4]/20 bg-[#13e6c4]/5 text-[10px] sm:text-xs font-semibold tracking-wider text-[#13e6c4] uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13e6c4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13e6c4]" />
              </span>
              AVAILABLE FOR SELECT PROJECTS
            </div>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-[#13e6c4] tracking-tight leading-[0.9] uppercase mb-8 font-sans">
              SAZIB <br />
              HOSSAIN
            </h1>

            {/* Subheadings */}
            <div className="space-y-2 mb-8">
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide">
                Android Developer • Kotlin & Jetpack Compose
              </h2>
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide">
                Backend: <span className="text-[#13e6c4]">Spring Boot 🚀</span>
              </h2>
            </div>

            {/* Description Paragraph (Value Prop) */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8 sm:mb-12">
              Hi, I'm Sazib. I build scalable, user-centric web applications and mobile experiences with Kotlin, Jetpack Compose, and Spring Boot, focusing on clean architecture and high-performance engineering.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-primary px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-center cursor-pointer shadow-lg shadow-[#13e6c4]/10 hover:shadow-[#13e6c4]/25"
              >
                VIEW PROJECTS
              </a>
              <a
                href="/sazib_hossain_resume.pdf"
                download="Sazib_Hossain_Resume.pdf"
                className="btn-secondary px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-center cursor-pointer"
              >
                DOWNLOAD RESUME
              </a>
              <a
                href="#contact"
                className="text-xs font-bold tracking-wider uppercase text-slate-400 hover:text-white transition duration-200 text-center py-3.5 px-4"
              >
                GET IN TOUCH &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Developer Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full order-1 lg:order-2">
            <div className="relative w-[224px] sm:w-[280px] md:max-w-[400px] lg:max-w-[416px] md:w-full aspect-square group">
              {/* Outer soft glowing backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#13e6c4] to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-45 transition duration-500" />
              
              {/* Frame Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 aspect-square">
                <img
                  src={heroImg}
                  alt="Sazib Hossain"
                  loading="eager"
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
