import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, AlertCircle, Loader2, MessageCircle, Clock, Globe2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { supabase } from '../lib/supabase';
import { COMPANY, SERVICES } from '../data/content';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('consultation_enquiries').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company: form.company.trim() || null,
        service: form.service || null,
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again or WhatsApp us directly.';
      setStatus('error');
      setErrorMsg(message);
    }
  };

  const cards = [
    { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: Phone, label: 'WhatsApp / Phone', value: COMPANY.whatsapp, href: `https://wa.me/${COMPANY.whatsappRaw}` },
    { icon: MapPin, label: 'Serving', value: 'India | Middle East | International' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Dhanesh Manoharan', href: COMPANY.linkedin },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Let's start your <span className="gradient-text-white">safety transformation</span></>}
        subtitle="Book a consultation, request a proposal or reach out via WhatsApp — we respond to every genuine enquiry."
        breadcrumb="Contact"
      />

      <section className="section-pad bg-cloud">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Contact cards */}
            <div className="lg:col-span-5 space-y-4">
              {cards.map((c, i) => (
                <Reveal key={c.label} delay={i * 90}>
                  <a
                    href={c.href ?? undefined}
                    className="group flex items-center gap-4 rounded-2xl bg-white border border-primary-900/5 p-5 card-hover hover:border-cyan/30 hover:shadow-elev"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan border border-cyan/20 group-hover:bg-cyan/20 transition-colors shrink-0">
                      <c.icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>
                    <div>
                      <div className="font-btn text-xs uppercase tracking-widest text-primary-800/60">{c.label}</div>
                      <div className="font-display font-semibold text-ink-900 break-all">{c.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-3xl bg-white border border-primary-900/5 p-7 md:p-9 shadow-elev">
                  <div className="absolute -top-16 -right-16 h-40 w-40 bg-cyan/10 blur-3xl rounded-full" />
                  <div className="relative">
                    <h2 className="font-display text-2xl font-bold text-ink-900">Request a Consultation</h2>
                    <p className="mt-2 text-sm text-ink-700">Fill in the form and we'll get back to you within one business day.</p>

                    {status === 'success' ? (
                      <div className="mt-8 flex flex-col items-center text-center py-10">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <CheckCircle2 className="h-9 w-9" />
                        </div>
                        <h3 className="mt-5 font-display text-xl font-bold text-ink-900">Thank you — enquiry received!</h3>
                        <p className="mt-2 text-sm text-ink-700 max-w-sm">We'll be in touch shortly. For urgent matters, message us on WhatsApp.</p>
                        <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">Submit another enquiry</button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <Field label="Full Name" required>
                            <input required value={form.name} onChange={update('name')} type="text" className={inputCls} placeholder="John Doe" />
                          </Field>
                          <Field label="Email" required>
                            <input required value={form.email} onChange={update('email')} type="email" className={inputCls} placeholder="you@company.com" />
                          </Field>
                          <Field label="Phone / WhatsApp">
                            <input value={form.phone} onChange={update('phone')} type="tel" className={inputCls} placeholder="+91..." />
                          </Field>
                          <Field label="Company / Organization">
                            <input value={form.company} onChange={update('company')} type="text" className={inputCls} placeholder="Your company" />
                          </Field>
                        </div>
                        <Field label="Service of Interest">
                          <select value={form.service} onChange={update('service')} className={inputCls}>
                            <option value="">Select a service</option>
                            {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                            <option value="Digital Solutions">Digital Solutions</option>
                            <option value="Training">Training</option>
                            <option value="Other">Other</option>
                          </select>
                        </Field>
                        <Field label="Message" required>
                          <textarea required value={form.message} onChange={update('message')} rows={4} className={inputCls} placeholder="Tell us about your project or requirement..." />
                        </Field>

                        {status === 'error' && (
                          <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>{errorMsg}</span>
                          </div>
                        )}

                        <button type="submit" disabled={status === 'loading'} className="btn-cyan w-full disabled:opacity-60">
                          {status === 'loading'
                            ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                            : <><Send className="h-4 w-4" /> Send Enquiry</>
                          }
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="py-14 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-[600px] bg-primary-800/30 blur-[120px] rounded-full" />
        <div className="relative container-x">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Clock, title: 'Fast Response', desc: 'We reply within one business day.' },
              { icon: Globe2, title: 'Global Reach', desc: 'Serving India, Middle East & international markets.' },
              { icon: MessageCircle, title: 'WhatsApp Direct', desc: <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noreferrer" className="text-cyan-light hover:underline">{COMPANY.whatsapp}</a> },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="flex items-center gap-4 rounded-2xl glass-dark p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan-light border border-cyan/20 shrink-0">
                    <c.icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-sm">{c.title}</div>
                    <div className="text-sm text-white/60">{c.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-cloud">
        <div className="container-x py-14">
          <SectionHeading
            eyebrow="Our Reach"
            title={<>Wherever your <span className="gradient-text">project is</span></>}
            subtitle="We deliver consulting, training and digital solutions across multiple geographies and industry environments."
          />
          <Reveal>
            <div className="mt-10 relative h-72 rounded-3xl overflow-hidden bg-ink-950 border border-primary-900/10">
              <div className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe2 className="h-14 w-14 text-cyan-light mx-auto animate-float" strokeWidth={1.3} />
                  <p className="mt-4 font-display text-xl font-bold text-white">India · Middle East · International</p>
                  <p className="mt-1 text-sm text-white/50">Serving clients across Oil & Gas, Construction, Aviation, Power & beyond</p>
                </div>
              </div>
              <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-cyan-light animate-pulse-glow" />
              <div className="absolute top-1/2 right-1/3 h-3 w-3 rounded-full bg-accent animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/3 left-1/2 h-3 w-3 rounded-full bg-cyan-light animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-xl border border-primary-900/10 bg-cloud px-4 py-2.5 font-body text-sm text-ink-900 placeholder:text-ink-700/40 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block mb-1.5 font-btn text-xs font-medium text-ink-900">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
