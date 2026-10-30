import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, ArrowRight } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollActive = () => {
      const scrollY = window.scrollY
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const top = section.offsetTop - 120
        if (scrollY >= top) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScrollActive, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollActive)
  }, [])

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 75
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveSection(id)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0F]/90 backdrop-blur-md border-b border-[#232328] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-1 font-bold text-xl tracking-tight text-white focus:outline-none"
          aria-label="Abdul Rahuman Home"
        >
          <span className="font-extrabold text-2xl tracking-tighter text-white group-hover:text-[#FF7547] transition-colors">
            AR
          </span>
        </button>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-1 bg-[#151518]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#232328]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-xs font-medium transition-colors focus:outline-none ${
                  isActive ? 'text-white' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-3 right-3 h-[2px] bg-[#FF7547] rounded-full shadow-[0_0_8px_#FF7547]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </nav>

        {/* RIGHT ACTIONS: THEME ICON & LET'S TALK */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white transition-colors bg-[#151518] border border-[#232328]"
            title="Dark theme active"
          >
            <Moon className="w-3.5 h-3.5" />
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-[#151518] border border-[#2B2B32] hover:border-[#FF7547]/50 hover:bg-[#1C1C22] transition-all group shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3 h-3 text-[#FF7547] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-3 py-1 rounded-full text-xs font-medium text-white bg-[#151518] border border-[#232328]"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#151518] text-[#9CA3AF] hover:text-white border border-[#232328] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0D0F] border-b border-[#232328] px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#151518] text-[#FF7547] border border-[#2B2B32]'
                        : 'text-[#9CA3AF] hover:text-white hover:bg-[#151518]/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF7547]" />}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
