import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Trophy, Code, FileText, Shield, BarChart3, Calendar } from 'lucide-react'

interface ExperienceItem {
  id: string
  role: string
  organization: string
  date: string
  badge?: string
  description: string
  category: string
  icon: React.ReactNode
  iconBg: string
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 'ats-internship',
      role: 'Web Development Intern',
      organization: 'Aalan Tech Soft (ATS)',
      date: '09 Jun 2025 – 25 Jun 2025',
      badge: '17 Days',
      description: 'Gained practical exposure to web development and worked on development-related tasks during the internship.',
      category: 'Internship',
      icon: <Briefcase className="w-4 h-4 text-white" />,
      iconBg: 'bg-[#FF7547]'
    },
    {
      id: 'vihansa-hackathon',
      role: 'Hackathon — VIHANSA 2K26',
      organization: '24-Hour National Level Hackathon',
      date: 'Jun 2024',
      badge: 'National Level | 24 Hours',
      description: 'Participated in an NLP-based Sentiment Analysis problem and worked on automated text sentiment classification.',
      category: 'Hackathon',
      icon: <Trophy className="w-4 h-4 text-white" />,
      iconBg: 'bg-[#F59E0B]'
    },
    {
      id: 'technova-hackathon',
      role: 'Hackathon — TECHNOVA \'26',
      organization: 'National-Level Hackathon',
      date: '2026',
      badge: 'Participant',
      description: 'National-Level Hackathon participation tackling algorithmic and system design problem statements.',
      category: 'Hackathon',
      icon: <Code className="w-4 h-4 text-white" />,
      iconBg: 'bg-[#9B72F2]'
    },
    {
      id: 'icrit-research',
      role: 'Research Paper Presentation — ICRIT \'26',
      organization: 'International Conference on Recent Innovations in Technology',
      date: 'Presented',
      badge: 'Research Paper',
      description: 'Presented research on "Integrated Cooperative Farming System with Farmer Connectivity and Crop Recommendation".',
      category: 'Research',
      icon: <FileText className="w-4 h-4 text-white" />,
      iconBg: 'bg-[#3B82F6]'
    },
    {
      id: 'cyber-security',
      role: 'Cyber Security Workshop',
      organization: 'ISEA Project Phase-III',
      date: '10-Day Workshop',
      badge: 'Completed',
      description: 'Completed a 10-day hands-on workshop covering Linux, VirtualBox, and ethical hacking fundamentals.',
      category: 'Workshop',
      icon: <Shield className="w-4 h-4 text-white" />,
      iconBg: 'bg-[#06B6D4]'
    },
    {
      id: 'data-analytics',
      role: 'Data Analytics Using Statistical Tools',
      organization: 'Karpagam College of Engineering, Coimbatore',
      date: '17 October 2024',
      badge: 'National Level',
      description: 'National-level workshop focused on exploratory data analysis and practical statistical modeling tools.',
      category: 'Workshop',
      icon: <BarChart3 className="w-4 h-4 text-white" />,
      iconBg: 'bg-[#10B981]'
    }
  ]

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-[#232328]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#FF7547] tracking-wider">03 —</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
              Experience &amp; Journey
            </h2>
          </div>
          <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">
            My Journey
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl mb-12">
          Workshops, internships, hackathons and academic milestones that shaped my learning journey.
        </p>

        {/* VERTICAL TIMELINE MATCHING SCREENSHOT */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#232328] ml-3 sm:ml-4 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* TIMELINE MARKER ICON */}
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${exp.iconBg} flex items-center justify-center shadow-lg shadow-black/40 border border-white/10 group-hover:scale-110 transition-transform`}
              >
                {exp.icon}
              </div>

              {/* CONTENT CARD */}
              <div className="portfolio-card p-4 sm:p-5 hover:border-[#FF7547]/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF7547] transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-[#9CA3AF]">
                      — {exp.organization}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {exp.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1F1F24] text-[#9CA3AF] border border-[#2B2B32]">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#9CA3AF] mb-2.5 font-medium">
                  <Calendar className="w-3 h-3 text-[#FF7547]" />
                  <span>{exp.date}</span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

