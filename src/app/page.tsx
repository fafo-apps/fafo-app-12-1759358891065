export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="text-xl sm:text-2xl font-bold tracking-tight">Scoops & Smiles</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#menu">Menu</a>
            <a className="hover:opacity-80" href="#about">About</a>
            <a className="hover:opacity-80" href="#visit">Visit</a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-100 via-rose-50 to-sky-100 dark:from-rose-900/30 dark:via-fuchsia-900/20 dark:to-sky-900/30" />
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 text-center">
            <div className="text-6xl sm:text-7xl">🍦</div>
            <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Handcrafted Ice Cream, Daily
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/80 max-w-2xl mx-auto">
              Small-batch flavors churned with local ingredients. Vegan and gluten-free options available.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-medium hover:opacity-90">
                See today’s flavors
              </a>
              <a href="#visit" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
                Visit us
              </a>
            </div>
            <p className="mt-6 text-sm text-black/60 dark:text-white/60">
              Open daily 12–9pm · 123 Main St, Your City
            </p>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Today’s Flavors</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">A rotating selection. Ask about pints and flights!</p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🤍", name: "Vanilla Bean", desc: "Madagascar vanilla, extra creamy" },
              { icon: "🍫", name: "Chocolate Fudge", desc: "Rich cocoa with fudge swirls" },
              { icon: "🍓", name: "Strawberry", desc: "Roasted berries, bright and fresh" },
              { icon: "🍪", name: "Cookies & Cream", desc: "Chocolate sandwich cookies" },
              { icon: "🌿", name: "Mint Chip", desc: "Fresh mint, dark chocolate shards" },
              { icon: "🥭", name: "Mango Sorbet (V)", desc: "Dairy-free, ultra-fruity" },
            ].map((f) => (
              <li key={f.name} className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur p-5">
                <div className="text-2xl">{f.icon}</div>
                <div className="mt-2 font-semibold">{f.name}</div>
                <div className="text-sm text-black/70 dark:text-white/70">{f.desc}</div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-sm text-black/70 dark:text-white/70">
            Gluten-free cones and vegan options available. Ask about custom cakes!
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-black/5 dark:border-white/10">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Us</h2>
              <p className="mt-3 text-black/80 dark:text-white/80">
                We’re a small, family-run shop making ice cream the slow way: in small
                batches with seasonal, local ingredients. Our flavors change often,
                but our commitment to quality never does.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-rose-100 to-amber-100 dark:from-rose-900/30 dark:to-amber-900/30 border border-black/10 dark:border-white/15">
              <h3 className="font-semibold">Allergens</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                Please inform us of any allergies. Many flavors are nut-free; we also
                offer dairy-free sorbets and gluten-free cones. Cross-contact may occur.
              </p>
            </div>
          </div>
        </section>

        {/* Visit / Contact */}
        <section id="visit" className="mx-auto max-w-6xl px-6 py-16 sm:py-24 border-t border-black/5 dark:border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Visit or Order</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 dark:border-white/15 p-5">
              <div className="font-semibold">Hours</div>
              <div className="mt-2 text-sm text-black/80 dark:text-white/80">
                Mon–Thu 12–9pm
                <br />
                Fri–Sun 12–10pm
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/15 p-5">
              <div className="font-semibold">Contact</div>
              <div className="mt-2 text-sm">
                <a className="block hover:underline" href="tel:+11234567890">(123) 456‑7890</a>
                <a className="block hover:underline" href="mailto:hello@scoopsandsmiles.example">hello@scoopsandsmiles.example</a>
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/15 p-5">
              <div className="font-semibold">Find Us</div>
              <div className="mt-2 text-sm text-black/80 dark:text-white/80">
                123 Main St
                <br />
                Your City, ST 00000
              </div>
              <a
                className="mt-3 inline-flex text-sm text-blue-600 dark:text-blue-400 hover:underline"
                href="https://maps.google.com/?q=123+Main+St"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps →
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium hover:opacity-90"
            >
              Order a pint
            </a>
            <a
              href="https://instagram.com/yourshop"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
            >
              Follow on Instagram
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-black/70 dark:text-white/70">© {year} Scoops & Smiles. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#menu">Menu</a>
            <a className="hover:underline" href="#visit">Visit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
