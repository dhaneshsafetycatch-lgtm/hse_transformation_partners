import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/70">
      <div className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[800px] bg-primary-800/30 blur-[120px] rounded-full" />

      <div className="relative container-x pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src="/logo.png" alt="HSE Transformation Partners logo" className="h-9 w-9 rounded-lg object-contain" />
              <div className="leading-none">
                <div className="font-display font-bold text-white">
                  HSE <span className="gradient-text">Transformation</span>
                </div>
                <div className="font-btn text-[10px] uppercase tracking-[0.2em] text-white/50">Partners</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              {COMPANY.website}. A global safety transformation consultancy specializing in
              consulting, training, leadership development and digital HSE transformation.
            </p>
            <a
              href={`https://wa.me/${COMPANY.whatsappRaw}`}
              target="_blank" rel="noreferrer"
              className="btn-cyan text-xs px-5 py-2.5"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-cyan-light transition-colors inline-flex items-center gap-1.5 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-cyan-light transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-2.5 hover:text-cyan-light transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 text-cyan-light shrink-0" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-cyan-light transition-colors">
                  <Phone className="h-4 w-4 text-cyan-light shrink-0" />
                  {COMPANY.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-cyan-light shrink-0" />
                India | Middle East | International
              </li>
              <li>
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-cyan-light transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-cyan-light shrink-0" />
                  Dhanesh Manoharan
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-cyan-light transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-cyan-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
