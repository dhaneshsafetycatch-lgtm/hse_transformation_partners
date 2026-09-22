import {
  ShieldCheck, HardHat, Flame, FileBadge, Crown, Cpu, GraduationCap, LayoutDashboard,
  Wind, Anchor, Zap, Building2, Train, Factory, Server, Video, ClipboardCheck,
  Briefcase, FileText, Users, Globe2, Headset, Target, Gauge, Network, Sun, Warehouse,
  Plane, Wrench, TrendingUp, ShieldAlert, BookOpen, Award, PhoneCall, ArrowRight, CheckCircle2,
} from 'lucide-react';

export const COMPANY = {
  name: 'HSE Transformation Partners',
  shortName: 'HSE TP',
  tagline: 'Transforming Safety. Empowering Performance.',
  subline: 'Senior HSE expertise for organisations requiring practical, scalable and measurable safety management support through remote, hybrid and project-based engagements.',
  email: 'hsetranspartners808@gmail.com',
  whatsapp: '+919846526915',
  whatsappRaw: '919846526915',
  domain: 'hsetransformationparnters.in',
  linkedin: 'https://www.linkedin.com/in/dhanesh-manoharan',
  website: 'Global HSE Consulting | Training | Digital Solutions | Safety Transformation',
  devSupportEmail: 'dhaneshkmd82@gmail.com',
};

export const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 300, suffix: '+', label: 'Training Programs' },
  { value: 100, suffix: '+', label: 'Consulting Deliverables' },
  { value: 10000, suffix: '+', label: 'Presentation Slides' },
];

export const HERO_HIGHLIGHTS = [
  { label: 'Fractional HSE Leadership', icon: Crown },
  { label: 'Remote & Hybrid Delivery', icon: Globe2 },
  { label: 'ISO 45001 / 14001 / 9001', icon: FileBadge },
  { label: 'Digital HSE Transformation', icon: Cpu },
  { label: 'Contractor Assurance', icon: ShieldCheck },
  { label: 'India · Middle East · Global', icon: Building2 },
];

export const EXPERIENCE_CLIENTS = [
  { name: 'ADNOC', sector: 'Oil & Gas' },
  { name: 'Shell', sector: 'Oil & Gas' },
  { name: 'Petrofac', sector: 'EPC' },
  { name: 'AECOM', sector: 'Infrastructure' },
  { name: 'JGC', sector: 'EPC' },
  { name: 'KBR', sector: 'Engineering' },
  { name: 'Dow', sector: 'Chemicals' },
  { name: 'Aramco', sector: 'Oil & Gas' },
];

export const SECTORS_SERVED = [
  { name: 'Oil & Gas', icon: Flame, desc: 'Process safety, SIMOPS, PTW, shutdown & commissioning safety.' },
  { name: 'Construction', icon: HardHat, desc: 'HSE systems, work at height, excavation, temporary works.' },
  { name: 'Renewable Energy', icon: Sun, desc: 'Solar, wind and clean-energy project HSE management.' },
  { name: 'Manufacturing', icon: Factory, desc: 'LOTO, machine safety, process safety fundamentals.' },
  { name: 'Data Centres', icon: Server, desc: 'Critical infrastructure safety, facility risk, contractor systems.' },
  { name: 'Logistics & Warehousing', icon: Warehouse, desc: 'Material handling, storage safety, fleet and contractor management.' },
  { name: 'Ports & Marine', icon: Anchor, desc: 'Cargo handling, lifting operations, marine interface safety.' },
  { name: 'Aviation', icon: Wind, desc: 'Airport construction safety, airside awareness, contractor control.' },
  { name: 'Facilities Management', icon: Building2, desc: 'Integrated facility HSE, contractor coordination, compliance.' },
  { name: 'Engineering & EPC', icon: Wrench, desc: 'EPC project HSE, contractor prequalification, tender support.' },
];

