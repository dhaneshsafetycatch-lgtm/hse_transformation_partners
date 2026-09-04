import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Globe2, Monitor, Building2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { INDUSTRIES, COMPANY, DISCLAIMER } from '../data/content';

export default function IndustriesPage() {
  const [active, setActive] = useState(0);
  const industry = INDUSTRIES[active];

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Industry-specific <span className="gradient-text-white">HSE solutions</span></>}
        subtitle="Specialised HSE consulting, documentation, assurance and digital solutions tailored to the unique risk profiles of each industry we serve."
        breadcrumb="Industries"
      />

      {/* Industry selector + detail */}
      <section className="section-pad bg-cloud">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Selector */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-white border border-primary-900/5 p-3 sticky top-24">
                <h3 className="px-3 py-2 font-display text-xs font-bold uppercase tracking-widest text-primary-800/60">Select an Industry</h3>
                <div className="space-y-1">
                  {INDUSTRIES.map((ind, i) => (
                    <button
                      key={ind.id}
                      onClick={() => setActive(i)}
                      className={`w-full flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                        i === active ? 'bg-cyan/10 text-cyan border border-cyan/20' : 'hover:bg-cloud text-ink-700 border border-transparent'
                      }`}
                    >
                      <ind.icon className="h-5 w-5 shrink-0" strokeWidth={1.7} />
                      <span className="font-btn text-sm font-medium">{ind.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Detail */}
            <div className="lg:col-span-8">
              <Reveal key={industry.id}>
                <div className="rounded-3xl bg-white border border-primary-900/5 p-8 shadow-elev">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev">
                      <industry.icon className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-ink-900">{industry.name}</h2>
                  </div>

                  {/* Challenges */}
                  <div className="mt-7">
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary-800/60">Common HSE Challenges</h3>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {industry.challenges.map((c) => (
                        <div key={c} className="flex items-start gap-2 rounded-xl bg-cloud px-3 py-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span className="font-btn text-xs text-ink-700">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mt-6">
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary-800/60">Suitable Services</h3>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {industry.services.map((s) => (
                        <div key={s} className="flex items-start gap-2 rounded-xl bg-cloud px-3 py-2.5">
                          <CheckCircle2 className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                          <span className="font-btn text-xs text-ink-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mt-6">
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary-800/60">Typical Deliverables</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.deliverables.map((d) => (
                        <span key={d} className="rounded-full bg-primary-800/5 border border-primary-900/10 px-3 py-1.5 font-btn text-xs text-ink-700">{d}</span>
                      ))}
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-ink-950 p-5">
                      <div className="flex items-center gap-2 text-cyan-light mb-3">
                        <Monitor className="h-4 w-4" />
                        <span className="font-btn text-xs font-bold uppercase tracking-widest">Remote Services</span>
                      </div>
                      <ul className="space-y-1.5">
                        {industry.remote.map((r) => (
                          <li key={r} className="font-btn text-xs text-white/60 flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-cyan-light" /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-ink-950 p-5">
                      <div className="flex items-center gap-2 text-cyan-light mb-3">
                        <Building2 className="h-4 w-4" />
                        <span className="font-btn text-xs font-bold uppercase tracking-widest">Hybrid / Site Services</span>
                      </div>
                      <ul className="space-y-1.5">
                        {industry.hybrid.map((h) => (
                          <li key={h} className="font-btn text-xs text-white/60 flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-cyan-light" /> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link to="/contact" className="btn-primary">
                      Discuss Your Industry <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`https://wa.me/${COMPANY.whatsappRaw}?text=Hello%20HSE%20Transformation%20Partners.%20I%20would%20like%20to%20discuss%20HSE%20support%20for%20${encodeURIComponent(industry.name)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How engagement works */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="How Engagement Works"
            title={<>From first conversation to <span className="gradient-text">ongoing support</span></>}
            subtitle="A simple, structured process to get your organisation the HSE support it needs."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              { step: '1', title: 'Initial Consultation', desc: 'We discuss your organisation, industry, risk profile and immediate HSE priorities.' },
              { step: '2', title: 'Scope & Proposal', desc: 'We define the engagement scope, deliverables, timeline and commercial terms.' },
              { step: '3', title: 'Delivery', desc: 'Remote, hybrid or onsite delivery of agreed HSE services and documentation.' },
              { step: '4', title: 'Ongoing Support', desc: 'Continuous monitoring, review and improvement through a monthly retainer if needed.' },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="h-full rounded-2xl bg-cloud p-6 border border-primary-900/5">
                  <span className="font-display text-3xl font-bold text-cyan/30">{s.step}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-cloud">
        <div className="container-x">
          <Reveal>
            <div className="rounded-2xl bg-white border border-primary-900/5 p-6">
              <p className="text-xs text-ink-700/60 leading-relaxed">{DISCLAIMER}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
