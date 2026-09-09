import logo from '../assets/images/logo-badge.png'

export default function Footer() {
  return (
    <footer className="bg-warm-cream/[0.78] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-ink-navy/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Chuski Lab" className="h-12 w-12 rounded-full shadow-card" />
          <div>
            <p className="font-display text-lg font-extrabold text-ink-navy">
              <span className="text-chuski-blue">Chuski</span> <span className="text-lab-pink">Lab</span>
            </p>
            <p className="mt-0.5 font-body text-xs text-ink-navy/50">Freeze Your Mood.</p>
          </div>
        </div>
        <p className="font-body text-xs text-ink-navy/45">
          &copy; {new Date().getFullYear()} Chuski Lab &middot; A brand of AANKA Group
        </p>
      </div>
    </footer>
  )
}
