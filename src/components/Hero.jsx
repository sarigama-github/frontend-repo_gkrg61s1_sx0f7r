import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-28">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(56,189,248,0.35)]"
            >
              Building Playful Web Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg md:text-xl text-slate-200/90 max-w-xl"
            >
              I’m a full‑stack developer crafting modern, animated interfaces with robust backends. Let’s turn ideas into interactive stories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition">
                See my work
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/10 transition">
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-6 text-center"
            >
              {["React", "Node", "Cloud"].map((t) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur p-4 text-slate-200">
                  <div className="text-lg font-semibold">{t}</div>
                  <div className="text-xs text-slate-400">Pro level</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
