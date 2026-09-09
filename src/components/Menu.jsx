import { menuItems } from '../data/menu'

const ACCENT_BAR = {
  'lab-pink': 'bg-lab-pink',
  'energy-orange': 'bg-energy-orange',
  'chuski-blue': 'bg-chuski-blue',
  'neon-teal': 'bg-neon-teal',
}

const ACCENT_TINT = {
  'lab-pink': 'bg-lab-pink/[0.06]',
  'energy-orange': 'bg-energy-orange/[0.07]',
  'chuski-blue': 'bg-chuski-blue/[0.06]',
  'neon-teal': 'bg-neon-teal/[0.08]',
}

const ACCENT_TEXT = {
  'lab-pink': 'text-lab-pink',
  'energy-orange': 'text-orange-text',
  'chuski-blue': 'text-blue-text',
  'neon-teal': 'text-teal-text',
}

export default function Menu() {
  return (
    <section id="menu" className="bg-white/[0.8] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-body text-sm font-bold tracking-[0.2em] text-orange-text uppercase">
            The Menu
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-ink-navy sm:text-5xl">
            Freeze Your Mood.
          </h2>
          <p className="mt-4 max-w-lg font-body text-base text-ink-navy/60 sm:text-lg">
            Starting from just <span className="font-semibold text-ink-navy/85">10 AED</span> — kulfi, chuski,
            popsicles &amp; whole-fruit ice cream, made fresh.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className={`group overflow-hidden rounded-3xl shadow-card ring-1 ring-ink-navy/5 transition hover:-translate-y-1.5 hover:shadow-pop ${ACCENT_TINT[item.accent]}`}
            >
              <div className={`h-2 ${ACCENT_BAR[item.accent]}`} />
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`flex h-full w-full flex-col items-center justify-center gap-2 ${ACCENT_TINT[item.accent]}`}>
                    <PopsicleGlyph className={ACCENT_TEXT[item.accent]} />
                    <span className={`font-body text-xs font-bold tracking-wide uppercase ${ACCENT_TEXT[item.accent]}`}>
                      Photo coming soon
                    </span>
                  </div>
                )}
                <span
                  className={`absolute top-3 right-3 rounded-full px-3 py-1.5 font-display text-sm font-extrabold text-white shadow-pop ${ACCENT_BAR[item.accent]}`}
                >
                  {item.price} AED
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink-navy">{item.name}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-navy/60">{item.flavors}</p>
                <span className={`mt-3 inline-block font-display text-xs font-bold tracking-wide uppercase ${ACCENT_TEXT[item.accent]}`}>
                  Chuski Lab Original
                </span>
              </div>
            </article>
          ))}

          {/* closing tile — keeps the grid from ending on an awkward orphan and reinforces the CTA */}
          <a
            href="#find-us"
            className="relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-warm-cream p-8 text-center shadow-card transition hover:-translate-y-1.5"
          >
            <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-chuski-blue via-lab-pink to-energy-orange" />
            <span className="font-display text-2xl font-extrabold text-ink-navy">More flavors dropping soon</span>
            <span className="font-body text-sm text-ink-navy/55">Follow along for the full opening menu &amp; specials.</span>
            <span className="mt-2 font-display text-sm font-bold text-lab-pink">Find us &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function PopsicleGlyph({ className }) {
  return (
    <svg width="34" height="46" viewBox="0 0 34 46" fill="none" className={className}>
      <rect x="7" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
      <rect x="14" y="33" width="6" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
    </svg>
  )
}
