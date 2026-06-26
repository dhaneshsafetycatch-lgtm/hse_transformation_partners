import {
  ShieldCheck, HardHat, Flame, FileBadge, Crown, Cpu, GraduationCap, LayoutDashboard,
  Wind, Anchor, Zap, Building2, Train, Factory, Server,
} from 'lucide-react';

export const COMPANY = {
  name: 'HSE Transformation Partners',
  shortName: 'HSE TP',
  tagline: 'Transforming Safety. Empowering Performance.',
  subline: 'Helping organizations move from compliance to excellence through consulting, training, leadership development and digital transformation.',
  email: 'hsetranspartners808@gmail.com',
  whatsapp: '+919846526915',
  whatsappRaw: '919846526915',
  domain: 'hsetransformationparnters.in',
  linkedin: 'https://www.linkedin.com/in/dhanesh-manoharan',
  website: 'Global HSE Consulting | Training | Digital Solutions | Safety Transformation',
};

export const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 300, suffix: '+', label: 'Training Programs' },
  { value: 100, suffix: '+', label: 'Consulting Deliverables' },
  { value: 10000, suffix: '+', label: 'Presentation Slides' },
];

export const HERO_HIGHLIGHTS = [
  { label: '20+ Years Experience', icon: ShieldCheck },
  { label: 'Oil & Gas Expertise', icon: Flame },
  { label: 'Construction Safety', icon: HardHat },
  { label: 'International Projects', icon: Building2 },
  { label: 'ISO & Compliance', icon: FileBadge },
  { label: 'Safety Leadership', icon: Crown },
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
  { name: 'Aviation', icon: Wind, desc: 'Airport construction safety, airside awareness, contractor control.' },
  { name: 'Power Generation', icon: Zap, desc: 'Electrical safety, chemical handling, maintenance safety.' },
  { name: 'Data Centres', icon: Server, desc: 'Critical infrastructure safety, facility risk, contractor systems.' },
  { name: 'Ports & Logistics', icon: Anchor, desc: 'Cargo handling, lifting operations, marine interface safety.' },
  { name: 'Manufacturing', icon: Factory, desc: 'LOTO, machine safety, process safety fundamentals.' },
  { name: 'Metro Rail', icon: Train, desc: 'Infrastructure HSE, contractor control, station safety.' },
];

export const SERVICES = [
  {
    id: 'consulting',
    title: 'HSE Consulting',
    icon: ShieldCheck,
    short: 'HSE Management Systems, Risk Management, Compliance Audits & Emergency Response.',
    items: ['HSE Management Systems', 'Risk Management', 'Incident Investigation', 'Compliance Audits', 'Contractor Management', 'Emergency Response Planning'],
  },
  {
    id: 'construction',
    title: 'Construction Safety',
    icon: HardHat,
    short: 'Work at Height, Scaffolding, Excavation, Lifting, Temporary Works & Site Audits.',
    items: ['Work at Height', 'Scaffolding', 'Excavation', 'Lifting Operations', 'Temporary Works', 'Site Audits'],
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Safety',
    icon: Flame,
    short: 'PTW Systems, LOTO, Confined Space, SIMOPS, Shutdown & Process Safety Support.',
    items: ['PTW Systems', 'LOTO', 'Confined Space', 'SIMOPS', 'Shutdown Safety', 'Process Safety Support'],
  },
  {
    id: 'iso',
    title: 'ISO Services',
    icon: FileBadge,
    short: 'ISO 45001, ISO 14001, ISO 9001, Gap Assessments & Internal Audits.',
    items: ['ISO 45001', 'ISO 14001', 'ISO 9001', 'Gap Assessments', 'Internal Audits'],
  },
  {
    id: 'leadership',
    title: 'Leadership Development',
    icon: Crown,
    short: 'Safety Leadership, Supervisor Development, Behavioral Safety, Safety Culture.',
    items: ['Safety Leadership', 'Supervisor Development', 'Behavioral Safety', 'Human Factors', 'Safety Culture'],
  },
  {
    id: 'digital',
    title: 'Digital HSE Transformation',
    icon: Cpu,
    short: 'Power BI Dashboards, KPI Tracking, CAPA Trackers, Digital PTW & Safety Reporting.',
    items: ['Power BI Dashboards', 'KPI Tracking Systems', 'CAPA Trackers', 'Audit Tracking', 'Digital PTW Concepts', 'Digital Safety Reporting'],
  },
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
  { title: 'Custom Corporate Programs', desc: 'Tailored competency development for your organization’s needs.', icon: GraduationCap },
];

export const DIGITAL_OFFERINGS = [
  { title: 'Power BI Dashboards', desc: 'Executive dashboards with TRIR, LTIFR, near-miss trends & leading/lagging KPIs.', icon: LayoutDashboard },
  { title: 'KPI Tracking Systems', desc: 'Real-time safety performance indicators across projects and sites.', icon: LayoutDashboard },
  { title: 'CAPA Trackers', desc: 'Corrective and preventive action tracking with automated workflows.', icon: ShieldCheck },
  { title: 'Audit Tracking Systems', desc: 'End-to-end audit lifecycle — plan, execute, report, close-out.', icon: FileBadge },
  { title: 'Inspection Systems', desc: 'Digital inspections, checklists & spot-check platforms with GPS & photos.', icon: ShieldCheck },
  { title: 'Training Matrix Systems', desc: 'Track workforce competency and training compliance in real time.', icon: GraduationCap },
  { title: 'Competency Management', desc: 'Frameworks for assessing and developing workforce competency.', icon: Crown },
  { title: 'Digital PTW Concepts', desc: 'Paperless permit-to-work systems with electronic approvals.', icon: FileBadge },
  { title: 'Digital Safety Reporting', desc: 'Instant incident, near-miss & observation reporting from any device.', icon: ShieldCheck },
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
  { label: 'Training', to: '/training' },
  { label: 'Calculators', to: '/calculators' },
  { label: 'Partnership', to: '/partnership' },
  { label: 'Digital Solutions', to: '/digital' },
  { label: 'Contact', to: '/contact' },
];
