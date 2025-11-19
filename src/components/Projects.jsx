import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Data Analysis Tool for Dice',
    desc: 'Interactive analytics dashboard extracting insights from raw datasets with charts, filters, and exports.',
    tags: ['React', 'Python', 'Pandas'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1551281044-8a5bc1ba261c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'MIS Generator for Colonel',
    desc: 'Automated Management Information System with scheduled reports and role-based access.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Traquer — Employee Tracking',
    desc: 'Real-time employee activity tracking with geo-fencing and attendance analytics.',
    tags: ['Next.js', 'PostgreSQL', 'Maps'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Zomato Clone',
    desc: 'Restaurant discovery and ordering experience with search, filters, and cart flow.',
    tags: ['React', 'Tailwind', 'Firebase'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
          <p className="text-slate-300 mt-2">A few projects I’ve built or contributed to.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
