import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s build something fun</h2>
          <p className="text-slate-300 mt-2">Tell me about your project and timeline.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={(e)=>{e.preventDefault(); alert('Thanks! I will reply soon.')}}
          className="grid md:grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6"
        >
          <div className="md:col-span-1">
            <label className="block text-slate-300 text-sm mb-2">Name</label>
            <input required className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-slate-300 text-sm mb-2">Email</label>
            <input type="email" required className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-300 text-sm mb-2">Message</label>
            <textarea rows={5} required className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="What are we building?" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-slate-400 text-sm">Response within 24 hours.</p>
            <button className="px-5 py-3 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition">Send message</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
