import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Handshake, Building2, HardHat, Factory, GraduationCap, Cpu, Layers,
  Check, ArrowRight, Send, CheckCircle2, AlertCircle, Loader2, MessageCircle,
  ShieldCheck, Zap, Lock, Users, TrendingUp, Award, Briefcase,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { supabase } from '../lib/supabase';
import { COMPANY } from '../data/content';

type Status = 'idle' | 'loading' | 'success' | 'error';

const PARTNER_TYPES = [
  { icon: Building2, label: 'HSE Consulting Companies' },
  { icon: Briefcase, label: 'Engineering Consultants' },
  { icon: HardHat, label: 'EPC Contractors' },
  { icon: Factory, label: 'Construction Companies' },
  { icon: Award, label: 'Oil & Gas Service Providers' },
  { icon: GraduationCap, label: 'Training Institutes' },
  { icon: Layers, label: 'Environmental Consultants' },
  { icon: ShieldCheck, label: 'Industrial Safety Firms' },
  { icon: Users, label: 'Government Contractors' },
  { icon: Users, label: 'Independent HSE Professionals' },
];

const MODELS = [
  {
    icon: Briefcase,
    title: 'Technical Delivery Partner',
    desc: 'We execute specialist HSE work on behalf of your organization while you maintain the client relationship.',
    suitable: ['Large consultancy projects', 'Shutdowns', 'EPC projects', 'Industrial facilities', 'Infrastructure projects'],
  },
  {
    icon: Building2,
    title: 'White Label Consultancy',
    desc: "Deliver professional HSE services under your company's brand. Our team supports your business behind the scenes while maintaining complete confidentiality.",
    suitable: ['HSE Documentation', 'Risk Assessments', 'HSE Plans', 'Method Statements', 'SOP Development', 'Emergency Response Plans', 'Audit Reports', 'Training Material Development'],
  },
  {
    icon: Users,
    title: 'Associate HSE Consultant',
    desc: 'Engage experienced HSE professionals whenever additional resources are required.',
    suitable: ['Short-term assignments', 'Long-term contracts', 'Project-based support', 'Remote consultancy', 'Site visits', 'Client meetings'],
  },
  {
    icon: GraduationCap,
    title: 'Training Delivery Partner',
    desc: 'Expand your training portfolio without developing additional resources.',
    suitable: ['NEBOSH Preparation', 'IOSH Training', 'Corporate HSE Training', 'Toolbox Talk Programs', 'Competency Development', 'Leadership Workshops', 'Digital Learning Content'],
  },
  {
    icon: Cpu,
    title: 'Digital HSE Partner',
    desc: 'Access our digital HSE capabilities to modernize your service offering.',
    suitable: ['AI-Powered HSE Solutions', 'HSE Dashboards', 'Digital Inspection Systems', 'HSE Calculators', 'Document Automation', 'Data Analytics', 'KPI Dashboards'],
  },
];

const SERVICES = [
  'HSE Consultancy', 'Construction Safety', 'Oil & Gas Safety', 'Process Safety Management',
  'Risk Assessments (HIRA, JSA, RAMS)', 'Incident Investigation', 'ISO 45001 Implementation',
  'Internal Audits', 'Compliance Audits', 'HSE Management Systems', 'PTW Systems', 'LOTO Programs',
  'Confined Space Programs', 'Work at Height Programs', 'Lifting Operations', 'Contractor HSE Management',
  'Safety Culture Development', 'Emergency Preparedness', 'AI-Based HSE Solutions', 'Digital HSE Transformation',
];

const WHY = [
  { icon: Award, text: 'More than 20 years of industry experience' },
  { icon: Factory, text: 'Expertise across Oil & Gas, EPC Construction, Infrastructure and Manufacturing' },
  { icon: Briefcase, text: 'Flexible project-based engagement' },
  { icon: Zap, text: 'Rapid mobilisation' },
  { icon: MessageCircle, text: 'Remote and on-site support' },
  { icon: Lock, text: 'Strict confidentiality and NDA compliance' },
  { icon: TrendingUp, text: 'Scalable support without increasing permanent staffing' },
  { icon: Check, text: 'High-quality technical deliverables' },
  { icon: Cpu, text: 'Digital HSE innovation and AI-enabled productivity' },
];

const BENEFITS = [
  'Expand service offerings', 'Increase project capacity', 'Reduce recruitment costs',
  'Access specialist expertise', 'Deliver projects faster', 'Improve technical quality',
  'Support multiple clients simultaneously', 'Scale resources based on project demand',
];

