import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, Layers, CheckCircle2, Cpu, FileText } from 'lucide-react'
import cognivisImg from '../assets/project_cognivis.png'
import staymateImg from '../assets/project_staymate.png'
import narratovisionImg from '../assets/project_narratovision.png'

interface Project {
  id: string
  title: string
  category: string
  categoryBadge: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl?: string
  overview: string
  problemStatement: string
  objective: string
  keyFeatures: string[]
  architecture: string
  contribution: string
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 'cognivis',
      title: 'Cognivis',
      category: 'RAG / AI',
      categoryBadge: 'RAG • AI',
      description: 'An AI-powered knowledge assistant that uses Retrieval-Augmented Generation to retrieve relevant information and generate context-aware responses.',
      technologies: ['RAG', 'LLM', 'Embeddings', 'Vector Database', 'Python', 'FastAPI', 'React'],
      image: cognivisImg,
      githubUrl: 'https://github.com/Abdul-stack871/Cognivis',
      overview: 'Cognivis is a document-intelligence workspace. You upload documents, ask questions about them, and receive answers that carry verifiable source citations (document title, page, and quoted passage). It pairs a React TypeScript frontend with a FastAPI backend.',
      problemStatement: 'Knowledge workers, students, and engineers routinely work with lengthy PDFs and technical reports. Traditional keyword search is slow, generated answers without citations cannot be verified, and system structures remain buried in prose.',
      objective: 'Enable document-grounded question answering with transparent evidence citations, paragraph chunking, and visual knowledge exploration.',
      keyFeatures: [
        'Document upload & PDF text extraction with page-level tracking via pypdf',
        'Paragraph-based semantic chunking and index storage',
        'Document-scoped Q&A with three-step reasoning traces (intent, retrieval, synthesis)',
        'Verifiable source citations with document name, page number, and passage quotes',
        'Graceful offline fallback for resilient local operation'
      ],
      architecture: 'FastAPI REST backend with local chunk index + Gemini LLM integration, coupled with a React 19 + TypeScript frontend with Tailwind CSS.',
      contribution: 'Architected the core RAG ingestion and retrieval logic, implemented citation tracking, and designed the responsive user interface.'
    },
    {
      id: 'staymate',
      title: 'StayMate AI',
      category: 'Full Stack',
      categoryBadge: 'Full Stack',
      description: 'A student accommodation and roommate discovery platform designed to help students find suitable places to stay and compatible roommates.',
      technologies: ['React', 'Spring Boot', 'MySQL', 'JWT Security', 'Leaflet Maps'],
      image: staymateImg,
      githubUrl: 'https://github.com/Abdul-stack871/Stay-Mate',
      overview: 'StayMate AI is a student-focused, broker-free rental discovery platform designed to help students, interns, and working bachelors locate affordable accommodations near campus and find compatible roommates.',
      problemStatement: 'College students often struggle to find verified, affordable housing near institutions, negotiate transparent terms, and discover compatible roommates with similar study habits.',
      objective: 'Provide a secure, centralized web platform connecting students with verified housing listings, roommate compatibility scoring, and interactive location maps.',
      keyFeatures: [
        'Role-based secure authentication with Spring Security and JWT tokens',
        'Interactive property search with OpenStreetMap and Leaflet.js map view',
        'Student roommate matching questionnaire and compatibility scoring',
        'Property listing management and monthly budget estimation calculator',
        'Direct inquiry management and responsive dashboard'
      ],
      architecture: 'Spring Boot 3.3 backend REST API with Spring Data JPA and MySQL database, paired with a React.js and Tailwind CSS client application.',
      contribution: 'Developed Spring Boot REST endpoints, mapped MySQL database schema with JPA entities, implemented JWT security, and crafted the React client interface.'
    },
    {
      id: 'narratovision',
      title: 'NarratoVision',
      category: 'Generative AI',
      categoryBadge: 'Generative AI',
      description: 'A generative AI application that combines text-based storytelling with AI-powered image generation.',
      technologies: ['Python', 'Streamlit', 'OpenRouter API', 'Stable Diffusion', 'Prompt Engineering'],
      image: narratovisionImg,
      githubUrl: 'https://github.com/Abdul-stack871/NarratoVission-AI',
      overview: 'NarratoVision combines large language models with text-to-image diffusion models to allow authors and storytellers to generate cohesive narrative chapters alongside visual scene artwork.',
      problemStatement: 'Visual storytelling typically requires separate writing and graphic illustration skill sets, making rapid conceptualization of illustrated stories challenging for solo creators.',
      objective: 'Unify narrative generation with automated scene-level visual illustration through an intuitive web application.',
      keyFeatures: [
        'Interactive story arc prompting and character development',
        'Automated scene decomposition and prompt engineering for image synthesis',
        'OpenRouter API LLM orchestration for dynamic narrative continuation',
        'Stable Diffusion visual generation for each narrative beat',
        'Exportable illustrated story format'
      ],
      architecture: 'Python Streamlit web interface orchestrating OpenRouter API endpoints and Stable Diffusion image synthesis pipelines.',
      contribution: 'Designed the application architecture, implemented prompt chaining for visual style consistency, and built the Streamlit interface.'
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[#232328]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[#FF7547] tracking-wider">02 —</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                Featured Projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-xl">
              A collection of projects built with modern technologies, focusing on AI, web development, and real-world problem solving.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">
              Real-World Projects
            </span>
            <a
              href="https://github.com/Abdul-stack871?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-[#151518] border border-[#2B2B32] hover:border-[#FF7547]/50 hover:bg-[#1A1A20] transition-all group"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-3 h-3 text-[#FF7547] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mb-8" />

        {/* 2-COLUMN PROJECT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`portfolio-card overflow-hidden flex flex-col justify-between group ${
                idx === 2 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''
              }`}
            >
              <div>
                {/* CARD TOP PREVIEW & BADGE */}
                <div className="p-4 sm:p-5 pb-0">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#0D0D0F] border border-[#232328] mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-[#151518]/90 text-[#9B72F2] border border-[#9B72F2]/30 backdrop-blur-md">
                        {project.categoryBadge}
                      </span>
                    </div>
                  </div>

                  {/* TITLE & CATEGORY */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF7547] transition-colors flex items-center gap-1.5">
                      {project.title}
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                  </div>

                  {/* SHORT DESCRIPTION */}
                  <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* TECH BADGES */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#1F1F24] text-neutral-300 border border-[#2B2B32]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#1F1F24] text-[#9CA3AF] border border-[#2B2B32]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* CARD BOTTOM ACTIONS */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-[#232328] flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-[#1A1A20] hover:bg-[#22222A] border border-[#2B2B32] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#FF7547] hover:bg-[#ff855c] transition-all shadow-sm"
                >
                  <span>View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#151518] border border-[#2B2B32] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
            >
              {/* MODAL HEADER */}
              <div className="p-5 sm:p-6 border-b border-[#232328] flex items-center justify-between sticky top-0 bg-[#151518]/95 backdrop-blur-md z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FF7547]/10 text-[#FF7547] border border-[#FF7547]/20">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-white bg-[#1F1F24] hover:bg-[#2B2B32] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* MODAL BODY */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
                
                {/* PREVIEW IMAGE */}
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#0D0D0F] border border-[#232328]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* OVERVIEW */}
                <div>
                  <h4 className="text-xs font-semibold text-[#FF7547] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" /> Project Overview
                  </h4>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* PROBLEM & OBJECTIVE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-[#0D0D0F] border border-[#232328]">
                    <h5 className="text-[11px] font-semibold text-neutral-200 uppercase tracking-wider mb-1">
                      Problem Statement
                    </h5>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {selectedProject.problemStatement}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0D0D0F] border border-[#232328]">
                    <h5 className="text-[11px] font-semibold text-neutral-200 uppercase tracking-wider mb-1">
                      Project Objective
                    </h5>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {selectedProject.objective}
                    </p>
                  </div>
                </div>

                {/* KEY FEATURES */}
                <div>
                  <h4 className="text-xs font-semibold text-[#FF7547] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7547] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ARCHITECTURE & CONTRIBUTION */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-[#9B72F2] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Architecture &amp; Workflow
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-[#9B72F2] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" /> My Contribution
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {selectedProject.contribution}
                    </p>
                  </div>
                </div>

                {/* TECH STACK BADGES */}
                <div>
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#1F1F24] text-neutral-200 border border-[#2B2B32]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* MODAL FOOTER */}
              <div className="p-4 sm:p-5 border-t border-[#232328] bg-[#151518] flex items-center justify-between gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#232328] hover:bg-[#2B2B32] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
