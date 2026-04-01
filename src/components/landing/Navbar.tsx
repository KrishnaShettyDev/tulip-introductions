import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <a
          href="#"
          className={`flex items-center gap-1.5 font-serif text-xl sm:text-2xl tracking-tight hover:tracking-wide transition-all duration-500 ${
            scrolled ? "text-[hsl(var(--ink))]" : "text-white/90"
          }`}
        >
          🌷 tulip
        </a>

        {/* CTA */}
        <a
          href="#waitlist"
          className={`px-5 py-2 rounded-full font-sans text-sm transition-all duration-500 ${
            scrolled
              ? "text-[hsl(var(--ink))] border border-[hsl(var(--ink))]/15"
              : "text-white/90 border border-white/20"
          }`}
        >
          join beta
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
