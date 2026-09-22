import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, UserCheck, Users, Ban, AlertTriangle, Clock, Shield, Lock, FileEdit, Mail } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { COMPANY } from '../data/content';
import { usePageMeta } from '../lib/usePageMeta';

const SECTIONS = [
  {
    icon: FileText,
    title: '1. Acceptance',
    content: [
      'By accessing or using the HSE Daily Assurance & Verification System, users agree to these Terms of Service and applicable organizational policies.',
    ],
  },
  {
    icon: UserCheck,
    title: '2. Authorized Use',
    content: [
      'The application is intended only for authorized HSE, operational, supervisory, management and administrative personnel.',
      'Users may use the application only for legitimate occupational health, safety, environmental, operational-assurance and corrective-action purposes.',
    ],
  },
  {
    icon: Users,
    title: '3. User Responsibilities',
    content: [
      'Users are responsible for: providing accurate information; protecting their login credentials; maintaining confidentiality; reporting incidents through the required emergency and organizational channels; avoiding false, misleading or malicious submissions; uploading only relevant and authorized evidence; and following legal, contractual and organizational requirements.',
    ],
  },
  {
    icon: Ban,
    title: '4. Prohibited Activities',
    content: [
      'Users must not: access the application without authorization; attempt to bypass security controls; submit knowingly false information; upload malware, unlawful material or unrelated personal data; share confidential records with unauthorized persons; interfere with application functionality; use information for harassment, retaliation or discrimination; or use the application for unlawful purposes.',
    ],
  },
  {
    icon: AlertTriangle,
    title: '5. Emergency and Legal Reporting',
    content: [
      'The application does not replace emergency calls, immediate verbal reporting, regulatory notifications or legally required incident-reporting procedures.',
      'Users must follow the applicable site emergency plan and organizational escalation procedure.',
    ],
  },
  {
    icon: Clock,
    title: '6. Availability',
    content: [
      'The application may occasionally be unavailable because of maintenance, internet failure, Google service interruption, technical issues or circumstances beyond reasonable control.',
    ],
  },
  {
    icon: Shield,
    title: '7. Accuracy and Professional Judgement',
    content: [
      'Dashboards, alerts and reports depend on the accuracy and completeness of information submitted by users. The application supports but does not replace competent professional judgement.',
    ],
  },
  {
    icon: Lock,
    title: '8. Intellectual Property',
    content: [
      'The application design, structure, content and related materials remain the property of HSE Transformation Partners or the applicable rights holder.',
    ],
  },
  {
    icon: Ban,
    title: '9. Suspension of Access',
    content: [
      'Access may be suspended or terminated where a user violates these terms, creates a security risk or is no longer authorized by the organization.',
    ],
  },
  {
    icon: FileText,
    title: '10. Limitation',
    content: [
      'To the extent permitted by law, HSE Transformation Partners is not responsible for losses caused by inaccurate submissions, unauthorized use, failure to follow emergency procedures, third-party service interruptions or actions taken contrary to professional advice.',
    ],
  },
  {
    icon: FileEdit,
    title: '11. Changes',
    content: [
      'These terms may be updated when the application, legal requirements or operating practices change.',
    ],
  },
  {
    icon: Mail,
    title: '12. Contact',
    content: [
      'For questions about these terms, contact:',
      'HSE Transformation Partners',
      `Website: https://www.hsetransformationpartners.in`,
      `Developer and Application Support: ${COMPANY.devSupportEmail}`,
    ],
  },
];

export default function TermsOfServicePage() {
  usePageMeta({
    title: 'Terms of Service – HSE Daily Assurance & Verification System',
    description: 'Terms of Service for the HSE Daily Assurance & Verification System. The conditions governing authorized use of the application.',
    path: '/terms-of-service',
  });
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-ink-950 pt-28 pb-16">
        <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-30" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 bg-cyan/15 blur-[100px] rounded-full animate-float" />
        <div className="relative container-x">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-cyan-light transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white max-w-3xl">
              Terms of <span className="gradient-text-white">Service</span>
            </h1>
            <p className="mt-4 text-white/60 max-w-2xl text-base md:text-lg">
              Terms of Service for the HSE Daily Assurance & Verification System.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x max-w-4xl">
          <Reveal>
            <p className="text-sm font-medium text-primary-800 mb-8">Last updated: 22 September 2026</p>
          </Reveal>
          <div className="space-y-8">
            {SECTIONS.map((section, i) => (
              <Reveal key={section.title} delay={i * 50}>
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

          <Reveal>
            <div className="mt-12 rounded-2xl bg-ink-950 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-20" />
              <div className="relative">
                <h2 className="font-display text-lg font-bold text-white mb-3">Questions About These Terms?</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us before using the application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`mailto:${COMPANY.devSupportEmail}`} className="btn-cyan text-sm px-5 py-2.5 inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {COMPANY.devSupportEmail}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
