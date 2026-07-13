import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-doner.jpg";
import logo from "@/assets/logo.jpeg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50">
    <div className="mx-auto flex items-center justify-between px-6 md:px-10 py-5">
      <a href="#" className="flex items-center gap-3">
        <img src={logo} alt="Döner Fame" className="h-11 w-11 rounded-full object-cover ring-2 ring-background/80" />
        <span className="font-display text-background text-xl tracking-wide hidden sm:inline">
          Döner <span className="italic font-light">Fame</span>
        </span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-xs uppercase tracking-[0.25em] text-background/85">
        <a href="#hours" className="hover:text-background transition-colors">Hours</a>
        <a href="#visit" className="hover:text-background transition-colors">Visit</a>
        <span className="text-background/40">·</span>
        <span className="text-background/60">Leuna, DE</span>
      </div>
      <a
        href="#visit"
        className="inline-flex items-center gap-2 bg-background text-primary px-4 py-2 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-background/90 transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Open Now
      </a>
    </div>
  </nav>
);

const Marquee = () => {
  const items = ["Handcrafted Döner", "Since 2024", "NOVA Shoppingcenter", "Leuna, Germany", "Fresh Daily", "Family Recipe"];
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 bg-primary text-primary-foreground border-y border-primary-foreground/10 overflow-hidden">
      <div className="flex gap-12 py-3 whitespace-nowrap animate-marquee font-body text-xs uppercase tracking-[0.35em]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-primary-foreground/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" }));
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-foreground">
      {/* Background image, right side */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%]">
        <img
          src={heroImage}
          alt="Döner rotating on the spit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/60 to-transparent md:from-foreground md:via-foreground/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
      </div>

      {/* Vertical rail on the left */}
      <div className="absolute left-0 top-0 bottom-0 hidden md:flex flex-col items-center justify-between py-32 px-6 z-20 border-r border-background/10">
        <span className="font-body text-[10px] uppercase tracking-[0.4em] text-background/50 [writing-mode:vertical-rl] rotate-180">
          Est. 2024 — Leuna
        </span>
        <span className="font-body text-[10px] uppercase tracking-[0.4em] text-background/50 [writing-mode:vertical-rl] rotate-180">
          Nº 001 / Signature Series
        </span>
      </div>

      {/* Vertical rail on the right */}
      <div className="absolute right-0 top-0 bottom-0 hidden lg:flex flex-col items-center justify-between py-32 px-6 z-20">
        <span className="font-body text-[10px] uppercase tracking-[0.4em] text-background/50 [writing-mode:vertical-rl]">
          Handcrafted · Rotisserie · Slow-Roasted
        </span>
        <span className="font-display italic text-background/60 text-sm [writing-mode:vertical-rl]">
          scroll to feast ↓
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 pb-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
            <span className="h-px w-12 bg-background/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.4em] text-background/70">
              Authentic German-Turkish Kitchen
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-background leading-[0.9] tracking-tight animate-fade-in-up">
            <span className="block text-7xl md:text-8xl lg:text-[10rem] font-bold">Döner</span>
            <span className="block text-6xl md:text-7xl lg:text-[8rem] italic font-light text-primary/90 -mt-2 md:-mt-4">
              Fame.
            </span>
          </h1>

          {/* Welcome */}
          <div className="mt-10 max-w-md animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="font-display italic text-background/90 text-2xl md:text-3xl leading-snug">
              "Willkommen — we're so glad you're here."
            </p>
            <p className="font-body text-background/60 text-sm md:text-base leading-relaxed mt-4">
              Fire-roasted meat, warm bread, and a family recipe worth the drive.
              Step into the NOVA Shoppingcenter and find your new favorite.
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.35s", opacity: 0 }}>
            <a
              href="#visit"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground pl-6 pr-3 py-3 rounded-full font-body text-sm uppercase tracking-[0.2em] hover:bg-primary-dark transition-colors"
            >
              Find Us
              <span className="h-8 w-8 grid place-items-center rounded-full bg-primary-foreground text-primary group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>
            <a
              href="#hours"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background font-body text-sm uppercase tracking-[0.2em] border-b border-background/30 hover:border-background pb-1 transition-colors"
            >
              Opening Hours
            </a>
          </div>
        </div>

        {/* Bottom-right hours card */}
        <div
          id="hours"
          className="absolute right-6 md:right-16 lg:right-28 bottom-24 md:bottom-28 z-20 w-[280px] md:w-[320px] bg-background/95 backdrop-blur-md text-foreground p-6 md:p-7 shadow-2xl border-l-4 border-primary animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <div className="flex items-baseline justify-between mb-4">
            <span className="font-body text-[10px] uppercase tracking-[0.35em] text-primary">
              Öffnungszeiten
            </span>
            <span className="font-display text-xs text-muted-foreground">{time} · Leuna</span>
          </div>
          <div className="space-y-2.5 font-body text-sm">
            <div className="flex items-center justify-between border-b border-border/60 pb-2">
              <span className="text-muted-foreground">Mo — Do</span>
              <span className="font-display font-semibold text-foreground">10:00 — 19:00</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-2">
              <span className="text-muted-foreground">Fr</span>
              <span className="font-display font-semibold text-foreground">10:00 — 20:00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Sa</span>
              <span className="font-display font-semibold text-foreground">10:00 — 20:00</span>
            </div>
          </div>
          <div id="visit" className="mt-5 pt-4 border-t border-border/60">
            <p className="font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
              Besuch uns
            </p>
            <p className="font-display text-sm text-foreground leading-snug">
              NOVA Shoppingcenter<br />
              Merseburger Landstraße, 06237 Leuna
            </p>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
};

const Index = () => (
  <div className="min-h-screen bg-foreground">
    <Navbar />
    <Hero />
  </div>
);

export default Index;
