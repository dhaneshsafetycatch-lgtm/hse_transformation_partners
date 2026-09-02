import { Check, ArrowRight, GraduationCap, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { TRAINING_PROGRAMS, TRAINING_CATEGORIES, CERTIFICATIONS } from '../data/content';

function CategoriesGrid() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-x">
        <SectionHeading
          eyebrow="Training Categories"
          title={<>Programs for <span className="gradient-text">every need</span></>}
          subtitle="From specialized high-risk operations training to leadership development and fully custom corporate programs."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINING_CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group h-full rounded-3xl bg-white border border-primary-900/5 p-7 card-hover hover:border-cyan/30 hover:shadow-elev">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev group-hover:scale-110 transition-transform">
                  <c.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCatalog() {
  return (
    <div>
      {TRAINING_PROGRAMS.map((group, gi) => (
        <section key={group.category} className={`section-pad ${gi % 2 === 0 ? 'bg-white' : 'bg-cloud'}`}>
          <div className="container-x">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan border border-cyan/20 font-display font-bold">
                  {gi + 1}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900">{group.category}</h2>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.programs.map((p, i) => (
                <Reveal key={p.name} delay={i * 70}>
                  <div className="group h-full rounded-2xl bg-white border border-primary-900/5 p-6 card-hover hover:border-cyan/30 hover:shadow-elev">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-bold text-ink-900 leading-snug">{p.name}</h3>
                      <GraduationCap className="h-5 w-5 text-cyan shrink-0 mt-0.5" strokeWidth={1.7} />
                    </div>
                    <div className="mt-4 h-px bg-gradient-to-r from-cyan/30 to-transparent" />
                    <ul className="mt-4 space-y-1.5">
                      {p.topics.map((t) => (
                        <li key={t} className="flex items-center gap-2 font-btn text-xs text-ink-700">
                          <Check className="h-3 w-3 text-cyan shrink-0" strokeWidth={3} /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function CertificationsBand() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[700px] bg-primary-800/30 blur-[120px] rounded-full" />
      <div className="relative container-x">
        <SectionHeading
          eyebrow="Certification Materials"
          theme="dark"
          title={<span className="text-white">Professional <span className="gradient-text">certification study materials</span></span>}
          subtitle="Developed for Safety Catch training delivery and professional certification programs across the HSE community."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c} delay={i * 100}>
              <div className="group flex items-center gap-3 rounded-2xl glass-dark px-6 py-4 card-hover hover:bg-ink-800/60">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent border border-accent/30">
                  <FileText className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <span className="font-btn text-sm font-medium text-white">{c}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorsDelivered() {
  const sectors = [
    'Construction', 'Oil & Gas', 'Manufacturing', 'Infrastructure', 'Power Generation',
    'Data Centres', 'Ports & Logistics', 'Aviation', 'EPC Contractors', 'Metro Rail Projects',
  ];
  return (
    <section className="py-14 bg-cloud border-y border-primary-900/5">
      <div className="container-x">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary-800" />
            <div>
              <div className="font-btn text-xs uppercase tracking-widest text-primary-800/60">Delivered For Sectors</div>
              <p className="font-display text-lg font-bold text-ink-900">Training delivered across 10+ industries</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span key={s} className="rounded-full border border-primary-900/10 bg-white px-4 py-2 font-btn text-xs font-medium text-primary-800">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Competency"
        title={<>Develop the <span className="gradient-text-white">competence</span> that keeps people safe</>}
        subtitle="Over 300 specialized training programs developed and delivered across high-risk operations, process safety, risk management and leadership — for industries where safety is non-negotiable."
        breadcrumb="Training"
      />
      <CategoriesGrid />
      <ProgramCatalog />
      <CertificationsBand />
      <SectorsDelivered />
      <section className="py-16 bg-ink-950">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Need a custom corporate training program?</h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">We design tailored competency development programs built around your operations and risk profile.</p>
            <Link to="/contact" className="btn-cyan mt-6">Request Corporate Training <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
