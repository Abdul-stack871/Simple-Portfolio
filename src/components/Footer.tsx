import React from 'react'
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 75
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="relative bg-[#0D0D0F] border-t border-[#232328] pt-16 pb-12 overflow-hidden">
      {/* SUBTLE FLOWING GRADIENT GLOWS (OPTION 2 — MODERN ORANGE & PURPLE) */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#FF7547]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#9B72F2]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* UPPER FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-1 space-y-3">
            <button
              onClick={scrollToTop}
              className="text-2xl font-black text-white hover:text-[#FF7547] transition-colors tracking-tight focus:outline-none"
            >
              AR
            </button>
            <p className="text-xs font-semibold text-white tracking-wide">
              "Code. Create. Innovate. Repeat."
            </p>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Always open to new opportunities and meaningful collaborations.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/Abdul-stack871"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rahuman281/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://leetcode.com/u/AbdulStack/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:abdulrahumanrock15@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7547]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* MY WORK */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B72F2]" />
              <span>My Work</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Tech Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('certificates')}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('education')}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('exploring')}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Currently Exploring
                </button>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH & BACK TO TOP */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7547]" />
                <span>Get in Touch</span>
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="mailto:abdulrahumanrock15@gmail.com"
                    className="text-[#9CA3AF] hover:text-[#FF7547] transition-colors truncate block"
                  >
                    abdulrahumanrock15@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abdul-rahuman281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Abdul-stack871"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/u/AbdulStack/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    LeetCode Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* BACK TO TOP BUTTON */}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={scrollToTop}
                aria-label="Back to Top"
                className="w-9 h-9 rounded-full bg-[#FF7547] text-white flex items-center justify-center hover:bg-[#ff855c] transition-all shadow-[0_4px_14px_rgba(255,117,71,0.35)] hover:-translate-y-1 active:translate-y-0"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-[#9CA3AF] font-medium">Back to top</span>
            </div>
          </div>

        </div>

        {/* THIN DIVIDER */}
        <div className="border-t border-[#232328] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
          <div>
            &copy; 2026 Abdul Rahuman. All rights reserved.
          </div>

          <div className="text-neutral-400 font-medium flex items-center gap-1.5">
            <span>"Let's build something amazing together."</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
