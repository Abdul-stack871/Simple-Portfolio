import React, { useState } from 'react'
import { Mail, Linkedin, Github, Code2, Send, CheckCircle2, AlertCircle, Loader2, ShieldAlert } from 'lucide-react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: '' // Honeypot field for anti-spam
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'fallback'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const sanitizeInput = (str: string) => {
    return str.replace(/<[^>]*>?/gm, '').trim()
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    const cleanName = sanitizeInput(formData.name)
    const cleanEmail = sanitizeInput(formData.email)
    const cleanSubject = sanitizeInput(formData.subject)
    const cleanMessage = sanitizeInput(formData.message)

    if (!cleanName) {
      newErrors.name = 'Please provide your name'
    } else if (cleanName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!cleanEmail) {
      newErrors.email = 'Please provide your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!cleanSubject) {
      newErrors.subject = 'Please provide a subject'
    } else if (cleanSubject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    if (!cleanMessage) {
      newErrors.message = 'Please provide a message'
    } else if (cleanMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Honeypot check (silently drop bot submissions)
    if (formData.botcheck) {
      setStatus('error')
      setStatusMessage('Spam detection triggered.')
      return
    }

    // 2. Validate inputs
    if (!validate()) return

    // 3. Rate-limiting check (cooldown: 20 seconds between submissions)
    const lastSubmitTime = localStorage.getItem('last_contact_submit')
    const now = Date.now()
    if (lastSubmitTime && now - parseInt(lastSubmitTime, 10) < 20000) {
      setStatus('error')
      setStatusMessage('Please wait a moment before sending another message.')
      return
    }

    setStatus('loading')
    setStatusMessage('')

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    const sanitizedPayload = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message)
    }

    try {
      if (web3formsKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            ...sanitizedPayload,
            from_name: sanitizedPayload.name,
            reply_to: sanitizedPayload.email
          })
        })

        const data = await response.json()
        if (data.success) {
          localStorage.setItem('last_contact_submit', String(Date.now()))
          setStatus('success')
          setStatusMessage('Your message has been sent successfully! Abdul will get back to you shortly.')
          setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' })
        } else {
          throw new Error(data.message || 'Submission failed')
        }
      } else if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(sanitizedPayload)
        })

        if (!response.ok) {
          throw new Error('Contact endpoint returned a non-200 status code.')
        }

        localStorage.setItem('last_contact_submit', String(Date.now()))
        setStatus('success')
        setStatusMessage('Your message has been sent successfully! Abdul will get back to you shortly.')
        setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' })
      } else {
        // Transparent Mailto Fallback (Never fake success)
        const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${sanitizedPayload.subject}`)
        const mailtoBody = encodeURIComponent(
          `Hi Abdul,\n\nName: ${sanitizedPayload.name}\nEmail: ${sanitizedPayload.email}\n\nMessage:\n${sanitizedPayload.message}`
        )
        const mailtoUrl = `mailto:abdulrahumanrock15@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`

        window.open(mailtoUrl, '_blank')
        setStatus('fallback')
        setStatusMessage(
          'Email service credentials are not yet configured on this hosting instance. We opened your default mail client with your prefilled message addressed to abdulrahumanrock15@gmail.com.'
        )
      }
    } catch (err: any) {
      setStatus('error')
      setStatusMessage(err.message || 'Failed to deliver message. Please reach out via direct email.')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#232328]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#FF7547] tracking-wider">07 —</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
              Let's Connect
            </h2>
          </div>
          <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase">
            Get In Touch
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl mb-8 leading-relaxed">
          Have an opportunity, a project idea, or just want to connect? Feel free to reach out. I'm always open to meaningful conversations and new opportunities.
        </p>

        {/* QUICK CONTACT ACTION PILLS MATCHING SCREENSHOT */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="mailto:abdulrahumanrock15@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#FF7547] hover:bg-[#ff855c] transition-all shadow-[0_4px_16px_rgba(255,117,71,0.25)] hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Send an Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-rahuman281/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4 text-[#9B72F2]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Abdul-stack871"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://leetcode.com/u/AbdulStack/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4 text-[#FF7547]" />
            <span>LeetCode</span>
          </a>
        </div>

        {/* FULL FUNCTIONAL CONTACT FORM */}
        <div className="portfolio-card p-6 sm:p-8 border-[#2B2B32]">
          <h3 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
            <span>Send a Direct Message</span>
          </h3>
          <p className="text-xs text-[#9CA3AF] mb-6">
            Fill in the details below to reach out directly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* HONEYPOT ANTI-SPAM FIELD (Invisible to users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="botcheck">Do not fill this</label>
              <input
                id="botcheck"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.botcheck}
                onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* NAME */}
              <div>
                <label htmlFor="name-input" className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Your Name <span className="text-[#FF7547]">*</span>
                </label>
                <input
                  id="name-input"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#0D0D0F] border ${
                    errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-[#232328] focus:border-[#FF7547]'
                  } text-white placeholder-neutral-600 focus:outline-none transition-colors`}
                />
                {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email-input" className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Your Email <span className="text-[#FF7547]">*</span>
                </label>
                <input
                  id="email-input"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#0D0D0F] border ${
                    errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-[#232328] focus:border-[#FF7547]'
                  } text-white placeholder-neutral-600 focus:outline-none transition-colors`}
                />
                {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label htmlFor="subject-input" className="block text-xs font-medium text-neutral-300 mb-1.5">
                Subject <span className="text-[#FF7547]">*</span>
              </label>
              <input
                id="subject-input"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Internship Opportunity or Project Collaboration"
                className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#0D0D0F] border ${
                  errors.subject ? 'border-red-500/80 focus:border-red-500' : 'border-[#232328] focus:border-[#FF7547]'
                } text-white placeholder-neutral-600 focus:outline-none transition-colors`}
              />
              {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
            </div>

            {/* MESSAGE */}
            <div>
              <label htmlFor="message-input" className="block text-xs font-medium text-neutral-300 mb-1.5">
                Message <span className="text-[#FF7547]">*</span>
              </label>
              <textarea
                id="message-input"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#0D0D0F] border ${
                  errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-[#232328] focus:border-[#FF7547]'
                } text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none`}
              />
              {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
            </div>

            {/* STATUS FEEDBACK */}
            {statusMessage && (
              <div
                className={`p-3 rounded-lg text-xs flex items-start gap-2 ${
                  status === 'success'
                    ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300'
                    : status === 'fallback'
                    ? 'bg-amber-950/40 border border-amber-500/30 text-amber-300'
                    : 'bg-red-950/40 border border-red-500/30 text-red-300'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                ) : status === 'fallback' ? (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <span>{statusMessage}</span>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-[#9CA3AF]">
                Recipient: <strong className="text-neutral-300 font-medium">abdulrahumanrock15@gmail.com</strong>
              </span>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#FF7547] hover:bg-[#ff855c] transition-all disabled:opacity-60 shadow-[0_4px_16px_rgba(255,117,71,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
