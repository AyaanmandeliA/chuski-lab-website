import { useState } from 'react'
import logo from '../assets/images/logo-badge.png'

const LINKS = [
  { href: '#about', label: 'The Lab' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#find-us', label: 'Find Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-md backdrop-blur-sm">
      <div className="h-1.5 bg-[linear-gradient(to_right,var(--color-chuski-blue),var(--color-neon-teal),var(--color-lab-pink),var(--color-energy-orange))]" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Chuski Lab" className="h-11 w-11 rounded-full" />
          <span className="font-display text-xl font-extrabold leading-none text-ink-navy">
            <span className="text-chuski-blue">Chuski</span> <span className="text-lab-pink">Lab</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm font-semibold tracking-wide text-ink-navy/75 transition hover:text-lab-pink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#find-us"
          className="hidden rounded-full bg-lab-pink px-5 py-2.5 font-display text-sm font-bold text-white shadow-pop transition hover:bg-lab-pink/90 md:inline-block"
        >
          Now Open
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full text-ink-navy md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-navy/10 bg-white px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 font-body text-base font-semibold text-ink-navy/85 hover:bg-warm-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
