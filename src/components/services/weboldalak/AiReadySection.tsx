'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bot, CheckCircle, Sparkles, Globe, FileText, Code } from 'lucide-react'

const aiTools = [
  {
    name: 'ChatGPT',
    bg: '#10a37f',
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    bg: '#1a1a2e',
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/>
      </svg>
    ),
  },
  {
    name: 'Gemini',
    bg: '#1a73e8',
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
        <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
      </svg>
    ),
  },
  {
    name: 'Claude',
    bg: '#cc785c',
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
      </svg>
    ),
  },
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
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: tool.bg }}
                >
                  {tool.logo}
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
