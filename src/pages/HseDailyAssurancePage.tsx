import { Link } from 'react-router-dom';
import {
  ArrowRight, MessageCircle, ShieldCheck, ClipboardCheck, AlertTriangle, FileText,
  Mail, Lock, Database, Cloud, Bell, Camera, Activity, StopCircle, CheckSquare,
  FileSpreadsheet, HardDrive, Send, UserCheck, Calendar, BarChart3, Zap,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { COMPANY } from '../data/content';
import { usePageMeta } from '../lib/usePageMeta';

const CORE_FUNCTIONS = [
  { icon: Calendar, title: 'Shift Start & Daily Risk Forecast', desc: 'Record shift-start HSE conditions and forecast daily risks.' },
  { icon: ClipboardCheck, title: 'Field HSE Inspection', desc: 'Structured site inspections with evidence capture.' },
  { icon: ShieldCheck, title: 'Critical-Control Verification', desc: 'Verify that critical risk controls are in place and effective.' },
  { icon: Activity, title: 'High-Risk Activity Monitoring', desc: 'Monitor and record high-risk work activities.' },
  { icon: AlertTriangle, title: 'Incident & Near-Miss Reporting', desc: 'Report incidents and near misses with structured fields.' },
  { icon: StopCircle, title: 'Stop-Work Intervention Reporting', desc: 'Record stop-work interventions and follow-up actions.' },
  { icon: FileText, title: 'Corrective-Action Assignment', desc: 'Assign corrective actions with owners and due dates.' },
  { icon: CheckSquare, title: 'Action Closure & Effectiveness Verification', desc: 'Close actions and verify effectiveness of controls.' },
  { icon: BarChart3, title: 'End-of-Shift HSE Summary', desc: 'Consolidated shift summary for management visibility.' },
  { icon: Activity, title: 'Management Dashboard & Exception Monitoring', desc: 'Dashboard with exception-based monitoring indicators.' },
  { icon: Bell, title: 'Critical Alert Notifications', desc: 'Automated alerts for critical and high-priority HSE events.' },
  { icon: Camera, title: 'Evidence & Photograph Uploads', desc: 'Upload photographs and supporting evidence from the field.' },
];

const INFO_PROCESSED = [
  'Name and employee identification', 'Business email address', 'Role and department',
  'Project, site and contractor information', 'Work location and activity',
  'Workforce and permit information', 'HSE inspections and observations',
  'Critical-control verification results', 'Incident and near-miss information',
  'Stop-work interventions', 'Corrective-action assignments', 'Action owners and due dates',
  'Closure evidence', 'Photographs and supporting documents', 'Application activity and audit information',
];

const GOOGLE_SERVICES = [
  { icon: FileSpreadsheet, title: 'Google Sheets', desc: 'Used to securely store and manage submitted HSE reports, incidents, observations, corrective actions, user information, system settings and audit records.' },
  { icon: HardDrive, title: 'Google Drive', desc: 'Used to store photographs, PDF files and other evidence voluntarily uploaded by authorized users.' },
  { icon: Send, title: 'Google Email Services', desc: 'Used to send critical HSE alerts, action notifications and management communications configured by the organization.' },
  { icon: UserCheck, title: 'Google Account Information', desc: 'Where available, basic account information such as the authenticated user\u2019s email address may be used to identify the person submitting or verifying a record.' },
];

export default function HseDailyAssurancePage() {
  usePageMeta({
    title: 'HSE Daily Assurance & Verification System',
    description: 'A secure digital HSE reporting, critical-control verification, incident management and corrective-action monitoring system for organizations and project sites.',
    path: '/hse-daily-assurance',
  });
  return (
    <>
      <PageHero
        eyebrow="Digital HSE Application"
        title={<>HSE Daily Assurance & <span className="gradient-text-white">Verification System</span></>}
        subtitle="Real-Time Field Assurance, Incident Reporting and Management Visibility"
        breadcrumb="HSE Daily Assurance"
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev shrink-0">
                <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-ink-900">Purpose of the Application</h2>
                <p className="text-sm text-primary-800/60">Digital HSE management for field teams and leadership</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-ink-700">
              The HSE Daily Assurance & Verification System is a digital health, safety and environmental
              management application developed to help organizations monitor daily site conditions, verify
              critical controls, report incidents and near misses, manage corrective actions and provide
              timely information to operational and HSE management teams.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              The application enables HSE Engineers, HSE Officers, supervisors and authorized management
              personnel to record, verify and monitor daily HSE activities across projects, sites and work
              locations. It supports management visibility by converting field-level HSE information into
              structured records, alerts, corrective actions and dashboard indicators.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Functions */}
      <section className="section-pad bg-cloud">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Functions"
            title={<>What the application <span className="gradient-text">does</span></>}
            subtitle="Twelve structured functions covering the full daily HSE assurance cycle."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_FUNCTIONS.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group h-full rounded-2xl bg-white p-6 border border-primary-900/5 card-hover hover:border-cyan/30 hover:shadow-elev">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-800/5 text-primary-800 group-hover:bg-cyan/10 group-hover:text-cyan transition-colors">
                    <f.icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-ink-900">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-700">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Information Processed */}
      <section className="section-pad bg-white">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Information Processed"
            title={<>What information the application <span className="gradient-text">may process</span></>}
            subtitle="The application may process the following categories of information during authorized use."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {INFO_PROCESSED.map((item, i) => (
              <Reveal key={item} delay={i * 30}>
                <div className="flex items-center gap-2.5 rounded-xl bg-cloud border border-primary-900/5 px-4 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  <span className="font-btn text-xs font-medium text-ink-700">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google Services */}
      <section className="section-pad relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-grid-dark bg-[size:50px_50px] opacity-15" />
        <div className="absolute top-1/4 right-0 h-80 w-80 bg-primary-700/20 blur-[120px] rounded-full" />
        <div className="relative container-x">
          <SectionHeading
            eyebrow="Google Services"
            theme="dark"
            title={<span className="text-white">How the application uses <span className="gradient-text">Google services</span></span>}
            subtitle="The application uses Google services to store data, manage evidence and send notifications."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {GOOGLE_SERVICES.map((g, i) => (
              <Reveal key={g.title} delay={i * 100}>
                <div className="h-full rounded-2xl glass-dark p-7 card-hover hover:bg-ink-800/60">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan-light border border-cyan/20">
                    <g.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Statement */}
      <section className="section-pad bg-cloud">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="rounded-2xl bg-white border border-primary-900/5 p-8 shadow-elev">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan border border-cyan/20">
                  <Lock className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h2 className="font-display text-xl font-bold text-ink-900">Data Protection Statement</h2>
              </div>
              <p className="text-base leading-relaxed text-ink-700">
                HSE Transformation Partners uses Google information only to provide and operate the functions
                described on this page. Google user information is not sold, used for advertising or shared
                with unrelated third parties. Access is limited to authorized personnel and legitimate
                organizational requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Operational Notice */}
      <section className="py-12 bg-cloud">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 shrink-0">
                  <AlertTriangle className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-amber-900">Important Operational Notice</h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber-800">
                    The application supports HSE management and decision-making. It does not replace emergency
                    communication, statutory incident reporting, site emergency procedures, professional
                    judgement or the organization\u2019s legal responsibilities. Emergencies must always be
                    reported immediately through the established site emergency channels.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact / Support */}
      <section className="section-pad bg-white">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Application Support"
            title={<>Need help with the <span className="gradient-text">application?</span></>}
            subtitle="For application access, privacy questions, technical support or data-related requests, please contact HSE Transformation Partners."
          />
          <Reveal>
            <div className="mt-10 rounded-2xl bg-ink-950 p-7 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-20" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan-light border border-cyan/20">
                    <Mail className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">Developer and Application Support</h3>
                </div>
                <div className="space-y-3">
                  <a href={`mailto:${COMPANY.devSupportEmail}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-cyan-light transition-colors">
                    <Mail className="h-4 w-4 text-cyan-light shrink-0" />
                    <span className="break-all">{COMPANY.devSupportEmail}</span>
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-cyan-light transition-colors">
                    <Mail className="h-4 w-4 text-cyan-light shrink-0" />
                    <span className="break-all">{COMPANY.email}</span>
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/privacy-policy" className="btn-outline text-xs px-4 py-2">Privacy Policy</Link>
                  <Link to="/terms-of-service" className="btn-outline text-xs px-4 py-2">Terms of Service</Link>
                  <Link to="/contact" className="btn-outline text-xs px-4 py-2">Contact</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
