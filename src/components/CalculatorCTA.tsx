import { Link } from 'react-router-dom';
import { ClipboardCheck, GraduationCap, FileBadge, MessageCircle, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const CTAS = [
  { icon: ClipboardCheck, title: 'Book Consultancy', desc: 'Get expert review of your HSE calculations and risk assessments.', to: '/contact', cta: 'Book Now' },
  { icon: FileBadge, title: 'Request Site Audit', desc: 'Comprehensive HSE audit aligned to ISO 45001 & OSHA.', to: '/contact', cta: 'Request Audit' },
  { icon: GraduationCap, title: 'Book Training', desc: 'Competency-based HSE training for your workforce.', to: '/training', cta: 'Book Training' },
  { icon: MessageCircle, title: 'Contact HSE Expert', desc: 'Speak directly with a senior HSE consultant.', to: '/contact', cta: 'Contact Us' },
];

export default function CalculatorCTA() {
  return (
    <section className="section-pad bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-15" />
      <div className="absolute top-1/3 left-1/4 h-72 w-72 bg-cyan/15 blur-[120px] rounded-full animate-float" />
      <div className="relative container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Need Expert Review?</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white">
              Beyond the <span className="gradient-text">Calculator</span>
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Our calculators assist and educate. For site-specific application, expert interpretation, and
              assured compliance, engage HSE Transformation Partners.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CTAS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <Link to={c.to} className="group block h-full rounded-2xl glass-dark p-6 card-hover hover:border-cyan/30">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/15 border border-cyan/30 text-cyan-light">
                  <c.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-btn text-xs font-medium text-cyan-light group-hover:gap-2.5 transition-all">
                  {c.cta} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
