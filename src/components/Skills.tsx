import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface TechItem {
  name: string
  category: 'languages' | 'frontend' | 'backend' | 'tools'
  iconSvg: React.ReactNode
}

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'languages' | 'frontend' | 'backend' | 'tools'>('all')

  const technologies: TechItem[] = [
    // Programming Languages
    {
      name: 'Java',
      category: 'languages',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M11.5 24.8c0 0-2.4 1.4 1.7 1.9 5 .6 7.6.5 10.7-.3 0 0 .9.6 1.8.8-7.5 3.3-17.7 1.2-14.2-2.4zm-1.8-4.2c0 0-2.5 1.7 1.5 2.1 4.9.5 9.1.5 13.9-.4 0 0 .7.6 1.3.8-9 3.5-20.9 1.4-16.7-2.5zm6.5-7.3c1.9 2.2.5 4.2.5 4.2s4.9-2.5 2.6-5.7c-2.3-3.1-4.2-4.7 5.7-10.8-7.5 1.5-12.8 7.3-8.8 12.3zm8.3 6.6c4.6-2.4 2.5-4.7 1.4-4.4-.3.1-.4 0-.4 0s.1-.3.4-.4c3.4-1.2 6.1 2.3 2.1 4.5-2.2 1.2-3.5.3-3.5.3zm-5.7-9.5c.8 1.1 1.9 2 1.9 2s2.6-1.5 1.4-3.5c-1.3-2.1-4.1-3.2-.2-6.5-4.4 1.5-5.3 5.4-3.1 8zm4 11.2c5.6.4 9.1-.3 9.1-.3s-.8.7-2 1.1c-4.7 1.6-12.5 1.5-16.9.1.9-.5 2-.8 2-.8 2.2.2 4.9.1 7.8-.1z" fill="#E76F00"/>
          <path d="M22.8 21.3c2.4-1.3 3.3-3.3 3.3-3.3s-1 1-3.2 1.6c-.4.1-.1 1.7-.1 1.7z" fill="#5382A1"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'languages',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
          <path d="M19.7 24.3c1.2 2 2.7 3.2 5.2 3.2 2.2 0 3.6-1.1 3.6-2.6 0-1.8-1.5-2.5-3.9-3.5l-1.3-.6c-3.8-1.6-6.3-3.6-6.3-7.9 0-3.9 3-6.9 7.7-6.9 3.4 0 5.8 1.2 7.5 4.2l-3.3 2.1c-.9-1.6-1.9-2.2-4.1-2.2-1.9 0-3.1 1.2-3.1 2.5 0 1.6 1.1 2.3 3.6 3.4l1.3.6c4.5 1.9 6.8 3.8 6.8 8.2 0 4.7-3.7 7.3-8.6 7.3-4.8 0-7.9-2.3-9.5-5.7l4.3-2.6zm-10.7.4c.8 1.4 1.5 2.5 3.2 2.5 1.6 0 2.7-.6 2.7-3.1v-14.3h4.4v14.4c0 4.8-2.8 7.1-6.9 7.1-3.7 0-5.9-1.9-7-4.3l3.6-2.3z" fill="#000000"/>
        </svg>
      )
    },

    // Frontend Development
    {
      name: 'HTML',
      category: 'frontend',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M5.3 28.5L2.7 0h26.6l-2.6 28.5L15.9 32 5.3 28.5z" fill="#E44D26"/>
          <path d="M16 29.5l8.6-2.4 2.2-24.3H16v26.7z" fill="#F16529"/>
          <path d="M16 12.8h-4.6l-.3-3.6H16V5.6H7.9l.9 10.8H16v-3.6zm0 8.8l-.1.03-3.7-1-.2-2.7H8.3l.5 5.3 7.2 2v-3.63z" fill="#EBEBEB"/>
          <path d="M16 12.8h4.6l-.4 5.2-4.2 1.1v3.7l7.2-2 .9-11.6H16v3.6z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: 'CSS',
      category: 'frontend',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M5.3 28.5L2.7 0h26.6l-2.6 28.5L15.9 32 5.3 28.5z" fill="#1572B6"/>
          <path d="M16 29.5l8.6-2.4 2.2-24.3H16v26.7z" fill="#33A9DC"/>
          <path d="M16 12.8h-4.6l-.3-3.6H16V5.6H7.9l.9 10.8H16v-3.6zm0 8.8l-.1.03-3.7-1-.2-2.7H8.3l.5 5.3 7.2 2v-3.63z" fill="#EBEBEB"/>
          <path d="M24.1 9.2H16v3.6h4.3l-.4 4.4-3.9 1.1v3.7l7.2-2 .9-10.8z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: 'React',
      category: 'frontend',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <ellipse cx="16" cy="16" rx="3.5" ry="3.5" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1.5" fill="none">
            <ellipse cx="16" cy="16" rx="13" ry="5"/>
            <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"/>
            <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)"/>
          </g>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M16 8.5c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.11 2.86 2.03C18.08 15.77 19.8 17.5 24 17.5c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.11-2.86-2.03C21.92 10.23 20.2 8.5 16 8.5zM8 17.5c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.11 2.86 2.03C10.08 24.77 11.8 26.5 16 26.5c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.11-2.86-2.03C13.92 19.23 12.2 17.5 8 17.5z" fill="#06B6D4"/>
        </svg>
      )
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#7952B3"/>
          <path d="M12.5 8h4.5c2.3 0 4 .5 5 1.5 1 .9 1.4 2.2 1.4 3.7 0 1.2-.3 2.2-1 3-.7.8-1.6 1.3-2.8 1.5v.1c1.5.3 2.6.9 3.4 1.8.8.9 1.2 2.1 1.2 3.6 0 1.8-.6 3.2-1.7 4.3-1.1 1.1-2.8 1.6-5 1.6H12.5V8zm3.6 3.1v4.7h1.4c1.1 0 1.9-.2 2.5-.7.5-.5.8-1.1.8-2 0-.8-.3-1.4-.8-1.8-.6-.4-1.4-.6-2.5-.6h-1.4zm0 7.7v5.2h1.8c1.2 0 2.1-.3 2.7-.8.6-.6.9-1.3.9-2.2 0-.9-.3-1.6-.9-2.1-.6-.5-1.5-.7-2.7-.7h-1.8z" fill="#FFFFFF"/>
        </svg>
      )
    },

    // Backend Development
    {
      name: 'Node.js',
      category: 'backend',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M16 2.5l11.7 6.8v13.4L16 29.5 4.3 22.7V9.3L16 2.5z" fill="#539E43"/>
          <path d="M16 16.5l-8.5-4.9v9.8L16 26.2V16.5z" fill="#68A063"/>
          <path d="M16 16.5l8.5-4.9v9.8L16 26.2V16.5z" fill="#417E38"/>
        </svg>
      )
    },
    {
      name: 'Express.js',
      category: 'backend',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#1C1C22" stroke="#33333A" strokeWidth="1.5"/>
          <text x="16" y="20" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ex</text>
        </svg>
      )
    },
    {
      name: 'Spring Boot',
      category: 'backend',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M16 3c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3z" fill="#6DB33F"/>
          <path d="M21.5 17.8c-.8 2.8-3.3 4.8-6.3 4.8-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6 1.8 0 3.5.7 4.7 2l-2.1 2.1c-.7-.7-1.6-1.1-2.6-1.1-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6c1.6 0 2.9-1 3.4-2.4h-3.4v-3h6.6v3.6h-.3z" fill="#FFFFFF"/>
        </svg>
      )
    },

    // Database & Tools
    {
      name: 'MongoDB',
      category: 'tools',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M16 2c-.6 0-1 .4-1.2 1-.8 2.6-3.2 10.7-3.2 15 0 6.6 4.4 12 4.4 12s4.4-5.4 4.4-12c0-4.3-2.4-12.4-3.2-15-.2-.6-.6-1-1.2-1z" fill="#47A248"/>
          <path d="M16 2v28s4.4-5.4 4.4-12c0-4.3-2.4-12.4-3.2-15-.2-.6-.6-1-1.2-1z" fill="#499D4A"/>
          <path d="M15.8 19.3c-.2-.4-.3-.8-.3-1.3 0-1.8 1.4-3.2 3.2-3.2.5 0 .9.1 1.3.3-1.4 2.8-3.2 3.7-4.2 4.2z" fill="#E8F5E9"/>
        </svg>
      )
    },
    {
      name: 'Git',
      category: 'tools',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M30.7 13.9L18.1 1.3c-.8-.8-2.2-.8-3 0l-3 3 3.8 3.8c.9-.3 1.9 0 2.6.7.7.7 1 1.8.7 2.6l3.6 3.6c.9-.3 1.9 0 2.6.7 1 1 1 2.7 0 3.7-1 1-2.7 1-3.7 0-1-.8-1.2-2.1-.7-3.1L17.5 10c-.3.1-.6.2-.9.2s-.6-.1-.9-.2l-4.4 4.4v9.6c.9.5 1.5 1.4 1.5 2.5 0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9c0-1.2.7-2.2 1.7-2.6V13.8c-1-.4-1.7-1.4-1.7-2.6 0-1.2.7-2.2 1.7-2.6L4.8 4.7 1.3 8.2c-.8.8-.8 2.2 0 3l12.6 12.6c.8.8 2.2.8 3 0l13.8-13.8c.8-.9.8-2.3 0-3.1z" fill="#F05032"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      category: 'tools',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.5 13.2.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2.1-1.5-2.1-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.4 2.2 1.4 1.3 2.2 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.5 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.9 3.9-1.5 3.9-1.5.7 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4 1 1.3 1 2.6v3.8c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: 'VS Code',
      category: 'tools',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
          <path d="M23.6 2.3L15.3 10l-6.8-5.3-2.6 1.3v19.9l2.6 1.3 6.8-5.3 8.3 7.7 4.7-2.3V4.6L23.6 2.3z" fill="#007ACC"/>
          <path d="M23.6 2.3l-8.3 7.7 8.3 7.7V2.3z" fill="#1F9CF0"/>
          <path d="M5.9 5.9L15.3 16 5.9 26.1V5.9z" fill="#0065A9"/>
        </svg>
      )
    }
  ]

  const filteredTech = filter === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === filter)

  return (
    <section id="about" className="py-12 border-t border-[#232328]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#FF7547] tracking-wider">01 —</span>
            <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
              Tech Stack
            </span>
          </div>
          <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">
            Technologies I Work With
          </span>
        </div>

        {/* COMPACT TECHNOLOGY CARDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -4, borderColor: 'rgba(255, 117, 71, 0.4)' }}
              transition={{ duration: 0.2 }}
              className="portfolio-card p-4 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className="w-9 h-9 flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110">
                {tech.iconSvg}
              </div>
              <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'languages', label: 'Languages' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' },
            { id: 'tools', label: 'Database & Tools' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                filter === cat.id
                  ? 'bg-[#FF7547] text-white'
                  : 'bg-[#151518] text-[#9CA3AF] hover:text-white border border-[#232328]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
