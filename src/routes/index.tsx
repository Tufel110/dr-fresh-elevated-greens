import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import editorialImg from "@/assets/editorial.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/910000000000?text=Hi%20DR%20FRESH%2C%20I%27d%20like%20to%20place%20an%20order.";

const products = [
  { n: "01", name: "Heirloom Tomatoes", origin: "Nashik Valley", img: p1, tag: "Vine Ripened" },
  { n: "02", name: "Garden Greens", origin: "Cold Highlands", img: p2, tag: "Hand Picked" },
  { n: "03", name: "Root Selection", origin: "Earthen Beds", img: p3, tag: "Single Origin" },
  { n: "04", name: "Capsicum & Chili", origin: "Sun Grown", img: p4, tag: "Limited Batch" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl bg-[color:var(--cream)]/70 border-b border-[color:var(--border)]/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-xl md:text-2xl tracking-tight">
          DR<span className="text-[color:var(--olive)]">.</span>FRESH
        </a>
        <nav className="hidden md:flex items-center gap-10 font-mono-ed text-foreground/80">
          <a href="#collection" className="hover:text-foreground transition-colors">Collection</a>
          <a href="#story" className="hover:text-foreground transition-colors">Story</a>
          <a href="#journal" className="hover:text-foreground transition-colors">Journal</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="font-mono-ed border border-foreground/40 px-4 py-2 hover:bg-foreground hover:text-[color:var(--cream)] transition-all duration-500"
        >
          Order
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden grain bg-[color:var(--foreground)]">
      <img
        src={heroImg}
        alt="Cinematic close-up of curated fresh vegetables"
        width={1080}
        height={1920}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-40 md:pt-48 pb-16 min-h-[100svh] flex flex-col">
        <div className="flex items-center justify-between font-mono-ed text-[color:var(--cream)]/80 reveal">
          <span>Est. MMXXV — Vol. 01</span>
          <span className="hidden md:block">Curated Produce / India</span>
        </div>

        <div className="mt-auto">
          <p className="font-mono-ed text-[color:var(--cream)]/70 mb-6 reveal" style={{ animationDelay: "0.1s" }}>
            — A Modern Produce House
          </p>
          <h1
            className="font-display text-[color:var(--cream)] text-[14vw] md:text-[9vw] leading-[0.95] tracking-[-0.03em] reveal"
            style={{ animationDelay: "0.2s" }}
          >
            Freshness,
            <br />
            <em className="italic font-light text-[color:var(--cream)]/90">curated</em> daily.
          </h1>
          <div
            className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="max-w-md text-[color:var(--cream)]/70 text-base md:text-lg leading-relaxed">
              Premium vegetable supply for modern kitchens, cafés & restaurants — chosen by hand, delivered with intent.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#collection"
                className="font-mono-ed bg-[color:var(--cream)] text-foreground px-6 py-4 hover:bg-[color:var(--olive)] hover:text-[color:var(--cream)] transition-all duration-500"
              >
                Explore Fresh Stock →
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="font-mono-ed border border-[color:var(--cream)]/50 text-[color:var(--cream)] px-6 py-4 hover:bg-[color:var(--cream)] hover:text-foreground transition-all duration-500"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Single Origin", "Hand Selected", "Cold Chain", "Same Day", "Chef Approved", "Seasonal", "Traceable"];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="border-y border-border bg-[color:var(--beige)] overflow-hidden py-6">
      <div className="flex gap-16 marquee whitespace-nowrap font-display text-3xl md:text-5xl text-foreground/80">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-16 italic">
            {t}
            <span className="text-[color:var(--olive)] not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Collection() {
  return (
    <section id="collection" className="bg-background grain py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-32">
          <div className="md:col-span-3">
            <p className="font-mono-ed text-muted-foreground">— The Collection</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[1] tracking-tight">
              A quiet study of <em className="italic">seasonal</em> produce — composed,
              not stocked.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-10 md:gap-y-32">
          {products.map((p, i) => (
            <article
              key={p.n}
              className={`group ${
                i % 2 === 0
                  ? "md:col-span-6 md:col-start-1"
                  : "md:col-span-5 md:col-start-8 md:mt-32"
              }`}
            >
              <div className="relative overflow-hidden bg-[color:var(--beige)] aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-5 left-5 font-mono-ed text-[color:var(--cream)] mix-blend-difference">
                  N° {p.n}
                </div>
                <div className="absolute bottom-5 right-5">
                  <span className="font-mono-ed bg-[color:var(--cream)]/70 backdrop-blur-md text-foreground px-3 py-1.5 border border-foreground/10">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">{p.name}</h3>
                  <p className="font-mono-ed text-muted-foreground mt-2">{p.origin}</p>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 font-mono-ed text-foreground border-b border-foreground pb-1 hover:text-[color:var(--olive)] hover:border-[color:var(--olive)] transition-colors"
                >
                  Enquire
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section id="story" className="relative bg-[color:var(--foreground)] text-[color:var(--cream)] grain overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[90vh]">
        <div className="relative">
          <img
            src={editorialImg}
            alt="A chef hand-selecting fresh produce"
            loading="lazy"
            width={1600}
            height={1200}
            className="h-full w-full object-cover opacity-90"
          />
        </div>
        <div className="flex items-center px-6 md:px-16 py-20">
          <div className="max-w-md">
            <p className="font-mono-ed text-[color:var(--cream)]/60 mb-8">— Chapter I / The House</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              We don't sell vegetables.
              <br />
              <em className="italic text-[color:var(--stone)]">We compose them.</em>
            </h2>
            <p className="mt-8 text-[color:var(--cream)]/70 leading-relaxed">
              DR FRESH is a modern produce house — quietly serving the country's
              most considered kitchens. Each crate is hand-selected at dawn,
              cold-chained, and delivered before service.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[color:var(--cream)]/15 pt-8">
              <div>
                <div className="font-display text-3xl">120+</div>
                <div className="font-mono-ed text-[color:var(--cream)]/50 mt-2">Kitchens</div>
              </div>
              <div>
                <div className="font-display text-3xl">04:30</div>
                <div className="font-mono-ed text-[color:var(--cream)]/50 mt-2">Harvest</div>
              </div>
              <div>
                <div className="font-display text-3xl">∞</div>
                <div className="font-mono-ed text-[color:var(--cream)]/50 mt-2">Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "I", t: "Browse", d: "Quietly explore the day's selection." },
    { n: "II", t: "Select", d: "Choose what your kitchen needs." },
    { n: "III", t: "WhatsApp", d: "One message. We handle the rest." },
  ];
  return (
    <section id="journal" className="bg-[color:var(--beige)] grain py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="font-mono-ed text-muted-foreground mb-4">— The Ritual</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              Order in <em className="italic">three</em> calm steps.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-[color:var(--beige)] p-10 md:p-14 hover:bg-[color:var(--cream)] transition-colors duration-700">
              <div className="font-display italic text-7xl text-[color:var(--olive)]">{s.n}</div>
              <div className="font-display text-3xl mt-8">{s.t}</div>
              <p className="text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-background grain py-32 md:py-48">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
        <p className="font-mono-ed text-muted-foreground">— A Single Message Away</p>
        <h2 className="font-display text-6xl md:text-[10vw] leading-[0.95] tracking-[-0.03em] mt-8">
          Place your <em className="italic">first</em> order.
        </h2>
        <p className="mt-8 max-w-md mx-auto text-muted-foreground">
          Built for chefs, founders & home connoisseurs who insist on what's in season.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="font-mono-ed bg-foreground text-[color:var(--cream)] px-8 py-5 hover:bg-[color:var(--olive)] transition-all duration-500"
          >
            Begin on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--foreground)] text-[color:var(--cream)] grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-4xl">DR<span className="text-[color:var(--olive)]">.</span>FRESH</div>
            <p className="mt-4 text-[color:var(--cream)]/60 max-w-xs leading-relaxed">
              A modern produce house. Quietly stocked, carefully delivered.
            </p>
          </div>
          <div>
            <p className="font-mono-ed text-[color:var(--cream)]/40 mb-4">Index</p>
            <ul className="space-y-2 text-[color:var(--cream)]/80">
              <li><a href="#collection">Collection</a></li>
              <li><a href="#story">Story</a></li>
              <li><a href="#journal">Ritual</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono-ed text-[color:var(--cream)]/40 mb-4">Contact</p>
            <ul className="space-y-2 text-[color:var(--cream)]/80">
              <li><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li>hello@drfresh.studio</li>
              <li>Mumbai · India</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-[color:var(--cream)]/15 flex flex-wrap justify-between gap-4 font-mono-ed text-[color:var(--cream)]/40">
          <span>© MMXXV DR FRESH</span>
          <span>All produce, lovingly handled.</span>
        </div>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <div className="backdrop-blur-xl bg-[color:var(--cream)]/80 border border-foreground/10 shadow-2xl rounded-full flex items-center justify-between px-2 py-2">
        <a href="#collection" className="font-mono-ed px-4 py-2">Shop</a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="font-mono-ed bg-foreground text-[color:var(--cream)] px-5 py-3 rounded-full"
        >
          Order →
        </a>
        <a href="#contact" className="font-mono-ed px-4 py-2">Hello</a>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Collection />
      <Editorial />
      <Process />
      <CTA />
      <Footer />
      <MobileBar />
    </main>
  );
}
