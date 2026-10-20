import frontageImg from '../assets/images/real-frontage.jpg'

export default function About() {
  return (
    <section id="about" className="bg-warm-cream/[0.78] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-body text-sm font-bold tracking-[0.2em] text-blue-text uppercase">
            The Brand
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-ink-navy sm:text-5xl">
            A lab experimenting
            <br />
            with frozen joy.
          </h2>

          <p className="mt-6 font-body text-base leading-relaxed text-ink-navy/75 sm:text-lg">
            Chuski Lab is built on one idea: frozen treats deserve a little theatre. Test
            tubes, freeze-tube packaging, a candy-shop color palette — the &ldquo;Lab&rdquo;
            in the name runs through everything we make.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-navy/75 sm:text-lg">
            But it's not just new-and-shiny. Kulfi, matka, and chuski are desi frozen-treat
            staples — the flavors of a childhood summer. We're as much{' '}
            <span className="font-semibold text-chuski-blue">&ldquo;childhood, frozen&rdquo;</span>{' '}
            as we are{' '}
            <span className="font-semibold text-lab-pink">&ldquo;new and fun.&rdquo;</span>
          </p>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:max-w-md">
            <Fact label="Format" value="Operating kiosk" accent="chuski-blue" />
            <Fact label="Location" value="Sahara Center, Sharjah" accent="lab-pink" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5 sm:max-w-md">
            <img
              src={frontageImg}
              alt="Chuski Lab kiosk at Sahara Center, Sharjah"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const BORDER = { 'chuski-blue': 'border-chuski-blue', 'lab-pink': 'border-lab-pink' }

function Fact({ label, value, accent }) {
  return (
    <div className={`rounded-2xl border-l-4 bg-white px-4 py-3.5 shadow-card ${BORDER[accent]}`}>
      <p className="font-body text-[11px] font-bold tracking-wide text-ink-navy/45 uppercase">{label}</p>
      <p className="mt-0.5 font-display text-base font-bold text-ink-navy">{value}</p>
    </div>
  )
}
