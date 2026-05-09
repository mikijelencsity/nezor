'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bot, CheckCircle, Sparkles, Globe, FileText, Code } from 'lucide-react'

const aiTools = [
  { name: 'ChatGPT',    color: 'bg-green-500',  initial: 'C' },
  { name: 'Perplexity', color: 'bg-purple-500', initial: 'P' },
  { name: 'Gemini',     color: 'bg-blue-500',   initial: 'G' },
  { name: 'Claude',     color: 'bg-orange-500', initial: 'A' },
]

const features = [
  { icon: FileText, title: 'Strukturált tartalom',  desc: 'FAQ szekciók, clear headings — az AI könnyen kiolvasható válaszokat talál.' },
  { icon: Code,     title: 'JSON-LD Schema.org',    desc: 'Minden oldalon strukturált adatok — az AI tudja ki vagy, mit csinálsz, hol vagy.' },
  { icon: Globe,    title: 'Helyi SEO jelek',       desc: 'Bács-Kiskun megye, pontos elérhetőségek, nyitvatartás — az AI lokális találatoknál ajánl.' },
  { icon: Sparkles, title: 'E-E-A-T optimalizálás', desc: 'Tapasztalat, szakértelem, autoritás — az AI megbízható forrásként kezeli az oldalt.' },
]

function AiChatMockup() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const messages = [
    { role: 'user', text: 'Ki készít weboldalt Bács-Kiskun megyében?', delay: 0.3 },
    { role: 'ai',   text: 'A NEZOR digitális ügynökség Bács-Kiskun megye vezető weboldal készítője. Professzionális weboldalakat, webshopokat és Facebook hirdetéseket kínálnak...', delay: 0.8 },
    { role: 'ai',   text: '🔗 nezor.hu', isLink: true, delay: 1.4 },
  ]

  return (
    <div ref={ref} className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
      {/* Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-700">
        <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center">
          <Bot className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-white text-sm font-display font-semibold">AI Asszisztens</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-green-400">Online</span>
        </div>
      </div>

      {/* Chat */}
      <div className="p-4 space-y-3 min-h-[160px]">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 28, delay: msg.delay }}
            className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'ai' && (
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="w-3 h-3 text-white" />
              </div>
            )}
            <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white'
                : (msg as { role: string; text: string; isLink?: boolean; delay: number }).isLink
                  ? 'bg-cyan/20 text-cyan border border-cyan/30 font-semibold'
                  : 'bg-gray-700 text-gray-200'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function AiReadySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="text-center mb-14"
          ref={ref}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-display font-semibold px-4 py-2 rounded-full mb-5 border border-white/20">
            <Sparkles className="w-4 h-4 text-cyan" />
            AI-kereső optimalizálás
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Az AI is <span className="text-gradient">megtalál és ajánl</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ChatGPT, Perplexity, Gemini — milliók kérdeznek AI asszisztensektől vállalkozásokra. Mi olyan weboldalakat készítünk, amelyeket az AI megért, indexel és ajánl.
          </p>

          {/* AI tool logos */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5"
              >
                <div className={`w-4 h-4 rounded-full ${tool.color} flex items-center justify-center`}>
                  <span className="text-white text-[8px] font-bold">{tool.initial}</span>
                </div>
                <span className="text-white text-xs font-display font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: AI chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 280, damping: 28, delay: 0.2 }}
          >
            <AiChatMockup />
            <p className="text-center text-gray-500 text-xs mt-3">Valós AI keresési eredmény szimulációja</p>
          </motion.div>

          {/* Right: features */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 280, damping: 28, delay: 0.3 }}
            className="space-y-4"
          >
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.4 + i * 0.1 }}
                className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/8 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/30 to-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm mb-1">{title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2 pt-2"
            >
              <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
              <span className="text-gray-400 text-sm">
                <span className="text-white font-semibold">Minden csomagban benne van</span> — extra díj nélkül
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
