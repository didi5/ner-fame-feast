import { MapPin, Clock, Instagram, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-doner.jpg";
import menuWrap from "@/assets/menu-wrap.jpg";
import menuPlate from "@/assets/menu-plate.jpg";
import menuFalafel from "@/assets/menu-falafel.jpg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <a href="#" className="font-display text-2xl font-bold text-primary">
        Döner Fame
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium tracking-wide">
        <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
        <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
        <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
      </div>
      <a
        href="#contact"
        className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-primary-dark transition-colors"
      >
        Visit Us
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Delicious döner kebab" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>
    <div className="relative container mx-auto px-6 py-32">
      <div className="max-w-xl animate-fade-in-up">
        <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
          Authentic Döner · Since 2024
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-background leading-[1.1] mb-6">
          Döner
          <br />
          <span className="italic font-normal">Fame</span>
        </h1>
        <p className="font-body text-background/80 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
          The finest döner in town. Made with premium ingredients, 
          crafted with love, and served with pride.
        </p>
        <div className="flex gap-4">
          <a
            href="#menu"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-medium hover:bg-primary-dark transition-colors"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="border border-background/30 text-background px-8 py-3.5 rounded-sm font-medium hover:bg-background/10 transition-colors"
          >
            Find Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

const menuItems = [
  {
    name: "Classic Döner Wrap",
    description: "Tender lamb döner, fresh salad, red onions, tomatoes & our signature sauce",
    price: "€8.90",
    image: menuWrap,
  },
  {
    name: "Döner Plate",
    description: "Generous döner meat with rice pilaf, grilled vegetables & garlic yogurt",
    price: "€12.90",
    image: menuPlate,
  },
  {
    name: "Falafel Bowl",
    description: "Crispy house-made falafel, hummus, fresh salad & tahini dressing",
    price: "€10.90",
    image: menuFalafel,
  },
];

const Menu = () => (
  <section id="menu" className="py-24 bg-cream">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">
          Our Selection
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          The Menu
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="group bg-background rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                <span className="font-display text-lg font-bold text-primary">{item.price}</span>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">
          Our Story
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          Crafted with Passion
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
          At Döner Fame, we believe great food starts with great ingredients. Our döner is made
          from premium cuts, marinated with our secret blend of spices, and slowly roasted on a
          traditional vertical spit to perfection.
        </p>
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          Every wrap, every plate, every bite — crafted to bring you the authentic taste
          of the finest döner you've ever had.
        </p>
        <div className="mt-12 flex justify-center gap-12">
          <div>
            <p className="font-display text-4xl font-bold text-primary">100%</p>
            <p className="font-body text-muted-foreground text-sm mt-1">Fresh Daily</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-primary">5★</p>
            <p className="font-body text-muted-foreground text-sm mt-1">Rated</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-primary">1000+</p>
            <p className="font-body text-muted-foreground text-sm mt-1">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body uppercase tracking-[0.3em] text-sm mb-3 opacity-70">
          Come Hungry
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Visit Döner Fame
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-lg mx-auto">
          <div className="flex flex-col items-center gap-3">
            <MapPin className="w-6 h-6 opacity-80" />
            <p className="font-body text-sm opacity-90 leading-relaxed">
              NOVA Shoppingcenter<br />Merseburger Landstraße<br />06237 Leuna
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Clock className="w-6 h-6 opacity-80" />
            <p className="font-body text-sm opacity-90 leading-relaxed">
              Mo–Do: 10:00–19:00<br />Fr–Sa: 10:00–20:00
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-foreground text-background/60">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-semibold text-background">Döner Fame</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-background transition-colors" aria-label="Instagram">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-background transition-colors" aria-label="Facebook">
          <Facebook className="w-5 h-5" />
        </a>
      </div>
      <p className="font-body text-xs">© 2024 Döner Fame. All rights reserved.</p>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
