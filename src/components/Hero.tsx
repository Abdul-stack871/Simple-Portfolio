import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin, Mail, Code2, AlertCircle, FileText } from 'lucide-react'
import avatarImg from '../assets/avatar.png'

export const Hero: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false)
  const [resumeAvailable] = useState(true) // Actual resume is available at /resume.pdf

  const handleResumeClick = () => {
    if (resumeAvailable) {
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Abdul_Rahuman_Resume.pdf'
      link.click()
    } else {
      setShowResumeModal(true)
    }
  }

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle background ambient glow matching screenshot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-gradient-to-tr from-[#FF7547]/5 via-[#9B72F2]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        
        {/* AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-5"
        >
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-tr from-[#FF7547] via-[#9B72F2] to-[#FF7547] shadow-[0_0_25px_rgba(255,117,71,0.25)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#151518] flex items-center justify-center">
              <img
                src={avatarImg}
                alt="Abdul Rahuman"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* ACADEMIC STATUS INDICATOR */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#232328] mb-4 text-xs font-medium text-[#9CA3AF]"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF7547] animate-pulse" />
          <span>Final Year | B.Tech AI &amp; Data Science</span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
        >
          Hi, I'm <br className="sm:hidden" />
          <span>Abdul </span>
          <span className="text-[#FF7547]">Rahuman</span>
        </motion.h1>

        {/* PROFESSIONAL POSITIONING */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg font-medium text-neutral-300 mb-6 tracking-wide"
        >
          Full Stack Developer <span className="text-[#9B72F2] mx-1.5">•</span> AI Enthusiast <span className="text-[#FF7547] mx-1.5">•</span> Problem Solver
        </motion.p>

        {/* APPROVED INTRODUCTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-8"
        >
          I enjoy building software, exploring AI technologies, and learning something new along the way. I like turning ideas into real projects, experimenting with different technologies, and finding better ways to solve problems.
        </motion.p>

        {/* HERO CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#FF7547] hover:bg-[#ff855c] transition-all duration-200 shadow-[0_4px_20px_rgba(255,117,71,0.3)] hover:shadow-[0_6px_25px_rgba(255,117,71,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View My Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleResumeClick}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#151518] border border-[#2B2B32] hover:border-[#FF7547]/50 hover:bg-[#1A1A20] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 text-[#9CA3AF]" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* SOCIAL LINKS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-3"
        >
          <a
            href="https://github.com/Abdul-stack871"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-rahuman281/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://leetcode.com/u/AbdulStack/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <Code2 className="w-4 h-4" />
          </a>

          <a
            href="mailto:abdulrahumanrock15@gmail.com"
            aria-label="Send Email"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={handleResumeClick}
            aria-label="Resume Information"
            title="Resume Information"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <FileText className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* RESUME NOTICE MODAL */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="portfolio-card max-w-sm w-full p-6 text-center border-[#2B2B32]">
            <div className="w-12 h-12 rounded-full bg-[#FF7547]/10 text-[#FF7547] flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Resume Notice</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed mb-5">
              Resume file will be updated shortly. You can connect with Abdul directly on LinkedIn or via email for an up-to-date CV and project portfolio.
            </p>
            <div className="flex gap-2">
              <a
                href="mailto:abdulrahumanrock15@gmail.com?subject=Resume%20Inquiry%20-%20Abdul%20Rahuman"
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-[#FF7547] hover:bg-[#ff855c] transition-colors"
              >
                Email Abdul
              </a>
              <button
                onClick={() => setShowResumeModal(false)}
                className="py-2 px-4 rounded-lg text-xs font-medium text-[#9CA3AF] hover:text-white bg-[#232328] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
