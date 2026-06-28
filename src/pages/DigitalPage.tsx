import { ArrowRight, Check, Smartphone, MapPin, Clock, Camera, PenTool, Bell, BarChart3, Cloud, FileSearch, Leaf, ShieldCheck, BarChart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { DIGITAL_OFFERINGS, DIGITAL_FORMS, DIGITAL_FEATURES, COMPANY } from '../data/content';

const FEATURE_ICONS = [Smartphone, MapPin, Clock, Camera, PenTool, Bell, BarChart3, Cloud, FileSearch, ShieldCheck];

function OfferingsGrid() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="Digital Services"
          title={<>Smart <span className="gradient-text">digital HSE solutions</span></>}
          subtitle="From a simple checklist to a complete HSE management system — we digitize and automate your entire safety process."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIGITAL_OFFERINGS.map((o, i) => (
            <Reveal key={o.title} delay={i * 80}>
              <div className="group h-full rounded-2xl bg-white border border-primary-900/5 p-6 card-hover hover:border-cyan/30 hover:shadow-elev">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan border border-cyan/20 group-hover:bg-cyan/20 transition-colors">
                  <o.icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display font-bold text-ink-900">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{o.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalFormsSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-0 right-1/4 h-80 w-80 bg-cyan/15 blur-[120px] rounded-full animate-float" />
      <div className="relative container-x">
        <SectionHeading
          eyebrow="Digital Forms Development"
          theme="dark"
          title={<span className="text-white">Convert any HSE form into a <span className="gradient-text">smart digital system</span></span>}
          subtitle="We transform paper-based forms, checklists, permits and inspection records into fully digital systems that eliminate paperwork and provide real-time visibility."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DIGITAL_FORMS.map((g, i) => (
            <Reveal key={g.group} delay={i * 90}>
              <div className="group h-full rounded-2xl glass-dark p-6 card-hover hover:bg-ink-800/60">
                <h3 className="font-display font-bold text-white">{g.group}</h3>
                <div className="mt-3 h-px bg-gradient-to-r from-cyan/40 to-transparent" />
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 font-btn text-xs text-white/65">
                      <Check className="h-3 w-3 text-cyan shrink-0" strokeWidth={3} /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Key Features"
          title={<>Engineered for <span className="gradient-text">real-world safety</span></>}
          subtitle="Every digital solution is built with the capabilities safety teams need in the field — not just dashboards."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {DIGITAL_FEATURES.map((f, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            return (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group h-full rounded-2xl bg-cloud border border-primary-900/5 p-5 card-hover hover:border-cyan/30 hover:shadow-elev text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev group-hover:scale-110 transition-transform mx-auto">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-ink-900">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-700">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const groups = [
    {
      icon: Leaf, title: 'ESG & Sustainability', accent: 'from-green-500/20 to-emerald-500/10', text: 'text-emerald-500',
      points: ['Significant reduction in paper consumption', 'Reduced printing costs', 'Lower carbon footprint', 'Support ESG reporting requirements'],
    },
    {
      icon: ShieldCheck, title: 'Governance', accent: 'from-primary-700/20 to-primary-600/10', text: 'text-cyan',
      points: ['Full audit trail', 'Data integrity', 'Improved compliance monitoring', 'Better management oversight'],
    },
    {
      icon: MessageCircle, title: 'Social', accent: 'from-accent/20 to-accent/10', text: 'text-accent',
      points: ['Increased workforce participation', 'Faster reporting of hazards', 'Improved communication', 'Enhanced safety culture'],
    },
    {
      icon: BarChart, title: 'Business Impact', accent: 'from-cyan/20 to-cyan-light/10', text: 'text-cyan-light',
      points: ['Reduce administrative workload by up to 80%', 'Real-time data visibility', 'Automatic record retention', 'Evidence available within seconds'],
    },
  ];
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Go Digital?"
          title={<>Paper to <span className="gradient-text">performance</span></>}
          subtitle="Traditional paper-based systems create lost records, delayed reporting and compliance gaps. Our digital solutions deliver instant access, automated reporting and complete audit trails."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className={`group h-full rounded-3xl bg-white border border-primary-900/5 p-7 card-hover hover:shadow-elev overflow-hidden`}>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${g.accent} ${g.text}`}>
                  <g.icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display font-bold text-ink-900">{g.title}</h3>
                <div className="mt-3 h-px bg-gradient-to-r from-cyan/30 to-transparent" />
                <ul className="mt-4 space-y-2">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 font-btn text-xs text-ink-700 leading-relaxed">
                      <Check className="h-3 w-3 text-cyan shrink-0 mt-0.5" strokeWidth={3} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardShowcase() {
  const kpis = ['TRIR', 'LTIFR', 'Near Miss Trends', 'Safety Observations', 'PTW Statistics', 'Training Compliance', 'Contractor Performance', 'ESG Indicators', 'Leading & Lagging KPIs'];
  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-80 w-[700px] bg-primary-800/30 blur-[120px] rounded-full" />
      <div className="relative container-x">
        <SectionHeading
          eyebrow="Custom Dashboards"
          theme="dark"
          title={<span className="text-white">Executive <span className="gradient-text">safety dashboards</span></span>}
          subtitle="We develop executive dashboards that turn safety data into decisions — live KPI monitoring across your entire organization."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="space-y-3">
              {kpis.map((k, i) => (
                <div
                  key={k}
                  className="flex items-center justify-between rounded-xl glass-dark px-5 py-3.5"
                  style={{ opacity: 0, animation: `fade-up 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms forwards` }}
                >
                  <span className="font-btn text-sm font-medium text-white/80">{k}</span>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan to-accent" style={{ width: `${70 + (i * 3) % 25}%` }} />
                    </div>
                    <span className="font-display text-xs font-bold text-cyan-light">{70 + (i * 3) % 25}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-cyan/10 blur-3xl rounded-full" />
              <div className="relative rounded-3xl glass-dark p-7 shadow-glow">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-btn text-xs uppercase tracking-widest text-cyan-light">Safety KPI Overview</span>
                  <span className="flex items-center gap-1.5 font-btn text-xs text-white/50">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'TRIR', val: '0.42', delta: '-18%' },
                    { label: 'LTIFR', val: '0.21', delta: '-12%' },
                    { label: 'Near Miss', val: '1,248', delta: '+34%' },
                    { label: 'Observations', val: '3,902', delta: '+22%' },
                  ].map((k) => (
                    <div key={k.label} className="rounded-xl bg-ink-950/50 p-4 border border-white/5">
                      <div className="font-btn text-xs uppercase tracking-widest text-white/40">{k.label}</div>
                      <div className="mt-1 font-display text-2xl font-bold text-white">{k.val}</div>
                      <div className={`mt-1 font-btn text-xs ${k.delta.startsWith('-') ? 'text-green-400' : 'text-cyan-light'}`}>{k.delta}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl bg-ink-950/50 p-4 border border-white/5">
                  <div className="font-btn text-xs uppercase tracking-widest text-white/40 mb-3">12-Month Trend</div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-primary-700 to-cyan-light"
                        style={{ height: `${h}%`, opacity: 0, animation: `fade-up 0.5s ease ${i * 60}ms forwards` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InvestmentModel() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-ink-950 p-8 md:p-14 text-center shadow-elev">
            <div className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-20" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[500px] bg-cyan/20 blur-[100px] rounded-full" />
            <div className="relative">
              <span className="eyebrow">One-Time Investment Model</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
                Unlike expensive enterprise subscriptions — pay once, own it.
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
                Our solutions are developed as customized systems with a one-time implementation investment and
                minimal maintenance costs — built around your existing processes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                {['Oil & Gas', 'Construction', 'Manufacturing', 'Power Plants', 'Data Centres', 'Ports & Logistics', 'Infrastructure', 'EPC', 'Aviation'].map((t) => (
                  <span key={t} className="rounded-full bg-white/10 backdrop-blur-md px-4 py-2 font-btn text-xs font-medium text-white border border-white/10">{t}</span>
                ))}
              </div>
              <Link to="/contact" className="btn-accent mt-9">
                Discuss Your Digital Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function DigitalPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital HSE Solutions"
        title={<>Transform paper-based safety into <span className="gradient-text-white">smart digital systems</span></>}
        subtitle="Digital HSE Forms, Inspection Systems, Audit Platforms, AI-assisted analytics and Safety Dashboards that eliminate paperwork, improve compliance and deliver real-time visibility of safety performance."
        breadcrumb="Digital Solutions"
      />
      <OfferingsGrid />
      <DigitalFormsSection />
      <FeaturesSection />
      <BenefitsSection />
      <DashboardShowcase />
      <InvestmentModel />
      <section className="py-16 bg-ink-950">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Ready to digitize your HSE operations?</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-cyan">Request Consulting <ArrowRight className="h-4 w-4" /></Link>
              <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn-outline">
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