export default function PartnershipPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', companyType: '', model: '', message: '',
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('partnership_enquiries').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company: form.company.trim(),
        company_type: form.companyType || null,
        partnership_model: form.model || null,
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', companyType: '', model: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again or WhatsApp us directly.';
      setStatus('error');
      setErrorMsg(message);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Associate Partnership Program"
        breadcrumb="Partnership"
        title={<>Expand Your HSE Capability <span className="gradient-text-white">Without Expanding Your Team</span></>}
        subtitle="We collaborate with HSE consulting companies, engineering firms, EPC contractors, training providers, and independent consultants to deliver specialist HSE services under flexible contractual arrangements."
      />

      {/* Intro */}
      <section className="section-pad bg-cloud">
        <div className="container-x max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev mb-6">
              <Handshake className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <p className="text-lg md:text-xl text-ink-800 leading-relaxed">
              Whether you require additional technical expertise for a single project or long-term support
              for multiple clients, we can integrate seamlessly with your existing team as your trusted
              HSE delivery partner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who can partner */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">Eligibility</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink-900">Who Can Partner With Us?</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PARTNER_TYPES.map((p, i) => (
              <Reveal key={p.label} delay={i * 50}>
                <div className="rounded-2xl bg-cloud border border-ink-900/8 p-5 text-center card-hover hover:border-cyan/40 hover:shadow-glass h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan mb-3">
                    <p.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <p className="font-display text-sm font-semibold text-ink-900 leading-snug">{p.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership models */}
      <section className="section-pad bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-15" />
        <div className="absolute top-1/4 right-0 h-80 w-80 bg-cyan/15 blur-[120px] rounded-full animate-float" />
        <div className="relative container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">Engagement Models</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white">Partnership Models</h2>
              <p className="mt-4 text-white/55">Five flexible ways to collaborate, tailored to your business model and project needs.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {MODELS.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="rounded-2xl glass-dark p-7 card-hover hover:border-cyan/30 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/15 border border-cyan/30 text-cyan-light">
                      <m.icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{m.title}</h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{m.desc}</p>
                  <div className="space-y-1.5">
                    {m.suitable.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="h-3.5 w-3.5 text-cyan-light shrink-0" /> {s}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="section-pad bg-cloud">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">Scope</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink-900">Services Available Under Partnership</h2>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 30}>
                <div className="flex items-center gap-2.5 rounded-xl bg-white border border-ink-900/8 px-4 py-3 card-hover hover:border-cyan/40">
                  <Check className="h-4 w-4 text-cyan shrink-0" />
                  <span className="text-sm font-medium text-ink-800">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">Our Edge</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink-900">Why Partner With HSE Transformation Partners?</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.text} delay={i * 50}>
                <div className="flex items-start gap-3 rounded-2xl bg-cloud border border-ink-900/8 p-5 card-hover hover:border-cyan/40 hover:shadow-glass h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shrink-0">
                    <w.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <p className="text-sm text-ink-800 leading-relaxed pt-1.5">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-15" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 bg-accent/15 blur-[120px] rounded-full animate-float" />
        <div className="relative container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">Value</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white">Partnership Benefits</h2>
              <p className="mt-4 text-white/55">Your organisation can:</p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b} delay={i * 50}>
                <div className="rounded-2xl glass-dark p-5 card-hover hover:border-cyan/30 h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent mb-3">
                    <TrendingUp className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <p className="text-sm font-medium text-white/85 leading-snug">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner — form */}
      <section className="section-pad bg-cloud">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="text-center mb-10">
              <span className="eyebrow">Get Started</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink-900">Become an Associate Partner</h2>
              <p className="mt-4 text-ink-700/60 leading-relaxed">
                We welcome collaboration with organisations seeking a reliable HSE partner for technical support,
                consultancy delivery, training, and digital HSE transformation. Contact us to discuss partnership
                opportunities, framework agreements, subcontracting arrangements, or long-term strategic collaboration.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl bg-white border border-ink-900/8 shadow-elev p-7 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-14 w-14 text-green-500 mx-auto" />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink-900">Thank you for your interest!</h3>
                  <p className="mt-2 text-sm text-ink-700/60">We'll review your partnership enquiry and respond within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name *">
                      <input required value={form.name} onChange={update('name')} className="form-input" placeholder="Your name" />
                    </Field>
                    <Field label="Email *">
                      <input required type="email" value={form.email} onChange={update('email')} className="form-input" placeholder="you@company.com" />
                    </Field>
                    <Field label="Phone">
                      <input value={form.phone} onChange={update('phone')} className="form-input" placeholder="+971 ..." />
                    </Field>
                    <Field label="Company *">
                      <input required value={form.company} onChange={update('company')} className="form-input" placeholder="Company name" />
                    </Field>
                    <Field label="Organisation Type">
                      <select value={form.companyType} onChange={update('companyType')} className="form-input">
                        <option value="">Select type</option>
                        {PARTNER_TYPES.map((p) => <option key={p.label} value={p.label}>{p.label}</option>)}
                      </select>
                    </Field>
                    <Field label="Preferred Partnership Model">
                      <select value={form.model} onChange={update('model')} className="form-input">
                        <option value="">Select model</option>
                        {MODELS.map((m) => <option key={m.title} value={m.title}>{m.title}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Message *">
                    <textarea required rows={4} value={form.message} onChange={update('message')} className="form-input resize-none" placeholder="Tell us about your partnership interest, projects, or requirements..." />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0" /> {errorMsg}
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'} className="btn-cyan w-full py-3.5 disabled:opacity-60">
                    {status === 'loading' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Submit Partnership Enquiry</>}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-ink-700/60">
              <span>Prefer to talk directly?</span>
              <a href={`https://wa.me/${COMPANY.whatsappRaw}`} className="inline-flex items-center gap-2 font-medium text-cyan hover:underline">
                <MessageCircle className="h-4 w-4" /> WhatsApp {COMPANY.whatsapp}
              </a>
              <Link to="/contact" className="inline-flex items-center gap-1.5 font-medium text-primary-800 hover:underline">
                Contact page <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-btn text-xs font-medium text-ink-700/70 mb-1.5">{label}</label>
      {children}
    </div>
  );
}