export const SERVICES = [
  {
    id: 'fractional-leadership',
    title: 'Fractional HSE Leadership',
    icon: Crown,
    short: 'Senior HSE leadership, virtual HSE management and remote advisory — without the cost of a full-time executive.',
    items: ['Fractional HSE Director', 'Virtual HSE Manager', 'Remote HSE Advisor', 'HSE Management Support Retainer'],
  },
  {
    id: 'technical-documentation',
    title: 'HSE Technical & Documentation Desk',
    icon: FileText,
    short: 'An outsourced HSE technical office for plans, procedures, risk assessments, legal registers and management-system documentation.',
    items: ['HSE Plans & Manuals', 'HIRA / Risk Assessments / JSA', 'Permit-to-Work & LOTO Procedures', 'Emergency Response Plans', 'Legal & Risk Registers', 'Audit & Inspection Checklists'],
  },
  {
    id: 'assurance-iso',
    title: 'Assurance, Audit & ISO Compliance',
    icon: ShieldCheck,
    short: 'ISO implementation, maintenance partners, audit readiness, contractor assurance and CAPA management.',
    items: ['ISO 45001 / 14001 / 9001 Implementation', 'ISO Maintenance Partner', 'Audit Readiness & Mock Audits', 'Contractor HSE Assurance & Grading', 'CAPA Management & Closure'],
  },
  {
    id: 'digital-hse',
    title: 'Digital HSE Transformation',
    icon: Cpu,
    short: 'Power BI dashboards, managed KPI reporting and digital workflow consulting for data-driven HSE decisions.',
    items: ['Power BI HSE Dashboards', 'Managed KPI Reporting', 'Digital Workflow Consulting', 'LTIFR / TRIR Analysis', 'Contractor Performance Dashboards'],
  },
  {
    id: 'culture-leadership',
    title: 'Safety Culture & Leadership',
    icon: Users,
    short: 'Safety culture diagnostics, leadership advisory and behaviour-based safety programmes.',
    items: ['Safety Culture Diagnostic', 'Safety Leadership Advisory', 'Behaviour-Based Safety Programmes', 'Supervisory Safety Leadership', 'HSE Leadership KPI Design'],
  },
  {
    id: 'specialist-industry',
    title: 'Specialist Industry HSE',
    icon: Briefcase,
    short: 'Construction, oil & gas, renewables, manufacturing, data centres, ports, aviation and EPC contractor support.',
    items: ['Construction & Infrastructure', 'Oil & Gas Safety', 'Renewable Energy HSE', 'Tender & PQQ Support', 'Incident Investigation & RCA', 'HSE System Health Check'],
  },
];

export const SERVICE_PILLARS_HOME = [
  {
    num: '01',
    title: 'Fractional HSE Leadership',
    icon: Crown,
    desc: 'Senior HSE expertise without a full-time executive.',
    examples: ['Fractional HSE Director', 'Virtual HSE Manager', 'Remote HSE Advisor', 'Monthly Retainer'],
  },
  {
    num: '02',
    title: 'Technical & Documentation Desk',
    icon: FileText,
    desc: 'An outsourced HSE technical office.',
    examples: ['HSE Plans & Manuals', 'Risk Assessments / JSA', 'Procedures & Forms', 'Legal & Risk Registers'],
  },
  {
    num: '03',
    title: 'Assurance, Audit & ISO',
    icon: ShieldCheck,
    desc: 'ISO compliance, audits and contractor assurance.',
    examples: ['ISO 45001 / 14001 / 9001', 'Audit Readiness', 'Contractor Assurance', 'CAPA Management'],
  },
  {
    num: '04',
    title: 'Digital HSE Transformation',
    icon: Cpu,
    desc: 'Dashboards, KPI reporting and digital workflows.',
    examples: ['Power BI Dashboards', 'Managed KPI Reporting', 'Digital Workflows', 'LTIFR / TRIR Analysis'],
  },
  {
    num: '05',
    title: 'Safety Culture & Leadership',
    icon: Users,
    desc: 'Culture diagnostics, leadership and BBS.',
    examples: ['Culture Diagnostic', 'Leadership Advisory', 'Behaviour-Based Safety', 'Supervisor Development'],
  },
  {
    num: '06',
    title: 'Specialist Industry HSE',
    icon: Briefcase,
    desc: 'Industry-specific HSE and tender support.',
    examples: ['Construction & Oil & Gas', 'Renewable Energy', 'Tender / PQQ Support', 'Incident Investigation'],
  },
];

export const HSE_PACKAGES = [
  {
    id: 'essential',
    name: 'HSE Essential',
    tagline: 'For SMEs & contractors',
    icon: ShieldCheck,
    desc: 'Professional HSE advisory support for organisations needing ongoing safety guidance.',
    features: ['Monthly HSE consultation', 'Technical document review', 'Incident guidance', 'Compliance review', 'Limited support hours', 'Monthly action summary'],
    cta: 'Request Essential Plan',
    highlight: false,
  },
  {
    id: 'professional',
    name: 'HSE Professional',
    tagline: 'Outsourced HSE manager',
    icon: Briefcase,
    desc: 'A dedicated remote HSE manager for companies requiring operational safety management.',
    features: ['Weekly HSE review', 'KPI analysis & reporting', 'Documentation support', 'Incident review & support', 'Risk assessment review', 'CAPA monitoring', 'ISO support', 'Monthly management report'],
    cta: 'Request Professional Plan',
    highlight: true,
  },
  {
    id: 'partner',
    name: 'HSE Partner',
    tagline: 'Fractional HSE director',
    icon: Crown,
    desc: 'Senior HSE leadership and governance for organisations requiring strategic safety management.',
    features: ['Fractional HSE Director', 'Governance & HSE strategy', 'Contractor assurance programme', 'Executive dashboard', 'Audit programme management', 'Management review facilitation', 'Technical HSE desk', 'Incident investigation', 'Leadership support'],
    cta: 'Discuss HSE Partner Plan',
    highlight: false,
  },
];

export const HOW_IT_WORKS = [
  { step: '01', title: 'Understand', icon: Headset, desc: 'We assess the organisation, risk profile, industry and immediate HSE priorities.' },
  { step: '02', title: 'Diagnose', icon: ClipboardCheck, desc: 'We review the existing HSE system and identify weaknesses and improvement opportunities.' },
  { step: '03', title: 'Design', icon: FileText, desc: 'We develop the required HSE systems, documents, processes, dashboards and improvement programme.' },
  { step: '04', title: 'Support', icon: ShieldCheck, desc: 'We provide remote, hybrid or onsite professional HSE support.' },
  { step: '05', title: 'Improve', icon: TrendingUp, desc: 'We monitor performance and help leadership continually improve HSE outcomes.' },
];

