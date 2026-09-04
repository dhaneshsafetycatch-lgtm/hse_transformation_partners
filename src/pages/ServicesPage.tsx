import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import {
  SERVICES, COMPANY, FRACTIONAL_LEADERSHIP_SERVICES, DOCUMENTATION_DESK_SERVICES,
  TENDER_SERVICES, ISO_SERVICES, CONTRACTOR_ASSURANCE_SERVICES, CONTRACTOR_GRADES,
  INCIDENT_INVESTIGATION_SERVICES, SAFETY_CULTURE_SERVICES, HSE_HEALTH_CHECK_AREAS,
  HSE_MATURITY_LEVELS, DIGITAL_OFFERINGS, REMOTE_ASSURANCE_OFFERINGS, DIGITAL_PLATFORMS,
  DISCLAIMER,
} from '../data/content';

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

function FractionalLeadershipDetail() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="01 — Fractional HSE Leadership"
          title={<>Senior HSE leadership. <span className="gradient-text">Flexible engagement.</span></>}
          subtitle="Access experienced HSE director-level leadership without appointing a full-time executive."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FRACTIONAL_LEADERSHIP_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-cloud p-7 border border-primary-900/5 card-hover hover:border-cyan/30 hover:shadow-elev">
                <h3 className="font-display text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-full bg-primary-800/5 border border-primary-900/10 px-2.5 py-1 font-btn text-[10px] text-ink-700">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <div className="mt-8 rounded-2xl bg-ink-950 p-6 text-center">
            <p className="font-display text-lg font-bold text-white">Need a dedicated HSE technical desk without increasing permanent headcount?</p>
            <Link to="/contact" className="btn-cyan mt-4">Talk to an HSE Consultant <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DocumentationDeskDetail() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="02 — HSE Technical & Documentation Desk"
          title={<>Your outsourced <span className="gradient-text">HSE technical office</span></>}
          subtitle="Use HSE Transformation Partners as an external HSE technical desk for plans, procedures, risk assessments and management-system documentation."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DOCUMENTATION_DESK_SERVICES.map((d, i) => (
            <Reveal key={d} delay={i * 30}>
              <div className="flex items-center gap-2.5 rounded-xl bg-white border border-primary-900/5 px-4 py-3 card-hover hover:border-cyan/30">
                <Check className="h-4 w-4 text-cyan shrink-0" />
                <span className="font-btn text-xs font-medium text-ink-700">{d}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tender support sub-section */}
        <div className="mt-12">
          <SectionHeading
            eyebrow="Tender & Prequalification"
            title={<>HSE Tender, PQQ & <span className="gradient-text">Contractor Prequalification</span></>}
            subtitle="Professional HSE support from tender qualification through project mobilisation."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TENDER_SERVICES.map((t, i) => (
              <Reveal key={t} delay={i * 40}>
                <div className="flex items-center gap-2.5 rounded-xl bg-white border border-primary-900/5 px-4 py-3 card-hover hover:border-cyan/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  <span className="font-btn text-xs font-medium text-ink-700">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AssuranceIsoDetail() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="03 — Assurance, Audit & ISO Compliance"
          title={<>ISO implementation, maintenance <span className="gradient-text">& audit readiness</span></>}
          subtitle="Three service layers — from initial implementation through ongoing maintenance and audit readiness."
        />

        {/* Implementation */}
        <Reveal>
          <div className="mt-14 rounded-2xl bg-cloud p-7 border border-primary-900/5">
            <h3 className="font-display text-lg font-bold text-ink-900">{ISO_SERVICES.implementation.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {ISO_SERVICES.implementation.items.map((item) => (
                <span key={item} className="rounded-full bg-primary-800/5 border border-primary-900/10 px-3 py-1.5 font-btn text-xs text-ink-700">{item}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Maintenance Partner */}
        <Reveal delay={100}>
          <div className="mt-6 rounded-2xl bg-ink-950 p-7 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-15" />
            <div className="relative">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{ISO_SERVICES.maintenance.title}</h3>
                  <p className="mt-2 text-sm text-white/60 max-w-xl">{ISO_SERVICES.maintenance.desc}</p>
                </div>
                <Link to="/contact" className="btn-cyan shrink-0">Maintain Your ISO System</Link>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {ISO_SERVICES.maintenance.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg glass-dark px-3 py-2">
                    <Check className="h-3.5 w-3.5 text-cyan-light shrink-0" />
                    <span className="font-btn text-[11px] text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Audit Readiness */}
        <Reveal delay={200}>
          <div className="mt-6 rounded-2xl bg-cloud p-7 border border-primary-900/5">
            <h3 className="font-display text-lg font-bold text-ink-900">{ISO_SERVICES.auditReadiness.title}</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {ISO_SERVICES.auditReadiness.items.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg bg-white border border-primary-900/5 px-3 py-2">
                  <Check className="h-3.5 w-3.5 text-cyan shrink-0" />
                  <span className="font-btn text-[11px] text-ink-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Contractor Assurance */}
        <div className="mt-12">
          <SectionHeading
            eyebrow="Contractor HSE Assurance"
            title={<>Contractor <span className="gradient-text">HSE performance management</span></>}
            subtitle="A structured contractor assurance programme with performance grading."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONTRACTOR_ASSURANCE_SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 40}>
                <div className="flex items-center gap-2.5 rounded-xl bg-cloud border border-primary-900/5 px-4 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  <span className="font-btn text-xs font-medium text-ink-700">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contractor grades */}
          <Reveal delay={300}>
            <div className="mt-8">
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary-800/60 mb-4">Contractor HSE Performance Score</h4>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {CONTRACTOR_GRADES.map((g, i) => (
                  <div key={g.grade} className={`rounded-2xl p-5 border ${i === 0 ? 'bg-green-50 border-green-200' : i === 4 ? 'bg-red-50 border-red-200' : 'bg-cloud border-primary-900/5'}`}>
                    <div className={`font-display text-sm font-bold ${i === 0 ? 'text-green-700' : i === 4 ? 'text-red-700' : 'text-ink-900'}`}>{g.grade}</div>
                    <p className="mt-1.5 text-xs text-ink-700 leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-ink-700/50">This is an internal consultancy assessment system, not a formal certification.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IncidentInvestigationDetail() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="Incident Investigation"
          title={<>Independent investigation focused on <span className="gradient-text">why the system allowed it</span></>}
          subtitle="Independent analysis focused not merely on what happened, but why the system allowed it to happen."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INCIDENT_INVESTIGATION_SERVICES.map((s, i) => (
            <Reveal key={s} delay={i * 40}>
              <div className="flex items-center gap-2.5 rounded-xl bg-white border border-primary-900/5 px-4 py-3 card-hover hover:border-cyan/30">
                <Check className="h-4 w-4 text-cyan shrink-0" />
                <span className="font-btn text-xs font-medium text-ink-700">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-8 rounded-2xl bg-ink-950 p-6 text-center">
            <p className="font-display text-lg font-bold text-white">Need expert support when a serious event occurs?</p>
            <p className="mt-2 text-sm text-white/60">Incident Investigation Support Retainer — available for organisations needing rapid expert response.</p>
            <Link to="/contact" className="btn-cyan mt-4">Discuss Incident Retainer <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CultureLeadershipDetail() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="05 — Safety Culture & Leadership"
          title={<>From compliance to <span className="gradient-text">culture-driven performance</span></>}
          subtitle="Diagnostics, leadership advisory and behaviour-based safety programmes."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { ...SAFETY_CULTURE_SERVICES.diagnostic, icon: 'diagnostic' },
            { ...SAFETY_CULTURE_SERVICES.leadership, icon: 'leadership' },
            { ...SAFETY_CULTURE_SERVICES.bbs, icon: 'bbs' },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="h-full rounded-2xl bg-cloud p-7 border border-primary-900/5 card-hover hover:border-cyan/30 hover:shadow-elev">
                <h3 className="font-display text-lg font-bold text-ink-900">{s.title}</h3>
                <div className="mt-4 space-y-1.5">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan shrink-0" />
                      <span className="font-btn text-xs text-ink-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HealthCheckDetail() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="HSE System Health Check"
          title={<>An entry-level <span className="gradient-text">HSE maturity assessment</span></>}
          subtitle="A structured evaluation of your HSE management system across 18 critical areas, delivered remotely."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Areas */}
          <Reveal>
            <div className="rounded-2xl bg-white p-7 border border-primary-900/5">
              <h3 className="font-display text-lg font-bold text-ink-900">18 Evaluation Areas</h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {HSE_HEALTH_CHECK_AREAS.map((a) => (
                  <div key={a} className="flex items-center gap-2 rounded-lg bg-cloud px-3 py-2">
                    <Check className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span className="font-btn text-xs text-ink-700">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Maturity levels */}
          <Reveal delay={150}>
            <div className="rounded-2xl bg-ink-950 p-7 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-15" />
              <div className="relative">
                <h3 className="font-display text-lg font-bold text-white">HSE Maturity Score</h3>
                <div className="mt-5 space-y-3">
                  {HSE_MATURITY_LEVELS.map((m, i) => (
                    <div key={m.level} className="flex items-start gap-3">
                      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg font-display text-xs font-bold shrink-0 ${i >= 3 ? 'bg-cyan/15 text-cyan-light border border-cyan/20' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                        {i + 1}
                      </span>
                      <div>
                        <div className="font-display text-sm font-bold text-white">{m.level} — {m.name}</div>
                        <p className="text-xs text-white/50">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Deliverables */}
        <Reveal delay={300}>
          <div className="mt-8 rounded-2xl bg-white p-7 border border-primary-900/5">
            <h3 className="font-display text-lg font-bold text-ink-900">What You Receive</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Executive Summary', 'Priority Gaps', 'Critical Findings', 'Improvement Opportunities', '30-Day Actions', '60-Day Actions', '90-Day Transformation Roadmap'].map((d) => (
                <span key={d} className="rounded-full bg-primary-800/5 border border-primary-900/10 px-3 py-1.5 font-btn text-xs text-ink-700">{d}</span>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-6">Request an HSE Health Check <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RemoteAssurancePortfolio() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="HTP DVAS Remote HSE Assurance"
          title={<>Assurance that is <span className="gradient-text">evidence-led</span></>}
          subtitle="A structured remote assurance model combining disciplined audit delivery, secure evidence handling, human-led AI governance and measurable performance improvement."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REMOTE_ASSURANCE_OFFERINGS.map((offering, i) => {
            const Icon = offering.icon;
            return (
              <Reveal key={offering.title} delay={i * 70}>
                <div className="h-full rounded-2xl bg-cloud border border-primary-900/5 p-6 card-hover hover:border-cyan/30 hover:shadow-elev">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{offering.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/75">{offering.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustrySolutions() {
  const industries = [
    { name: 'Oil & Gas', items: ['Process Safety', 'SIMOPS', 'Permit to Work', 'Shutdown Safety', 'Commissioning Safety', 'Hydrocarbon Hazard Management'] },
    { name: 'Construction', items: ['Construction HSE Systems', 'Work at Height', 'Excavation Safety', 'Temporary Works', 'Contractor Control'] },
    { name: 'Renewable Energy', items: ['Solar Installation Safety', 'Wind Energy HSE', 'Project Mobilisation', 'Contractor Management'] },
    { name: 'Manufacturing', items: ['Machine Safety', 'LOTO', 'Chemical Handling', 'Process Safety Fundamentals'] },
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
        <Reveal delay={500}>
          <div className="mt-8 text-center">
            <Link to="/industries" className="btn-primary">
              View All Industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
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
        subtitle="Six integrated service pillars covering the full HSE lifecycle — from fractional leadership and technical documentation to assurance, digital transformation and culture development."
        breadcrumb="Services"
      />
      {SERVICES.map((s, i) => <ServiceDetail key={s.id} service={s} index={i} />)}

      {/* Detailed sub-sections */}
      <FractionalLeadershipDetail />
      <DocumentationDeskDetail />
      <AssuranceIsoDetail />
      <IncidentInvestigationDetail />
      <CultureLeadershipDetail />
      <HealthCheckDetail />
      <RemoteAssurancePortfolio />

      {/* Digital offerings preview */}
      <section className="section-pad bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-15" />
        <div className="relative container-x">
          <SectionHeading
            eyebrow="04 — Digital HSE Transformation"
            theme="dark"
            title={<span className="text-white">From HSE data to <span className="gradient-text">management decisions</span></span>}
            subtitle="Power BI dashboards, managed KPI reporting and digital workflow consulting."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIGITAL_OFFERINGS.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={i * 60}>
                  <div className="h-full rounded-2xl glass-dark p-6 card-hover hover:bg-ink-800/60">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan-light border border-cyan/20">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <h3 className="mt-4 font-display text-sm font-bold text-white">{o.title}</h3>
                    <p className="mt-2 text-xs text-white/50 leading-relaxed">{o.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={300}>
            <div className="mt-8">
              <p className="text-xs text-white/40 mb-3">Functional consulting support for digital EHS workflow design and system implementation, including familiarity with:</p>
              <div className="flex flex-wrap gap-2">
                {DIGITAL_PLATFORMS.map((p) => (
                  <span key={p} className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 font-btn text-[10px] text-white/50">{p}</span>
                ))}
              </div>
              <Link to="/digital" className="btn-cyan mt-6">Explore Digital Solutions <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <IndustrySolutions />
      <ConsultingProjects />

      {/* CTA */}
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
            <p className="mt-8 text-xs text-white/40 max-w-2xl mx-auto leading-relaxed">{DISCLAIMER}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
