import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative">
      {/* soft particles */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60rem_60rem_at_10%_10%,rgba(56,189,248,0.07),transparent),radial-gradient(50rem_50rem_at_90%_10%,rgba(217,70,239,0.07),transparent),radial-gradient(40rem_40rem_at_50%_100%,rgba(34,197,94,0.05),transparent)]" />

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-10 text-center text-slate-400">
        © {new Date().getFullYear()} Your Name — Full‑Stack Developer
      </footer>
    </div>
  )
}

export default App
