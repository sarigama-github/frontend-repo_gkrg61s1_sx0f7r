import { motion } from 'framer-motion'

export default function About({ theme = 'anime' }) {
  const isAnime = theme === 'anime'
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
          <p className="text-slate-300 mt-2">A quick intro and what I care about.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-2xl border border-white/10 ${isAnime ? 'bg-pink-500/5' : 'bg-slate-900/60'} backdrop-blur p-6`}
        >
          {/* hand-drawn divider effect */}
          <svg aria-hidden="true" className="absolute -top-3 left-6 h-6 w-24 text-white/20" viewBox="0 0 120 24" fill="none">
            <path d="M2 12 C 20 2, 40 22, 60 12 S 100 2, 118 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>

          <p className="text-slate-200 leading-relaxed">
            Hey there! Welcome to my portfolio 🚀 I’m <span className="font-semibold text-white">Jayesh Patil</span>, a Software Engineer passionate about turning ideas into reality through clean, efficient code. But I’m not just about coding — I believe that great software is built by great teams. That’s why I’m equally skilled in people management, leadership, and collaboration. I’m always eager to learn something new, whether it’s mastering a new technology, optimizing workflows, or understanding what makes a team tick.
          </p>
          <p className="text-slate-200 leading-relaxed mt-4">
            From crafting scalable web applications to leading teams and projects, I love solving problems and bringing innovative solutions to life. Whether it's full-stack development, system design, or guiding a team toward success, I thrive in both the technical and managerial worlds. Feel free to explore my work, and if you’d like to collaborate, discuss ideas, or just have a chat, drop me a message! Let’s build something amazing together. 🚀
          </p>
        </motion.div>
      </div>
    </section>
  )
}
