import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Briefcase, Crown } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { HSE_PACKAGES, COMPANY, DELIVERY_MODELS, DISCLAIMER } from '../data/content';

export default function HseAsAServicePage() {
  return (
    <>
      <PageHero
        eyebrow="HSE as a Service"
        title={<>Senior HSE expertise on a <span className="gradient-text-white">monthly retainer</span></>}
        subtitle="Three engagement models designed to give your organisation the right level of HSE leadership, management and advisory support — without permanent headcount."
        breadcrumb="HSE as a Service"
      />

      {/* Packages */}
      <section className="section-pad bg-cloud">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
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
                  <Link to="/contact" className={`mt-7 inline-flex w-full justify-center ${pkg.highlight ? 'btn-cyan' : 'btn-primary'}`}>
                    {pkg.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-8 text-center text-sm text-ink-700/60 max-w-2xl mx-auto">
              Packages are customised based on organisation size, risk profile, number of sites, scope and support hours.
              Contact us to discuss a tailored engagement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Delivery Models */}
      <section className="section-pad relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-15" />
        <div className="absolute top-1/4 right-0 h-80 w-80 bg-primary-700/20 blur-[120px] rounded-full" />
        <div className="relative container-x">
          <SectionHeading
            eyebrow="Delivery Models"
            theme="dark"
            title={<span className="text-white">Choose your <span className="gradient-text">engagement model</span></span>}
            subtitle="Every package can be delivered remotely, in hybrid mode, or as a project-based assignment."
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
        </div>
      </section>

      {/* Why HSE as a Service */}
      <section className="section-pad bg-cloud">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why It Works"
            title={<>Build a stronger HSE function <span className="gradient-text">without a larger department</span></>}
            subtitle="Access senior HSE leadership, management-system expertise and digital solutions through a flexible monthly engagement."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Crown, title: 'Senior Expertise', desc: 'Get fractional HSE director-level leadership without the cost of a full-time executive.' },
              { icon: ShieldCheck, title: 'Continuous Compliance', desc: 'Ongoing ISO maintenance, audit readiness and contractor assurance — not just a one-off project.' },
              { icon: Briefcase, title: 'Scalable Engagement', desc: 'Scale support up or down based on project demands, risk profile and organisational needs.' },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="group h-full rounded-2xl bg-white p-8 border border-primary-900/5 card-hover hover:border-cyan/30 hover:shadow-elev">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev group-hover:scale-110 transition-transform">
                    <v.icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-700">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ink-950">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Ready to discuss your monthly HSE engagement?</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-cyan">Book a Consultation <ArrowRight className="h-4 w-4" /></Link>
              <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn-outline">
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
            </div>
            <p className="mt-8 text-xs text-white/40 max-w-2xl mx-auto leading-relaxed">{DISCLAIMER}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
