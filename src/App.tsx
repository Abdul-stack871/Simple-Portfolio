import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Education } from './components/Education'
import { CurrentlyExploring } from './components/CurrentlyExploring'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackgroundParticles } from './components/BackgroundParticles'

export function App() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0F] text-[#F3F4F6] selection:bg-[#FF7547]/30 selection:text-white">
      
      {/* SCROLL PROGRESS INDICATOR */}
      <ScrollProgress />

      {/* SUBTLE BACKGROUND CANVAS DUST */}
      <div className="opacity-40 pointer-events-none">
        <BackgroundParticles />
      </div>

      {/* AMBIENT GLOW ACCENTS (ORANGE & PURPLE) */}
      <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#FF7547]/3 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#9B72F2]/3 blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#FF7547]/3 blur-[140px] pointer-events-none z-0" />

      {/* STICKY TOP NAVIGATION */}
      <Navbar />

      {/* MAIN CONTENT CONTAINING ALL SECTIONS */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero />

        {/* SECTION 01 — TECH STACK */}
        <Skills />

        {/* SECTION 02 — FEATURED PROJECTS */}
        <Projects />

        {/* SECTION 03 — EXPERIENCE & JOURNEY */}
        <Experience />

        {/* SECTION 04 — CERTIFICATIONS & ACHIEVEMENTS */}
        <Certifications />

        {/* SECTION 05 — EDUCATION */}
        <Education />

        {/* SECTION 06 — CURRENTLY EXPLORING */}
        <CurrentlyExploring />

        {/* SECTION 07 — CONTACT */}
        <Contact />
      </main>

      {/* SECTION 08/09 — FOOTER */}
      <Footer />

    </div>
  )
}

// Thin glowing scroll progress bar
const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      if (totalScroll > 0) {
        setProgress((currentScroll / totalScroll) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] bg-[#232328]/40 z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#FF7547] to-[#9B72F2] shadow-[0_0_10px_rgba(255,117,71,0.5)] transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default App
