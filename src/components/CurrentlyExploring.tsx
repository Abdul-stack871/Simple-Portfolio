import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Network, Layers, Sparkles, Blocks } from 'lucide-react'

interface ExploringArea {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  accent: 'orange' | 'purple'
}

export const CurrentlyExploring: React.FC = () => {
  const learningAreas: ExploringArea[] = [
    {
      id: 'full-stack',
      title: 'Full Stack Development',
      description: 'Exploring frontend and backend development to build complete web applications.',
      icon: <Layers className="w-4 h-4 text-[#FF7547]" />,
      accent: 'orange'
    },
    {
      id: 'gen-ai',
      title: 'Generative AI & LLMs',
      description: 'Exploring large language models and practical generative AI applications.',
      icon: <Sparkles className="w-4 h-4 text-[#9B72F2]" />,
      accent: 'purple'
    },
    {
      id: 'rag-agents',
      title: 'RAG & AI Agents',
      description: 'Learning retrieval systems, embeddings, and AI-powered agents.',
      icon: <Bot className="w-4 h-4 text-[#FF7547]" />,
      accent: 'orange'
    },
    {
      id: 'modern-web',
      title: 'Modern Web Technologies',
      description: 'Exploring modern development practices and scalable web applications.',
      icon: <Network className="w-4 h-4 text-[#9B72F2]" />,
      accent: 'purple'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Technology',
      description: 'Exploring blockchain fundamentals and decentralized technologies.',
      icon: <Blocks className="w-4 h-4 text-[#FF7547]" />,
      accent: 'orange'
    }
  ]

  return (
    <section id="exploring" className="py-16 md:py-24 border-t border-[#232328]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#FF7547] tracking-wider">06 —</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
              Currently Exploring
            </h2>
          </div>
          <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">
            Always Learning
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl mb-10">
          Always exploring new technologies to grow and build better solutions.
        </p>

        {/* 5 COMPACT CARDS GRID MATCHING SCREENSHOT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {learningAreas.map((area, idx) => {
            const isOrange = area.accent === 'orange'
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`portfolio-card p-4 sm:p-5 flex flex-col justify-between group transition-all ${
                  isOrange ? 'hover:border-[#FF7547]/40' : 'hover:border-[#9B72F2]/40'
                }`}
              >
                <div>
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3.5 transition-transform group-hover:scale-110 ${
                      isOrange ? 'bg-[#FF7547]/10 border border-[#FF7547]/20' : 'bg-[#9B72F2]/10 border border-[#9B72F2]/20'
                    }`}
                  >
                    {area.icon}
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-white mb-2 group-hover:text-neutral-100">
                    {area.title}
                  </h3>

                  <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#232328] flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isOrange ? 'bg-[#FF7547]' : 'bg-[#9B72F2]'
                    }`}
                  />
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">
                    In Progress
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

