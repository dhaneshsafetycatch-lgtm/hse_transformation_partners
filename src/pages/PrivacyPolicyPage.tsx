import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, Eye, Lock, Cloud, Share2, HardDrive, Clock, KeyRound, Users, RotateCcw, Baby, FileEdit, Mail } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { COMPANY } from '../data/content';
import { usePageMeta } from '../lib/usePageMeta';

const SECTIONS = [
  {
    icon: Shield,
    title: '1. Introduction',
    content: [
      'HSE Transformation Partners respects the privacy of individuals who use the HSE Daily Assurance & Verification System. This Privacy Policy explains what information the application collects, why the information is processed, how it is used and stored, and the choices available to users.',
      'This policy applies to the HSE Daily Assurance & Verification System and the supporting website pages operated through hsetransformationpartners.in.',
    ],
  },
  {
    icon: Database,
    title: '2. Information We Collect',
    content: [
      'Depending on how the application is configured and used, we may collect:',
      'Name, employee ID, business email address and professional role. Employer, contractor, project, site and work-location information. Workforce, shift, permit and work-activity information. HSE inspection findings and critical-control verification results. Incident, injury, near-miss and stop-work information. Corrective actions, action owners, due dates and closure information. Photographs, PDFs and other supporting evidence uploaded by users. Google account email address where made available during authorized access. Submission timestamps, report identifiers and audit information. Technical information necessary to maintain application security and functionality.',
      'Users must not submit unnecessary sensitive personal information.',
    ],
  },
  {
    icon: Eye,
    title: '3. How We Use Information',
    content: [
      'Information is used to: record daily HSE activities; verify critical risk controls; report incidents, near misses and stop-work interventions; assign and monitor corrective actions; verify action completion and effectiveness; produce management dashboards and performance indicators; identify overdue and high-priority HSE matters; send configured alerts and operational notifications; maintain audit trails; support investigations, legal compliance and organizational learning; and protect people, operations, assets and the environment.',
    ],
  },
  {
    icon: Cloud,
    title: '4. Use of Google Services',
    content: [
      'The application may use Google Sheets to store structured HSE records, Google Drive to store uploaded evidence and Google email services to send authorized alerts and notifications.',
      'The application requests only the Google permissions required to provide its stated functions.',
    ],
  },
  {
    icon: Lock,
    title: '5. Google API Services User Data Policy',
    content: [
      'The use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.',
      'Information received from Google APIs will not be: sold to third parties; used for advertising; used to determine creditworthiness; transferred to unrelated parties except where required to provide the application, comply with law, protect safety or respond to a valid legal requirement; or accessed by humans except where necessary for security, support, compliance, investigation or with the user\u2019s authorization.',
    ],
  },
  {
    icon: Share2,
    title: '6. Information Sharing',
    content: [
      'Information may be accessible to authorized: HSE personnel; site and project management; designated action owners; system administrators; emergency and investigation personnel; regulatory or legal authorities when required by law; and approved service providers supporting secure application operation.',
      'We do not sell personal information.',
    ],
  },
  {
    icon: HardDrive,
    title: '7. Data Storage',
    content: [
      'Application data may be stored in Google Sheets, Google Drive and other authorized Google Workspace services controlled by the application owner or the organization operating the system.',
      'Access is managed through Google account permissions, application controls and organizational authorization.',
    ],
  },
  {
    icon: Clock,
    title: '8. Data Retention',
    content: [
      'Information is retained only for as long as reasonably required for: HSE management; incident investigation; corrective-action monitoring; legal and regulatory compliance; contractual requirements; insurance requirements; and audit and organizational learning.',
      'Retention periods may differ depending on the organization, jurisdiction, contract and type of HSE record.',
    ],
  },
  {
    icon: Shield,
    title: '9. Security',
    content: [
      'Reasonable administrative and technical safeguards are used to protect information. These may include access restrictions, authenticated accounts, audit records, controlled sharing and permission management.',
      'No online system can guarantee absolute security. Users must protect their Google account credentials and immediately report suspected unauthorized access.',
    ],
  },
  {
    icon: Users,
    title: '10. User Responsibilities',
    content: [
      'Users must: submit accurate and relevant information; avoid uploading unnecessary personal or confidential information; use the application only for authorized business purposes; protect account credentials; report security concerns promptly; and follow applicable organizational policies and legal requirements.',
    ],
  },
  {
    icon: KeyRound,
    title: '11. User Rights and Requests',
    content: [
      'Subject to applicable laws and organizational requirements, users may request: access to their personal information; correction of inaccurate information; deletion of information where legally permitted; clarification regarding how information is used; and withdrawal of authorization where applicable.',
      'Some records may need to be retained for legal, regulatory, contractual, investigation or safety reasons.',
    ],
  },
  {
    icon: RotateCcw,
    title: '12. Revoking Google Access',
    content: [
      'Users may review or revoke application access through their Google Account security settings. Revoking access may prevent some application functions from operating.',
    ],
  },
  {
    icon: Baby,
    title: '13. Children\u2019s Privacy',
    content: [
      'The application is intended for authorized adult employees, contractors and organizational representatives. It is not directed toward children.',
    ],
  },
  {
    icon: FileEdit,
    title: '14. Changes to This Policy',
    content: [
      'This Privacy Policy may be updated to reflect changes in the application, legal requirements or organizational practices. The latest version will remain publicly available on this page.',
    ],
  },
  {
    icon: Mail,
    title: '15. Contact',
    content: [
      'For privacy enquiries, access requests, correction requests, deletion requests or complaints, contact:',
      'HSE Transformation Partners',
      `Website: https://www.hsetransformationpartners.in`,
      `Developer and Application Support: ${COMPANY.devSupportEmail}`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  usePageMeta({
    title: 'Privacy Policy – HSE Daily Assurance & Verification System',
    description: 'Privacy Policy for the HSE Daily Assurance & Verification System. How HSE Transformation Partners collects, uses, stores and protects information.',
    path: '/privacy-policy',
  });
  return (
    <div className="min-h-screen bg-white">
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
              Privacy Policy for the HSE Daily Assurance & Verification System.
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
                <h2 className="font-display text-lg font-bold text-white mb-3">Contact Us</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  For privacy enquiries or data requests, please contact us.
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
