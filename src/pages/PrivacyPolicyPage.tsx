import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Database, Eye, Mail, Clock } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { COMPANY } from '../data/content';

const SECTIONS = [
  {
    icon: Shield,
    title: '1. Introduction',
    content: [
      'HSE Transformation Partners ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you interact with our website, services, training programs, and digital platforms.',
      'By accessing our website or engaging our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with any aspect of this policy, please discontinue use of our services immediately.',
    ],
  },
  {
    icon: Database,
    title: '2. Information We Collect',
    content: [
      'We collect information that you voluntarily provide when submitting enquiries, registering for training programs, or engaging our consulting services. This may include your name, email address, telephone number, company name, job title, and any additional details you choose to share.',
      'We also collect technical information automatically through standard web analytics, including your IP address, browser type, device information, pages visited, and time spent on our website. This data helps us improve user experience and website performance.',
      'For training and certification programs, we may collect additional professional information necessary for accreditation, certification issuance, and compliance with regulatory requirements.',
    ],
  },
  {
    icon: Eye,
    title: '3. How We Use Your Information',
    content: [
      'We use your personal information to respond to enquiries, deliver consulting and training services, process registrations, issue certifications, and provide ongoing support. Your information enables us to tailor our services to your specific industry, sector, and safety requirements.',
      'We may use your contact details to send service updates, training schedules, industry insights, and safety bulletins that we believe are relevant to your professional interests. You may opt out of marketing communications at any time.',
      'Technical analytics data is used exclusively for website optimization, security monitoring, and understanding how visitors interact with our digital platforms.',
    ],
  },
  {
    icon: Lock,
    title: '4. Data Security & Protection',
    content: [
      'We implement industry-standard technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission, secure server infrastructure, access controls, and regular security assessments.',
      'All data is stored on secure cloud infrastructure with redundancy and disaster recovery protocols. Access to personal data is restricted to authorized personnel who require it to perform their duties.',
      'While we take every reasonable precaution, no internet-based system can be guaranteed completely secure. We encourage you to use strong passwords and report any suspected security concerns immediately.',
    ],
  },
  {
    icon: Clock,
    title: '5. Data Retention',
    content: [
      'We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.',
      'Training and certification records are retained in accordance with accreditation body requirements and industry best practices, typically for a minimum of five years.',
      'When data is no longer required, we securely delete or anonymize it in a manner that prevents recovery or identification.',
    ],
  },
  {
    icon: Mail,
    title: '6. Your Rights',
    content: [
      'You have the right to access, correct, update, or request deletion of your personal information at any time. You may also request a copy of the data we hold about you in a structured, machine-readable format.',
      'To exercise any of these rights, please contact us using the details provided below. We will respond to all legitimate requests within the timeframes required by applicable data protection laws.',
      'If you believe we have not handled your personal data appropriately, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pt-28 pb-16">
        <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-30" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 bg-cyan/15 blur-[100px] rounded-full animate-float" />
        <div className="relative container-x">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-cyan-light transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white max-w-3xl">
              Privacy <span className="gradient-text-white">Policy</span>
            </h1>
            <p className="mt-4 text-white/60 max-w-2xl text-base md:text-lg">
              How we collect, protect, and manage your personal information.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="container-x max-w-4xl">
          <div className="space-y-12">
            {SECTIONS.map((section, i) => (
              <Reveal key={section.title} delay={i * 80}>
                <div className="rounded-2xl bg-cloud border border-ink-900/8 p-6 md:p-8 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shrink-0">
                      <section.icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <h2 className="font-display text-lg md:text-xl font-bold text-ink-900">{section.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {section.content.map((p, idx) => (
                      <p key={idx} className="text-sm md:text-base text-ink-700/80 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact */}
          <Reveal>
            <div className="mt-12 rounded-2xl bg-ink-950 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-20" />
              <div className="relative">
                <h2 className="font-display text-lg font-bold text-white mb-3">Contact Us</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal data, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`mailto:${COMPANY.email}`} className="btn-cyan text-sm px-5 py-2.5 inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-8 text-xs text-ink-500 text-center">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
