import { Sun, Moon, Sparkles } from 'lucide-react'

export default function ThemeToggle({ theme, setTheme }) {
  const next = theme === 'anime' ? 'tech' : 'anime'
  const label = theme === 'anime' ? 'Tech Mode' : 'Anime Mode'
  return (
    <button
      onClick={() => setTheme(next)}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
      title={`Switch to ${label}`}
    >
      {theme === 'anime' ? <Sun size={16} /> : <Sparkles size={16} />}
      <span>{label}</span>
    </button>
  )
}