export const DELIVERY_MODELS = [
  {
    title: 'Remote',
    icon: Globe2,
    desc: 'Document review, advisory, dashboards, ISO support, KPI analysis, investigations, tender support and management-system development — delivered virtually.',
  },
  {
    title: 'Hybrid',
    icon: Network,
    desc: 'Remote technical support combined with planned onsite audits, management meetings, inspections, training and periodic site review.',
  },
  {
    title: 'Project-Based',
    icon: Briefcase,
    desc: 'Scoped engagements for audits, investigations, ISO projects, tender support, HSE plans and transformation programmes.',
  },
];

export const INDUSTRIES = [
  {
    id: 'construction',
    name: 'Construction & Infrastructure',
    icon: HardHat,
    challenges: ['Multiple contractors and subcontractors', 'High-risk work at height, excavation, lifting', 'Temporary works and design changes', 'Client audit pressure and PQQ requirements'],
    services: ['HSE plans and project documentation', 'Contractor prequalification and assurance', 'Risk assessments and RAMS', 'Site audits and inspections', 'Incident investigation'],
    deliverables: ['Project HSE Plan', 'Contractor HSE file', 'Risk register', 'Audit report with CAPA'],
    remote: ['Document review', 'Remote advisory', 'Dashboard development'],
    hybrid: ['Planned site audits', 'Management meetings', 'Training delivery'],
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    icon: Flame,
    challenges: ['Process safety and hydrocarbon hazards', 'SIMOPS and shutdown safety', 'Permit-to-work system integrity', 'Contractor management at scale'],
    services: ['PTW system development and review', 'SIMOPS and shutdown safety support', 'Process safety management', 'Contractor HSE assurance', 'Incident investigation and RCA'],
    deliverables: ['PTW procedures', 'SIMOPS matrix', 'Process safety review', 'Contractor grading report'],
    remote: ['Document review', 'Remote advisory', 'KPI reporting'],
    hybrid: ['Planned audits', 'Management review', 'Investigation support'],
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy & Solar',
    icon: Sun,
    challenges: ['Rapid project mobilisation', 'Large contractor workforce', 'Working at height on solar installations', 'Remote site locations'],
    services: ['Project HSE plans', 'Contractor prequalification', 'Risk assessments for installation', 'HSE tender support', 'Incident investigation'],
    deliverables: ['Project HSE Plan', 'Contractor HSE file', 'Risk register', 'Mobilisation checklist'],
    remote: ['Document review', 'Tender support', 'Advisory'],
    hybrid: ['Site audits', 'Training', 'Mobilisation review'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    challenges: ['Machine safety and LOTO', 'Chemical handling and COSHH', 'Repeated incidents and weak CAPA', 'ISO certification pressure'],
    services: ['ISO 45001 implementation and maintenance', 'LOTO and machine safety procedures', 'Chemical safety and COSHH', 'Incident investigation', 'Safety culture programmes'],
    deliverables: ['ISO documentation', 'LOTO procedures', 'COSHH register', 'Culture diagnostic report'],
    remote: ['ISO support', 'Document review', 'KPI reporting'],
    hybrid: ['Internal audits', 'Training', 'Culture workshops'],
  },
  {
    id: 'data-centres',
    name: 'Data Centres',
    icon: Server,
    challenges: ['Critical infrastructure risk', 'Multi-contractor coordination', 'Construction and commissioning safety', 'Facility operational HSE'],
    services: ['Construction HSE plans', 'Contractor assurance', 'Commissioning safety review', 'Facility HSE procedures', 'Audit and compliance'],
    deliverables: ['HSE plan', 'Contractor grading', 'Commissioning checklist', 'Audit report'],
    remote: ['Document review', 'Advisory', 'Dashboard'],
    hybrid: ['Site audits', 'Commissioning review', 'Training'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Warehousing',
    icon: Warehouse,
    challenges: ['Material handling and storage', 'Fleet and vehicle safety', 'Contractor and temporary worker management', 'High staff turnover'],
    services: ['HSE procedures for material handling', 'Fleet safety management', 'Contractor HSE assurance', 'Training programmes', 'Risk assessments'],
    deliverables: ['HSE procedures', 'Risk register', 'Training matrix', 'Contractor report'],
    remote: ['Document review', 'Advisory', 'KPI reporting'],
    hybrid: ['Site inspections', 'Training', 'Audit'],
  },
  {
    id: 'facilities',
    name: 'Facilities Management',
    icon: Building2,
    challenges: ['Multi-site contractor coordination', 'Varied risk profiles', 'Compliance consistency', 'Client audit requirements'],
    services: ['Integrated facility HSE systems', 'Contractor management', 'Compliance audits', 'HSE documentation', 'Training'],
    deliverables: ['HSE manual', 'Contractor procedures', 'Audit schedule', 'Compliance report'],
    remote: ['Document review', 'Advisory', 'Compliance tracking'],
    hybrid: ['Site audits', 'Training', 'Management review'],
  },
  {
    id: 'ports-marine',
    name: 'Ports & Marine',
    icon: Anchor,
    challenges: ['Heavy lifting and cargo handling', 'Marine interface hazards', 'Contractor management', 'Environmental compliance'],
    services: ['Lifting operations safety', 'Marine interface procedures', 'Contractor assurance', 'Environmental management', 'Incident investigation'],
    deliverables: ['Lifting plan review', 'Marine interface procedure', 'Contractor report', 'Environmental plan'],
    remote: ['Document review', 'Advisory', 'KPI reporting'],
    hybrid: ['Site audits', 'Training', 'Investigation support'],
  },
  {
    id: 'aviation',
    name: 'Aviation',
    icon: Plane,
    challenges: ['Airside safety awareness', 'Airport construction safety', 'Contractor control in restricted areas', 'Regulatory compliance'],
    services: ['Airside safety procedures', 'Construction HSE plans', 'Contractor prequalification', 'Safety training', 'Compliance audits'],
    deliverables: ['Airside safety procedure', 'Construction HSE plan', 'Contractor file', 'Audit report'],
    remote: ['Document review', 'Advisory', 'Compliance tracking'],
    hybrid: ['Site audits', 'Training', 'Inspection'],
  },
  {
    id: 'epc',
    name: 'Engineering & EPC Contractors',
    icon: Wrench,
    challenges: ['Tender and PQQ requirements', 'Multi-project HSE management', 'Client HSE compliance', 'Mobilisation timelines'],
    services: ['HSE tender and PQQ support', 'Project HSE plans', 'Contractor prequalification', 'Mobilisation HSE', 'KPI reporting'],
    deliverables: ['Tender HSE section', 'Project HSE plan', 'Contractor file', 'Mobilisation checklist'],
    remote: ['Tender support', 'Document preparation', 'Advisory'],
    hybrid: ['Mobilisation review', 'Training', 'Audit'],
  },
];

export const FRACTIONAL_LEADERSHIP_SERVICES = [
  {
    title: 'Fractional HSE Director',
    desc: 'Senior-level HSE leadership for organisations that require strategic HSE expertise without appointing a full-time HSE director.',
    items: ['HSE strategy & governance', 'Executive reporting', 'Leadership engagement', 'Management-system oversight', 'Performance improvement', 'Compliance governance', 'Contractor assurance', 'Organisational HSE improvement programmes'],
  },
  {
    title: 'Virtual HSE Manager',
    desc: 'Remote or hybrid operational HSE management support.',
    items: ['Monthly HSE reviews', 'KPI monitoring', 'Incident review', 'Risk-register review', 'HSE documentation', 'Audit follow-up', 'Training matrix monitoring', 'CAPA monitoring', 'Contractor performance', 'Management review support'],
  },
  {
    title: 'Remote HSE Advisor',
    desc: 'Suitable for SMEs and contractors requiring ongoing professional HSE advice.',
    items: ['Scheduled advisory calls', 'Document review', 'Technical advice', 'HSE compliance support', 'Risk-management guidance', 'Incident support', 'Audit preparation'],
  },
  {
    title: 'HSE Management Support Retainer',
    desc: 'Monthly service packages tailored to your organisation\'s size, risk profile and support requirements.',
    items: ['Flexible monthly hours', 'Priority advisory access', 'Document review', 'Compliance monitoring', 'Monthly action summary'],
  },
];

export const DOCUMENTATION_DESK_SERVICES = [
  'HSE Plans', 'Project HSE Plans', 'HSE Manuals', 'HSE Procedures', 'Standard Operating Procedures',
  'HIRA / HIRADC', 'Risk Assessments', 'JSA / JHA', 'Emergency Response Plans',
  'Permit-to-Work Procedures', 'LOTO Procedures', 'Working-at-Height Procedures',
  'Scaffold Safety Procedures', 'Confined-Space Procedures', 'Electrical Safety Procedures',
  'Lifting Safety Procedures', 'Contractor-Management Procedures', 'Environmental Procedures',
  'Waste-Management Plans', 'Audit Checklists', 'Inspection Checklists', 'Training Matrices',
  'Competency Matrices', 'Legal Registers', 'Risk Registers', 'CAPA Trackers',
  'HSE Forms & Templates', 'Management-Review Documentation',
];

export const TENDER_SERVICES = [
  'HSE PQQ Preparation', 'Vendor Registration HSE Documentation', 'Contractor Prequalification Submissions',
  'Technical Tender HSE Sections', 'HSE Statistics Presentation', 'LTIFR / TRIR Calculations',
  'HSE Organisation Charts', 'HSE CV & Competency Submissions', 'HSE Manpower Plans',
  'Mobilisation HSE Plans', 'Project HSE Plans', 'HSE Training Plans', 'Emergency Plans',
  'Risk-Management Plans', 'Environmental Plans', 'Contractor-Management Plans',
  'HSE KPI Proposals', 'Client Clarification Responses', 'Tender Document Compliance Reviews',
];

export const ISO_SERVICES = {
  implementation: {
    title: 'ISO Implementation',
    items: ['ISO 45001', 'ISO 14001', 'ISO 9001', 'Integrated Management Systems'],
  },
  maintenance: {
    title: 'ISO Maintenance Partner',
    desc: 'Recurring support after certification to keep your management system alive and audit-ready.',
    items: ['Document updates', 'Risk & opportunity review', 'Legal-register review', 'KPI monitoring', 'Internal audit planning', 'CAPA follow-up', 'Management-review preparation', 'Surveillance-audit preparation', 'Training support', 'Continual-improvement review'],
  },
  auditReadiness: {
    title: 'Audit Readiness & CAPA Management',
    items: ['Certification audit readiness', 'Surveillance audit readiness', 'Client audit preparation', 'Corporate audit preparation', 'Remote gap assessment', 'Document-readiness review', 'Mock audit', 'Corrective-action management', 'Evidence review', 'Closure verification'],
  },
};

export const CONTRACTOR_ASSURANCE_SERVICES = [
  'Contractor Prequalification', 'HSE Documentation Review', 'RAMS Review', 'Risk Assessment Review',
  'JSA Review', 'HSE Plan Review', 'Competency Review', 'Mobilisation Review',
  'Contractor HSE KPI Review', 'Monthly Contractor Performance Review', 'Audit Findings',
  'CAPA Management', 'Contractor Grading',
];

export const CONTRACTOR_GRADES = [
  { grade: 'Excellent', desc: 'Consistently exceeds HSE expectations with proactive safety management.' },
  { grade: 'Good', desc: 'Meets HSE requirements with minor areas for improvement.' },
  { grade: 'Improvement Required', desc: 'Identified gaps requiring corrective action within an agreed timeline.' },
  { grade: 'Significant Improvement Required', desc: 'Systemic HSE weaknesses requiring immediate action plan.' },
  { grade: 'Unacceptable', desc: 'Critical HSE failures requiring suspension of activities.' },
];

export const INCIDENT_INVESTIGATION_SERVICES = [
  'Remote Initial Incident Review', 'Evidence Review', 'Witness Interview Facilitation',
  'Incident Timeline Development', 'Immediate / Underlying / Root-Cause Analysis', '5 Why Analysis',
  'Fishbone Analysis', 'Barrier Analysis', 'Causal-Factor Analysis', 'Action-Plan Development',
  'Lessons Learned', 'Management Briefing', 'Corrective-Action Follow-Up',
];

export const DIGITAL_OFFERINGS = [
  { title: 'Power BI HSE Dashboards', desc: 'Executive, project, contractor and site dashboards with TRIR, LTIFR, near-miss trends and leading/lagging KPIs.', icon: LayoutDashboard },
  { title: 'Managed KPI Reporting', desc: 'A recurring service — you provide monthly data, we deliver dashboard updates, KPI analysis, trend commentary and recommended actions.', icon: TrendingUp },
  { title: 'Digital Workflow Consulting', desc: 'Functional consulting for incident, CAPA, audit, inspection, PTW, risk-assessment and contractor-management workflows.', icon: Network },
  { title: 'CAPA Trackers', desc: 'Corrective and preventive action tracking with automated workflows.', icon: ShieldCheck },
  { title: 'Audit Tracking Systems', desc: 'End-to-end audit lifecycle — plan, execute, report, close-out.', icon: FileBadge },
  { title: 'Inspection Systems', desc: 'Digital inspections, checklists and spot-check platforms with GPS and photos.', icon: ClipboardCheck },
  { title: 'Training Matrix Systems', desc: 'Track workforce competency and training compliance in real time.', icon: GraduationCap },
  { title: 'Competency Management', desc: 'Frameworks for assessing and developing workforce competency.', icon: Crown },
  { title: 'Digital PTW Concepts', desc: 'Paperless permit-to-work systems with electronic approvals.', icon: FileBadge },
  { title: 'Digital Safety Reporting', desc: 'Instant incident, near-miss and observation reporting from any device.', icon: ShieldAlert },
];

export const DIGITAL_PLATFORMS = [
  'Power BI', 'SafetyCulture-style inspection systems', 'Intelex-type EHS systems', 'Enablon-type systems',
  'Sphera-type systems', 'Cority-type platforms', 'Benchmark Gensuite-type systems', 'SAP EHS environments',
];

export const SAFETY_CULTURE_SERVICES = {
  diagnostic: {
    title: 'Safety Culture Diagnostic',
    items: ['Leadership commitment', 'Management credibility', 'Reporting culture', 'Learning culture', 'Worker participation', 'Supervisor behaviour', 'Safety communication', 'Production pressure', 'Accountability', 'Contractor culture'],
  },
  leadership: {
    title: 'Safety Leadership Advisory',
    items: ['Executive coaching', 'Leadership workshops', 'Supervisory safety leadership', 'Management safety conversations', 'HSE leadership KPI design', 'Leadership behavioural programmes'],
  },
  bbs: {
    title: 'Behaviour-Based Safety',
    items: ['Awareness', 'Observer development', 'Champions', 'Observation cards', 'Behavioural trend analysis', 'Monthly progress review', 'Management review', 'Annual programme review'],
  },
};

export const HSE_HEALTH_CHECK_AREAS = [
  'Leadership & Governance', 'HSE Policy', 'Roles & Responsibilities', 'Legal Compliance',
  'Hazard Identification', 'Risk Management', 'Operational Controls', 'Competency',
  'Training', 'Contractor Management', 'Emergency Preparedness', 'Incident Management',
  'Audits', 'Corrective Actions', 'KPIs', 'Worker Consultation', 'Management Review', 'Continual Improvement',
];

export const HSE_MATURITY_LEVELS = [
  { level: 'Level 1', name: 'Reactive', desc: 'Safety is driven by incidents and compliance pressure.' },
  { level: 'Level 2', name: 'Compliance Focused', desc: 'Systems exist but are primarily focused on meeting requirements.' },
  { level: 'Level 3', name: 'Managed', desc: 'HSE is systematically managed with documented processes.' },
  { level: 'Level 4', name: 'Proactive', desc: 'Leading indicators are tracked and improvement is data-driven.' },
  { level: 'Level 5', name: 'Continually Improving', desc: 'Safety is embedded in the culture with sustained improvement.' },
];

export const PARTNERSHIP_ENGAGEMENTS = [
  'Associate Consultant', 'Subcontract Consultant', 'White-Label Technical Consultant',
  'Remote Technical Resource', 'Project Consultant', 'Manday Consultant', 'Retained Consultant',
];

export const PARTNERSHIP_SERVICES = [
  'HSE Technical Research', 'ISO Documentation', 'Internal Audits', 'HSE Audits',
  'Risk Assessments', 'Technical Document Review', 'Incident Investigations',
  'Tender Support', 'HSE Proposals', 'Training', 'Digital HSE Consulting', 'Management-System Implementation',
];

export const PARTNERSHIP_TARGETS = [
  'ISO Consultancies', 'Certification Organisations', 'Engineering Consultants',
  'Training Companies', 'Management Consultancies', 'ESG Consultancies',
  'Digital EHS Companies', 'EPC Consultants', 'International Consultancy Partners',
];

export const TRAINING_PROGRAMS = [
  {
    category: 'High Risk Operations',
    programs: [
      { name: 'Confined Space Entry & Rescue', topics: ['Hazard Identification', 'Atmospheric Testing', 'Entry Permit Systems', 'Rescue Planning', 'Emergency Response'] },
      { name: 'Work at Height Safety', topics: ['Fall Prevention', 'Fall Arrest Systems', 'Scaffolding Safety', 'Ladder Safety', 'Rescue Procedures'] },
      { name: 'Lifting & Rigging Operations', topics: ['Rigging Practices', 'Crane Operations', 'Load Calculations', 'Lift Planning', 'Critical Lift Management'] },
      { name: 'Permit to Work (PTW) Systems', topics: ['PTW Management', 'SIMOPS Control', 'Isolation Management', 'Work Authorization', 'Verification Systems'] },
      { name: 'Lockout Tagout (LOTO)', topics: ['Energy Isolation', 'Electrical Isolation', 'Mechanical Isolation', 'Verification Procedures', 'Incident Prevention'] },
    ],
  },
  {
    category: 'Process Safety & Industrial Safety',
    programs: [
      { name: 'Chemical Safety Management', topics: ['COSHH', 'Hazardous Materials'] },
      { name: 'Process Safety Fundamentals', topics: ['Hazard Awareness', 'Process Safety Management'] },
      { name: 'Fire Prevention & Emergency Response', topics: ['Fire Safety', 'Emergency Planning'] },
      { name: 'Incident Investigation & Root Cause Analysis', topics: ['RCA Techniques', 'Investigation Process'] },
      { name: 'Behaviour Based Safety (BBS)', topics: ['Observation', 'Intervention', 'Culture Building'] },
      { name: 'Safety Leadership Development', topics: ['Leadership', 'Coaching', 'Accountability'] },
    ],
  },
  {
    category: 'Risk Management Programs',
    programs: [
      { name: 'Hazard Identification & Risk Assessment (HIRA)', topics: ['Risk Assessment', 'Hazards'] },
      { name: 'Job Safety Analysis (JSA)', topics: ['Task Breakdown', 'Risk Controls'] },
      { name: 'Risk Assessment Method Statements (RAMS)', topics: ['RAMS', 'Method Statements'] },
      { name: 'Bow Tie Risk Analysis', topics: ['Threats', 'Barriers', 'Consequences'] },
      { name: 'Dynamic Risk Assessment', topics: ['Real-time', 'Decision Making'] },
    ],
  },
];

export const TRAINING_CATEGORIES = [
  { title: 'Construction Safety', desc: 'Work at height, scaffolding, excavation, lifting & site safety programs.', icon: HardHat },
  { title: 'Oil & Gas Safety', desc: 'PTW, SIMOPS, confined space, shutdown & process safety training.', icon: Flame },
  { title: 'Leadership Programs', desc: 'Safety leadership, supervisor development & behavioral safety.', icon: Crown },
  { title: 'Custom Corporate Programs', desc: 'Tailored competency development for your organization needs.', icon: GraduationCap },
];

export const REMOTE_ASSURANCE_OFFERINGS = [
  {
    title: 'RA-1 Digital HSE Health Check',
    desc: 'A focused review of HSE maturity, systems, documentation, performance data and priority risks to establish a practical improvement baseline.',
    icon: ClipboardCheck,
  },
  {
    title: 'RA-2 Professional Remote HSE Audit',
    desc: 'A structured remote audit using interviews, document review, digital evidence and transparent findings aligned to the agreed audit scope.',
    icon: Video,
  },
  {
    title: 'RA-3 AI-Assisted Advanced Audit',
    desc: 'Auditor-led analysis supported by document screening and evidence processing, with human-in-the-loop decisions for every material conclusion.',
    icon: Cpu,
  },
  {
    title: 'RA-4 Hybrid Digital HSE Assurance',
    desc: 'A coordinated blend of remote review and targeted physical verification for sites, activities or controls requiring additional confidence.',
    icon: ShieldCheck,
  },
  {
    title: 'RA-5 Continuous Digital HSE Assurance',
    desc: 'An ongoing assurance cycle with performance monitoring, management reviews, corrective-action follow-up and trend-based risk visibility.',
    icon: LayoutDashboard,
  },
];

export const DIGITAL_FORMS = [
  { group: 'HSE Inspection Forms', items: ['Site Safety Inspection', 'Supervisor Inspection', 'Management Walkthrough', 'Weekly Inspection', 'Monthly Audit'] },
  { group: 'Permit to Work Systems', items: ['Hot Work Permit', 'Confined Space Permit', 'Work at Height Permit', 'Excavation Permit', 'Electrical Isolation Permit', 'LOTO Verification'] },
  { group: 'Equipment Inspection', items: ['Scaffolding Inspection', 'Lifting Gear', 'Crane Inspection', 'Forklift Inspection', 'Vehicle Inspection', 'Power Tools'] },
  { group: 'Environmental & ESG', items: ['Waste Management', 'Spill Reporting', 'Environmental Monitoring', 'ESG Data Collection'] },
  { group: 'Workforce Safety', items: ['Toolbox Talks', 'Safety Observations', 'Near Miss Reporting', 'Incident Reporting', 'BBS Observations'] },
];

export const DIGITAL_FEATURES = [
  { title: 'Real-Time Data Capture', desc: 'Data instantly available to management.' },
  { title: 'Mobile Friendly', desc: 'Works on phones, tablets, and computers.' },
  { title: 'GPS Location Tracking', desc: 'Capture exact inspection locations.' },
  { title: 'Timestamp Verification', desc: 'Automatic date & time recording.' },
  { title: 'Photo Evidence', desc: 'Attach photographs directly from site.' },
  { title: 'Digital Signatures', desc: 'Electronic approval workflows.' },
  { title: 'Automated Notifications', desc: 'Email and WhatsApp alerts.' },
  { title: 'Dashboard Integration', desc: 'Live KPI monitoring and reporting.' },
  { title: 'Cloud Storage', desc: 'Secure centralized records.' },
  { title: 'Audit Ready Records', desc: 'Instant retrieval during audits.' },
];

export const CERTIFICATIONS = [
  'NEBOSH IGC', 'NEBOSH Diploma', 'IOSH Managing Safely', 'IOSH Working Safely',
];

export const STANDARDS = ['ISO 45001', 'OSHA', 'ILO', 'ADNOC COP', 'NEBOSH', 'IOSH'];

export const CLIENTS_PORTFOLIO = [
  {
    sector: 'Aviation & Airport Sector',
    clients: ['Adani Navi Mumbai International Airport', 'Noida International Airport', 'Airport Infrastructure Contractors', 'Aviation Construction Contractors'],
  },
  {
    sector: 'Oil & Gas Sector',
    clients: ['ADNOC Group', 'Shell Projects', 'Petrofac', 'JGC Corporation', 'KBR', 'Dow / Aramco Projects', 'Oil & Gas EPC Contractors'],
  },
  {
    sector: 'Power & Energy Sector',
    clients: ['NTPC Limited', 'NTPC Kayamkulam', 'Power Generation Companies', 'Energy Infrastructure Projects'],
  },
  {
    sector: 'Manufacturing & Industrial Sector',
    clients: ['Jindal Steel', 'Grasim Industries', 'Havells India', 'Blue Star', 'Manufacturing Facilities', 'Industrial Processing Plants'],
  },
  {
    sector: 'Infrastructure & Construction Sector',
    clients: ['Larsen & Toubro (L&T)', 'Tata Projects', 'Kalpataru Projects', 'Infrastructure Development Contractors', 'EPC Contractors', 'Construction Companies'],
  },
  {
    sector: 'Data Centre Sector',
    clients: ['CTRLS Data Centres Ltd', 'Critical Infrastructure Facilities', 'Data Centre Operators'],
  },
  {
    sector: 'Environmental & Utility Sector',
    clients: ['Veolia', 'Utility Service Providers', 'Environmental Management Organizations'],
  },
  {
    sector: 'Ports, Logistics & Marine Sector',
    clients: ['Vizhinjam Port Project', 'Port Operations Organizations', 'Logistics Companies', 'Marine Infrastructure Contractors'],
  },
  {
    sector: 'Rail & Metro Sector',
    clients: ['Chennai Metro Related Projects', 'Metro Rail Contractors', 'Rail Infrastructure Organizations'],
  },
  {
    sector: 'Training & Certification Sector',
    clients: ['Safety Catch Safety Training & Consulting Pvt Ltd', 'NEBOSH Training Programs', 'IOSH Training Programs', 'Professional Competency Development Programs'],
  },
];

export const SERVICES_DELIVERED = [
  {
    category: 'Training Programs',
    items: ['Confined Space Entry', 'Work at Height', 'Lifting & Rigging', 'Electrical Safety', 'Fire Safety', 'Chemical Safety', 'COSHH', 'PTW', 'LOTO', 'HIRA', 'JSA', 'Incident Investigation', 'Contractor Safety', 'Safety Leadership'],
  },
  {
    category: 'Consulting Services',
    items: ['HSE Management Systems', 'ISO 45001 Implementation', 'Compliance Audits', 'HSE Assurance', 'Emergency Response Planning', 'Contractor Assessments', 'Safety Culture Programs'],
  },
  {
    category: 'Learning & Development',
    items: ['NEBOSH IGC', 'NEBOSH Diploma', 'IOSH Managing Safely', 'IOSH Working Safely', 'Supervisor Development', 'Safety Officer Development'],
  },
  {
    category: 'Digital HSE Solutions',
    items: ['HSE Dashboards', 'AI-Based Safety Analytics', 'Digital Inspection Systems', 'Competency Tracking Systems', 'Risk Monitoring Platforms'],
  },
];

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'HSE as a Service', to: '/hse-as-a-service' },
  { label: 'Training', to: '/training' },
  { label: 'Partner With Us', to: '/partnership' },
  { label: 'Contact', to: '/contact' },
];

