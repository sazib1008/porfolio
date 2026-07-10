import { useState, useEffect, useRef } from 'react'
import { Search, Compass, Terminal, ShieldAlert, ArrowDown, ArrowUp, CornerDownLeft, Sparkles } from 'lucide-react'

const ITEMS = [
  { id: 'hero', label: 'Navigate to Hero / Introduction', type: 'nav', path: '#hero', shortcut: 'H', category: 'Navigation' },
  { id: 'skills', label: 'Navigate to Technical Stack', type: 'nav', path: '#skills', shortcut: 'S', category: 'Navigation' },
  { id: 'projects', label: 'Navigate to Selected Projects', type: 'nav', path: '#projects', shortcut: 'P', category: 'Navigation' },
  { id: 'contact', label: 'Navigate to Contact Section', type: 'nav', path: '#contact', shortcut: 'C', category: 'Navigation' },
  { 
    id: 'resume', 
    label: 'Download Resume (PDF)', 
    type: 'action', 
    action: () => {
      const link = document.createElement('a');
      link.href = '/sazib_hossain_resume.pdf';
      link.download = 'Sazib_Hossain_Resume.pdf';
      link.click();
    }, 
    shortcut: 'R', 
    category: 'Actions' 
  },
  { id: 'github', label: 'View GitHub Profile', type: 'link', path: 'https://github.com/sazib1008', shortcut: 'G', category: 'Socials' },
  { id: 'linkedin', label: 'View LinkedIn Profile', type: 'link', path: 'https://www.linkedin.com/in/sazib-1008-hossain', shortcut: 'L', category: 'Socials' }
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const overlayRef = useRef(null)
  const inputRef = useRef(null)

  // Listen for Ctrl+K or / keys to open/close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === '/' && document.activeElement !== inputRef.current && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault()
        setIsOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSearch('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  const filteredItems = ITEMS.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  // Reset index if search filters items
  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  const handleSelect = (item) => {
    if (!item) return
    setIsOpen(false)

    if (item.type === 'nav') {
      const el = document.querySelector(item.path)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', item.path)
      }
    } else if (item.type === 'action') {
      item.action()
    } else if (item.type === 'link') {
      window.open(item.path, '_blank', 'noopener,noreferrer')
    }
  }

  // Handle keyboard navigation inside list
  useEffect(() => {
    if (!isOpen) return
    const handleKeys = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (filteredItems.length === 0 ? 0 : (prev + 1) % filteredItems.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (filteredItems.length === 0 ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex])
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeys)
    return () => window.removeEventListener('keydown', handleKeys)
  }, [isOpen, filteredItems, selectedIndex])

  if (!isOpen) return null

  // Group items by category for search presentation
  const categories = [...new Set(filteredItems.map(item => item.category))]

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in-up duration-200"
      onClick={(e) => {
        if (e.target === overlayRef.current) setIsOpen(false)
      }}
    >
      <div className="relative w-full max-w-xl glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-950/30 flex flex-col max-h-[50vh]">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/5 bg-slate-900/30">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none w-full"
          />
          <span className="text-[10px] font-bold px-2 py-1 bg-white/5 rounded border border-white/10 text-slate-400 select-none">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 scrollbar-thin">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center px-4">
              <ShieldAlert className="w-8 h-8 text-slate-500 mb-2" />
              <p className="text-sm font-semibold text-slate-300">No results found</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for other commands or links.</p>
            </div>
          ) : (
            categories.map(category => {
              const categoryItems = filteredItems.filter(item => item.category === category)
              return (
                <div key={category} className="mb-2 last:mb-0">
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider px-3 py-1.5 select-none">
                    {category}
                  </div>
                  <div className="space-y-0.5">
                    {categoryItems.map(item => {
                      const absoluteIndex = filteredItems.indexOf(item)
                      const isSelected = absoluteIndex === selectedIndex

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(absoluteIndex)}
                          className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'bg-[#13e6c4]/10 border border-[#13e6c4]/20 text-white'
                              : 'bg-transparent border border-transparent text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {category === 'Navigation' && <Compass className={`w-4 h-4 ${isSelected ? 'text-[#13e6c4]' : 'text-slate-400'}`} />}
                            {category === 'Actions' && <Sparkles className={`w-4 h-4 ${isSelected ? 'text-[#13e6c4]' : 'text-slate-400'}`} />}
                            {category === 'Socials' && <Terminal className={`w-4 h-4 ${isSelected ? 'text-[#13e6c4]' : 'text-slate-400'}`} />}
                            <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 select-none">
                            {isSelected && (
                              <span className="flex items-center text-[10px] text-[#13e6c4] font-medium gap-0.5 animate-pulse">
                                Select <CornerDownLeft className="w-2.5 h-2.5" />
                              </span>
                            )}
                            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-900 border border-white/5 rounded text-slate-400">
                              {item.shortcut}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-semibold select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><ArrowUp className="w-3 h-3" /><ArrowDown className="w-3 h-3" /> Navigate</span>
            <span className="flex items-center gap-1"><CornerDownLeft className="w-3 h-3" /> Select</span>
          </div>
          <div>
            <span>Press <kbd className="text-[#13e6c4] border border-[#13e6c4]/20 px-1 py-0.5 rounded bg-[#13e6c4]/5">Ctrl+K</kbd> or <kbd className="text-[#13e6c4] border border-[#13e6c4]/20 px-1 py-0.5 rounded bg-[#13e6c4]/5">/</kbd> to trigger</span>
          </div>
        </div>
      </div>
    </div>
  )
}
