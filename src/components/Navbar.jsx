import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 text-white font-bold">FD</span>
              <span className="text-white/90 font-semibold tracking-tight">Full‑Stack Dev</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="ml-2 h-6 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <a href="https://github.com/" target="_blank" className="text-slate-300 hover:text-white"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
                <a href="#contact" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
              </div>
            </nav>

            <button onClick={() => setOpen((v)=>!v)} className="md:hidden text-white/80">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={()=>setOpen(false)} className="block text-slate-200">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" className="text-slate-300 hover:text-white"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
                <a href="#contact" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
