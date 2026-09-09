import heroBanner from '../assets/images/hero-banner.jpg'

export default function Hero() {
  return (
    <section id="top" className="bg-warm-cream/[0.78]">
      <div className="min-h-[calc(100vh-70px)] w-full overflow-hidden">
        <img
          src={heroBanner}
          alt="Chuski Lab — Freeze Your Mood. Now open at Sahara Center, Sharjah. Fresh ingredients, unique flavours, happiness in every bite, veg friendly."
          className="h-[calc(100vh-70px)] w-full object-cover object-center"
        />
      </div>

      <div className="border-b border-ink-navy/10 bg-white/[0.65] px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-body text-sm text-ink-navy/70 sm:text-base">
            <span className="font-bold text-lab-pink">● Now Open</span> &nbsp;Sahara Center, Sharjah — right next to Khau Galli
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#menu"
              className="rounded-full bg-lab-pink px-6 py-2.5 font-display text-sm font-bold text-white shadow-pop transition hover:-translate-y-0.5 hover:bg-lab-pink/90"
            >
              View the Menu
            </a>
            <a
              href="#find-us"
              className="rounded-full border-2 border-neon-teal px-6 py-2.5 font-display text-sm font-bold text-teal-text transition hover:bg-neon-teal hover:text-ink-navy"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
