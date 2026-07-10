// Inline SVG icon components
function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      {/* Background aurora glows */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-glow-spot bg-[radial-gradient(circle,rgba(19,230,196,0.06)_0%,transparent_70%)]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-glow-spot bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 text-center">
        {/* Main Glass Card container */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-10 md:p-16 border border-white/5 bg-slate-900/35 relative overflow-hidden text-left">

          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left side: Heading & Copy */}
            <div className="md:col-span-7 flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Ready to build something <br />
                <span className="text-[#13e6c4]">extraordinary? 🚀</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you're looking for a dedicated Android developer or a robust backend engineer, I'm always open to discussing new opportunities and collaborations.
              </p>
            </div>

            {/* Right side: Info blocks */}
            <div className="md:col-span-5 flex flex-col gap-6 md:pl-6 lg:pl-10">

              {/* Email Me Info Block */}
              <a
                href="mailto:hello@sazib.dev"
                className="flex items-center gap-4 group p-2 rounded-2xl"
              >
                {/* Envelope Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#13e6c4]/5 border border-[#13e6c4]/15 text-[#13e6c4] group-hover:bg-[#13e6c4]/10 group-hover:scale-105 transition duration-200 flex-shrink-0">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mb-1">
                    EMAIL ME
                  </p>
                  <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition duration-200">
                    hello@sazib.dev
                  </p>
                </div>
              </a>

              {/* Based In Info Block */}
              <div className="flex items-center gap-4 p-2 rounded-2xl">
                {/* Location Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#13e6c4]/5 border border-[#13e6c4]/15 text-[#13e6c4] flex-shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mb-1">
                    BASED IN
                  </p>
                  <p className="text-sm font-semibold text-slate-300">
                    Mymensingh, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
