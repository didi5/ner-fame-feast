import { useEffect, useState } from "react";
import menuWrapAsset from "@/assets/menu-wrap.png.asset.json";
import menuPlateAsset from "@/assets/menu-plate.png.asset.json";
import menuBoxAsset from "@/assets/menu-box.png.asset.json";
import menuLahmacunAsset from "@/assets/menu-lahmacun.png.asset.json";
import menuBoardAsset from "@/assets/menu-board.png.asset.json";
import menuFalafel from "@/assets/menu-falafel.jpg";
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
        <a href="#karte" className="hover:text-background transition-colors">Karte</a>
        <a href="#zeiten" className="hover:text-background transition-colors">Öffnungszeiten</a>
        <a href="#besuch" className="hover:text-background transition-colors">Besuch</a>
      </div>
      <a
        href="#besuch"
        className="inline-flex items-center gap-2 bg-background text-primary px-4 py-2 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-background/90 transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Jetzt geöffnet
      </a>
    </div>
  </nav>
);

const Marquee = () => {
  const items = ["Handgemachter Döner", "Seit 2024", "NOVA Shoppingcenter", "Leuna, Deutschland", "Täglich frisch", "Vegetarische Auswahl"];
  return (
    <div className="w-full bg-primary text-primary-foreground border-y border-primary-foreground/10 overflow-hidden">
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
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%]">
        <img src={menuPlateAsset.url} alt="Frischer Dönerteller" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/60 to-transparent md:from-foreground md:via-foreground/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 pb-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
            <span className="h-px w-12 bg-background/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.4em] text-background/70">
              Authentische Deutsch-Türkische Küche
            </span>
          </div>

          <h1 className="font-display text-background leading-[0.9] tracking-tight animate-fade-in-up">
            <span className="block text-7xl md:text-8xl lg:text-[10rem] font-bold">Döner</span>
            <span className="block text-6xl md:text-7xl lg:text-[8rem] italic font-light text-primary/90 -mt-2 md:-mt-4">
              Fame.
            </span>
          </h1>

          <div className="mt-10 max-w-md animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="font-display italic text-background/90 text-2xl md:text-3xl leading-snug">
              „Willkommen — schön, dass du da bist."
            </p>
            <p className="font-body text-background/60 text-sm md:text-base leading-relaxed mt-4">
              Feuergegrilltes Fleisch, warmes Brot und ein Familienrezept, das den Weg wert ist.
              Komm ins NOVA Shoppingcenter und entdecke dein neues Lieblingsgericht.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.35s", opacity: 0 }}>
            <a
              href="#karte"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground pl-6 pr-3 py-3 rounded-full font-body text-sm uppercase tracking-[0.2em] hover:bg-primary-dark transition-colors"
            >
              Unsere Karte
              <span className="h-8 w-8 grid place-items-center rounded-full bg-primary-foreground text-primary group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>
            <a
              href="#zeiten"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background font-body text-sm uppercase tracking-[0.2em] border-b border-background/30 hover:border-background pb-1 transition-colors"
            >
              Öffnungszeiten
            </a>
          </div>
        </div>

        <div
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
        </div>
      </div>
    </section>
  );
};

const menu = [
  { name: "Dönerteller", desc: "Zartes Döner-Fleisch mit Reis, gegrilltem Gemüse & Knoblauch-Joghurt.", image: menuPlateAsset.url, tag: "Klassiker" },
  { name: "Dönerbox", desc: "Deine Lieblings-Zutaten in der Box — perfekt zum Mitnehmen.", image: menuBoxAsset.url, tag: "To Go" },
  { name: "Türkischer Wrap", desc: "Saftiges Döner-Fleisch, frischer Salat und unsere Signature-Sauce.", image: menuLahmacunAsset.url, tag: "Klassiker" },
  { name: "Falafel Bowl", desc: "Hausgemachte, knusprige Falafel mit Hummus, Salat und Tahini.", image: menuFalafel, tag: "Vegan" },
];

const Menu = () => (
  <section id="karte" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-12 bg-primary" />
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-primary">Unsere Karte</span>
        </div>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[1]">
          Was wir <span className="italic font-light text-primary">anbieten.</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg mt-6 leading-relaxed">
          Vom klassischen Dönerteller bis zur bunten Veggie-Bowl — bei uns findet jeder sein Lieblingsgericht.
          Alle Gerichte werden frisch zubereitet, mit besten Zutaten und viel Liebe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {menu.map((item) => (
          <article
            key={item.name}
            className="group bg-background border border-border/60 hover:border-primary/60 transition-colors overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted relative">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-background/95 text-primary text-[10px] uppercase tracking-[0.25em] font-medium px-3 py-1.5 rounded-full">
                {item.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">{item.name}</h3>
              <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const VegetarianMenu = () => (
  <section className="py-24 md:py-32 bg-foreground text-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-px w-12 bg-background/60" />
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-background/70">Vegetarisch</span>
          <span className="h-px w-12 bg-background/60" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1]">
          Eine große Auswahl an <span className="italic font-light text-primary/90">vegetarischen Speisen.</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl border border-background/10 shadow-2xl">
        <img
          src={menuBoardAsset.url}
          alt="Vegetarische Speisekarte mit Halloumi, Salat, Falafel und Getränken"
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
);

const Visit = () => (
  <section id="besuch" className="py-24 md:py-32 bg-primary text-primary-foreground">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-primary-foreground/60" />
            <span className="font-body text-[11px] uppercase tracking-[0.4em] opacity-80">Besuch uns</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[1]">
            Wir freuen uns <span className="italic font-light">auf dich.</span>
          </h2>
          <p className="font-body text-primary-foreground/80 mt-6 leading-relaxed max-w-md">
            Komm vorbei, iss gut, geh glücklich. So einfach ist das bei Döner Fame.
          </p>
        </div>

        <div id="zeiten" className="space-y-8">
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.35em] opacity-70 mb-3">Adresse</p>
            <p className="font-display text-2xl leading-snug">
              NOVA Shoppingcenter<br />
              Merseburger Landstraße<br />
              06237 Leuna
            </p>
          </div>
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.35em] opacity-70 mb-3">Öffnungszeiten</p>
            <div className="space-y-2 font-body">
              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-2">
                <span className="opacity-80">Montag — Donnerstag</span>
                <span className="font-display font-semibold">10:00 — 19:00</span>
              </div>
              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-2">
                <span className="opacity-80">Freitag</span>
                <span className="font-display font-semibold">10:00 — 20:00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="opacity-80">Samstag</span>
                <span className="font-display font-semibold">10:00 — 20:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10 bg-foreground text-background/60">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Döner Fame" className="h-8 w-8 rounded-full object-cover" />
        <p className="font-display text-lg font-semibold text-background">Döner Fame</p>
      </div>
      <p className="font-body text-xs">© {new Date().getFullYear()} Döner Fame · Leuna, Deutschland</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Marquee />
    <Menu />
    <Visit />
    <Footer />
  </div>
);

export default Index;
