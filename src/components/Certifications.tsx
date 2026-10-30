import React from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy, Sparkles } from 'lucide-react'

interface CertificationItem {
  id: string
  title: string
  organization: string
  institution: string
  badge?: string
  score?: string
  status?: string
  iconColor: string
  badgeColor: string
}

export const Certifications: React.FC = () => {
  const certifications: CertificationItem[] = [
    {
      id: 'hci-iiitd',
      title: 'Human Computer Interaction',
      organization: 'NPTEL',
      institution: 'IIIT Delhi',
      badge: 'NPTEL Elite',
      score: '86%',
      iconColor: 'bg-[#FF7547]',
      badgeColor: 'text-[#FF7547] border-[#FF7547]/30 bg-[#FF7547]/10'
    },
    {
      id: 'hci-iitg',
      title: 'Design & Implementation of Human–Computer Interfaces',
      organization: 'NPTEL',
      institution: 'IIT Guwahati',
      badge: 'NPTEL Elite',
      score: '61%',
      iconColor: 'bg-[#EA580C]',
      badgeColor: 'text-[#EA580C] border-[#EA580C]/30 bg-[#EA580C]/10'
    },
    {
      id: 'privacy-iiith',
      title: 'Privacy and Security in Online Social Media',
      organization: 'NPTEL',
      institution: 'IIIT Hyderabad',
      badge: 'NPTEL',
      score: '57%',
      iconColor: 'bg-[#9B72F2]',
      badgeColor: 'text-[#9B72F2] border-[#9B72F2]/30 bg-[#9B72F2]/10'
    },
    {
      id: 'isea-cybersec',
      title: 'Foundations of Cyber Security: Threats, Tools & Defense',
      organization: 'ISEA Project Phase III',
      institution: 'Ministry of Electronics and IT',
      badge: 'Cyber Security Workshop',
      status: 'Completed',
      iconColor: 'bg-[#06B6D4]',
      badgeColor: 'text-[#06B6D4] border-[#06B6D4]/30 bg-[#06B6D4]/10'
    }
  ]

  const achievements = [
    {
      title: 'VIHANSA 2K26',
      subtitle: '24-Hour National Level Hackathon',
      details: 'Participated in an intensive 24-hour national hackathon developing an NLP-based sentiment analysis solution.',
      category: 'Hackathon Participation'
    },
    {
      title: 'TECHNOVA \'26',
      subtitle: 'National-Level Hackathon',
      details: 'Participated in competitive multi-round problem solving and rapid prototype development.',
      category: 'Hackathon Participation'
    },
    {
      title: 'ICRIT \'26 Presentation',
      subtitle: 'International Conference on Recent Innovations in Technology',
      details: 'Authored and presented paper: "Integrated Cooperative Farming System with Farmer Connectivity and Crop Recommendation".',
      category: 'Research Presentation'
    }
  ]

  return (
    <section id="certificates" className="py-16 md:py-24 border-t border-[#232328]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#FF7547] tracking-wider">04 —</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
              Certifications &amp; Achievements
            </h2>
          </div>
          <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">
            Achievements
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl mb-10">
          Certifications and achievements that reflect my learning and involvement in the tech community.
        </p>

        {/* 4 COMPACT CERTIFICATION CARDS GRID MATCHING SCREENSHOT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="portfolio-card p-5 flex flex-col justify-between group hover:border-[#FF7547]/40"
            >
              <div>
                {/* ICON & BADGE */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className={`w-8 h-8 rounded-lg ${cert.iconColor} flex items-center justify-center text-white shadow-md`}>
                    <Award className="w-4 h-4" />
                  </div>
                  {cert.badge && (
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${cert.badgeColor}`}>
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* TITLE & ORG */}
                <h3 className="text-sm font-bold text-white group-hover:text-[#FF7547] transition-colors leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-[#9CA3AF]">
                  {cert.organization} • {cert.institution}
                </p>
              </div>

              {/* SCORE / STATUS FOOTER */}
              <div className="pt-4 mt-3 border-t border-[#232328] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#9CA3AF]">Score / Status</span>
                {cert.score ? (
                  <span className="font-bold text-[#FF7547]">{cert.score}</span>
                ) : (
                  <span className="font-semibold text-[#06B6D4]">{cert.status}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEPARATE ACHIEVEMENT HIGHLIGHTS */}
        <div className="portfolio-card p-6 border-[#2B2B32]">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-[#FF7547]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Achievements &amp; Presentations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#0D0D0F] border border-[#232328] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-semibold text-[#9B72F2] uppercase tracking-wide">
                      {item.category}
                    </span>
                    <Sparkles className="w-3 h-3 text-[#FF7547]" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-medium mb-1.5">
                    {item.subtitle}
                  </p>
                  <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
