import Image from "next/image";

const WHATSAPP = "https://wa.me/917057147014";

/* ---------- hand-drawn ink marks: round caps, slight wonk ---------- */

function IconDrop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.4 5.5C20.4 5.5 9.8 17.2 10.1 24.3c.2 5.2 4.4 9.4 9.7 9.3 5.4-.1 9.3-4.3 9.2-9.6C28.9 17.5 20.4 5.5 20.4 5.5Z" />
      <path d="M15.2 24.8c.2 2.6 2.1 4.7 4.6 5.1" strokeWidth="1.7" />
    </svg>
  );
}

function IconLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 32.5C8.2 21.3 15.4 10.2 31.6 7.8c1.9 14.4-6.2 25.2-19.4 24.9-3.4-.1-5.6-1-3.2-.2Z" />
      <path d="M11.5 30.5C16 24.4 21.8 18.6 28.4 14.3" strokeWidth="1.7" />
      <path d="M18.8 22.1c1.8.6 3.7.8 5.5.5M15.2 26.7c1.9.7 3.9 1 5.9.9" strokeWidth="1.6" />
    </svg>
  );
}

function IconMoon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M25.5 6.5a13.5 13.5 0 1 0 8.4 21.9A15.6 15.6 0 0 1 25.5 6.5Z" />
      <path d="M16.6 20.2c1.4 2.3 3.6 4.1 6.3 4.8" strokeWidth="1.6" />
    </svg>
  );
}

function IconHand({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M13.5 21V9.6a2.3 2.3 0 0 1 4.6 0V19m0-1.6V6.9a2.3 2.3 0 0 1 4.6 0v10.5m0-1.6V8.6a2.3 2.3 0 0 1 4.6 0v13.2" />
      <path d="M27.3 18.6c2.3 1.4 3.6 3.9 3.2 6.6-.6 4.2-3.4 8.6-8.6 8.6-6 0-8.3-3.2-10.5-7.4L9 22.4a2.4 2.4 0 0 1 4.1-2.4l.4.6" />
    </svg>
  );
}

function Squiggle({ className = "", width = 140 }: { className?: string; width?: number }) {
  return (
    <svg viewBox={`0 0 ${width} 16`} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={className} aria-hidden="true" style={{ "--dash": width * 1.6 } as React.CSSProperties}>
      <path className="smear" d={`M3 11q8-9 16 0t16 0 16 0 16 0 16 0 16 0 16 0`} />
    </svg>
  );
}

function GheeJar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 280" role="img" aria-label="Twakshree Shatdhauta Ghrita clay jar" className={className}>
      <ellipse cx="120" cy="264" rx="88" ry="11" fill="#33241A" opacity="0.14" />
      {/* squat clay pot — soft, hand-thrown */}
      <path d="M50 108c-6 34-8 74-2 104 3 16 18 26 72 26s69-10 72-26c6-30 4-70-2-104-4-18-24-26-70-26s-66 8-70 26Z" fill="#C86A3E" />
      <path d="M50 108c-6 34-8 74-2 104 3 16 18 26 72 26 10 0 18-.5 25-1.5-46-4-64-14-67-31-5-28-3-64 2-95 1-6 5-11 11-15-26 2-39 10-41 12Z" fill="#A9512A" opacity="0.55" />
      {/* rim + cloth lid */}
      <ellipse cx="120" cy="94" rx="74" ry="16" fill="#B4512B" />
      <path d="M46 92c14-10 118-10 148 0 2-16-10-30-30-36-8-2-9 4-16 4s-8-4-16-3c-9 1-9 5-17 5s-9-5-18-4-9 5-17 5-9-5-18-4-10 4-17 4-8-3-16-3c-20 4-28 24-26 28Z" fill="#F3E2B9" />
      <path d="M60 70q30-8 60-8t60 8" stroke="#E0C893" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* ghee surface */}
      <ellipse cx="120" cy="94" rx="58" ry="10" fill="#F5DDBF" />
      <ellipse cx="104" cy="93" rx="16" ry="4" fill="#FCF0DA" opacity="0.9" />
      {/* label decal — irregular edges like applied paper */}
      <path d="M72 148q2-4 6-4 34-6 84 0 4 0 5 4 3 20 0 40-1 4-5 4-50 6-84 0-4 0-5-4-3-20-1-40Z" fill="#FAF3E3" />
      <text x="120" y="170" textAnchor="middle" fontFamily="Georgia, serif" fontSize="15" fill="#3E2A1B">Twakshree</text>
      <path d="M88 179q32 5 64 0" stroke="#A9782B" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <text x="120" y="196" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10.5" fill="#7C3316" fontStyle="italic">shatdhauta ghrita</text>
      <text x="120" y="210" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8.5" fill="#B4512B" letterSpacing="2">MANJISTHA · 100× WASHED</text>
      {/* soft sheen, matte not glossy */}
      <ellipse cx="80" cy="150" rx="9" ry="42" fill="#FFFFFF" opacity="0.13" />
      {/* drip on the side — tactile */}
      <path d="M166 122c1 10 4 16 3 22a4.5 4.5 0 0 1-9 .5c-1-7 3-13 3-22" fill="#F5DDBF" opacity="0.9" />
    </svg>
  );
}

