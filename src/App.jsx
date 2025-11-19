import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import StickerDeck from './components/StickerDeck'

function App() {
  const [theme, setTheme] = useState('anime') // 'anime' | 'tech'

  const bgClass = useMemo(() => {
    if (theme === 'tech') {
      return 'bg-slate-950'
    }
    return 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
  }, [theme])

  const particles = useMemo(() => {
    if (theme === 'tech') {
      return 'pointer-events-none absolute inset-0 [background:radial-gradient(60rem_60rem_at_20%_10%,rgba(56,189,248,0.06),transparent),radial-gradient(50rem_50rem_at_80%_0%,rgba(99,102,241,0.06),transparent),radial-gradient(40rem_40rem_at_50%_100%,rgba(34,197,94,0.05),transparent)]'
    }
    return 'pointer-events-none absolute inset-0 [background:radial-gradient(60rem_60rem_at_10%_10%,rgba(56,189,248,0.08),transparent),radial-gradient(50rem_50rem_at_90%_10%,rgba(217,70,239,0.08),transparent),radial-gradient(40rem_40rem_at_50%_100%,rgba(234,179,8,0.05),transparent)]'
  }, [theme])

  return (
    <div className={`min-h-screen ${bgClass} text-white relative`}>\n      <div className={particles} />

      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About theme={theme} />
      <Skills />
      <Projects />
      <Contact />

      {theme === 'anime' && <StickerDeck show />}

      <footer className="py-10 text-center text-slate-400">
        © {new Date().getFullYear()} Jayesh Patil — Software Engineer
      </footer>
    </div>
  )
}

export default App
