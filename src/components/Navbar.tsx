import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative h-12 w-12 flex-shrink-0">
            <img 
              src="/image.png" 
              alt="HSE Transformation Partners Logo" 
              className="h-full w-full object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all"
            />
          </div>
          <div className="leading-none hidden sm:block">
            <div className="font-display font-bold text-white text-sm md:text-base tracking-tight">
              HSE <span className="gradient-text">Transformation</span>
            </div>
            <div className="font-btn text-[10px] uppercase tracking-[0.2em] text-white/50">Partners</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 font-btn text-sm font-medium transition-colors rounded-full ${
                pathname === l.to ? 'text-cyan-light' : 'text-white/70 hover:text-white'
              }`}
            >
              {l.label}
              {pathname === l.to && (
                <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-light to-transparent" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-cyan text-xs px-5 py-2.5">Book Consultation</Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x py-4 flex flex-col gap-1 bg-ink-950/95">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-3 rounded-xl font-btn text-sm font-medium ${
                pathname === l.to ? 'bg-cyan/15 text-cyan-light' : 'text-white/70 hover:bg-white/5'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-cyan mt-2">Book Consultation</Link>
          <a
            href={`https://wa.me/${COMPANY.whatsappRaw}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline mt-2"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </header>
  );
}