/* ---------- content ---------- */

const BENEFITS = [
  {
    icon: IconDrop,
    title: "Sinks in, never sits on",
    text: "Washed ghee loses its oiliness. It presses into dry, rough skin like soft clay and leaves no shine to sweat off.",
    tilt: "-rotate-1",
    blob: "left-[-18%] top-[-30%] h-52 w-52 bg-butter/80",
  },
  {
    icon: IconLeaf,
    title: "Manjistha does the calming",
    text: "Wild-harvested madder root, infused the siddha way — the classical answer to redness, itching and sun-stress.",
    tilt: "rotate-[0.8deg]",
    blob: "right-[-14%] bottom-[-34%] h-44 w-44 bg-sand/70",
  },
  {
    icon: IconMoon,
    title: "Cool to the touch",
    text: "A hundred washes in chilled water carry the fire out of the ghee. What stays is the soothing part, not the heating part.",
    tilt: "rotate-[0.6deg]",
    blob: "left-[-12%] bottom-[-28%] h-40 w-40 bg-butter/70",
  },
  {
    icon: IconHand,
    title: "For skin that reacts to everything",
    text: "Two ingredients. No fragrance, no preservatives, no lanolin, nothing to argue with.",
    tilt: "-rotate-[1.2deg]",
    blob: "right-[-16%] top-[-26%] h-48 w-48 bg-sand/60",
  },
];

const SMEARS = [
  { n: "1", title: "Bilva ghee, by hand", text: "Grass-fed A2 cow ghee, slow-cooked the old bilva method until it turns to clear gold grain." },
  { n: "2", title: "Siddha with manjistha", text: "Wild madder root decoction folded in over low fire — the pigment, then the patience." },
  { n: "3", title: "The hundred washes", text: "Kneaded in chilled water — again, again, a hundred times. Each wash pulls out heat, salt, heaviness. The ghee turns pale, cool, spreadable as soft clay." },
  { n: "4", title: "Jarred within three days", text: "Hand-filled into the clay-toned jar. No bulk storage, no warehouse age. Eleven days to make, days to you." },
];

const SKIN = [
  { title: "Dry and rough skin", text: "Warm a small amount between palms and press into damp skin straight out of the bath." },
  { title: "Skin irritation and soothing", text: "A cool, simple balm for moments when skin feels dry, tight or unsettled." },
  { title: "Sensitive skin care", text: "Two familiar ingredients, no added fragrance, made for a quiet daily ritual." },
  { title: "Sun-exposed skin relief", text: "Apply a thin layer after time outdoors whenever skin needs calm, comfortable moisture." },
  { title: "Minor dryness and cracking", text: "Use on lips, hands or heels when everyday dryness leaves skin feeling rough." },
  { title: "Daily moisturisation", text: "A little goes a long way on slightly damp face or body skin after bathing." },
  { title: "Natural glow and softness", text: "Manjistha and washed ghee leave skin feeling supple with a soft, natural finish." },
  { title: "Post-bath moisturisation", text: "Press into clean, damp skin to help hold on to comfortable, lasting moisture." },
];

const INGREDIENTS = [
  { name: "Manjistha", detail: "Rubia cordifolia" },
  { name: "Cow ghee", detail: "Siddha with Manjistha, washed 100 times with water" },
];

