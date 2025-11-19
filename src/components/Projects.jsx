import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Chat',
    desc: 'Socket-powered chat with typing indicators and playful avatars.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E‑commerce',
    desc: 'Headless storefront with blazing fast product search.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Engine',
    desc: 'Animated personal sites with theme builder and CMS.',
    tags: ['Vite', 'Framer Motion', 'FastAPI'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
          <p className="text-slate-300 mt-2">A mix of real clients and passion builds.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt="cover" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
                  </div>
                  <ExternalLink className="text-slate-400 group-hover:text-white transition" size={18} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 text-slate-300 text-xs border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
