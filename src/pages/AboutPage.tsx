import { Target, Eye, Compass, Award, Briefcase, Globe2, ShieldCheck, ArrowRight, BadgeCheck, Sparkles, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { COMPANY, STANDARDS } from '../data/content';

const QUALIFICATIONS = [
  'Postgraduate Diploma in HSE Management (United Kingdom)',
  'NEBOSH International General Certificate',
  'ISO 9001, ISO 14001 & ISO 45001 Lead Auditor',
  'Graduate Member of IOSH (GradIOSH)',
  'Certified Master Trainer',
  'Advanced Prompt Engineering Certification',
  'Specialist in Digital HSE Systems & AI-Enabled Safety Solutions',
];

const EXPERTISE_AREAS = [
  'HSE Management Systems',
  'Construction & Oil & Gas Safety',
  'Risk Assessment & High-Risk Operations',
  'Process Safety & Shutdown Management',
  'Safety Leadership & Culture Development',
  'Training & Competency Frameworks',
  'ISO Management Systems',
  'Digital HSE Transformation',
  'AI-Assisted Safety Solutions',
  'Audit, Compliance & Assurance',
];

const FOUNDER_CLIENTS = ['ADNOC', 'Shell', 'Petrofac', 'AECOM', 'JGC', 'KBR', 'PDO', 'RasGas', 'Dow/Aramco', 'Tecnimont'];

function MasterySection() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-0 right-1/4 h-80 w-80 bg-primary-700/25 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 bg-cyan/15 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative container-x">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Mastery in HSE Consultancy</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-[1.1] text-white">
              Meet our <span className="gradient-text">Founder & Principal Consultant</span>
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Two decades of international HSE leadership — forged on the world's most demanding projects.
            </p>
          </div>
        </Reveal>

        {/* Founder card */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Portrait panel */}
          <Reveal className="lg:col-span-4">
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan/20 to-accent/10 blur-3xl rounded-full" />
              <div className="relative rounded-3xl glass-dark p-8 shadow-glow text-center">
                <div className="relative mx-auto h-40 w-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan to-accent opacity-30 blur-xl animate-pulse-glow" />
                  <img
                    src="/dhanesh.png"
                    alt="Dhanesh Kuzhuveliparambil Manoharan - Founder & Principal Consultant"
                    className="relative h-40 w-40 rounded-full object-cover border-2 border-cyan/30 shadow-glow"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white leading-tight">
                  Dhanesh Kuzhuveliparambil Manoharan
                </h3>
                <div className="mt-1.5 font-btn text-xs uppercase tracking-widest text-cyan-light">
                  Founder & Principal Consultant
                </div>
                <div className="font-btn text-xs text-white/50">HSE Transformation Partners</div>

                <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                  {['20+ Years', 'International', 'Oil & Gas', 'Digital HSE'].map((t) => (
                    <span key={t} className="rounded-full bg-cyan/10 border border-cyan/20 px-3 py-1 font-btn text-[10px] font-medium text-cyan-light">{t}</span>
                  ))}
                </div>

                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline mt-6 w-full justify-center text-xs"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </Reveal>

          {/* Biography */}
          <div className="lg:col-span-8 space-y-10">
            <Reveal delay={120}>
              <div>
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-cyan-light" /> Career Overview
                </h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/65">
                  <p>
                    With more than 20 years of international experience across Oil &amp; Gas, EPC Construction,
                    Shutdowns, Manufacturing, Infrastructure, and Industrial Projects, Dhanesh has built a career
                    dedicated to transforming safety performance, strengthening operational excellence, and developing
                    sustainable HSE management systems.
                  </p>
                  <p>
                    Having worked on major projects and international assignments with organizations including
                    ADNOC, Shell, Petrofac, AECOM, JGC, KBR, PDO, RasGas, Dow/Aramco, and Tecnimont, he brings a
                    unique combination of field experience, leadership capability, consulting expertise, and strategic
                    safety transformation.
                  </p>
                </div>

                {/* Client chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {FOUNDER_CLIENTS.map((c) => (
                    <span key={c} className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 font-btn text-xs font-medium text-white/70 hover:border-cyan/30 hover:text-cyan-light transition-colors">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-cyan-light" /> Specializations
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  Dhanesh specializes in the design and implementation of HSE Management Systems, Risk Management
                  Frameworks, Contractor HSE Programs, Safety Leadership Development, Competency-Based Training
                  Systems, Incident Investigation Programs, and Digital HSE Solutions. His expertise extends beyond
                  compliance, focusing on creating practical systems that improve performance, strengthen safety
                  culture, and deliver measurable business value.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Throughout his career, he has successfully led multidisciplinary HSE teams, supported large-scale
                  EPC and shutdown projects, developed internationally recognized training programs, conducted audits
                  and compliance reviews, and assisted organizations in achieving higher standards of operational
                  safety and performance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div>
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-cyan-light" /> Founder's Commitment
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  As the Founder of HSE Transformation Partners, Dhanesh is committed to helping organizations move
                  beyond compliance and towards a culture of excellence by integrating people, systems, leadership,
                  technology, and innovation into a unified approach to safety transformation.
                </p>
              </div>
            </Reveal>

            {/* Quote */}
            <Reveal delay={360}>
              <blockquote className="relative rounded-2xl glass-dark p-7 border-l-2 border-cyan">
                <span className="absolute -top-4 left-6 font-display text-6xl text-cyan/30 leading-none">"</span>
                <p className="relative font-display text-lg md:text-xl font-medium text-white leading-relaxed italic">
                  True safety transformation is achieved when leadership, culture, systems, and people work together
                  to create sustainable performance and operational excellence.
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* Qualifications + Expertise grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl glass-dark p-8">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent border border-accent/30">
                  <BadgeCheck className="h-5 w-5" strokeWidth={1.7} />
                </span>
                Qualifications &amp; Professional Credentials
              </h3>
              <ul className="mt-5 space-y-2.5">
                {QUALIFICATIONS.map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl glass-dark p-8">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan-light border border-cyan/30">
                  <Cpu className="h-5 w-5" strokeWidth={1.7} />
                </span>
                Core Areas of Expertise
              </h3>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {EXPERTISE_AREAS.map((e) => (
                  <div key={e} className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5">
                    <BadgeCheck className="h-4 w-4 text-cyan-light shrink-0" strokeWidth={1.8} />
                    <span className="font-btn text-xs font-medium text-white/80">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  { year: 'Phase I', title: 'Foundation in High-Risk Operations', desc: 'Deep expertise in confined space, work at height, lifting & rigging, PTW and LOTO across construction, oil & gas and manufacturing.' },
  { year: 'Phase II', title: 'Consulting & Systems Leadership', desc: 'Built HSE management systems, led ISO 45001 implementations and safety culture transformation for EPC and process industry clients.' },
  { year: 'Phase III', title: 'Multi-Sector Expansion', desc: 'Delivered 300+ training programs across aviation, power, data centres, ports, metro rail and infrastructure.' },
  { year: 'Phase IV', title: 'Digital HSE Transformation', desc: 'Pioneering paperless HSE — digital forms, inspection systems, Power BI dashboards and AI-assisted safety concepts.' },
];

function Philosophy() {
  const items = [
    { icon: Target, title: 'Mission', desc: 'To elevate organizational safety performance by blending deep operational expertise with modern digital innovation — moving every client beyond compliance toward sustained excellence.' },
    { icon: Eye, title: 'Vision', desc: 'To be a globally recognized HSE transformation consultancy that redefines how organizations manage risk, develop competence and embed safety culture.' },
    { icon: Compass, title: 'Philosophy', desc: 'Safety is not a department — it is a leadership responsibility. We design systems that people trust, build capability that lasts and deliver outcomes that are measurable.' },
  ];
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Who We Are"
          title={<>Professional <span className="gradient-text">profile & philosophy</span></>}
          subtitle="HSE Transformation Partners is a global safety transformation consultancy built on two decades of international delivery across the world's most demanding industries."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 120}>
              <div className="group h-full rounded-3xl bg-cloud border border-primary-900/5 p-8 card-hover hover:border-cyan/30 hover:shadow-elev">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev">
                  <it.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const creds = [
    { icon: Globe2, title: 'International Experience', desc: 'India | Middle East | International standards, including ADNOC, Shell, Petrofac, AECOM, JGC, KBR, Dow & Aramco environments.' },
    { icon: Award, title: 'Certification Study Materials', desc: 'Developed NEBOSH IGC, NEBOSH Diploma, IOSH Managing Safely and IOSH Working Safely study materials for Safety Catch and client programs.' },
    { icon: Briefcase, title: 'Portfolio at Scale', desc: '300+ training programs, 100+ consulting deliverables and 10,000+ presentation slides developed and delivered.' },
    { icon: ShieldCheck, title: 'Standards Referenced', desc: 'ISO 45001 · OSHA · ILO · ADNOC COP · NEBOSH · IOSH — applied consistently across every assignment.' },
  ];
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="Credentials"
          title={<>Built on <span className="gradient-text">proven experience</span></>}
          subtitle="A track record forged in some of the world's most complex project environments."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {creds.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group flex gap-5 p-7 rounded-3xl bg-white border border-primary-900/5 card-hover hover:border-cyan/30 hover:shadow-elev">
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan border border-cyan/20 group-hover:bg-cyan/20 transition-colors">
                  <c.icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerTimeline() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-1/2 right-0 h-80 w-80 bg-primary-700/20 blur-[120px] rounded-full" />
      <div className="relative container-x">
        <SectionHeading
          eyebrow="Career Timeline"
          theme="dark"
          title={<span className="text-white">Our <span className="gradient-text">journey of transformation</span></span>}
          subtitle="A progressive evolution from hands-on high-risk operational expertise to enterprise-grade digital HSE consulting."
        />
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-cyan/20 to-transparent md:-translate-x-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 100}>
                <div className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5">
                    <div className="relative h-3 w-3 rounded-full bg-cyan-light">
                      <div className="absolute inset-0 rounded-full bg-cyan-light animate-ping opacity-40" />
                    </div>
                  </div>
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="font-btn text-xs uppercase tracking-widest text-cyan-light">{t.year}</span>
                    <h3 className="mt-2 font-display text-lg font-bold text-white">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StandardsBand() {
  return (
    <section className="py-14 bg-cloud border-t border-primary-900/5">
      <div className="container-x">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-btn text-xs uppercase tracking-widest text-primary-800/60">Standards We Reference</div>
            <p className="mt-1 font-display text-xl font-bold text-ink-900">Built on globally recognized frameworks</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {STANDARDS.map((s) => (
              <span key={s} className="rounded-full border border-primary-900/10 bg-white px-4 py-2 font-btn text-xs font-medium text-primary-800">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HSE TP"
        title={<>A global safety <span className="gradient-text-white">transformation consultancy</span></>}
        subtitle="Positioned at the intersection of operational safety expertise and digital innovation — serving clients across Oil & Gas, Construction, Infrastructure, Power, Data Centres and beyond."
        breadcrumb="About"
      />
      <Philosophy />
      <MasterySection />
      <Credentials />
      <CareerTimeline />
      <StandardsBand />
      <section className="py-16 bg-ink-950">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Let's talk about your safety transformation.</h2>
            <Link to="/contact" className="btn-cyan mt-6">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
