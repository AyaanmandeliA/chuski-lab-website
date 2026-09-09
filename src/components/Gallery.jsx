import frontage from '../assets/images/real-frontage.jpg'
import storefront from '../assets/images/real-storefront.jpg'
import foodPineapple from '../assets/images/food-pineapple.jpg'
import foodBerryPop from '../assets/images/food-berry-pop.jpg'
import foodRawMango from '../assets/images/food-raw-mango.jpg'

const ITEMS = [
  { img: frontage, caption: 'The kiosk, Sahara Center', span: 'sm:col-span-2 sm:row-span-2', ring: 'ring-lab-pink/40' },
  { img: storefront, caption: 'In the mall', span: 'sm:row-span-2', ring: 'ring-chuski-blue/40' },
  { img: foodPineapple, caption: 'Whole fruit ice cream', span: 'sm:row-span-2', ring: 'ring-energy-orange/40' },
  { img: foodBerryPop, caption: 'Fresh cut fruit popsicles', span: 'sm:col-span-2', ring: 'ring-neon-teal/50' },
  { img: foodRawMango, caption: 'Kairi Kaccha Aam', span: 'sm:col-span-2', ring: 'ring-lab-pink/40' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-warm-cream/[0.78] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-body text-sm font-bold tracking-[0.2em] text-teal-text uppercase">
            Brand in Real Life
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-ink-navy sm:text-5xl">
            Good Things Come in Frozen.
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[170px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 sm:auto-rows-[190px]">
          {ITEMS.map((it) => (
            <figure
              key={it.caption}
              className={`group relative h-full overflow-hidden rounded-2xl shadow-card ring-2 transition hover:ring-[3px] ${it.span} ${it.ring}`}
            >
              <img
                src={it.img}
                alt={it.caption}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-navy/85 via-ink-navy/10 to-transparent p-4 font-body text-sm font-semibold text-white">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
