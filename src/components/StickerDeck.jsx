import { motion } from 'framer-motion'

const stickers = [
  { emoji: '🚀', color: 'from-fuchsia-500 to-blue-500' },
  { emoji: '✨', color: 'from-yellow-400 to-pink-500' },
  { emoji: '🛠️', color: 'from-emerald-500 to-teal-500' },
  { emoji: '🎯', color: 'from-sky-500 to-indigo-500' },
  { emoji: '🧠', color: 'from-purple-500 to-cyan-500' },
]

export default function StickerDeck({ show = true }) {
  if (!show) return null
  return (
    <div className="pointer-events-none fixed right-3 bottom-3 z-40 grid gap-2">
      {stickers.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: i * 0.05 }}
          className={`pointer-events-auto select-none rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg shadow-black/30`}
        >
          <div className="px-3 py-2 text-lg leading-none">{s.emoji}</div>
        </motion.div>
      ))}
    </div>
  )
}