const REVIEWS = [
  { name: "Ananya R.", place: "Pune", text: "The texture is light, calm and easy to press into dry skin. I keep a jar beside my bath towel.", tilt: "-rotate-1" },
  { name: "Meera J.", place: "Bengaluru", text: "The hundred-wash process makes this feel unlike ordinary ghee. No fragrance, no sticky finish, just soft skin.", tilt: "rotate-[0.7deg]" },
  { name: "Riya K.", place: "Nashik", text: "A small amount makes my evening routine feel special. The jar lasts well and the finish is comfortable.", tilt: "-rotate-[0.5deg]" },
];

const FAQS = [
  { q: "Is this edible?", a: "No — this batch is prepared and jarred for external cosmetic use only." },
  { q: "Won't ghee make my skin oily?", a: "The hundred-wash process changes the texture. Apply a small amount to slightly damp skin and press it in for a soft, comfortable finish." },
  { q: "How do I use it on the face?", a: "Use a rice-grain amount, warm it between fingertips, then press — never rub — into slightly damp skin. Night is best." },
  { q: "Can I use it on sensitive skin?", a: "Patch-test first. Stop use if irritation occurs, and consult a physician for skin conditions requiring medical care." },
  { q: "Shelf life and storage?", a: "Keep sealed in a cool, dark place. Use clean, dry fingers and keep water out of the jar." },
  { q: "Shipping across India?", a: "Pan-India dispatch with glass-safe packing. Contact us for current delivery timing and COD availability." },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-cocoa focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-paper/95">
        <div className="container-site flex h-16 items-center justify-between">
          <a href="#" aria-label="Twakshree — home">
            <Image
              src="/logo.png"
              alt="Twakshree — Ayurvedic Touch Of Radiance"
              width={2170}
              height={725}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </a>
          <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium text-cocoa/60 sm:flex">
            <a href="#why" className="transition-colors hover:text-cocoa">Why it works</a>
            <a href="#making" className="transition-colors hover:text-cocoa">The washing</a>
            <a href="#order" className="transition-colors hover:text-cocoa">Order</a>
          </nav>
          <a href="#order" className="btn-primary !px-5 !py-2.5 text-xs sm:text-sm">Buy the jar</a>
        </div>
      </header>

      <main id="main">
        {/* ---- hero: asymmetric, blob behind jar ---- */}
        <div className="grain relative overflow-hidden border-b border-cocoa/10">
          <div className="container-site grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:py-28">
            <div className="max-w-xl">
              <p className="section-label">Shatdhauta Ghrita · Manjistha-siddha</p>
              <h1 className="display mt-5">
                Soft as clay,<br />
                <em className="text-clay">kind as cool milk.</em>
              </h1>
              <Squiggle className="mt-4 w-36 text-gold" width={144} />
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cocoa/70">
                Cow ghee washed a hundred times in chilled water until all its heat comes out —
                what stays soothes dry, itchy, reactive skin without a trace of grease.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#order" className="btn-primary">Buy a jar — ₹250</a>
                <a href="#making" className="btn-secondary">How 100 washes change ghee</a>
              </div>
              <p className="mt-8 text-sm text-cocoa/50">
                Two ingredients · No fragrance · Made in Nashik in 11-day batches
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-[26rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 m-6 rotate-[8deg] bg-butter"
                style={{ borderRadius: "58% 42% 63% 37% / 46% 56% 44% 54%" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-8 -rotate-6 bg-sand/70"
                style={{ borderRadius: "42% 58% 37% 63% / 56% 38% 62% 44%" }}
              />
              <Image
                src="/jar.png"
                alt="Twakshree Shatdhauta Ghrita — glass jar of golden washed ghee with a wooden lid"
                width={720}
                height={720}
                priority
                className="relative w-full drop-shadow-[0_24px_36px_rgba(51,36,26,0.28)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-2deg]"
              />
              <p className="absolute -right-2 top-8 hidden rotate-6 font-serif text-sm italic text-cocoa/55 sm:block">
                the drip is<br />on purpose
              </p>
            </div>
          </div>
        </div>

        {/* ---- benefits: irregular 2x2 ---- */}
        <div id="why" className="grain relative scroll-mt-20 py-20 sm:py-28">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-label">Why it works</p>
                <h2 className="display-sm mt-4 max-w-xl">Not a cream. A slow transformation.</h2>
              </div>
              <Squiggle className="w-24 text-clay/40" width={120} />
            </div>
            <div className="mt-14 grid max-w-4xl grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 sm:gap-y-16">
              {BENEFITS.map((b) => (
                <article key={b.title} className={`relative ${b.tilt} max-w-sm`}>
                  <div
                    aria-hidden="true"
                    className={`absolute ${b.blob} -z-10`}
                    style={{ borderRadius: "54% 46% 61% 39% / 47% 55% 45% 53%" }}
                  />
                  <div
                    className="border border-cocoa/10 bg-paper/90 p-7 shadow-warm"
                    style={{ borderRadius: "24px 30px 22px 34px / 30px 22px 32px 24px" }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-clay/30 text-clay">
                      <b.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-serif text-[1.35rem] text-cocoa">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cocoa/65">{b.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ---- making: smear timeline, deep cocoa ---- */}
        <div id="making" className="grain relative scroll-mt-20 bg-cocoa py-20 text-paper sm:py-28">
          <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
            <div>
              <p className="section-label !text-gold">The making</p>
              <h2 className="display-sm mt-4 text-paper">Kneaded by hand,<br />washed a hundred times.</h2>
              <p className="mt-6 max-w-sm leading-relaxed text-paper/70">
                <em>Shatadhauta</em> means &ldquo;washed six times ten.&rdquo; Each wash cools and
                lightens the ghee until heaviness itself is worked out of it. No machine can knead
                it. That&apos;s why the batch takes eleven days.
              </p>
              <Squiggle className="mt-8 w-32 text-gold" width={128} />
              <GheeJar className="mt-12 hidden w-56 -rotate-2 opacity-90 lg:block" />
            </div>
            <ol className="relative space-y-10">
              {/* the smear — a continuous hand-drawn stroke the steps ride on */}
              <svg
                aria-hidden="true"
                viewBox="0 0 600 520"
                preserveAspectRatio="none"
                className="absolute left-[22px] top-2 h-[calc(100%-2rem)] w-2 text-clay sm:left-6"
              >
                <path
                  className="smear"
                  style={{ "--dash": 1100 } as React.CSSProperties}
                  d="M4 6 C 30 60, -18 120, 6 176 C 28 236, -14 300, 6 350 C 24 404, -10 460, 4 512"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
              {SMEARS.map((s) => (
                <li key={s.n} className="relative flex gap-6 pl-1">
                  <span
                    className="z-10 flex h-11 w-11 shrink-0 items-center justify-center bg-butter font-serif text-lg text-clay-deep shadow-warm"
                    style={{ borderRadius: "48% 52% 45% 55% / 55% 45% 58% 42%" }}
                  >
                    {s.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-serif text-xl text-paper">{s.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/65">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ---- gallery strip ---- */}
        <section aria-labelledby="gallery-title" className="relative overflow-hidden bg-paper py-16 sm:py-24">
          <div className="container-site">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="section-label">A closer look</p>
                <h2 id="gallery-title" className="display-sm mt-4 max-w-xl">From the jar to the ritual.</h2>
              </div>
              <p className="hidden max-w-[12rem] text-right text-xs uppercase tracking-[0.18em] text-cocoa/45 sm:block">
                Swipe to explore
              </p>
            </div>
          </div>
          {/* ---- editorial mosaic: fixed asymmetric grid, varied sizes + offsets, no scroll ---- */}
          <div className="container-site mt-10 sm:mt-14">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5 [grid-template-rows:repeat(2,auto)]">
              {/* 01 portrait — tall, left */}
              <figure className="group relative col-span-2 sm:col-span-1 sm:row-span-2">
                <div className="relative aspect-[566/647] overflow-hidden bg-butter">
                  <Image
                    src="/gallery-01.png"
                    alt="Twakshree jar presented as a gift"
                    fill
                    sizes="(min-width: 640px) 25vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 z-10 font-mono text-xs tracking-[0.18em] text-cocoa/70 sm:left-4 sm:top-4">01</span>
                </div>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-cocoa/55 sm:text-xs">Jar, presented</figcaption>
              </figure>

              {/* 02 portrait — top right area */}
              <figure className="group relative col-span-2 sm:col-start-2 sm:col-span-1 sm:row-start-1 sm:mt-8">
                <div className="relative aspect-[565/650] overflow-hidden bg-butter">
                  <Image
                    src="/gallery-02.png"
                    alt="Twakshree jar with roses and Ayurvedic ingredients"
                    fill
                    sizes="(min-width: 640px) 25vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 z-10 font-mono text-xs tracking-[0.18em] text-cocoa/70 sm:left-4 sm:top-4">02</span>
                </div>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-cocoa/55 sm:text-xs">With rose & herbs</figcaption>
              </figure>

              {/* 03 portrait — top right, offset up */}
              <figure className="group relative col-span-2 sm:col-start-3 sm:col-span-1 sm:row-start-1 sm:-mt-4">
                <div className="relative aspect-[559/668] overflow-hidden bg-butter">
                  <Image
                    src="/gallery-03.png"
                    alt="Twakshree jar in a gift box with a handwritten note"
                    fill
                    sizes="(min-width: 640px) 25vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 z-10 font-mono text-xs tracking-[0.18em] text-cocoa/70 sm:left-4 sm:top-4">03</span>
                </div>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-cocoa/55 sm:text-xs">Gift box, note</figcaption>
              </figure>

              {/* 04 square — fills right-lower */}
              <figure className="group relative col-span-2 sm:col-start-4 sm:col-span-1 sm:row-start-1 sm:mt-16">
                <div className="relative aspect-square overflow-hidden bg-butter">
                  <Image
                    src="/gallery-04.png"
                    alt="Open Twakshree jar showing golden washed ghee"
                    fill
                    sizes="(min-width: 640px) 25vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 z-10 font-mono text-xs tracking-[0.18em] text-cocoa/70 sm:left-4 sm:top-4">04</span>
                </div>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-cocoa/55 sm:text-xs">Golden ghee</figcaption>
              </figure>

              {/* 05 wide strip — bottom, spans 2 cols on mobile */}
              <figure className="group relative col-span-2 sm:row-start-2 sm:col-start-2 sm:col-span-3 sm:mt-6">
                <div className="relative aspect-[2170/725] overflow-hidden bg-butter">
                  <Image
                    src="/gallery-05.png"
                    alt="Twakshree Ayurvedic Touch Of Radiance brand mark"
                    fill
                    sizes="(min-width: 640px) 75vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 z-10 font-mono text-xs tracking-[0.18em] text-cocoa/70 sm:left-4 sm:top-4">05</span>
                </div>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-cocoa/55 sm:text-xs">Touch Of Radiance</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ---- who for ---- */}
        <div className="grain relative py-20 sm:py-28">
          <div className="container-site">
            <p className="section-label">For skin that gives up on products</p>
            <h2 className="display-sm mt-4 max-w-2xl">When everything stings, try almost nothing.</h2>
            <div className="mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
              {SKIN.map((s, i) => (
                <article
                  key={s.title}
                  className="border-l-2 border-clay/70 py-2 pl-6"
                  style={{ marginLeft: i % 2 ? "1.25rem" : 0 }}
                >
                  <h3 className="font-serif text-[1.3rem]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa/65">{s.text}</p>
                </article>
              ))}
            </div>

            {/* ---- ingredients ---- */}
            <div className="mt-16 max-w-2xl">
              <p className="section-label">Inside the jar</p>
              <h3 className="display-sm mt-4">Two ingredients. Nothing else.</h3>
              <ol className="mt-8 space-y-5">
                {INGREDIENTS.map((ing) => (
                  <li key={ing.name} className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 rounded-full bg-butter p-2" aria-hidden="true">
                      <IconLeaf className="h-4 w-4 text-clay" />
                    </span>
                    <div>
                      <p className="font-serif text-lg text-cocoa">
                        {ing.name}{" "}
                        <span className="text-sm italic text-cocoa/50">{ing.detail}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* ---- reviews ---- */}
        <div className="grain relative bg-butter/60 py-20 sm:py-28">
          <div className="container-site">
            <p className="section-label">From the jar owners</p>
            <h2 className="display-sm mt-4">Skin that stopped complaining.</h2>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {REVIEWS.map((r) => (
                <figure
                  key={r.name}
                  className={`${r.tilt} border border-cocoa/10 bg-paper p-8 shadow-warm transition-transform duration-300 hover:rotate-0`}
                  style={{ borderRadius: "30px 22px 34px 24px / 24px 32px 22px 30px" }}
                >
                  <span aria-label="5 out of 5 stars" className="font-serif text-gold">★★★★★</span>
                  <blockquote className="mt-4 font-serif text-[17px] leading-relaxed text-cocoa/85">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-cocoa/55">
                    <span className="font-semibold text-cocoa">{r.name}</span> · {r.place}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-10 text-sm text-cocoa/45">
              Verified buyers of the Aug-2026 pilot batch. Results vary with skin condition.
            </p>
          </div>
        </div>

        {/* ---- order ---- */}
        <div id="order" className="grain relative scroll-mt-20 py-20 sm:py-28">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label">Order</p>
              <h2 className="display-sm mt-4">One jar, or ten.</h2>
              <p className="mt-4 text-cocoa/60">Made fresh to your order — please allow processing time before dispatch</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
              {[
                { size: "1 Jar", price: "₹250", note: "~25–30 g · ≈ 4–6 weeks of daily use", featured: true },
                { size: "10 Jars", price: "₹2,000", note: "Save ₹500 · best per jar", featured: false },
              ].map((t) => (
                <div
                  key={t.size}
                  className={`relative p-8 text-center shadow-warm ${t.featured ? "border-2 border-clay bg-paper" : "border border-cocoa/15 bg-butter/40"}`}
                  style={{ borderRadius: t.featured ? "34px 24px 38px 26px / 26px 36px 24px 34px" : "24px 34px 26px 38px / 36px 24px 34px 26px" }}
                >
                  {t.featured && (
                    <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-clay px-4 py-1 text-xs font-semibold uppercase tracking-wider text-paper" style={{ borderRadius: "999px 999px 999px 4px" }}>
                      Most bought
                    </p>
                  )}
                  <h3 className="font-serif text-2xl">{t.size} jar</h3>
                  <p className="mt-2 font-serif text-5xl font-light text-clay-deep">{t.price}</p>
                  <p className="mt-3 text-sm text-cocoa/55">{t.note}</p>
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Hello Twakshree, I'd like to order the ${t.size} Shatdhauta Ghrita jar (${t.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 block w-full ${t.featured ? "btn-primary" : "btn-secondary"}`}
                  >
                    Order on WhatsApp — {t.price}
                  </a>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-xl text-center text-xs text-cocoa/45">
              Orders confirm on WhatsApp within business hours · UPI / bank / COD
            </p>
          </div>
        </div>

        {/* ---- faq ---- */}
        <div className="grain relative bg-sand/40 py-20 sm:py-28">
          <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="section-label">Questions</p>
              <h2 className="display-sm mt-4">Before the first jar</h2>
              <p className="mt-6 text-sm text-cocoa/60">
                Still unsure?{" "}
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-semibold text-clay underline underline-offset-4 hover:text-clay-deep">
                  Ask us on WhatsApp
                </a>{" "} — answered within a day.
              </p>
            </div>
            <div className="divide-y divide-cocoa/10 border-y border-cocoa/10">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg">
                    {f.q}
                    <span aria-hidden="true" className="text-clay transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-xl pr-8 text-sm leading-relaxed text-cocoa/65">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="grain relative bg-cocoa py-14 text-paper/70">
        <div className="container-site grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-paper">Twak<span className="text-gold">shree</span></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Shatdhauta ghrita, made the slow way in Nashik, Maharashtra.
            </p>
          </div>
          <nav aria-label="Footer" className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-paper/40">Explore</p>
            <ul className="mt-4 space-y-2.5" role="list">
              <li><a href="#why" className="hover:text-paper">Why it works</a></li>
              <li><a href="#making" className="hover:text-paper">The hundred washes</a></li>
              <li><a href="#order" className="hover:text-paper">Order a jar</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-paper/40">Contact</p>
            <ul className="mt-4 space-y-2.5" role="list">
              <li><a href="mailto:Abhishekmb7014@gmail.com" className="hover:text-paper">Abhishekmb7014@gmail.com</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-paper">WhatsApp +91 70571 47014</a></li>
              <li>Nashik, Maharashtra, India</li>
            </ul>
          </div>
        </div>
        <div className="container-site mt-12 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Twakshree Ayurveda. AYUSH-compliant small-batch manufacture.</p>
          <p>For external cosmetic use only. Not a substitute for medical treatment. Consult a physician for skin conditions requiring medical care.</p>
        </div>
      </footer>
    </>
  );
}
