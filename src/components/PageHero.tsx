import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb?: string;
};

export default function PageHero({ eyebrow, title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-36 pb-24">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute -top-20 left-1/4 h-72 w-72 bg-primary-700/30 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 bg-cyan/15 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative container-x">
        <Reveal>
          <nav className="flex items-center gap-2 font-btn text-xs text-white/40">
            <Link to="/" className="hover:text-cyan-light transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-cyan-light">{breadcrumb}</span>
          </nav>
        </Reveal>
        <Reveal delay={100}>
          <span className="eyebrow mt-6">{eyebrow}</span>
        </Reveal>
        <Reveal delay={180}>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-white max-w-3xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={260}>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
