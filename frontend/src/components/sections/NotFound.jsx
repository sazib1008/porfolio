import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-24 sm:py-32">
      <Helmet>
        <title>Page Not Found | Sazib Hossain</title>
        <meta name="description" content="Oops! The page you are looking for does not exist. Return to the developer portfolio of Sazib Hossain." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Aurora Background Glows */}
      <div className="absolute top-[20%] left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-glow-spot bg-[radial-gradient(circle,rgba(19,230,196,0.1)_0%,transparent_70%)]" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-glow-spot bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-xl w-full z-10 text-center">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
          {/* Giant 404 Accent */}
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter leading-none mb-4 font-sans select-none teal-gradient-text">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide uppercase">
            Page Not Found
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase cursor-pointer shadow-lg shadow-[#13e6c4]/10 hover:shadow-[#13e6c4]/25 transition duration-200"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
