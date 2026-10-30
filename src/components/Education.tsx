import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, GraduationCap } from 'lucide-react'
import ngpLogo from '../assets/ngp_logo.png'
import senguntharLogo from '../assets/sengunthar_logo.png'

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-[#232328]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#FF7547] tracking-wider">05 —</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
              Education
            </h2>
          </div>
          <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">
            Education
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl mb-10">
          My academic background and learning path.
        </p>

        {/* TWO COMPACT EDUCATION CARDS MATCHING SCREENSHOT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* DR. NGP INSTITUTE OF TECHNOLOGY */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="portfolio-card p-5 flex items-start gap-4 group hover:border-[#FF7547]/40"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#0D0D0F] border border-[#232328] p-1 flex items-center justify-center">
              <img
                src={ngpLogo}
                alt="Dr. NGP Institute of Technology Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF7547] transition-colors truncate">
                  Dr. NGP Institute of Technology
                </h3>
              </div>

              <p className="text-xs font-medium text-neutral-300 mb-2">
                B.Tech - Artificial Intelligence and Data Science
              </p>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[11px] text-[#9CA3AF]">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#FF7547]" />
                  <span>2023 – 2027 (Final Year)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#9B72F2]" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SENGUNTHAR HIGHER SECONDARY SCHOOL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="portfolio-card p-5 flex items-start gap-4 group hover:border-[#FF7547]/40"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#0D0D0F] border border-[#232328] p-1 flex items-center justify-center">
              <img
                src={senguntharLogo}
                alt="Sengunthar Higher Secondary School Logo"
                className="w-full h-full object-contain rounded-full bg-white/90 p-0.5"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF7547] transition-colors truncate">
                  Sengunthar Higher Secondary School
                </h3>
              </div>

              <p className="text-xs font-medium text-neutral-300 mb-2">
                Higher Secondary Education (Class 11 &amp; 12)
              </p>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[11px] text-[#9CA3AF]">
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 text-[#FF7547]" />
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#9B72F2]" />
                  <span>Tharamangalam, Salem</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