export const NAV_MEGA_MENU = [
  {
    title: 'HSE Leadership',
    items: [
      { label: 'Fractional HSE Director', to: '/services' },
      { label: 'Virtual HSE Manager', to: '/services' },
      { label: 'Remote HSE Advisor', to: '/services' },
    ],
  },
  {
    title: 'Technical Services',
    items: [
      { label: 'HSE Documentation Desk', to: '/services' },
      { label: 'Risk Assessment / JSA', to: '/services' },
      { label: 'Tender / PQQ Support', to: '/services' },
      { label: 'Incident Investigation', to: '/services' },
    ],
  },
  {
    title: 'Assurance & Compliance',
    items: [
      { label: 'ISO Services', to: '/services' },
      { label: 'Audit Readiness', to: '/services' },
      { label: 'Contractor Assurance', to: '/services' },
      { label: 'CAPA Management', to: '/services' },
    ],
  },
  {
    title: 'Digital HSE',
    items: [
      { label: 'Power BI Dashboards', to: '/digital' },
      { label: 'Managed KPI Reporting', to: '/digital' },
      { label: 'Digital Workflow Consulting', to: '/digital' },
    ],
  },
  {
    title: 'Culture & Capability',
    items: [
      { label: 'Safety Culture', to: '/services' },
      { label: 'Leadership', to: '/services' },
      { label: 'BBS', to: '/services' },
      { label: 'Competency Development', to: '/training' },
    ],
  },
];

