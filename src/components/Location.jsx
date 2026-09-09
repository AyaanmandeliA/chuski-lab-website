export default function Location() {
  return (
    <section id="find-us" className="bg-warm-cream/[0.78] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-body text-sm font-bold tracking-[0.2em] text-teal-text uppercase">
              Find Us
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-ink-navy sm:text-5xl">
              Sahara Center,
              <br />
              Sharjah.
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink-navy/65 sm:text-lg">
              Right next to Khau Galli's Sahara Center branch. Chuski Lab is a separate
              brand, freezing up its own corner of the mall.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <InfoRow label="Status" value="Now open" dot="bg-lab-pink" />
              <InfoRow label="Format" value="Kiosk counter + packaged retail" dot="bg-neon-teal" />
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sahara+Center+Sharjah"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lab-pink px-6 py-3 font-display text-sm font-bold text-white shadow-pop transition hover:-translate-y-0.5 hover:bg-lab-pink/90"
              >
                Get Directions
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-chuski-blue px-6 py-3 font-display text-sm font-bold text-blue-text transition hover:bg-chuski-blue hover:text-white"
              >
                <InstaIcon />
                Follow Along
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-energy-orange/30 shadow-card">
            <iframe
              title="Sahara Center, Sharjah map"
              src="https://www.google.com/maps?q=Sahara+Center+Sharjah&output=embed"
              className="h-80 w-full lg:h-full lg:min-h-[26rem]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ label, value, dot }) {
  return (
    <div className="flex items-center gap-3 border-b border-ink-navy/10 pb-3">
      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
      <span className="w-20 shrink-0 font-body text-xs font-bold tracking-wide text-ink-navy/40 uppercase">
        {label}
      </span>
      <span className="font-body text-sm font-medium text-ink-navy/85">{value}</span>
    </div>
  )
}

function InstaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
