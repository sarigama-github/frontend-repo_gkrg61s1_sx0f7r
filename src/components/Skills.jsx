import { motion } from 'framer-motion'
import { Code, Server, Rocket } from 'lucide-react'

const skills = [
  {
    icon: Code,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Vite'],
    gradient: 'from-pink-500 to-indigo-500',
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node', 'FastAPI', 'MongoDB', 'Auth', 'REST/GraphQL'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Leadership',
    items: ['People Mgmt', 'Mentoring', 'Project Planning', 'Agile', 'Communication'],
    gradient: 'from-amber-500 to-rose-500',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Superpowers</h2>
          <p className="text-slate-300 mt-2">Engineering craft + leadership that ships.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, items, gradient }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white mb-4`}>
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">{i}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