export const PROBLEM_STATEMENTS = [
  'Inadequate senior HSE expertise in-house',
  'Growing compliance and regulatory obligations',
  'Client audit pressure and prequalification requirements',
  'Inconsistent or fragmented HSE systems',
  'Weak contractor management and oversight',
  'Poor KPI visibility for leadership decisions',
  'Repeated incidents with weak corrective actions',
  'Document overload with no systematic control',
  'ISO certification or surveillance audit pressure',
  'Inability to justify another full-time senior HSE position',
];

export const INSIGHTS_TOPICS = [
  'What Should a CEO See in a Monthly HSE Dashboard?',
  'How SMEs Can Access Senior HSE Expertise Without Hiring a Full-Time HSE Head',
  '20 Documents Contractors Need Before Project Mobilisation',
  'Why Risk Assessments Fail During Client Audits',
  'How to Build an Effective Contractor HSE Assurance Programme',
  '12 Leading Indicators Every HSE Manager Should Track',
  'How to Prepare for an ISO 45001 Surveillance Audit',
  'What Makes an HSE Tender Submission Strong?',
  'From Incident Reporting to Organisational Learning',
];

export const INSIGHTS_CATEGORIES = [
  'HSE Leadership', 'Risk Management', 'ISO 45001', 'Contractor Safety', 'Incident Investigation',
  'Digital HSE', 'HSE Metrics', 'Safety Culture', 'Construction HSE', 'Oil & Gas HSE', 'Renewable Energy HSE',
];

export const DISCLAIMER = 'Remote HSE consultancy, advisory or fractional leadership does not replace legally mandated competent persons, statutory appointments, site safety personnel or other roles required under applicable law, contract or regulatory requirements. Recommendations are based on the information, documents and evidence made available to HSE Transformation Partners.';
