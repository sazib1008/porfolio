import { useRef } from 'react'
import duralapImg from '../../assets/duralap_mockup.webp'
import mealImg from '../../assets/meal_management_mockup.webp'
import bazarImg from '../../assets/bazar_monitor_mockup.webp'

const PROJECT_MOCKUPS = {
  1: duralapImg,
  2: mealImg,
  3: bazarImg,
}

export default function Projects({ projects = [] }) {
  const sliderRef = useRef(null)

  // Filter projects to only show the main featured three matching the design
  const featuredProjects = projects.filter(p => p.id >= 1 && p.id <= 3)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -380, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 380, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="py-28 relative">
      {/* Background aurora glows */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-glow-spot bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[550px] h-[550px] bg-glow-spot bg-[radial-gradient(circle,rgba(19,230,196,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-12">
          <div className="text-left max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Selected Projects 🔥
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A collection of engineering-focused apps solving real-world challenges with modern tech.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-[#13e6c4] hover:text-[#13e6c4] text-white flex items-center justify-center transition duration-200 cursor-pointer bg-slate-900/20 backdrop-blur-md"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-[#13e6c4] hover:text-[#13e6c4] text-white flex items-center justify-center transition duration-200 cursor-pointer bg-slate-900/20 backdrop-blur-md"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel / Card Shelf */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {featuredProjects.map((project) => {
            const mockup = PROJECT_MOCKUPS[project.id]
            return (
              <article
                key={project.id}
                className="snap-start flex-shrink-0 w-full sm:w-[380px] lg:w-[395px] glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/5 bg-slate-900/40"
              >
                {/* Top Half: Project mockup image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-white/5 bg-slate-950">
                  {mockup ? (
                    <img
                      src={mockup}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-700">No Image</div>
                  )}
                </div>

                {/* Bottom Half: Details */}
                <div className="p-6 flex flex-col flex-1 text-left">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#13e6c4] transition duration-200 tracking-wide font-sans">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Explicit Tech Stack Section */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] md:text-xs font-semibold px-3 py-1 rounded-lg border border-[#13e6c4]/10 bg-[#13e6c4]/5 text-[#13e6c4]/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: GitHub & Live Demo buttons */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    <a
                      href={project.github || "https://github.com/sazib1008"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 py-2.5 rounded-xl text-center text-xs font-bold tracking-wider uppercase cursor-pointer"
                    >
                      GitHub
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 py-2.5 rounded-xl text-center text-xs font-bold tracking-wider uppercase cursor-pointer shadow-lg shadow-[#13e6c4]/10 hover:shadow-[#13e6c4]/25"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 py-2.5 rounded-xl text-center text-xs font-bold tracking-wider uppercase bg-slate-900/50 text-slate-500 cursor-not-allowed border border-white/5"
                        title="Live demo link coming soon!"
                      >
                        Demo Soon
                      </button>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
