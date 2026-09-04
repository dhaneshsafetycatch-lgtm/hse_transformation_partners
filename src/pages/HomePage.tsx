import { Link } from 'react-router-dom';
import {
  ArrowRight, MessageCircle, ShieldCheck, TrendingUp, Globe2, ChevronRight,
  Crown, FileText, Cpu, Users, Briefcase, Headset, ClipboardCheck, Network,
  CheckCircle2, AlertTriangle, Sparkles,
} from 'lucide-react';
import {
  COMPANY, HERO_HIGHLIGHTS, EXPERIENCE_CLIENTS, SERVICE_PILLARS_HOME,
  HSE_PACKAGES, HOW_IT_WORKS, DELIVERY_MODELS, PROBLEM_STATEMENTS, STATS,
} from '../data/content';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import StatsBand from '../components/StatsBand';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-950 pt-24 pb-32">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] opacity-30" />
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
                Your External HSE Leadership Partner
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] text-white">
              Transform Your<br />
              <span className="gradient-text-white">HSE Function</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 max-w-2xl text-sm md:text-base font-medium text-cyan-light/80">
              Fractional HSE Leadership | Technical Assurance | ISO Compliance | Digital HSE Transformation
            </p>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-4 max-w-2xl text-base md:text-xl leading-relaxed text-white/60">
              Senior HSE expertise for organisations requiring practical, scalable and measurable safety
              management support through remote, hybrid and project-based engagements.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-cyan">
                Book an HSE Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Our Services
              </Link>
              <Link to="/partnership" className="text-sm font-btn font-medium text-cyan-light hover:text-white transition-colors px-4 py-2.5">
                Partner With Us →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={520}>
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

      <div className="hidden xl:block absolute right-10 top-1/3">
        <Reveal delay={600}>
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan/20 blur-2xl rounded-3xl animate-pulse-glow" />
            <div className="relative w-64 glass-dark rounded-3xl p-6 shadow-glow">
              <div className="flex items-center gap-2 text-cyan-light mb-3">
                <TrendingUp className="h-5 w-5" />
                <span className="font-btn text-xs uppercase tracking-widest">Impact</span>
              </div>
              <div className="font-display text-2xl font-bold text-white leading-tight">Build a Stronger<br />HSE Function<br />Without a Larger<br />HSE Department</div>
              <p className="mt-3 text-xs text-white/50 leading-relaxed">Senior expertise. Flexible engagement. Measurable improvement.</p>
            </div>
          </div>
        </Reveal>
      </div>

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

function ProblemSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div>
              <span className="font-btn text-xs uppercase tracking-widest text-cyan">The Challenge</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight text-ink-900">
                Your organisation may not need<br />
                more HSE administration.<br />
                <span className="gradient-text">It may need better HSE leadership.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-700">
                Many organisations face growing safety obligations without the senior expertise to
                manage them effectively. Hiring a full-time HSE director isn't always the answer —
                and the gap between compliance and performance keeps widening.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-700">
                HSE Transformation Partners provides experienced HSE leadership, management-system
                support, technical documentation, audits, contractor assurance and digital
                solutions through flexible engagements — so you get senior expertise without
                permanent overhead.
              </p>
              <div className="mt-7">
                <Link to="/hse-as-a-service" className="btn-primary">
                  Explore HSE as a Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid gap-3 sm:grid-cols-2">
              {PROBLEM_STATEMENTS.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5 rounded-xl bg-cloud border border-primary-900/5 px-4 py-3">
                  <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="font-btn text-xs font-medium text-ink-700">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[800px] bg-primary-800/30 blur-[120px] rounded-full" />
      <div className="relative container-x">
        <SectionHeading
          eyebrow="Our Expertise"
          theme="dark"
          title={<span className="text-white">Six Consulting <span className="gradient-text">Service Pillars</span></span>}
          subtitle="A complete HSE advisory and transformation capability — from fractional leadership and technical documentation to assurance, digital solutions and culture development."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PILLARS_HOME.map((p, i) => (
            <Reveal key={p.num} delay={i * 80}>
              <Link
                to="/services"
                className="group relative block h-full overflow-hidden rounded-3xl glass-dark p-7 card-hover hover:bg-ink-800/60"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 bg-cyan/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan-light border border-cyan/20 group-hover:bg-cyan/20 transition-colors">
                      <p.icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <span className="font-display text-3xl font-bold text-white/10 group-hover:text-cyan/20 transition-colors">{p.num}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.examples.map((ex) => (
                      <span key={ex} className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 font-btn text-[10px] text-white/60">{ex}</span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1.5 font-btn text-xs font-medium text-cyan-light">
                    Learn More <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
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

function HseAsServicePreview() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="HSE as a Service"
          title={<>Senior HSE expertise on a <span className="gradient-text">monthly retainer</span></>}
          subtitle="Three engagement models designed to give your organisation the right level of HSE leadership, management and advisory support — without permanent headcount."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {HSE_PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 120}>
              <div className={`relative h-full rounded-3xl p-8 card-hover ${pkg.highlight ? 'bg-ink-950 text-white shadow-glow border border-cyan/30' : 'bg-white border border-primary-900/5 hover:shadow-elev'}`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-4 py-1 font-btn text-[10px] font-bold uppercase tracking-widest text-ink-950">
                    Most Popular
                  </div>
                )}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${pkg.highlight ? 'bg-cyan/15 text-cyan-light border border-cyan/20' : 'bg-primary-800/5 text-primary-800'}`}>
                  <pkg.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className={`mt-5 font-display text-xl font-bold ${pkg.highlight ? 'text-white' : 'text-ink-900'}`}>{pkg.name}</h3>
                <p className={`mt-1 font-btn text-xs uppercase tracking-widest ${pkg.highlight ? 'text-cyan-light' : 'text-primary-800/60'}`}>{pkg.tagline}</p>
                <p className={`mt-4 text-sm leading-relaxed ${pkg.highlight ? 'text-white/60' : 'text-ink-700'}`}>{pkg.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${pkg.highlight ? 'text-cyan-light' : 'text-cyan'}`} />
                      <span className={`font-btn text-xs ${pkg.highlight ? 'text-white/70' : 'text-ink-700'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/hse-as-a-service" className={`mt-7 inline-flex w-full justify-center ${pkg.highlight ? 'btn-cyan' : 'btn-primary'}`}>
                  {pkg.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <p className="mt-8 text-center text-sm text-ink-700/60">
            Packages are customised based on organisation size, risk profile, number of sites, scope and support hours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title={<>Five steps from <span className="gradient-text">assessment to improvement</span></>}
          subtitle="A structured engagement model designed to deliver measurable HSE performance improvement."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {HOW_IT_WORKS.map((s, i) => (
            <Reveal key={s.step} delay={i * 100}>
              <div className="relative h-full">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-cyan/30 to-transparent" />
                )}
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev">
                  <s.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <span className="block mt-4 font-display text-xs font-bold text-cyan">{s.step}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryModels() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-15" />
      <div className="absolute top-1/4 right-0 h-80 w-80 bg-primary-700/20 blur-[120px] rounded-full" />
      <div className="relative container-x">
        <SectionHeading
          eyebrow="Delivery Models"
          theme="dark"
          title={<span className="text-white">Global HSE Expertise. <span className="gradient-text">Flexible Delivery.</span></span>}
          subtitle="Choose the engagement model that fits your organisation — remote, hybrid or project-based."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DELIVERY_MODELS.map((m, i) => (
            <Reveal key={m.title} delay={i * 120}>
              <div className="h-full rounded-3xl glass-dark p-8 card-hover hover:bg-ink-800/60">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan-light border border-cyan/20">
                  <m.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <div className="mt-10 text-center">
            <span className="font-display text-lg font-bold text-white/80">India · Middle East · International</span>
          </div>
        </Reveal>
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
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why HSE TP"
          title={<>We don't just manage safety.<br /><span className="gradient-text">We transform it.</span></>}
          subtitle="An international consulting mindset applied to every engagement, system and solution we deliver."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-primary-900/8 bg-white p-8 card-hover hover:border-cyan/30 hover:shadow-elev">
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

function SectorsGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries Served"
          title={<>Sectors we <span className="gradient-text">specialise in</span></>}
          subtitle="Deep domain expertise built over two decades across the world's most demanding industries."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { name: 'Construction', icon: Briefcase },
            { name: 'Oil & Gas', icon: ShieldCheck },
            { name: 'Renewable Energy', icon: TrendingUp },
            { name: 'Manufacturing', icon: Cpu },
            { name: 'Data Centres', icon: Globe2 },
            { name: 'Logistics', icon: Network },
            { name: 'Ports & Marine', icon: Globe2 },
            { name: 'Aviation', icon: Globe2 },
            { name: 'Facilities', icon: Briefcase },
            { name: 'EPC', icon: Briefcase },
          ].map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <Link to="/industries" className="group h-full rounded-2xl bg-cloud p-5 border border-primary-900/5 card-hover hover:border-cyan/30 hover:shadow-elev block">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-800/5 text-primary-800 group-hover:bg-cyan/10 group-hover:text-cyan transition-colors">
                  <s.icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-3 font-display font-semibold text-ink-900 text-sm">{s.name}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-hero-radial opacity-80" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute -top-20 right-1/4 h-72 w-72 bg-accent/15 blur-[100px] rounded-full animate-float" />
      <div className="relative container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Let's Transform Together</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white leading-[1.1]">
              Need Stronger HSE Capability<br />Without Increasing <span className="gradient-text-white">Permanent Overhead?</span>
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed">
              Whether you need an independent HSE advisor, fractional HSE manager, ISO maintenance partner,
              technical documentation desk, audit specialist, contractor assurance consultant or digital HSE
              partner, HSE Transformation Partners can build an engagement model aligned to your organisation,
              industry and risk profile.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-cyan">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Request a Proposal
              </Link>
              <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn-accent">
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
            </div>
            <p className="mt-8 text-xs text-white/40 max-w-2xl mx-auto leading-relaxed">
              Remote HSE consultancy, advisory or fractional leadership does not replace legally mandated
              competent persons, statutory appointments, site safety personnel or other roles required under
              applicable law, contract or regulatory requirements.
            </p>
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
      <ProblemSection />
      <PillarsSection />
      <HseAsServicePreview />
      <HowItWorks />
      <DeliveryModels />
      <ValueProps />
      <SectorsGrid />
      <FinalCTA />
    </>
  );
}
