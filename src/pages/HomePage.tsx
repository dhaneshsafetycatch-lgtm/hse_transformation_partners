import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, TrendingUp, Globe2, ChevronRight } from 'lucide-react';
import { COMPANY, HERO_HIGHLIGHTS, EXPERIENCE_CLIENTS, SECTORS_SERVED, SERVICES } from '../data/content';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import StatsBand from '../components/StatsBand';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-950 pt-24 pb-32">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] opacity-30" />
      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 bg-primary-700/30 blur-[100px] rounded-full animate-float" />
      <div className="absolute bottom-1/4 -right-20 h-80 w-80 bg-cyan/15 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 h-64 w-64 bg-accent/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative container-x">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-light opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-light" />
              </span>
              <span className="font-btn text-xs font-medium uppercase tracking-widest text-cyan-light">
                Global HSE Consulting · Training · Digital Solutions
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] text-white">
              Transforming Safety.<br />
              <span className="gradient-text-white">Empowering Performance.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-white/60">
              {COMPANY.subline}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-cyan">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Request Proposal
              </Link>
              <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn-accent">
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl">
              {HERO_HIGHLIGHTS.map((h) => (
                <div key={h.label} className="flex items-center gap-2.5 rounded-xl glass-dark px-3 py-2.5">
                  <h.icon className="h-4 w-4 text-cyan-light shrink-0" />
                  <span className="font-btn text-xs font-medium text-white/80">{h.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Floating accent stat card */}
      <div className="hidden xl:block absolute right-10 top-1/3">
        <Reveal delay={600}>
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan/20 blur-2xl rounded-3xl animate-pulse-glow" />
            <div className="relative w-64 glass-dark rounded-3xl p-6 shadow-glow">
              <div className="flex items-center gap-2 text-cyan-light mb-3">
                <TrendingUp className="h-5 w-5" />
                <span className="font-btn text-xs uppercase tracking-widest">Impact</span>
              </div>
              <div className="font-display text-3xl font-bold text-white">Compliance<br />to Excellence</div>
              <p className="mt-3 text-xs text-white/50 leading-relaxed">From regulatory adherence to world-class safety leadership and culture transformation.</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-btn text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-cyan/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ExperienceBand() {
  const marqueeItems = [...EXPERIENCE_CLIENTS, ...EXPERIENCE_CLIENTS];
  return (
    <section className="relative py-16 bg-cloud border-y border-primary-900/5 overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <span className="font-btn text-xs uppercase tracking-[0.25em] text-primary-800/60">
              Trusted by industry leaders worldwide
            </span>
          </div>
        </Reveal>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cloud to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cloud to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {marqueeItems.map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-8 py-3">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white shadow-sm border border-primary-900/5">
                <Globe2 className="h-5 w-5 text-primary-800" />
              </div>
              <div>
                <div className="font-display font-semibold text-ink-900">{c.name}</div>
                <div className="font-btn text-[10px] uppercase tracking-widest text-ink-700/60">{c.sector}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const values = [
    { icon: ShieldCheck, title: 'Compliance to Excellence', desc: 'Move beyond minimum regulatory compliance toward a proactive, high-performance safety culture.' },
    { icon: Sparkles, title: 'Future-Ready Consulting', desc: 'Digital HSE transformation, AI-assisted safety concepts and data-driven decision making.' },
    { icon: Globe2, title: 'Global Experience', desc: '20+ years across Oil & Gas, Construction, Aviation, Power, Data Centres and more.' },
  ];
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why HSE TP"
          title={<>We don't just manage safety.<br /><span className="gradient-text">We transform it.</span></>}
          subtitle="An international consulting mindset applied to every project, training program and digital solution we deliver."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-primary-900/8 bg-cloud p-8 card-hover hover:border-cyan/30 hover:shadow-elev">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-cyan/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev group-hover:scale-110 transition-transform">
                    <v.icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-700">{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[800px] bg-primary-800/30 blur-[120px] rounded-full" />
      <div className="relative container-x">
        <SectionHeading
          eyebrow="Our Expertise"
          theme="dark"
          title={<span className="text-white">Specialized <span className="gradient-text">Service Pillars</span></span>}
          subtitle="Comprehensive HSE capabilities across industries — from consulting and training to digital transformation."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 90}>
              <Link
                to="/services"
                className="group relative block h-full overflow-hidden rounded-3xl glass-dark p-7 card-hover hover:bg-ink-800/60"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 bg-cyan/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan-light border border-cyan/20 group-hover:bg-cyan/20 transition-colors">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{s.short}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 font-btn text-xs font-medium text-cyan-light">
                    Explore Service <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorsGrid() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries Served"
          title={<>Sectors we <span className="gradient-text">specialize in</span></>}
          subtitle="Deep domain expertise built over two decades across the world's most demanding industries."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS_SERVED.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className="group h-full rounded-2xl bg-white p-6 border border-primary-900/5 card-hover hover:border-cyan/30 hover:shadow-elev">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-800/5 text-primary-800 group-hover:bg-cyan/10 group-hover:text-cyan transition-colors">
                  <s.icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-ink-900">{s.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-700">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-hero-radial opacity-80" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute -top-20 right-1/4 h-72 w-72 bg-accent/15 blur-[100px] rounded-full animate-float" />
      <div className="relative container-x">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Let's Transform Together</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white leading-[1.1]">
              Ready to move from compliance<br />to <span className="gradient-text-white">safety excellence?</span>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/60 leading-relaxed">
              Partner with HSE Transformation Partners for consulting, training and digital solutions
              engineered for measurable safety performance improvement.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-cyan">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn-outline">
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ExperienceBand />
      <ValueProps />
      <ServicesPreview />
      <SectorsGrid />
      <CTASection />
    </>
  );
}
