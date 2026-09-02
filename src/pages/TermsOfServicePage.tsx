import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, Handshake, AlertTriangle, Ban, Gavel, Mail } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { COMPANY } from '../data/content';

const SECTIONS = [
  {
    icon: FileText,
    title: '1. Acceptance of Terms',
    content: [
      'These Terms of Service ("Terms") constitute a legally binding agreement between you and HSE Transformation Partners governing your access to and use of our website, training programs, consulting services, digital platforms, and all related content and materials (collectively, the "Services").',
      'By accessing or using any part of our Services, you confirm that you have read, understood, and agree to be bound by these Terms. If you are accessing our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.',
      'We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Services after changes are posted constitutes acceptance of the revised Terms.',
    ],
  },
  {
    icon: Scale,
    title: '2. Scope of Services',
    content: [
      'HSE Transformation Partners provides health, safety, and environmental consulting, training, leadership development, and digital HSE transformation services to organizations across multiple industry sectors including Oil & Gas, Construction, Infrastructure, Power, Aviation, Data Centres, and Manufacturing.',
      'All service descriptions, pricing, and deliverables are subject to formal quotation and written agreement. Nothing on this website constitutes a binding offer or guarantee of service availability, pricing, or outcome.',
      'Training programs are delivered in accordance with the standards and requirements of the relevant accrediting bodies (NEBOSH, IOSH, etc.). Certification is contingent upon successful completion of all required assessments and compliance with accreditation criteria.',
    ],
  },
  {
    icon: Handshake,
    title: '3. Client Obligations',
    content: [
      'Clients engaging our consulting or training services agree to provide accurate, complete, and timely information necessary for the delivery of services. Delays caused by incomplete or inaccurate information may affect project timelines and deliverables.',
      'For on-site consulting and training engagements, clients are responsible for ensuring safe access to facilities, compliance with site-specific safety requirements, and provision of necessary resources (meeting rooms, equipment, documentation) as agreed in the project scope.',
      'Participants in training programs must meet any prerequisites specified for the course and comply with all attendance, assessment, and conduct requirements. We reserve the right to remove participants whose behaviour disrupts the learning environment.',
    ],
  },
  {
    icon: AlertTriangle,
    title: '4. Intellectual Property',
    content: [
      'All content on this website, including text, graphics, logos, training materials, methodologies, frameworks, software, and digital tools, is the exclusive property of HSE Transformation Partners and is protected by copyright, trademark, and other intellectual property laws.',
      'Training materials provided to participants are licensed for personal, non-commercial use only. Reproduction, distribution, modification, or creation of derivative works from our materials without express written permission is strictly prohibited.',
      'Client-specific deliverables produced under consulting engagements are subject to the intellectual property provisions outlined in the individual service agreement. Unless otherwise agreed, general methodologies and frameworks remain our property.',
    ],
  },
  {
    icon: Ban,
    title: '5. Limitation of Liability',
    content: [
      'Our consulting and training services are provided on a professional best-effort basis. While we apply rigorous methodologies and industry expertise, we do not guarantee specific outcomes, regulatory approvals, or elimination of all safety risks within client operations.',
      'To the maximum extent permitted by applicable law, HSE Transformation Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our Services, even if advised of the possibility of such damages.',
      'Our total aggregate liability for any claims arising from our Services shall not exceed the total fees paid by you for the specific service giving rise to the claim in the twelve (12) months preceding the claim.',
    ],
  },
  {
    icon: Gavel,
    title: '6. Governing Law & Disputes',
    content: [
      'These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.',
      'Any dispute arising from or relating to these Terms or our Services shall first be addressed through good-faith negotiation between the parties. If negotiation fails to resolve the dispute within thirty (30) days, either party may pursue resolution through arbitration or the courts of competent jurisdiction in India.',
      'Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to protect its intellectual property rights or confidential information.',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
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
              The conditions governing your use of our website, training, and consulting services.
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
                <h2 className="font-display text-lg font-bold text-white mb-3">Questions About These Terms?</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us before using our Services.
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
