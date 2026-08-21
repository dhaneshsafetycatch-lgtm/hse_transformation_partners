import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { SERVICES, COMPANY } from '../data/content';

function ServiceDetail({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const dark = index % 2 === 1;
  const Icon = service.icon;
  return (
    <section className={`section-pad ${dark ? 'bg-ink-950 relative overflow-hidden' : 'bg-cloud'}`}>
      {dark && (
        <>
          <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-15" />
          <div className="absolute top-1/4 -translate-y-1/2 right-0 h-80 w-80 bg-primary-700/20 blur-[120px] rounded-full" />
        </>
      )}
      <div className="relative container-x">
        <div className={`grid gap-10 lg:gap-16 items-center lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
          {/* Visual */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan/10 blur-3xl rounded-full" />
              <div className={`relative aspect-square max-w-md mx-auto rounded-3xl ${dark ? 'glass-dark' : 'bg-white border border-primary-900/5'} p-10 shadow-elev`}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev">
                      <Icon className="h-12 w-12" strokeWidth={1.5} />
                    </div>
                    <h3 className={`mt-6 font-display text-2xl font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>{service.title}</h3>
                    <p className={`mt-2 text-sm ${dark ? 'text-white/50' : 'text-ink-700'}`}>{service.short}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={120} className="lg:[direction:ltr]">
            <span className="font-btn text-xs uppercase tracking-widest text-cyan">0{index + 1} — Service Pillar</span>
            <h2 className={`mt-3 font-display text-3xl md:text-4xl font-bold leading-tight ${dark ? 'text-white' : 'text-ink-900'}`}>
              {service.title}
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-white/60' : 'text-ink-700'}`}>{service.short}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <div key={item} className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 ${dark ? 'glass-dark' : 'bg-white border border-primary-900/5'}`}>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className={`font-btn text-xs font-medium ${dark ? 'text-white/80' : 'text-ink-900'}`}>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className={`mt-7 inline-flex ${dark ? 'btn-cyan' : 'btn-primary'}`}>
              Request this Service <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndustrySolutions() {
  const industries = [
    { name: 'Oil & Gas', items: ['Process Safety', 'SIMOPS', 'Permit to Work', 'Shutdown Safety', 'Commissioning Safety', 'Hydrocarbon Hazard Management'] },
    { name: 'Construction', items: ['Construction HSE Systems', 'Work at Height', 'Excavation Safety', 'Temporary Works', 'Contractor Control'] },
    { name: 'Aviation', items: ['Airport Construction Safety', 'Airside Safety Awareness', 'Contractor Management'] },
    { name: 'Power Generation', items: ['Electrical Safety', 'Chemical Handling', 'Maintenance Safety'] },
    { name: 'Data Centres', items: ['Critical Infrastructure Safety', 'Facility Risk Management', 'Contractor Safety Systems'] },
    { name: 'Ports & Logistics', items: ['Cargo Handling Safety', 'Lifting Operations', 'Marine Interface Safety'] },
  ];
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industry Solutions"
          title={<>Tailored <span className="gradient-text">sector solutions</span></>}
          subtitle="Specialized HSE solutions designed around the unique risk profiles of each industry we serve."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 80}>
              <div className="group h-full rounded-2xl bg-white p-6 border border-primary-900/5 card-hover hover:border-cyan/30 hover:shadow-elev">
                <h3 className="font-display font-bold text-ink-900 text-lg">{ind.name}</h3>
                <div className="mt-3 h-px bg-gradient-to-r from-cyan/40 to-transparent" />
                <ul className="mt-4 space-y-2">
                  {ind.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 font-btn text-xs text-ink-700">
                      <span className="h-1 w-1 rounded-full bg-cyan" /> {it}
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

function ConsultingProjects() {
  const projects = [
    'HSE Management System Development', 'ISO 45001 Implementation Support', 'Integrated Management Systems',
    'Safety Culture Transformation Programs', 'HSE Performance Improvement Initiatives', 'Compliance Audits',
    'Contractor HSE Assessment', 'Emergency Preparedness Reviews', 'Gap Analysis Studies',
    'Corporate HSE Framework Development',
  ];
  return (
    <section className="section-pad bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[700px] bg-primary-800/30 blur-[120px] rounded-full" />
      <div className="relative container-x">
        <SectionHeading
          eyebrow="Consulting Projects"
          theme="dark"
          title={<span className="text-white">Notable <span className="gradient-text">consulting engagements</span></span>}
          subtitle="Consulting assignments delivered across Infrastructure, Manufacturing, Aviation, Power, Data Centres, Ports and Oil & Gas sectors."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <div className="group flex items-center gap-3 rounded-2xl glass-dark p-5 card-hover hover:bg-ink-800/60">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan-light border border-cyan/20 font-display font-bold text-sm shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-btn text-sm font-medium text-white/80">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>HSE expertise across <span className="gradient-text-white">every domain</span></>}
        subtitle="From HSE consulting and specialized domain safety to ISO implementation, leadership development and digital transformation — six integrated service pillars covering the full safety lifecycle."
        breadcrumb="Services"
      />
      {SERVICES.map((s, i) => <ServiceDetail key={s.id} service={s} index={i} />)}
      <IndustrySolutions />
      <ConsultingProjects />
      <section className="py-16 bg-ink-950">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Need a service tailored to your project?</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-cyan">Request Proposal <ArrowRight className="h-4 w-4" /></Link>
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
