import {
  ShieldCheck, BarChart3, Construction, Anchor, Drill, Flame, Wind, Zap,
  DoorOpen, HeartPulse, Leaf, Atom, TrendingUp, AlertTriangle,
  Ruler, Weight, Gauge, Activity, Droplets, Volume2, Sun, Snowflake, Beaker,
  Cable, Battery, Wind as Ventilation, Footprints, Brain, Car, Recycle,
  Layers, Target, ClipboardCheck, Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type FieldType = 'number' | 'select' | 'radio' | 'checkbox';

export type FieldUnit = {
  label: string;
  factor: number; // multiply input by this to get base SI unit
};

export type CalcField = {
  id: string;
  label: string;
  type: FieldType;
  unit?: string;
  units?: FieldUnit[];
  default?: number | string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  help?: string;
};

export type CalcResultBand = {
  max: number; // upper bound (inclusive); Infinity for last band
  label: string;
  color: string; // tailwind text class
  bg: string; // tailwind bg class
  advice: string;
};

export type CalcDefinition = {
  slug: string;
  name: string;
  category: string;
  icon: LucideIcon;
  short: string;
  description: string;
  formula: string; // human-readable formula
  formulaLatex?: string;
  fields: CalcField[];
  compute: (inputs: Record<string, number | string>) => {
    result: number;
    resultLabel: string;
    resultUnit: string;
    steps: { label: string; value: string }[];
    bands: CalcResultBand[];
    interpretation?: string;
    notes?: string[];
    standards?: string[];
  };
  popular?: boolean;
  featured?: boolean;
  isNew?: boolean;
};

export const CALC_CATEGORIES: {
  id: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  color: string;
}[] = [
  { id: 'occupational-safety', name: 'Occupational Safety', icon: ShieldCheck, desc: 'Risk matrices, RPN, ALARP, hazard ranking & severity tools.', color: 'from-cyan to-cyan-light' },
  { id: 'safety-kpis', name: 'Safety KPIs', icon: BarChart3, desc: 'TRIR, LTIFR, DART, near-miss ratio & recordable rates.', color: 'from-primary-700 to-primary-600' },
  { id: 'work-at-height', name: 'Work at Height', icon: Construction, desc: 'Fall clearance, ladder angle, guardrail & swing-fall.', color: 'from-accent to-accent-dark' },
  { id: 'lifting-rigging', name: 'Lifting & Rigging', icon: Anchor, desc: 'Sling angle, crane load, COG & rigging capacity.', color: 'from-cyan to-primary-600' },
  { id: 'excavation', name: 'Excavation', icon: Drill, desc: 'Sloping, benching, soil classification & trench shields.', color: 'from-accent-dark to-accent' },
  { id: 'fire-safety', name: 'Fire Safety', icon: Flame, desc: 'Extinguisher selection, occupant load, exits & travel distance.', color: 'from-orange-500 to-red-500' },
  { id: 'industrial-hygiene', name: 'Industrial Hygiene', icon: Wind, desc: 'Heat stress WBGT, noise, lighting, HAVS & chemical exposure.', color: 'from-teal-500 to-cyan' },
  { id: 'electrical-safety', name: 'Electrical Safety', icon: Zap, desc: 'Arc flash boundary, shock boundary, cable & load sizing.', color: 'from-yellow-500 to-orange-500' },
  { id: 'confined-space', name: 'Confined Space', icon: DoorOpen, desc: 'Ventilation, oxygen deficiency, purging & gas-test frequency.', color: 'from-slate-500 to-primary-700' },
  { id: 'occupational-health', name: 'Occupational Health', icon: HeartPulse, desc: 'BMI, hydration, NIOSH lifting, manual handling & fatigue.', color: 'from-rose-500 to-pink-500' },
  { id: 'environmental', name: 'Environmental', icon: Leaf, desc: 'Carbon footprint, fuel, waste, water & spill volume.', color: 'from-green-500 to-emerald-500' },
  { id: 'process-safety', name: 'Process Safety', icon: Atom, desc: 'SIL estimator, LOPA helper, consequence ranking & bow-tie.', color: 'from-violet-500 to-primary-700' },
];

// ---------- Helper for risk bands ----------
const riskBands = (thresholds: number[], labels: string[], advices: string[]): CalcResultBand[] => {
  const colors = ['text-green-600', 'text-yellow-600', 'text-orange-600', 'text-red-600'];
  const bgs = ['bg-green-50 border-green-200', 'bg-yellow-50 border-yellow-200', 'bg-orange-50 border-orange-200', 'bg-red-50 border-red-200'];
  return thresholds.map((t, i) => ({
    max: i === thresholds.length - 1 ? Infinity : t,
    label: labels[i],
    color: colors[i] ?? colors[colors.length - 1],
    bg: bgs[i] ?? bgs[bgs.length - 1],
    advice: advices[i],
  }));
};

// ---------- CALCULATORS ----------
export const CALCULATORS: CalcDefinition[] = [
  // ===== OCCUPATIONAL SAFETY =====
  {
    slug: 'risk-matrix',
    name: 'Risk Matrix Calculator',
    category: 'occupational-safety',
    icon: Target,
    short: '5×5 risk matrix scoring likelihood × severity.',
    description: 'Compute a risk score from likelihood and severity using a standard 5×5 risk matrix, with risk band classification.',
    formula: 'Risk = Likelihood × Severity',
    fields: [
      { id: 'likelihood', label: 'Likelihood', type: 'select', default: '3', options: [
        { value: '1', label: '1 — Rare' }, { value: '2', label: '2 — Unlikely' }, { value: '3', label: '3 — Possible' }, { value: '4', label: '4 — Likely' }, { value: '5', label: '5 — Almost Certain' },
      ] },
      { id: 'severity', label: 'Severity', type: 'select', default: '3', options: [
        { value: '1', label: '1 — Insignificant' }, { value: '2', label: '2 — Minor' }, { value: '3', label: '3 — Moderate' }, { value: '4', label: '4 — Major' }, { value: '5', label: '5 — Catastrophic' },
      ] },
    ],
    compute: (i) => {
      const l = Number(i.likelihood), s = Number(i.severity);
      const r = l * s;
      return {
        result: r, resultLabel: 'Risk Score', resultUnit: '/25',
        steps: [
          { label: 'Likelihood', value: String(l) },
          { label: 'Severity', value: String(s) },
          { label: 'Risk = L × S', value: `${l} × ${s} = ${r}` },
        ],
        bands: riskBands([5, 10, 15, 25], ['Low', 'Medium', 'High', 'Extreme'], [
          'Acceptable — monitor and manage through normal procedures.',
          'Tolerable — implement additional controls where reasonably practicable.',
          'High risk — controls required before proceeding.',
          'Extreme risk — do not proceed until risk is reduced.',
        ]),
        interpretation: `A risk score of ${r} out of 25 places this hazard in the ${r <= 5 ? 'Low' : r <= 10 ? 'Medium' : r <= 15 ? 'High' : 'Extreme'} band.`,
        notes: ['5×5 matrix is a semi-quantitative tool; combine with professional judgement.', 'Calibrate likelihood/severity descriptors to your organization\'s context.'],
        standards: ['ISO 45001', 'ILO-OSH-2001'],
      };
    },
    popular: true, featured: true,
  },
  {
    slug: 'residual-risk',
    name: 'Residual Risk Calculator',
    category: 'occupational-safety',
    icon: ShieldCheck,
    short: 'Compute residual risk after applying controls.',
    description: 'Estimate residual risk by reducing the inherent risk score by the control effectiveness factor.',
    formula: 'Residual Risk = Inherent Risk × (1 − Control Effectiveness %)',
    fields: [
      { id: 'inherent', label: 'Inherent Risk Score', type: 'number', default: 20, min: 1, max: 25, unit: '/25' },
      { id: 'effectiveness', label: 'Control Effectiveness', type: 'select', default: '0.6', options: [
        { value: '0.2', label: '20% — Low' }, { value: '0.4', label: '40% — Moderate' }, { value: '0.6', label: '60% — Good' }, { value: '0.8', label: '80% — Very Good' }, { value: '0.95', label: '95% — Excellent' },
      ] },
    ],
    compute: (i) => {
      const inh = Number(i.inherent), eff = Number(i.effectiveness);
      const res = inh * (1 - eff);
      return {
        result: Math.round(res * 10) / 10, resultLabel: 'Residual Risk', resultUnit: '/25',
        steps: [
          { label: 'Inherent Risk', value: String(inh) },
          { label: 'Control Effectiveness', value: `${eff * 100}%` },
          { label: 'Reduction Factor (1 − E)', value: (1 - eff).toFixed(2) },
          { label: 'Residual = Inh × (1 − E)', value: `${inh} × ${(1 - eff).toFixed(2)} = ${res.toFixed(1)}` },
        ],
        bands: riskBands([5, 10, 15, 25], ['Low', 'Medium', 'High', 'Extreme'], [
          'Residual risk is acceptable with ongoing monitoring.',
          'Tolerable — seek further improvement where practicable.',
          'High — additional controls recommended.',
          'Extreme — do not accept; reduce further.',
        ]),
        notes: ['Effectiveness values are indicative; validate through verification and monitoring.'],
        standards: ['ISO 45001', 'ISO 31000'],
      };
    },
  },
  {
    slug: 'rpn',
    name: 'Risk Priority Number (RPN)',
    category: 'occupational-safety',
    icon: BarChart3,
    short: 'FMEA-style RPN from severity, occurrence & detection.',
    description: 'Calculate the Risk Priority Number used in FMEA by multiplying Severity × Occurrence × Detection ratings (each 1–10).',
    formula: 'RPN = Severity × Occurrence × Detection',
    fields: [
      { id: 'severity', label: 'Severity (1–10)', type: 'number', default: 7, min: 1, max: 10 },
      { id: 'occurrence', label: 'Occurrence (1–10)', type: 'number', default: 5, min: 1, max: 10 },
      { id: 'detection', label: 'Detection (1–10)', type: 'number', default: 4, min: 1, max: 10 },
    ],
    compute: (i) => {
      const s = Number(i.severity), o = Number(i.occurrence), d = Number(i.detection);
      const rpn = s * o * d;
      return {
        result: rpn, resultLabel: 'RPN', resultUnit: '/1000',
        steps: [
          { label: 'Severity', value: String(s) },
          { label: 'Occurrence', value: String(o) },
          { label: 'Detection', value: String(d) },
          { label: 'RPN = S × O × D', value: `${s} × ${o} × ${d} = ${rpn}` },
        ],
        bands: riskBands([50, 100, 200, 1000], ['Low', 'Medium', 'High', 'Critical'], [
          'No action required — monitor.',
          'Action recommended at next review.',
          'Action required — prioritize.',
          'Critical — immediate action required.',
        ]),
        notes: ['RPN threshold policies vary; common action threshold is 100–150.', 'Detection is inverse — higher D means harder to detect.'],
        standards: ['ISO 9001', 'AIAG-VDA FMEA'],
      };
    },
    popular: true,
  },
  {
    slug: 'alarp',
    name: 'ALARP Evaluation',
    category: 'occupational-safety',
    icon: TrendingUp,
    short: 'Evaluate whether risk is As Low As Reasonably Practicable.',
    description: 'Determine the ALARP region by comparing the risk score against tolerability thresholds and assessing whether further reduction is grossly disproportionate.',
    formula: 'ALARP if risk ≤ Tolerable limit AND further reduction is grossly disproportionate',
    fields: [
      { id: 'risk', label: 'Current Risk Score', type: 'number', default: 8, min: 1, max: 25, unit: '/25' },
      { id: 'tolerable', label: 'Tolerable Limit', type: 'number', default: 10, min: 1, max: 25, unit: '/25' },
      { id: 'broadly', label: 'Broadly Acceptable Limit', type: 'number', default: 4, min: 1, max: 25, unit: '/25' },
    ],
    compute: (i) => {
      const r = Number(i.risk), t = Number(i.tolerable), b = Number(i.broadly);
      const region = r <= b ? 1 : r <= t ? 2 : 3;
      const alarp = region === 2;
      return {
        result: region, resultLabel: 'ALARP Region', resultUnit: '',
        steps: [
          { label: 'Current Risk', value: String(r) },
          { label: 'Broadly Acceptable', value: String(b) },
          { label: 'Tolerable Limit', value: String(t) },
          { label: 'Region', value: region === 1 ? 'Broadly Acceptable' : region === 2 ? 'ALARP / Tolerable' : 'Unacceptable' },
        ],
        bands: [
          { max: 1, label: 'Broadly Acceptable', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Risk is negligible; no further action needed.' },
          { max: 2, label: 'ALARP', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: alarp ? 'Reduce risk until further reduction is grossly disproportionate.' : 'Not in ALARP — reduce risk.' },
          { max: Infinity, label: 'Unacceptable', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Risk is unacceptable — must be reduced before proceeding.' },
        ],
        interpretation: `Risk of ${r} falls in the ${region === 1 ? 'Broadly Acceptable' : region === 2 ? 'ALARP' : 'Unacceptable'} region.`,
        notes: ['ALARP is a legal/regulatory concept in many jurisdictions (UK HSE, UAE).', 'Gross disproportion requires cost-benefit justification.'],
        standards: ['UK HSE ALARP', 'ISO 31000', 'API RP 14C'],
      };
    },
  },
  {
    slug: 'hazard-ranking',
    name: 'Hazard Ranking',
    category: 'occupational-safety',
    icon: AlertTriangle,
    short: 'Rank hazards by exposure × consequence.',
    description: 'Compute a hazard ranking score from exposure frequency and consequence severity to prioritize hazard treatment.',
    formula: 'Hazard Score = Exposure × Consequence',
    fields: [
      { id: 'exposure', label: 'Exposure Frequency', type: 'select', default: '3', options: [
        { value: '1', label: '1 — Rare' }, { value: '2', label: '2 — Occasional' }, { value: '3', label: '3 — Frequent' }, { value: '4', label: '4 — Constant' },
      ] },
      { id: 'consequence', label: 'Consequence', type: 'select', default: '3', options: [
        { value: '1', label: '1 — Minor' }, { value: '2', label: '2 — Serious' }, { value: '3', label: '3 — Major' }, { value: '4', label: '4 — Fatal' },
      ] },
    ],
    compute: (i) => {
      const e = Number(i.exposure), c = Number(i.consequence);
      const score = e * c;
      return {
        result: score, resultLabel: 'Hazard Score', resultUnit: '/16',
        steps: [
          { label: 'Exposure', value: String(e) },
          { label: 'Consequence', value: String(c) },
          { label: 'Score = E × C', value: `${e} × ${c} = ${score}` },
        ],
        bands: riskBands([4, 8, 12, 16], ['Low', 'Medium', 'High', 'Critical'], [
          'Routine management.',
          'Implement controls.',
          'Priority controls required.',
          'Immediate action — stop if needed.',
        ]),
        standards: ['ISO 45001'],
      };
    },
  },
  {
    slug: 'incident-severity',
    name: 'Incident Severity',
    category: 'occupational-safety',
    icon: Activity,
    short: 'Classify incident severity from actual outcome.',
    description: 'Classify an incident severity tier based on the actual outcome (first aid, medical treatment, lost time, fatality).',
    formula: 'Severity Tier = f(actual outcome)',
    fields: [
      { id: 'outcome', label: 'Actual Outcome', type: 'select', default: '2', options: [
        { value: '1', label: 'First Aid Only' }, { value: '2', label: 'Medical Treatment' }, { value: '3', label: 'Lost Time Injury' }, { value: '4', label: 'Permanent Disability' }, { value: '5', label: 'Fatality' },
      ] },
    ],
    compute: (i) => {
      const o = Number(i.outcome);
      const labels = ['First Aid', 'Medical Treatment', 'Lost Time', 'Disability', 'Fatality'];
      return {
        result: o, resultLabel: 'Severity Tier', resultUnit: '',
        steps: [{ label: 'Outcome', value: labels[o - 1] }, { label: 'Severity Tier', value: String(o) }],
        bands: riskBands([1, 2, 3, 5], ['Minor', 'Moderate', 'Serious', 'Major'], [
          'First-aid case — local investigation.',
          'MTI — investigate and trend.',
          'LTI — formal investigation & root cause analysis.',
          'Major — executive notification & comprehensive investigation.',
        ]),
        standards: ['OSHA 1904', 'ISO 45001'],
      };
    },
  },
  {
    slug: 'probability-calculator',
    name: 'Probability Calculator',
    category: 'occupational-safety',
    icon: Gauge,
    short: 'Convert likelihood descriptors to probability.',
    description: 'Convert qualitative likelihood descriptors into approximate annual probability values used in quantitative risk assessment.',
    formula: 'P = likelihood descriptor → annual probability',
    fields: [
      { id: 'descriptor', label: 'Likelihood Descriptor', type: 'select', default: '3', options: [
        { value: '1', label: 'Improbable (< 0.001/yr)' }, { value: '2', label: 'Remote (0.001–0.01/yr)' }, { value: '3', label: 'Occasional (0.01–0.1/yr)' }, { value: '4', label: 'Probable (0.1–1/yr)' }, { value: '5', label: 'Frequent (> 1/yr)' },
      ] },
    ],
    compute: (i) => {
      const d = Number(i.descriptor);
      const probs = [0.0005, 0.005, 0.05, 0.5, 2];
      const p = probs[d - 1];
      return {
        result: p, resultLabel: 'Annual Probability', resultUnit: '/yr',
        steps: [{ label: 'Descriptor', value: ['Improbable', 'Remote', 'Occasional', 'Probable', 'Frequent'][d - 1] }, { label: 'Approx. Probability', value: `${p}/yr` }],
        bands: riskBands([0.001, 0.01, 0.1, 2], ['Very Low', 'Low', 'Moderate', 'High'], [
          'Negligible — accept.',
          'Low — monitor.',
          'Moderate — reduce where practicable.',
          'High — mandatory reduction.',
        ]),
        notes: ['Probabilities are indicative ranges for QRA modelling.'],
        standards: ['ISO 31000', 'IEC 61508'],
      };
    },
  },
  {
    slug: 'safety-performance-index',
    name: 'Safety Performance Index',
    category: 'occupational-safety',
    icon: Sparkles,
    short: 'Composite index from leading & lagging indicators.',
    description: 'Compute a composite Safety Performance Index (0–100) from weighted leading and lagging indicators.',
    formula: 'SPI = 0.6 × Leading Score + 0.4 × Lagging Score',
    fields: [
      { id: 'leading', label: 'Leading Indicators Score', type: 'number', default: 80, min: 0, max: 100, unit: '/100' },
      { id: 'lagging', label: 'Lagging Indicators Score', type: 'number', default: 70, min: 0, max: 100, unit: '/100' },
    ],
    compute: (i) => {
      const l = Number(i.leading), g = Number(i.lagging);
      const spi = 0.6 * l + 0.4 * g;
      return {
        result: Math.round(spi), resultLabel: 'Safety Performance Index', resultUnit: '/100',
        steps: [
          { label: 'Leading Score', value: String(l) },
          { label: 'Lagging Score', value: String(g) },
          { label: 'SPI = 0.6L + 0.4G', value: `0.6×${l} + 0.4×${g} = ${spi.toFixed(1)}` },
        ],
        bands: riskBands([50, 70, 85, 100], ['Poor', 'Fair', 'Good', 'Excellent'], [
          'Significant improvement required.',
          'Targeted improvement plan needed.',
          'Good performance — sustain.',
          'World-class performance.',
        ]),
        standards: ['ISO 45001', 'ILO'],
      };
    },
  },

  // ===== SAFETY KPIs =====
  {
    slug: 'trir',
    name: 'TRIR Calculator',
    category: 'safety-kpis',
    icon: BarChart3,
    short: 'Total Recordable Incident Rate per 200,000 hours.',
    description: 'Compute the Total Recordable Incident Rate (TRIR) — recordable incidents per 200,000 hours worked.',
    formula: 'TRIR = (Recordable Incidents × 200,000) / Hours Worked',
    fields: [
      { id: 'incidents', label: 'Recordable Incidents', type: 'number', default: 5, min: 0 },
      { id: 'hours', label: 'Total Hours Worked', type: 'number', default: 500000, min: 1, unit: 'hrs' },
    ],
    compute: (i) => {
      const inc = Number(i.incidents), h = Number(i.hours);
      const trir = (inc * 200000) / h;
      return {
        result: Math.round(trir * 100) / 100, resultLabel: 'TRIR', resultUnit: 'per 200k hrs',
        steps: [
          { label: 'Recordable Incidents', value: String(inc) },
          { label: 'Hours Worked', value: h.toLocaleString() },
          { label: 'TRIR = (Inc × 200,000) / Hours', value: `(${inc} × 200,000) / ${h.toLocaleString()} = ${trir.toFixed(2)}` },
        ],
        bands: riskBands([1, 2, 4, 100], ['Excellent', 'Good', 'Average', 'Poor'], [
          'World-class performance.',
          'Better than industry average.',
          'Around industry average.',
          'Above industry average — improvement required.',
        ]),
        interpretation: `A TRIR of ${trir.toFixed(2)} means ${trir.toFixed(2)} recordable incidents per 200,000 hours worked.`,
        notes: ['200,000 hours ≈ 100 full-time workers per year.', 'Recordable = MTI, LTI, restricted duty, fatality.'],
        standards: ['OSHA 1904', 'ILO'],
      };
    },
    popular: true, featured: true,
  },
  {
    slug: 'ltifr',
    name: 'LTIFR Calculator',
    category: 'safety-kpis',
    icon: BarChart3,
    short: 'Lost Time Injury Frequency Rate per million hours.',
    description: 'Compute the Lost Time Injury Frequency Rate (LTIFR) — lost-time injuries per 1,000,000 hours worked.',
    formula: 'LTIFR = (Lost Time Injuries × 1,000,000) / Hours Worked',
    fields: [
      { id: 'lti', label: 'Lost Time Injuries', type: 'number', default: 2, min: 0 },
      { id: 'hours', label: 'Total Hours Worked', type: 'number', default: 500000, min: 1, unit: 'hrs' },
    ],
    compute: (i) => {
      const lti = Number(i.lti), h = Number(i.hours);
      const ltifr = (lti * 1000000) / h;
      return {
        result: Math.round(ltifr * 100) / 100, resultLabel: 'LTIFR', resultUnit: 'per 1M hrs',
        steps: [
          { label: 'Lost Time Injuries', value: String(lti) },
          { label: 'Hours Worked', value: h.toLocaleString() },
          { label: 'LTIFR = (LTI × 1,000,000) / Hours', value: `(${lti} × 1,000,000) / ${h.toLocaleString()} = ${ltifr.toFixed(2)}` },
        ],
        bands: riskBands([1, 3, 5, 100], ['Excellent', 'Good', 'Average', 'Poor'], [
          'World-class.',
          'Better than average.',
          'Industry average.',
          'Improvement required.',
        ]),
        standards: ['OSHA', 'ILO'],
      };
    },
    popular: true,
  },
  {
    slug: 'ltisr',
    name: 'LTISR Calculator',
    category: 'safety-kpis',
    icon: Activity,
    short: 'Lost Time Injury Severity Rate.',
    description: 'Compute the Lost Time Injury Severity Rate — total lost days per 1,000,000 hours worked.',
    formula: 'LTISR = (Total Lost Days × 1,000,000) / Hours Worked',
    fields: [
      { id: 'days', label: 'Total Lost Work Days', type: 'number', default: 30, min: 0, unit: 'days' },
      { id: 'hours', label: 'Total Hours Worked', type: 'number', default: 500000, min: 1, unit: 'hrs' },
    ],
    compute: (i) => {
      const d = Number(i.days), h = Number(i.hours);
      const ltisr = (d * 1000000) / h;
      return {
        result: Math.round(ltisr * 100) / 100, resultLabel: 'LTISR', resultUnit: 'days/1M hrs',
        steps: [
          { label: 'Lost Days', value: String(d) },
          { label: 'Hours Worked', value: h.toLocaleString() },
          { label: 'LTISR = (Days × 1,000,000) / Hours', value: `(${d} × 1,000,000) / ${h.toLocaleString()} = ${ltisr.toFixed(2)}` },
        ],
        bands: riskBands([20, 50, 100, 1000], ['Low', 'Moderate', 'High', 'Severe'], [
          'Low severity.',
          'Moderate severity.',
          'High severity — review serious incidents.',
          'Severe — investigate serious injuries.',
        ]),
        standards: ['OSHA', 'ILO'],
      };
    },
  },
  {
    slug: 'afr',
    name: 'AFR Calculator',
    category: 'safety-kpis',
    icon: Activity,
    short: 'Accident Frequency Rate per 100,000 hours.',
    description: 'Compute the Accident Frequency Rate — all accidents per 100,000 hours worked.',
    formula: 'AFR = (Accidents × 100,000) / Hours Worked',
    fields: [
      { id: 'accidents', label: 'Total Accidents', type: 'number', default: 8, min: 0 },
      { id: 'hours', label: 'Total Hours Worked', type: 'number', default: 500000, min: 1, unit: 'hrs' },
    ],
    compute: (i) => {
      const a = Number(i.accidents), h = Number(i.hours);
      const afr = (a * 100000) / h;
      return {
        result: Math.round(afr * 100) / 100, resultLabel: 'AFR', resultUnit: 'per 100k hrs',
        steps: [
          { label: 'Accidents', value: String(a) },
          { label: 'Hours Worked', value: h.toLocaleString() },
          { label: 'AFR = (Acc × 100,000) / Hours', value: `(${a} × 100,000) / ${h.toLocaleString()} = ${afr.toFixed(2)}` },
        ],
        bands: riskBands([2, 5, 10, 100], ['Excellent', 'Good', 'Average', 'Poor'], [
          'World-class.', 'Good performance.', 'Average.', 'Improvement required.',
        ]),
        standards: ['ILO'],
      };
    },
  },
  {
    slug: 'asr',
    name: 'ASR Calculator',
    category: 'safety-kpis',
    icon: Activity,
    short: 'Accident Severity Rate.',
    description: 'Compute the Accident Severity Rate — lost days per 1,000 accidents.',
    formula: 'ASR = Total Lost Days / Total Accidents × 1000',
    fields: [
      { id: 'days', label: 'Total Lost Days', type: 'number', default: 30, min: 0, unit: 'days' },
      { id: 'accidents', label: 'Total Accidents', type: 'number', default: 8, min: 1 },
    ],
    compute: (i) => {
      const d = Number(i.days), a = Number(i.accidents);
      const asr = (d / a) * 1000;
      return {
        result: Math.round(asr), resultLabel: 'ASR', resultUnit: 'days/1000 acc',
        steps: [
          { label: 'Lost Days', value: String(d) },
          { label: 'Accidents', value: String(a) },
          { label: 'ASR = (Days / Acc) × 1000', value: `(${d} / ${a}) × 1000 = ${asr.toFixed(0)}` },
        ],
        bands: riskBands([200, 500, 1000, 10000], ['Low', 'Moderate', 'High', 'Severe'], [
          'Low severity.', 'Moderate.', 'High — review.', 'Severe — investigate.',
        ]),
        standards: ['ILO'],
      };
    },
  },
  {
    slug: 'dart-rate',
    name: 'DART Rate',
    category: 'safety-kpis',
    icon: BarChart3,
    short: 'Days Away/Restricted/Transferred rate (OSHA).',
    description: 'Compute the OSHA DART rate — cases with days away, restricted, or transferred per 200,000 hours.',
    formula: 'DART = (DART Cases × 200,000) / Hours Worked',
    fields: [
      { id: 'dart', label: 'DART Cases', type: 'number', default: 3, min: 0 },
      { id: 'hours', label: 'Total Hours Worked', type: 'number', default: 500000, min: 1, unit: 'hrs' },
    ],
    compute: (i) => {
      const d = Number(i.dart), h = Number(i.hours);
      const dart = (d * 200000) / h;
      return {
        result: Math.round(dart * 100) / 100, resultLabel: 'DART Rate', resultUnit: 'per 200k hrs',
        steps: [
          { label: 'DART Cases', value: String(d) },
          { label: 'Hours Worked', value: h.toLocaleString() },
          { label: 'DART = (Cases × 200,000) / Hours', value: `(${d} × 200,000) / ${h.toLocaleString()} = ${dart.toFixed(2)}` },
        ],
        bands: riskBands([1, 2, 4, 100], ['Excellent', 'Good', 'Average', 'Poor'], [
          'World-class.', 'Good.', 'Average.', 'Improvement required.',
        ]),
        standards: ['OSHA 1904'],
      };
    },
  },
  {
    slug: 'near-miss-ratio',
    name: 'Near Miss Ratio',
    category: 'safety-kpis',
    icon: AlertTriangle,
    short: 'Ratio of near misses to incidents.',
    description: 'Compute the near-miss-to-incident ratio — a leading indicator of reporting culture.',
    formula: 'Near Miss Ratio = Near Misses / Recordable Incidents',
    fields: [
      { id: 'nearmiss', label: 'Near Misses Reported', type: 'number', default: 50, min: 0 },
      { id: 'incidents', label: 'Recordable Incidents', type: 'number', default: 5, min: 1 },
    ],
    compute: (i) => {
      const n = Number(i.nearmiss), inc = Number(i.incidents);
      const ratio = n / inc;
      return {
        result: Math.round(ratio * 10) / 10, resultLabel: 'Near Miss Ratio', resultUnit: ':1',
        steps: [
          { label: 'Near Misses', value: String(n) },
          { label: 'Incidents', value: String(inc) },
          { label: 'Ratio = NM / Inc', value: `${n} / ${inc} = ${ratio.toFixed(1)}` },
        ],
        bands: riskBands([3, 10, 20, 1000], ['Low', 'Moderate', 'Good', 'Excellent'], [
          'Under-reporting likely — encourage reporting.',
          'Moderate reporting culture.',
          'Good reporting culture.',
          'Strong reporting culture — sustain.',
        ]),
        notes: ['Bird\'s triangle suggests ~600 near misses per major injury; high ratios indicate strong reporting culture.'],
        standards: ['ISO 45001'],
      };
    },
  },
  {
    slug: 'osha-recordable-rate',
    name: 'OSHA Recordable Rate',
    category: 'safety-kpis',
    icon: ClipboardCheck,
    short: 'OSHA recordable injury/illness rate.',
    description: 'Compute the OSHA Total Recordable Incident Rate (TRIR) — identical to TRIR, per 200,000 hours.',
    formula: 'OSHA Recordable Rate = (Recordables × 200,000) / Hours',
    fields: [
      { id: 'rec', label: 'Recordable Cases', type: 'number', default: 4, min: 0 },
      { id: 'hours', label: 'Total Hours Worked', type: 'number', default: 500000, min: 1, unit: 'hrs' },
    ],
    compute: (i) => {
      const r = Number(i.rec), h = Number(i.hours);
      const rate = (r * 200000) / h;
      return {
        result: Math.round(rate * 100) / 100, resultLabel: 'Recordable Rate', resultUnit: 'per 200k hrs',
        steps: [
          { label: 'Recordables', value: String(r) },
          { label: 'Hours', value: h.toLocaleString() },
          { label: 'Rate = (R × 200,000) / H', value: `(${r} × 200,000) / ${h.toLocaleString()} = ${rate.toFixed(2)}` },
        ],
        bands: riskBands([1, 2, 4, 100], ['Excellent', 'Good', 'Average', 'Poor'], [
          'World-class.', 'Good.', 'Average.', 'Improvement required.',
        ]),
        standards: ['OSHA 1904'],
      };
    },
  },
  {
    slug: 'safe-man-hours',
    name: 'Safe Man Hours',
    category: 'safety-kpis',
    icon: ShieldCheck,
    short: 'Cumulative hours worked without LTI.',
    description: 'Track cumulative man-hours worked without a lost time injury — a common milestone metric.',
    formula: 'Safe Man Hours = Workers × Hours/Day × Days (since last LTI)',
    fields: [
      { id: 'workers', label: 'Average Workers', type: 'number', default: 200, min: 1 },
      { id: 'hpd', label: 'Hours per Day', type: 'number', default: 8, min: 1, max: 24, unit: 'hrs' },
      { id: 'days', label: 'Days Since Last LTI', type: 'number', default: 365, min: 0, unit: 'days' },
    ],
    compute: (i) => {
      const w = Number(i.workers), hpd = Number(i.hpd), d = Number(i.days);
      const smh = w * hpd * d;
      return {
        result: smh, resultLabel: 'Safe Man Hours', resultUnit: 'hrs',
        steps: [
          { label: 'Workers', value: String(w) },
          { label: 'Hours/Day', value: String(hpd) },
          { label: 'Days', value: String(d) },
          { label: 'SMH = W × H × D', value: `${w} × ${hpd} × ${d} = ${smh.toLocaleString()}` },
        ],
        bands: riskBands([100000, 500000, 1000000, Infinity], ['Milestone', 'Strong', 'Excellent', 'World-class'], [
          'Early milestone.', 'Strong performance.', 'Excellent.', 'World-class — celebrate and sustain.',
        ]),
        standards: ['ILO'],
      };
    },
  },

  // ===== WORK AT HEIGHT =====
  {
    slug: 'fall-clearance',
    name: 'Fall Clearance',
    category: 'work-at-height',
    icon: Construction,
    short: 'Required clearance for fall arrest systems.',
    description: 'Compute the minimum clearance required below the anchor to prevent a worker hitting the ground during a fall arrest.',
    formula: 'Clearance = Free Fall + Deceleration + Harness Stretch + Safety Margin',
    fields: [
      { id: 'freefall', label: 'Free Fall Distance', type: 'number', default: 1.8, min: 0, step: 0.1, unit: 'm' },
      { id: 'decel', label: 'Deceleration Distance', type: 'number', default: 1.2, min: 0, step: 0.1, unit: 'm' },
      { id: 'harness', label: 'Harness Stretch', type: 'number', default: 0.3, min: 0, step: 0.1, unit: 'm' },
      { id: 'margin', label: 'Safety Margin', type: 'number', default: 1.0, min: 0, step: 0.1, unit: 'm' },
    ],
    compute: (i) => {
      const ff = Number(i.freefall), dec = Number(i.decel), h = Number(i.harness), m = Number(i.margin);
      const clearance = ff + dec + h + m;
      return {
        result: Math.round(clearance * 100) / 100, resultLabel: 'Required Clearance', resultUnit: 'm',
        steps: [
          { label: 'Free Fall', value: `${ff} m` },
          { label: 'Deceleration', value: `${dec} m` },
          { label: 'Harness Stretch', value: `${h} m` },
          { label: 'Safety Margin', value: `${m} m` },
          { label: 'Total Clearance', value: `${clearance.toFixed(2)} m` },
        ],
        bands: riskBands([3, 4.5, 6, 100], ['Low', 'Moderate', 'High', 'Critical'], [
          'Adequate clearance available.',
          'Verify clearance on site.',
          'Limited clearance — use SRL or shorter lanyard.',
          'Insufficient clearance — do not use; reposition anchor.',
        ]),
        notes: ['OSHA limits free fall to 1.8 m (6 ft) and deceleration to 1.07 m (3.5 ft).', 'Always account for swing fall and overhead obstacles.'],
        standards: ['OSHA 1926.502', 'ANSI Z359', 'BS EN 363'],
      };
    },
    popular: true, featured: true,
  },
  {
    slug: 'ladder-angle',
    name: 'Ladder Angle',
    category: 'work-at-height',
    icon: Ruler,
    short: 'Correct ladder setup angle (1:4 rule).',
    description: 'Verify the correct ladder setup angle using the 1:4 ratio (75°) — for every 4 units of height, the base is 1 unit out.',
    formula: 'Base Distance = Height / 4',
    fields: [
      { id: 'height', label: 'Ladder Height (to support point)', type: 'number', default: 4, min: 0, step: 0.1, unit: 'm' },
      { id: 'base', label: 'Actual Base Distance', type: 'number', default: 1, min: 0, step: 0.1, unit: 'm' },
    ],
    compute: (i) => {
      const h = Number(i.height), b = Number(i.base);
      const correct = h / 4;
      const angle = Math.atan(h / b) * (180 / Math.PI);
      return {
        result: Math.round(angle * 10) / 10, resultLabel: 'Setup Angle', resultUnit: '°',
        steps: [
          { label: 'Height', value: `${h} m` },
          { label: 'Correct Base = H / 4', value: `${h} / 4 = ${correct.toFixed(2)} m` },
          { label: 'Actual Base', value: `${b} m` },
          { label: 'Angle = atan(H / B)', value: `${angle.toFixed(1)}°` },
        ],
        bands: [
          { max: 70, label: 'Too Flat', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Ladder too flat — risk of sliding outward.' },
          { max: 78, label: 'Correct', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Correct angle (~75°). Secure and use safely.' },
          { max: Infinity, label: 'Too Steep', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Ladder too steep — risk of tipping backward.' },
        ],
        interpretation: `Correct base distance is ${correct.toFixed(2)} m. Current angle is ${angle.toFixed(1)}°.`,
        notes: ['The 1:4 rule gives ~75° — the ideal ladder angle.'],
        standards: ['OSHA 1926.1053', 'BS EN 131'],
      };
    },
  },
  {
    slug: 'guardrail-height',
    name: 'Guardrail Height',
    category: 'work-at-height',
    icon: ShieldCheck,
    short: 'Check guardrail height compliance.',
    description: 'Verify guardrail top-rail height meets regulatory minimum (typically 1.1 m / 42 in).',
    formula: 'Compliant if Top Rail ≥ 1.1 m',
    fields: [
      { id: 'height', label: 'Top Rail Height', type: 'number', default: 1.1, min: 0, step: 0.05, unit: 'm' },
      { id: 'standard', label: 'Standard', type: 'select', default: '1.1', options: [
        { value: '1.0', label: 'OSHA (1.0 m / 39 in)' }, { value: '1.1', label: 'ISO/BS EN (1.1 m / 42 in)' }, { value: '1.2', label: 'Strict (1.2 m)' },
      ] },
    ],
    compute: (i) => {
      const h = Number(i.height), std = Number(i.standard);
      const ok = h >= std;
      return {
        result: Math.round(h * 100) / 100, resultLabel: 'Guardrail Height', resultUnit: 'm',
        steps: [
          { label: 'Top Rail Height', value: `${h} m` },
          { label: 'Required Minimum', value: `${std} m` },
          { label: 'Compliance', value: ok ? 'Compliant' : 'Non-compliant' },
        ],
        bands: [
          { max: std, label: 'Non-compliant', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Raise guardrail to meet minimum height.' },
          { max: Infinity, label: 'Compliant', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Guardrail meets height requirement. Verify mid-rail and toe-board.' },
        ],
        notes: ['Mid-rail must be ~0.5 m; toe-board ≥ 100 mm where falling objects are a hazard.'],
        standards: ['OSHA 1926.502', 'BS EN 13374', 'ISO 14122'],
      };
    },
  },
  {
    slug: 'scaffold-load',
    name: 'Scaffold Load',
    category: 'work-at-height',
    icon: Weight,
    short: 'Determine required scaffold load class.',
    description: 'Determine the required scaffold load class based on the intended uniform distributed load (UDL).',
    formula: 'Class = f(UDL kN/m²)',
    fields: [
      { id: 'udl', label: 'Uniform Distributed Load', type: 'number', default: 2, min: 0, step: 0.1, unit: 'kN/m²' },
    ],
    compute: (i) => {
      const u = Number(i.udl);
      let cls = 1, label = 'Class 1 — Light';
      if (u > 3) { cls = 2; label = 'Class 2 — Medium'; }
      if (u > 5) { cls = 3; label = 'Class 3 — Heavy'; }
      if (u > 6) { cls = 4; label = 'Class 4 — Very Heavy'; }
      return {
        result: cls, resultLabel: 'Scaffold Class', resultUnit: '',
        steps: [
          { label: 'UDL', value: `${u} kN/m²` },
          { label: 'Required Class', value: label },
        ],
        bands: [
          { max: 1, label: 'Class 1 (Light)', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Light duty — inspection access, light work.' },
          { max: 2, label: 'Class 2 (Medium)', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: 'Medium duty — general construction.' },
          { max: 3, label: 'Class 3 (Heavy)', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200', advice: 'Heavy duty — masonry, heavy materials.' },
          { max: Infinity, label: 'Class 4 (Very Heavy)', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Very heavy duty — special design required.' },
        ],
        notes: ['Classes per BS EN 12811-1: Light ≤ 0.75, Medium ≤ 1.5, Heavy ≤ 2.0, Very Heavy ≤ 3.0 kN/m² (service load).'],
        standards: ['BS EN 12811-1', 'OSHA 1926.451'],
      };
    },
  },
  {
    slug: 'swing-fall',
    name: 'Swing Fall Distance',
    category: 'work-at-height',
    icon: Ruler,
    short: 'Additional fall distance from swing fall.',
    description: 'Compute the additional fall distance caused by swinging when working away from directly below the anchor.',
    formula: 'Swing Fall = L × (1 − cos(θ))',
    fields: [
      { id: 'l', label: 'Lanyard Length', type: 'number', default: 1.8, min: 0, step: 0.1, unit: 'm' },
      { id: 'angle', label: 'Angle from Vertical', type: 'number', default: 30, min: 0, max: 90, step: 1, unit: '°' },
    ],
    compute: (i) => {
      const l = Number(i.l), a = Number(i.angle);
      const rad = a * Math.PI / 180;
      const swing = l * (1 - Math.cos(rad));
      return {
        result: Math.round(swing * 100) / 100, resultLabel: 'Swing Fall Distance', resultUnit: 'm',
        steps: [
          { label: 'Lanyard Length', value: `${l} m` },
          { label: 'Angle', value: `${a}°` },
          { label: 'Swing = L × (1 − cos θ)', value: `${l} × (1 − ${Math.cos(rad).toFixed(3)}) = ${swing.toFixed(2)} m` },
        ],
        bands: riskBands([0.3, 0.6, 1.0, 10], ['Low', 'Moderate', 'High', 'Critical'], [
          'Minimal swing — acceptable.',
          'Moderate — add clearance.',
          'High — reposition anchor closer to work.',
          'Critical — do not work at this angle; reposition anchor.',
        ]),
        notes: ['Swing fall increases total fall distance and risk of hitting obstacles.', 'Keep work angle ≤ 30° from anchor.'],
        standards: ['ANSI Z359', 'OSHA 1926.502'],
      };
    },
  },
  {
    slug: 'anchor-load',
    name: 'Anchor Load',
    category: 'work-at-height',
    icon: Anchor,
    short: 'Required anchor point load capacity.',
    description: 'Compute the required anchor point load capacity for fall arrest (typically 22 kN / 5,000 lbf per worker).',
    formula: 'Required Capacity = 22 kN × Number of Workers',
    fields: [
      { id: 'workers', label: 'Workers on Anchor', type: 'number', default: 1, min: 1, max: 4 },
    ],
    compute: (i) => {
      const w = Number(i.workers);
      const cap = 22 * w;
      return {
        result: cap, resultLabel: 'Required Anchor Capacity', resultUnit: 'kN',
        steps: [
          { label: 'Workers', value: String(w) },
          { label: 'Per Worker', value: '22 kN' },
          { label: 'Capacity = 22 × W', value: `22 × ${w} = ${cap} kN` },
        ],
        bands: riskBands([22, 44, 66, 1000], ['1 worker', '2 workers', '3 workers', '4 workers'], [
          'Single-worker anchor.', 'Two-worker anchor.', 'Three-worker anchor.', 'Four-worker anchor — engineered design required.',
        ]),
        notes: ['OSHA requires 22 kN (5,000 lbf) per attached worker for fall arrest anchors.', 'Engineered anchors may use other factors with PE approval.'],
        standards: ['OSHA 1926.502', 'ANSI Z359.2'],
      };
    },
  },

  // ===== LIFTING & RIGGING =====
  {
    slug: 'sling-angle',
    name: 'Sling Angle',
    category: 'lifting-rigging',
    icon: Anchor,
    short: 'Sling tension from horizontal angle.',
    description: 'Compute the tension in each sling leg based on the load and the horizontal sling angle.',
    formula: 'Tension = (Load / 2) / sin(θ)',
    fields: [
      { id: 'load', label: 'Load Weight', type: 'number', default: 2000, min: 0, step: 10, unit: 'kg' },
      { id: 'angle', label: 'Sling Angle from Horizontal', type: 'number', default: 60, min: 0, max: 90, step: 1, unit: '°' },
      { id: 'legs', label: 'Number of Sling Legs', type: 'select', default: '2', options: [{ value: '2', label: '2 legs' }, { value: '4', label: '4 legs' }] },
    ],
    compute: (i) => {
      const load = Number(i.load), a = Number(i.angle), legs = Number(i.legs);
      const rad = a * Math.PI / 180;
      const tension = (load / 2) / Math.sin(rad) * (legs === 2 ? 1 : 0.7);
      return {
        result: Math.round(tension), resultLabel: 'Tension per Leg', resultUnit: 'kg',
        steps: [
          { label: 'Load', value: `${load} kg` },
          { label: 'Angle', value: `${a}°` },
          { label: 'sin(θ)', value: Math.sin(rad).toFixed(3) },
          { label: 'Tension = (Load/2) / sin(θ)', value: `${(load / 2).toFixed(0)} / ${Math.sin(rad).toFixed(3)} = ${tension.toFixed(0)} kg` },
        ],
        bands: [
          { max: 60, label: 'Critical', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Angle < 60° — tension rises sharply; reposition.' },
          { max: 75, label: 'Acceptable', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: '60–75° — acceptable; verify WLL.' },
          { max: Infinity, label: 'Good', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: '> 75° — optimal; tension near load/legs.' },
        ],
        notes: ['Sling angle < 30° from horizontal is prohibited — tension exceeds load.', 'For 4-leg slings, assume only 2 legs carry load (uneven load).'],
        standards: ['ASME B30.9', 'BS EN 13414'],
      };
    },
    popular: true, featured: true,
  },
  {
    slug: 'crane-radius',
    name: 'Crane Radius',
    category: 'lifting-rigging',
    icon: Ruler,
    short: 'Operating radius from crane center to load.',
    description: 'Compute the crane operating radius — the horizontal distance from the crane center of rotation to the load center.',
    formula: 'Radius = Horizontal Distance from Crane Center to Load',
    fields: [
      { id: 'distance', label: 'Horizontal Distance to Load', type: 'number', default: 12, min: 0, step: 0.5, unit: 'm' },
    ],
    compute: (i) => {
      const r = Number(i.distance);
      return {
        result: r, resultLabel: 'Crane Radius', resultUnit: 'm',
        steps: [{ label: 'Distance', value: `${r} m` }, { label: 'Radius', value: `${r} m` }],
        bands: riskBands([10, 20, 40, 1000], ['Small', 'Medium', 'Large', 'Very Large'], [
          'Small radius — verify minimum radius limits.', 'Medium radius — check load chart.', 'Large radius — capacity reduced.', 'Very large — engineered lift plan required.',
        ]),
        notes: ['Always verify the crane load chart at the operating radius.', 'Capacity decreases as radius increases.'],
        standards: ['ASME B30.5', 'BS 7121'],
      };
    },
  },
  {
    slug: 'crane-load',
    name: 'Crane Load Capacity',
    category: 'lifting-rigging',
    icon: Weight,
    short: 'Check crane capacity at radius.',
    description: 'Check whether the planned load is within the crane rated capacity at the operating radius (using a simplified linear derate).',
    formula: 'Allowable = Rated × (1 − (Radius − MinR) / (MaxR − MinR) × Derate)',
    fields: [
      { id: 'rated', label: 'Rated Capacity at Min Radius', type: 'number', default: 50000, min: 0, step: 100, unit: 'kg' },
      { id: 'radius', label: 'Operating Radius', type: 'number', default: 15, min: 0, step: 0.5, unit: 'm' },
      { id: 'minr', label: 'Minimum Radius', type: 'number', default: 3, min: 0, step: 0.5, unit: 'm' },
      { id: 'maxr', label: 'Maximum Radius', type: 'number', default: 40, min: 0, step: 0.5, unit: 'm' },
      { id: 'load', label: 'Planned Load', type: 'number', default: 20000, min: 0, step: 100, unit: 'kg' },
    ],
    compute: (i) => {
      const rated = Number(i.rated), r = Number(i.radius), minr = Number(i.minr), maxr = Number(i.maxr), load = Number(i.load);
      const derate = Math.max(0, Math.min(1, (r - minr) / (maxr - minr)));
      const allowable = rated * (1 - derate * 0.85);
      const ok = load <= allowable;
      return {
        result: Math.round(allowable), resultLabel: 'Allowable Capacity', resultUnit: 'kg',
        steps: [
          { label: 'Rated Capacity', value: `${rated} kg` },
          { label: 'Radius', value: `${r} m` },
          { label: 'Derate Factor', value: `${(derate * 85).toFixed(0)}%` },
          { label: 'Allowable', value: `${allowable.toFixed(0)} kg` },
          { label: 'Planned Load', value: `${load} kg` },
          { label: 'Status', value: ok ? 'Within capacity' : 'EXCEEDS capacity' },
        ],
        bands: [
          { max: load, label: 'OK', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Load within allowable capacity.' },
          { max: Infinity, label: 'Overload', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Load exceeds allowable — reduce radius or load.' },
        ],
        notes: ['This is a simplified linear derate for illustration. ALWAYS use the manufacturer load chart.'],
        standards: ['ASME B30.5', 'BS 7121'],
      };
    },
  },
  {
    slug: 'center-of-gravity',
    name: 'Center of Gravity',
    category: 'lifting-rigging',
    icon: Target,
    short: 'Estimate COG of a rectangular load.',
    description: 'Estimate the center of gravity of a uniform rectangular load — the geometric center for uniform density.',
    formula: 'COG = (Length/2, Width/2, Height/2)',
    fields: [
      { id: 'l', label: 'Length', type: 'number', default: 4, min: 0, step: 0.1, unit: 'm' },
      { id: 'w', label: 'Width', type: 'number', default: 2, min: 0, step: 0.1, unit: 'm' },
      { id: 'h', label: 'Height', type: 'number', default: 1.5, min: 0, step: 0.1, unit: 'm' },
    ],
    compute: (i) => {
      const l = Number(i.l), w = Number(i.w), h = Number(i.h);
      return {
        result: l / 2, resultLabel: 'COG (from origin)', resultUnit: 'm',
        steps: [
          { label: 'COGx = L/2', value: `${(l / 2).toFixed(2)} m` },
          { label: 'COGy = W/2', value: `${(w / 2).toFixed(2)} m` },
          { label: 'COGz = H/2', value: `${(h / 2).toFixed(2)} m` },
        ],
        bands: [{ max: Infinity, label: 'Estimated', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'COG is the geometric center for uniform loads. For non-uniform loads, perform a physical tilt test.' }],
        notes: ['For non-uniform loads, determine COG by physical test or engineering calculation.'],
        standards: ['ASME B30.5', 'BS 7121'],
      };
    },
  },
  {
    slug: 'load-weight-estimator',
    name: 'Load Weight Estimator',
    category: 'lifting-rigging',
    icon: Weight,
    short: 'Estimate weight from volume & density.',
    description: 'Estimate the weight of a load from its volume and material density.',
    formula: 'Weight = Volume × Density',
    fields: [
      { id: 'volume', label: 'Volume', type: 'number', default: 2, min: 0, step: 0.1, unit: 'm³' },
      { id: 'density', label: 'Material Density', type: 'select', default: '7850', options: [
        { value: '7850', label: 'Steel (7,850 kg/m³)' }, { value: '2700', label: 'Aluminium (2,700)' }, { value: '2400', label: 'Concrete (2,400)' }, { value: '7800', label: 'Cast Iron (7,800)' }, { value: '1050', label: 'Water (1,000)' },
      ] },
    ],
    compute: (i) => {
      const v = Number(i.volume), d = Number(i.density);
      const w = v * d;
      return {
        result: Math.round(w), resultLabel: 'Estimated Weight', resultUnit: 'kg',
        steps: [
          { label: 'Volume', value: `${v} m³` },
          { label: 'Density', value: `${d} kg/m³` },
          { label: 'Weight = V × D', value: `${v} × ${d} = ${w} kg` },
        ],
        bands: [{ max: Infinity, label: 'Estimated', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Verify actual weight with a scale before lifting.' }],
        notes: ['Always verify actual weight before lifting — estimates are indicative only.'],
        standards: ['ASME B30.5'],
      };
    },
  },
  {
    slug: 'rigging-capacity',
    name: 'Rigging Capacity',
    category: 'lifting-rigging',
    icon: Anchor,
    short: 'Required WLL for rigging gear.',
    description: 'Determine the required Working Load Limit (WLL) for rigging gear given the load and a safety factor.',
    formula: 'Required WLL = Load × Safety Factor',
    fields: [
      { id: 'load', label: 'Load Weight', type: 'number', default: 5000, min: 0, step: 50, unit: 'kg' },
      { id: 'sf', label: 'Safety Factor', type: 'select', default: '5', options: [
        { value: '5', label: '5:1 (general)' }, { value: '6', label: '6:1' }, { value: '7', label: '7:1' }, { value: '8', label: '8:1 (critical)' },
      ] },
    ],
    compute: (i) => {
      const l = Number(i.load), sf = Number(i.sf);
      const wll = l * sf;
      return {
        result: wll, resultLabel: 'Required WLL', resultUnit: 'kg',
        steps: [
          { label: 'Load', value: `${l} kg` },
          { label: 'Safety Factor', value: `${sf}:1` },
          { label: 'WLL = Load × SF', value: `${l} × ${sf} = ${wll} kg` },
        ],
        bands: [{ max: Infinity, label: 'Required', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Select rigging gear with WLL ≥ this value.' }],
        notes: ['Common safety factors: chain 4:1, wire rope 5:1, synthetic 5–7:1.', 'Critical lifts may require higher factors.'],
        standards: ['ASME B30.9', 'BS EN 13414'],
      };
    },
  },
  {
    slug: 'spreader-beam-load',
    name: 'Spreader Beam Load',
    category: 'lifting-rigging',
    icon: Layers,
    short: 'Compressive load on spreader beam.',
    description: 'Compute the compressive load on a spreader beam from the load and sling angle.',
    formula: 'Compression = (Load / 2) × cot(θ)',
    fields: [
      { id: 'load', label: 'Load Weight', type: 'number', default: 10000, min: 0, step: 100, unit: 'kg' },
      { id: 'angle', label: 'Sling Angle from Vertical', type: 'number', default: 45, min: 0, max: 89, step: 1, unit: '°' },
    ],
    compute: (i) => {
      const l = Number(i.load), a = Number(i.angle);
      const rad = a * Math.PI / 180;
      const comp = (l / 2) / Math.tan(rad);
      return {
        result: Math.round(comp), resultLabel: 'Compressive Load', resultUnit: 'kg',
        steps: [
          { label: 'Load', value: `${l} kg` },
          { label: 'Angle from Vertical', value: `${a}°` },
          { label: 'cot(θ)', value: (1 / Math.tan(rad)).toFixed(3) },
          { label: 'Compression = (L/2) × cot(θ)', value: `${(l / 2)} × ${(1 / Math.tan(rad)).toFixed(3)} = ${comp.toFixed(0)} kg` },
        ],
        bands: riskBands([2000, 5000, 10000, 1000000], ['Low', 'Moderate', 'High', 'Very High'], [
          'Low compression.', 'Moderate — verify beam capacity.', 'High — engineered beam required.', 'Very high — special design.',
        ]),
        notes: ['Spreader beams primarily see compression; lifting beams see bending.'],
        standards: ['ASME B30.20', 'BS EN 13155'],
      };
    },
  },

  // ===== EXCAVATION =====
  {
    slug: 'excavation-slope',
    name: 'Excavation Slope',
    category: 'excavation',
    icon: Drill,
    short: 'Required slope angle by soil type.',
    description: 'Determine the maximum allowable slope (H:V ratio) for excavation based on soil type per OSHA.',
    formula: 'Slope Ratio = f(soil type)',
    fields: [
      { id: 'soil', label: 'Soil Type', type: 'select', default: 'B', options: [
        { value: 'A', label: 'Type A — Cohesive (stable)' }, { value: 'B', label: 'Type B — Less cohesive' }, { value: 'C', label: 'Type C — Granular/loose' },
      ] },
      { id: 'depth', label: 'Excavation Depth', type: 'number', default: 2, min: 0, step: 0.1, unit: 'm' },
    ],
    compute: (i) => {
      const ratios: Record<string, number> = { A: 0.5, B: 1, C: 1.5 };
      const r = ratios[i.soil as string] ?? 1;
      const d = Number(i.depth);
      const setback = d * r;
      return {
        result: r, resultLabel: 'Slope Ratio (H:V)', resultUnit: ':1',
        steps: [
          { label: 'Soil Type', value: String(i.soil) },
          { label: 'Required Ratio', value: `${r}:1` },
          { label: 'Depth', value: `${d} m` },
          { label: 'Setback = Depth × Ratio', value: `${d} × ${r} = ${setback.toFixed(2)} m` },
        ],
        bands: [
          { max: 0.5, label: 'Type A', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: '0.5:1 — stable cohesive soil.' },
          { max: 1, label: 'Type B', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: '1:1 — less cohesive soil.' },
          { max: Infinity, label: 'Type C', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: '1.5:1 — granular/loose soil; consider shoring.' },
        ],
        notes: ['Sloping is one option; shoring/shielding may be more practical for deep or Type C soils.'],
        standards: ['OSHA 1926.652', 'BS 6031'],
      };
    },
    popular: true,
  },
  {
    slug: 'soil-classification',
    name: 'Soil Classification',
    category: 'excavation',
    icon: Layers,
    short: 'Classify soil as Type A, B, or C.',
    description: 'Classify excavation soil into OSHA Type A, B, or C based on cohesion, granular content, and unconfined compressive strength.',
    formula: 'Type = f(cohesion, UCS, moisture)',
    fields: [
      { id: 'ucs', label: 'Unconfined Compressive Strength', type: 'number', default: 1.5, min: 0, step: 0.1, unit: 'tsf' },
      { id: 'granular', label: 'Granular Content', type: 'select', default: 'low', options: [
        { value: 'low', label: 'Low (cohesive)' }, { value: 'medium', label: 'Medium' }, { value: 'high', label: 'High (granular)' },
      ] },
    ],
    compute: (i) => {
      const ucs = Number(i.ucs);
      const g = i.granular as string;
      let type = 'C';
      if (ucs >= 1.5 && g === 'low') type = 'A';
      else if (ucs >= 0.5 && g !== 'high') type = 'B';
      else type = 'C';
      return {
        result: type as any, resultLabel: 'Soil Type', resultUnit: '',
        steps: [
          { label: 'UCS', value: `${ucs} tsf` },
          { label: 'Granular', value: g },
          { label: 'Classification', value: `Type ${type}` },
        ],
        bands: [
          { max: 1, label: 'Type A', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Stable cohesive soil — 0.5:1 slope.' },
          { max: 2, label: 'Type B', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: 'Less cohesive — 1:1 slope.' },
          { max: Infinity, label: 'Type C', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Granular/loose — 1.5:1 slope or shoring.' },
        ],
        notes: ['A competent person must classify soil on site before entry.', 'Type A excludes fissured, layered, or submerged soils.'],
        standards: ['OSHA 1926 Subpart P'],
      };
    },
  },
  {
    slug: 'benching',
    name: 'Benching Calculator',
    category: 'excavation',
    icon: Layers,
    short: 'Required bench dimensions.',
    description: 'Compute the bench width and number of benches for layered excavation protection.',
    formula: 'Bench Width = Depth × Slope Ratio; Benches = Total Depth / Bench Height',
    fields: [
      { id: 'depth', label: 'Total Excavation Depth', type: 'number', default: 4, min: 0, step: 0.1, unit: 'm' },
      { id: 'benchh', label: 'Bench Height', type: 'number', default: 1.5, min: 0.5, step: 0.1, unit: 'm' },
      { id: 'ratio', label: 'Slope Ratio (H:V)', type: 'select', default: '1', options: [{ value: '0.5', label: '0.5:1 (Type A)' }, { value: '1', label: '1:1 (Type B)' }, { value: '1.5', label: '1.5:1 (Type C)' }] },
    ],
    compute: (i) => {
      const d = Number(i.depth), bh = Number(i.benchh), r = Number(i.ratio);
      const benches = Math.ceil(d / bh);
      const benchWidth = bh * r;
      const totalSetback = d * r;
      return {
        result: benches, resultLabel: 'Number of Benches', resultUnit: '',
        steps: [
          { label: 'Total Depth', value: `${d} m` },
          { label: 'Bench Height', value: `${bh} m` },
          { label: 'Benches = ceil(D / BH)', value: `${benches}` },
          { label: 'Bench Width = BH × Ratio', value: `${bh} × ${r} = ${benchWidth.toFixed(2)} m` },
          { label: 'Total Setback', value: `${totalSetback.toFixed(2)} m` },
        ],
        bands: [{ max: Infinity, label: 'Computed', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Apply benching for excavations > 1.2 m in Type B/C soil.' }],
        notes: ['Benching is not permitted in Type C soil — use shoring/shielding.'],
        standards: ['OSHA 1926.652'],
      };
    },
  },
  {
    slug: 'trench-shield',
    name: 'Trench Shield Selection',
    category: 'excavation',
    icon: ShieldCheck,
    short: 'Select trench shield depth rating.',
    description: 'Determine the required trench shield depth rating based on excavation depth and soil type.',
    formula: 'Required Rating ≥ Excavation Depth',
    fields: [
      { id: 'depth', label: 'Excavation Depth', type: 'number', default: 3, min: 0, step: 0.1, unit: 'm' },
      { id: 'soil', label: 'Soil Type', type: 'select', default: 'B', options: [{ value: 'A', label: 'Type A' }, { value: 'B', label: 'Type B' }, { value: 'C', label: 'Type C' }] },
    ],
    compute: (i) => {
      const d = Number(i.depth);
      const soilFactor: Record<string, number> = { A: 0.5, B: 1, C: 1.5 };
      const f = soilFactor[i.soil as string] ?? 1;
      const required = d * f * 1.5; // simplified surcharge
      return {
        result: Math.round(required * 10) / 10, resultLabel: 'Required Shield Rating', resultUnit: 'm depth',
        steps: [
          { label: 'Depth', value: `${d} m` },
          { label: 'Soil Factor', value: String(f) },
          { label: 'Required Rating', value: `${required.toFixed(1)} m` },
        ],
        bands: [{ max: Infinity, label: 'Select', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Select a shield with depth rating ≥ this value. Confirm with manufacturer tabulated data.' }],
        notes: ['Always use manufacturer tabulated data for shield selection.', 'A competent person must inspect daily.'],
        standards: ['OSHA 1926.652', 'BS EN 13331'],
      };
    },
  },
  {
    slug: 'excavation-volume',
    name: 'Excavation Volume',
    category: 'excavation',
    icon: Drill,
    short: 'Volume of a trench/excavation.',
    description: 'Compute the volume of an excavation from length, width, and depth.',
    formula: 'Volume = Length × Width × Depth',
    fields: [
      { id: 'l', label: 'Length', type: 'number', default: 20, min: 0, step: 0.5, unit: 'm' },
      { id: 'w', label: 'Width', type: 'number', default: 1.5, min: 0, step: 0.1, unit: 'm' },
      { id: 'd', label: 'Depth', type: 'number', default: 2, min: 0, step: 0.1, unit: 'm' },
    ],
    compute: (i) => {
      const l = Number(i.l), w = Number(i.w), d = Number(i.d);
      const v = l * w * d;
      return {
        result: Math.round(v * 10) / 10, resultLabel: 'Excavation Volume', resultUnit: 'm³',
        steps: [
          { label: 'Length', value: `${l} m` },
          { label: 'Width', value: `${w} m` },
          { label: 'Depth', value: `${d} m` },
          { label: 'Volume = L × W × D', value: `${l} × ${w} × ${d} = ${v.toFixed(1)} m³` },
        ],
        bands: [{ max: Infinity, label: 'Volume', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Use for spoil management, trucking, and backfill estimation.' }],
        notes: ['Add bulking factor (~20–30%) for spoil volume.'],
        standards: ['BS 6031'],
      };
    },
  },

  // ===== FIRE SAFETY =====
  {
    slug: 'fire-extinguisher',
    name: 'Fire Extinguisher Selection',
    category: 'fire-safety',
    icon: Flame,
    short: 'Select extinguisher class by fuel type.',
    description: 'Select the appropriate fire extinguisher class based on the fuel type present.',
    formula: 'Class = f(fuel type)',
    fields: [
      { id: 'fuel', label: 'Fuel Type', type: 'select', default: 'A', options: [
        { value: 'A', label: 'Ordinary combustibles (wood, paper)' }, { value: 'B', label: 'Flammable liquids' }, { value: 'C', label: 'Electrical' }, { value: 'D', label: 'Combustible metals' }, { value: 'K', label: 'Cooking oils/fats' },
      ] },
    ],
    compute: (i) => {
      const f = i.fuel as string;
      const rec: Record<string, string> = { A: 'Water / Foam / ABC Dry Powder', B: 'Foam / CO₂ / ABC Dry Powder', C: 'CO₂ / ABC Dry Powder (non-conductive)', D: 'Specialist Class D Dry Powder', K: 'Wet Chemical (Class K)' };
      return {
        result: f as any, resultLabel: 'Extinguisher Class', resultUnit: '',
        steps: [{ label: 'Fuel Type', value: `Class ${f}` }, { label: 'Recommended', value: rec[f] }],
        bands: [{ max: Infinity, label: `Class ${f}`, color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: `Use: ${rec[f]}.` }],
        notes: ['ABC dry powder is versatile but check conductivity for electrical fires.', 'Never use water on Class B/C/K fires.'],
        standards: ['NFPA 10', 'BS 5306'],
      };
    },
    popular: true,
  },
  {
    slug: 'occupant-load',
    name: 'Occupant Load',
    category: 'fire-safety',
    icon: Footprints,
    short: 'Maximum occupant load by floor area.',
    description: 'Compute the maximum occupant load based on floor area and occupancy type per NFPA 101.',
    formula: 'Occupant Load = Floor Area / Occupant Load Factor',
    fields: [
      { id: 'area', label: 'Floor Area', type: 'number', default: 500, min: 0, step: 10, unit: 'm²' },
      { id: 'type', label: 'Occupancy Type', type: 'select', default: '9.3', options: [
        { value: '0.6', label: 'Assembly — concentrated (0.6 m²)' }, { value: '1.4', label: 'Assembly — less concentrated (1.4)' }, { value: '9.3', label: 'Business (9.3)' }, { value: '100', label: 'Storage / Industrial (100)' },
      ] },
    ],
    compute: (i) => {
      const a = Number(i.area), f = Number(i.type);
      const load = Math.ceil(a / f);
      return {
        result: load, resultLabel: 'Maximum Occupant Load', resultUnit: 'persons',
        steps: [
          { label: 'Floor Area', value: `${a} m²` },
          { label: 'Load Factor', value: `${f} m²/person` },
          { label: 'Load = Area / Factor', value: `${a} / ${f} = ${load}` },
        ],
        bands: [{ max: Infinity, label: 'Computed', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Use this to size exits, extinguishers, and emergency routes.' }],
        notes: ['Load factors vary by code — verify with NFPA 101 or local code.'],
        standards: ['NFPA 101', 'IBC'],
      };
    },
  },
  {
    slug: 'exit-width',
    name: 'Exit Width',
    category: 'fire-safety',
    icon: DoorOpen,
    short: 'Required total exit width.',
    description: 'Compute the required total exit width based on occupant load and capacity per unit width.',
    formula: 'Exit Width = Occupant Load / Capacity per Unit Width',
    fields: [
      { id: 'load', label: 'Occupant Load', type: 'number', default: 100, min: 1, unit: 'persons' },
      { id: 'cap', label: 'Capacity per Unit Width', type: 'number', default: 60, min: 1, unit: 'persons/m' },
    ],
    compute: (i) => {
      const l = Number(i.load), c = Number(i.cap);
      const w = l / c;
      return {
        result: Math.round(w * 100) / 100, resultLabel: 'Required Exit Width', resultUnit: 'm',
        steps: [
          { label: 'Occupant Load', value: String(l) },
          { label: 'Capacity', value: `${c} persons/m` },
          { label: 'Width = Load / Capacity', value: `${l} / ${c} = ${w.toFixed(2)} m` },
        ],
        bands: riskBands([1.1, 2, 3, 100], ['Minimum', 'Adequate', 'Wide', 'Very Wide'], [
          'Meets minimum door width (1.1 m).', 'Adequate.', 'Wide — good egress.', 'Very wide — consider multiple exits.',
        ]),
        notes: ['Minimum door width is typically 0.8 m; stair minimum 1.1 m.', 'Distribute across ≥2 exits.'],
        standards: ['NFPA 101', 'IBC'],
      };
    },
  },
  {
    slug: 'travel-distance',
    name: 'Travel Distance',
    category: 'fire-safety',
    icon: Ruler,
    short: 'Maximum travel distance to exit.',
    description: 'Check the travel distance from any point to the nearest exit against code limits.',
    formula: 'Compliant if Travel Distance ≤ Limit',
    fields: [
      { id: 'dist', label: 'Actual Travel Distance', type: 'number', default: 30, min: 0, step: 1, unit: 'm' },
      { id: 'limit', label: 'Code Limit', type: 'select', default: '45', options: [
        { value: '24', label: '24 m (unsprinklered assembly)' }, { value: '45', label: '45 m (sprinklered business)' }, { value: '60', label: '60 m (sprinklered industrial)' },
      ] },
    ],
    compute: (i) => {
      const d = Number(i.dist), lim = Number(i.limit);
      const ok = d <= lim;
      return {
        result: Math.round(d * 10) / 10, resultLabel: 'Travel Distance', resultUnit: 'm',
        steps: [
          { label: 'Actual Distance', value: `${d} m` },
          { label: 'Code Limit', value: `${lim} m` },
          { label: 'Compliance', value: ok ? 'Compliant' : 'Non-compliant' },
        ],
        bands: [
          { max: lim, label: 'Compliant', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Within code limit.' },
          { max: Infinity, label: 'Non-compliant', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Exceeds limit — add exits or rearrange layout.' },
        ],
        standards: ['NFPA 101', 'IBC'],
      };
    },
  },
  {
    slug: 'fire-load',
    name: 'Fire Load',
    category: 'fire-safety',
    icon: Flame,
    short: 'Fire load density (MJ/m²).',
    description: 'Compute the fire load density — total combustible energy per unit floor area.',
    formula: 'Fire Load = Σ(mass × calorific value) / Floor Area',
    fields: [
      { id: 'energy', label: 'Total Combustible Energy', type: 'number', default: 50000, min: 0, step: 100, unit: 'MJ' },
      { id: 'area', label: 'Floor Area', type: 'number', default: 100, min: 1, step: 1, unit: 'm²' },
    ],
    compute: (i) => {
      const e = Number(i.energy), a = Number(i.area);
      const fl = e / a;
      return {
        result: Math.round(fl), resultLabel: 'Fire Load Density', resultUnit: 'MJ/m²',
        steps: [
          { label: 'Total Energy', value: `${e} MJ` },
          { label: 'Floor Area', value: `${a} m²` },
          { label: 'Fire Load = E / A', value: `${e} / ${a} = ${fl.toFixed(0)} MJ/m²` },
        ],
        bands: riskBands([500, 1000, 2000, 100000], ['Low', 'Moderate', 'High', 'Very High'], [
          'Low fire load — ordinary occupancy.', 'Moderate.', 'High — enhanced fire protection required.', 'Very high — specialist fire engineering.',
        ]),
        notes: ['Typical values: office ~500, retail ~1000, storage >2000 MJ/m².'],
        standards: ['NFPA 557', 'BS EN 1991-1-2'],
      };
    },
  },

  // ===== INDUSTRIAL HYGIENE =====
  {
    slug: 'heat-stress-wbgt',
    name: 'Heat Stress (WBGT)',
    category: 'industrial-hygiene',
    icon: Sun,
    short: 'Wet Bulb Globe Temperature index.',
    description: 'Compute the WBGT heat stress index for outdoor work from dry-bulb, wet-bulb, and globe temperatures.',
    formula: 'WBGT(outdoor) = 0.7 T_wb + 0.2 T_g + 0.1 T_db',
    fields: [
      { id: 'twb', label: 'Wet Bulb Temp', type: 'number', default: 25, min: 0, step: 0.1, unit: '°C' },
      { id: 'tg', label: 'Globe Temp', type: 'number', default: 35, min: 0, step: 0.1, unit: '°C' },
      { id: 'tdb', label: 'Dry Bulb Temp', type: 'number', default: 30, min: 0, step: 0.1, unit: '°C' },
    ],
    compute: (i) => {
      const twb = Number(i.twb), tg = Number(i.tg), tdb = Number(i.tdb);
      const wbgt = 0.7 * twb + 0.2 * tg + 0.1 * tdb;
      return {
        result: Math.round(wbgt * 10) / 10, resultLabel: 'WBGT', resultUnit: '°C',
        steps: [
          { label: 'Wet Bulb', value: `${twb}°C` },
          { label: 'Globe', value: `${tg}°C` },
          { label: 'Dry Bulb', value: `${tdb}°C` },
          { label: 'WBGT = 0.7Twb + 0.2Tg + 0.1Tdb', value: `${wbgt.toFixed(1)}°C` },
        ],
        bands: riskBands([27.5, 30, 32.5, 100], ['Low', 'Moderate', 'High', 'Extreme'], [
          'Normal work — monitor sensitive individuals.',
          'Caution — increase rest breaks.',
          'High — 50% work/rest ratio for heavy work.',
          'Extreme — suspend heavy work; 25% work/rest.',
        ]),
        notes: ['For indoor/no solar load: WBGT = 0.7Twb + 0.3Tg.', 'Acclimatization, clothing, and workload affect allowable exposure.'],
        standards: ['ACGIH TLV', 'ISO 7243', 'NIOSH'],
      };
    },
    popular: true, featured: true,
  },
  {
    slug: 'noise-exposure',
    name: 'Noise Exposure',
    category: 'industrial-hygiene',
    icon: Volume2,
    short: 'Daily noise dose (LAeq).',
    description: 'Compute the daily noise dose and 8-hour equivalent level from exposure level and duration.',
    formula: 'Dose = (T_actual / T_allowed) × 100%; LAeq8 = L + 10log(T/8)',
    fields: [
      { id: 'level', label: 'Exposure Level', type: 'number', default: 90, min: 0, step: 1, unit: 'dB(A)' },
      { id: 'hours', label: 'Exposure Duration', type: 'number', default: 8, min: 0, step: 0.5, unit: 'hrs' },
      { id: 'criterion', label: 'Criterion Level', type: 'select', default: '85', options: [{ value: '85', label: '85 dB(A) (NIOSH)' }, { value: '90', label: '90 dB(A) (OSHA)' }] },
    ],
    compute: (i) => {
      const l = Number(i.level), t = Number(i.hours), c = Number(i.criterion);
      const tAllowed = 8 / Math.pow(2, (l - c) / 3);
      const dose = (t / tAllowed) * 100;
      const laeq8 = l + 10 * Math.log10(t / 8);
      return {
        result: Math.round(dose), resultLabel: 'Noise Dose', resultUnit: '%',
        steps: [
          { label: 'Exposure Level', value: `${l} dB(A)` },
          { label: 'Duration', value: `${t} hrs` },
          { label: 'Allowed Time (T = 8/2^((L-C)/3))', value: `${tAllowed.toFixed(1)} hrs` },
          { label: 'Dose = (T_actual / T_allowed) × 100', value: `${dose.toFixed(0)}%` },
          { label: 'LAeq,8h', value: `${laeq8.toFixed(1)} dB(A)` },
        ],
        bands: riskBands([50, 100, 200, 1000], ['Safe', 'Caution', 'High', 'Hazardous'], [
          'Below 50% dose — acceptable.', 'Approaching limit — implement hearing protection.', 'Exceeds 100% — mandatory protection and time limits.', 'Hazardous — engineering controls required.',
        ]),
        notes: ['Exchange rate: 3 dB (NIOSH/ISO) or 5 dB (OSHA).', 'Hearing protection required when dose > 100%.'],
        standards: ['NIOSH', 'OSHA 1910.95', 'ISO 9612'],
      };
    },
    popular: true,
  },
  {
    slug: 'lighting',
    name: 'Lighting Calculator',
    category: 'industrial-hygiene',
    icon: Sun,
    short: 'Required luminaires for a target lux level.',
    description: 'Estimate the number of luminaires required to achieve a target illuminance in a room.',
    formula: 'N = (E × A) / (F × UF × MF)',
    fields: [
      { id: 'e', label: 'Target Illuminance', type: 'number', default: 500, min: 0, step: 10, unit: 'lux' },
      { id: 'a', label: 'Room Area', type: 'number', default: 50, min: 1, step: 1, unit: 'm²' },
      { id: 'f', label: 'Luminaire Luminous Flux', type: 'number', default: 4000, min: 1, step: 100, unit: 'lm' },
      { id: 'uf', label: 'Utilization Factor', type: 'number', default: 0.6, min: 0.1, max: 1, step: 0.05 },
      { id: 'mf', label: 'Maintenance Factor', type: 'number', default: 0.8, min: 0.1, max: 1, step: 0.05 },
    ],
    compute: (i) => {
      const e = Number(i.e), a = Number(i.a), f = Number(i.f), uf = Number(i.uf), mf = Number(i.mf);
      const n = (e * a) / (f * uf * mf);
      return {
        result: Math.ceil(n), resultLabel: 'Required Luminaires', resultUnit: 'units',
        steps: [
          { label: 'Target E', value: `${e} lux` },
          { label: 'Area', value: `${a} m²` },
          { label: 'Flux per Luminaire', value: `${f} lm` },
          { label: 'UF × MF', value: `${(uf * mf).toFixed(2)}` },
          { label: 'N = (E×A)/(F×UF×MF)', value: `${n.toFixed(1)} → ${Math.ceil(n)}` },
        ],
        bands: [{ max: Infinity, label: 'Estimated', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Verify with a lighting design tool (DIALux) for final layout.' }],
        notes: ['Typical lux targets: offices 500, workshops 300, fine assembly 750.'],
        standards: ['BS EN 12464-1', 'IES'],
      };
    },
  },
  {
    slug: 'havs',
    name: 'HAVS Exposure',
    category: 'industrial-hygiene',
    icon: Activity,
    short: 'Hand-arm vibration daily exposure A(8).',
    description: 'Compute the daily hand-arm vibration exposure A(8) from vibration magnitude and exposure time.',
    formula: 'A(8) = ahv × √(T / 8)',
    fields: [
      { id: 'ahv', label: 'Vibration Magnitude', type: 'number', default: 5, min: 0, step: 0.1, unit: 'm/s²' },
      { id: 't', label: 'Daily Exposure Time', type: 'number', default: 4, min: 0, step: 0.25, unit: 'hrs' },
    ],
    compute: (i) => {
      const a = Number(i.ahv), t = Number(i.t);
      const a8 = a * Math.sqrt(t / 8);
      return {
        result: Math.round(a8 * 100) / 100, resultLabel: 'A(8)', resultUnit: 'm/s²',
        steps: [
          { label: 'Vibration Magnitude', value: `${a} m/s²` },
          { label: 'Exposure Time', value: `${t} hrs` },
          { label: 'A(8) = ahv × √(T/8)', value: `${a} × √(${t}/8) = ${a8.toFixed(2)} m/s²` },
        ],
        bands: riskBands([2.5, 5, 10, 100], ['Low', 'Action', 'Limit', 'High'], [
          'Below action value 2.5 m/s².', 'Action value 2.5 — implement controls.', 'Exceeds limit 5 m/s² — stop exposure.', 'Far exceeds limit — immediate action.',
        ]),
        notes: ['EU action value 2.5 m/s²; limit value 5 m/s².', 'Vibration magnitudes from manufacturer declared or measured values.'],
        standards: ['ISO 5349', 'EU Directive 2002/44/EC'],
      };
    },
  },
  {
    slug: 'wind-chill',
    name: 'Wind Chill',
    category: 'industrial-hygiene',
    icon: Snowflake,
    short: 'Wind chill temperature.',
    description: 'Compute the wind chill temperature from air temperature and wind speed.',
    formula: 'WC = 13.12 + 0.6215T − 11.37V^0.16 + 0.3965T·V^0.16',
    fields: [
      { id: 't', label: 'Air Temperature', type: 'number', default: 0, step: 0.5, unit: '°C' },
      { id: 'v', label: 'Wind Speed', type: 'number', default: 20, min: 0, step: 1, unit: 'km/h' },
    ],
    compute: (i) => {
      const t = Number(i.t), v = Math.max(Number(i.v), 4.8);
      const wc = 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
      return {
        result: Math.round(wc * 10) / 10, resultLabel: 'Wind Chill', resultUnit: '°C',
        steps: [
          { label: 'Air Temp', value: `${t}°C` },
          { label: 'Wind Speed', value: `${v} km/h` },
          { label: 'Wind Chill', value: `${wc.toFixed(1)}°C` },
        ],
        bands: riskBands([-10, -25, -45, -100], ['Low', 'Moderate', 'High', 'Extreme'], [
          'Low risk of frostbite.', 'Increasing risk — limit exposure.', 'High risk — frostbite in 10–30 min.', 'Extreme — frostbite in <10 min.',
        ]),
        notes: ['Valid for T ≤ 10°C and V > 4.8 km/h.', 'Wind chill applies to exposed skin.'],
        standards: ['Environment Canada', 'OSHA Cold Stress'],
      };
    },
  },
  {
    slug: 'chemical-exposure',
    name: 'Chemical Exposure',
    category: 'industrial-hygiene',
    icon: Beaker,
    short: 'Mixture exposure vs OEL.',
    description: 'Compute the additive exposure index for a mixture of chemicals against their occupational exposure limits.',
    formula: 'Index = Σ(C_i / OEL_i)',
    fields: [
      { id: 'c1', label: 'Concentration 1', type: 'number', default: 50, min: 0, step: 1, unit: 'ppm' },
      { id: 'oel1', label: 'OEL 1', type: 'number', default: 100, min: 1, step: 1, unit: 'ppm' },
      { id: 'c2', label: 'Concentration 2', type: 'number', default: 20, min: 0, step: 1, unit: 'ppm' },
      { id: 'oel2', label: 'OEL 2', type: 'number', default: 50, min: 1, step: 1, unit: 'ppm' },
    ],
    compute: (i) => {
      const c1 = Number(i.c1), o1 = Number(i.oel1), c2 = Number(i.c2), o2 = Number(i.oel2);
      const idx = c1 / o1 + c2 / o2;
      return {
        result: Math.round(idx * 100) / 100, resultLabel: 'Exposure Index', resultUnit: '',
        steps: [
          { label: 'C1/OEL1', value: `${c1}/${o1} = ${(c1 / o1).toFixed(2)}` },
          { label: 'C2/OEL2', value: `${c2}/${o2} = ${(c2 / o2).toFixed(2)}` },
          { label: 'Index = Σ(C/OEL)', value: idx.toFixed(2) },
        ],
        bands: riskBands([0.5, 1, 2, 100], ['Low', 'Action', 'Limit', 'High'], [
          'Below action — monitor.', 'Action — implement controls.', 'Exceeds limit — stop exposure.', 'Far exceeds — immediate action.',
        ]),
        notes: ['Additive model assumes same target organ; otherwise use independent assessment.'],
        standards: ['ACGIH TLV', 'NIOSH'],
      };
    },
  },

  // ===== ELECTRICAL SAFETY =====
  {
    slug: 'arc-flash-boundary',
    name: 'Arc Flash Boundary',
    category: 'electrical-safety',
    icon: Zap,
    short: 'Arc flash protection boundary (Lee method).',
    description: 'Estimate the arc flash protection boundary using the simplified Lee method for a three-phase arc in open air.',
    formula: 'D = √(2.142 × MVA × t) — Lee (simplified)',
    fields: [
      { id: 'mva', label: 'Bolted Fault MVA', type: 'number', default: 10, min: 0, step: 0.5, unit: 'MVA' },
      { id: 't', label: 'Arc Duration', type: 'number', default: 0.2, min: 0.01, step: 0.01, unit: 's' },
    ],
    compute: (i) => {
      const mva = Number(i.mva), t = Number(i.t);
      const d = Math.sqrt(2.142 * mva * t);
      return {
        result: Math.round(d * 100) / 100, resultLabel: 'Arc Flash Boundary', resultUnit: 'm',
        steps: [
          { label: 'Fault MVA', value: `${mva}` },
          { label: 'Arc Duration', value: `${t} s` },
          { label: 'D = √(2.142 × MVA × t)', value: `${d.toFixed(2)} m` },
        ],
        bands: riskBands([1, 2.5, 5, 100], ['Low', 'Moderate', 'High', 'Extreme'], [
          'Low energy — PPE category 1.', 'Moderate — PPE category 2.', 'High — PPE category 3/4.', 'Extreme — de-energize before working.',
        ]),
        notes: ['This is a simplified estimate only. Use IEEE 1584 or a software study for actual values.'],
        standards: ['IEEE 1584', 'NFPA 70E'],
      };
    },
    popular: true, featured: true,
  },
  {
    slug: 'shock-boundary',
    name: 'Shock Boundary',
    category: 'electrical-safety',
    icon: Zap,
    short: 'Limited & restricted approach boundaries.',
    description: 'Estimate the shock approach boundaries based on system voltage per NFPA 70E tables.',
    formula: 'Boundary = f(voltage)',
    fields: [
      { id: 'v', label: 'System Voltage', type: 'select', default: '480', options: [
        { value: '120', label: '120 V' }, { value: '208', label: '208 V' }, { value: '480', label: '480 V' }, { value: '4160', label: '4.16 kV' }, { value: '13800', label: '13.8 kV' },
      ] },
    ],
    compute: (i) => {
      const v = Number(i.v);
      const limits: Record<number, [number, number]> = { 120: [0.9, 0], 208: [1, 0], 480: [1.07, 0.3], 4160: [1.6, 0.6], 13800: [3.0, 1.2] };
      const [limited, restricted] = limits[v] ?? [1, 0];
      return {
        result: limited, resultLabel: 'Limited Approach Boundary', resultUnit: 'm',
        steps: [
          { label: 'Voltage', value: v < 1000 ? `${v} V` : `${v / 1000} kV` },
          { label: 'Limited Approach', value: `${limited} m` },
          { label: 'Restricted Approach', value: `${restricted} m` },
        ],
        bands: [{ max: Infinity, label: 'Boundary', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Unqualified persons must stay outside the limited approach boundary.' }],
        notes: ['Values are approximate — refer to NFPA 70E Table 130.4 for exact distances.'],
        standards: ['NFPA 70E'],
      };
    },
  },
  {
    slug: 'cable-size',
    name: 'Cable Size',
    category: 'electrical-safety',
    icon: Cable,
    short: 'Estimate cable cross-section for current.',
    description: 'Estimate the minimum cable cross-sectional area for a given current using a typical current density.',
    formula: 'A = I / J',
    fields: [
      { id: 'i', label: 'Current', type: 'number', default: 25, min: 0, step: 1, unit: 'A' },
      { id: 'j', label: 'Current Density', type: 'select', default: '5', options: [
        { value: '4', label: '4 A/mm² (conservative)' }, { value: '5', label: '5 A/mm² (typical)' }, { value: '6', label: '6 A/mm² (high)' },
      ] },
    ],
    compute: (i) => {
      const cur = Number(i.i), j = Number(i.j);
      const a = cur / j;
      return {
        result: Math.round(a * 10) / 10, resultLabel: 'Min Cable Area', resultUnit: 'mm²',
        steps: [
          { label: 'Current', value: `${cur} A` },
          { label: 'Current Density', value: `${j} A/mm²` },
          { label: 'A = I / J', value: `${cur} / ${j} = ${a.toFixed(1)} mm²` },
        ],
        bands: [{ max: Infinity, label: 'Estimated', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Select next standard size up; verify voltage drop and short-circuit rating.' }],
        notes: ['Verify voltage drop, installation method, and short-circuit temperature rating.', 'Use IEC 60364 or BS 7671 for final sizing.'],
        standards: ['IEC 60364', 'BS 7671', 'NEC'],
      };
    },
  },
  {
    slug: 'generator-size',
    name: 'Generator Size',
    category: 'electrical-safety',
    icon: Battery,
    short: 'Estimate generator kVA for a load.',
    description: 'Estimate the required generator size (kVA) for a given load with diversity and power factor.',
    formula: 'kVA = (Total Load × Diversity) / Power Factor',
    fields: [
      { id: 'load', label: 'Total Connected Load', type: 'number', default: 20, min: 0, step: 1, unit: 'kW' },
      { id: 'diversity', label: 'Diversity Factor', type: 'number', default: 0.8, min: 0.1, max: 1, step: 0.05 },
      { id: 'pf', label: 'Power Factor', type: 'number', default: 0.8, min: 0.1, max: 1, step: 0.05 },
    ],
    compute: (i) => {
      const l = Number(i.load), d = Number(i.diversity), pf = Number(i.pf);
      const kva = (l * d) / pf;
      return {
        result: Math.round(kva * 10) / 10, resultLabel: 'Required Generator', resultUnit: 'kVA',
        steps: [
          { label: 'Connected Load', value: `${l} kW` },
          { label: 'Diversity', value: String(d) },
          { label: 'Power Factor', value: String(pf) },
          { label: 'kVA = (L × D) / PF', value: `${(l * d).toFixed(1)} / ${pf} = ${kva.toFixed(1)}` },
        ],
        bands: [{ max: Infinity, label: 'Estimated', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Add margin for motor starting (typically 1.5–2× largest motor).' }],
        notes: ['Account for motor starting inrush; size for largest motor start.'],
        standards: ['IEC 60034', 'BS 7671'],
      };
    },
  },
  {
    slug: 'electrical-load',
    name: 'Electrical Load',
    category: 'electrical-safety',
    icon: Zap,
    short: 'Total load from individual loads.',
    description: 'Compute the total electrical load from individual loads with a demand factor.',
    formula: 'Total = Σ(load) × Demand Factor',
    fields: [
      { id: 'l1', label: 'Load 1', type: 'number', default: 5, min: 0, step: 0.5, unit: 'kW' },
      { id: 'l2', label: 'Load 2', type: 'number', default: 8, min: 0, step: 0.5, unit: 'kW' },
      { id: 'l3', label: 'Load 3', type: 'number', default: 3, min: 0, step: 0.5, unit: 'kW' },
      { id: 'df', label: 'Demand Factor', type: 'number', default: 0.8, min: 0.1, max: 1, step: 0.05 },
    ],
    compute: (i) => {
      const l1 = Number(i.l1), l2 = Number(i.l2), l3 = Number(i.l3), df = Number(i.df);
      const total = (l1 + l2 + l3) * df;
      return {
        result: Math.round(total * 10) / 10, resultLabel: 'Total Demand', resultUnit: 'kW',
        steps: [
          { label: 'Sum of Loads', value: `${l1 + l2 + l3} kW` },
          { label: 'Demand Factor', value: String(df) },
          { label: 'Total = Sum × DF', value: `${(l1 + l2 + l3)} × ${df} = ${total.toFixed(1)} kW` },
        ],
        bands: [{ max: Infinity, label: 'Computed', color: 'text-cyan', bg: 'bg-cyan/10 border-cyan/30', advice: 'Use for feeder and protection sizing.' }],
        standards: ['NEC', 'IEC 60364'],
      };
    },
  },

  // ===== CONFINED SPACE =====
  {
    slug: 'ventilation',
    name: 'Ventilation Requirement',
    category: 'confined-space',
    icon: Ventilation,
    short: 'Required ventilation for confined space.',
    description: 'Compute the required ventilation airflow to maintain safe atmosphere in a confined space.',
    formula: 'Q = Volume × Air Changes per Hour / 3600',
    fields: [
      { id: 'vol', label: 'Space Volume', type: 'number', default: 30, min: 0, step: 1, unit: 'm³' },
      { id: 'ach', label: 'Air Changes per Hour', type: 'number', default: 20, min: 1, step: 1, unit: '/hr' },
    ],
    compute: (i) => {
      const v = Number(i.vol), ach = Number(i.ach);
      const q = (v * ach) / 3600;
      return {
        result: Math.round(q * 100) / 100, resultLabel: 'Required Airflow', resultUnit: 'm³/s',
        steps: [
          { label: 'Volume', value: `${v} m³` },
          { label: 'Air Changes/hr', value: String(ach) },
          { label: 'Q = V × ACH / 3600', value: `${v} × ${ach} / 3600 = ${q.toFixed(2)} m³/s` },
        ],
        bands: riskBands([0.1, 0.5, 1, 100], ['Low', 'Moderate', 'High', 'Very High'], [
          'Low ventilation need.', 'Moderate — typical confined space.', 'High — verify with gas testing.', 'Very high — engineered ventilation.',
        ]),
        notes: ['Typical ACH for confined spaces: 20 (general), higher for hazardous atmospheres.', 'Always verify with continuous gas monitoring.'],
        standards: ['OSHA 1910.146', 'NIOSH', 'BS EN 12021'],
      };
    },
    popular: true,
  },
  {
    slug: 'oxygen-deficiency',
    name: 'Oxygen Deficiency',
    category: 'confined-space',
    icon: Wind,
    short: 'Oxygen concentration safety check.',
    description: 'Check whether the measured oxygen concentration is within the safe breathing range (19.5–23.5%).',
    formula: 'Safe if 19.5% ≤ O₂ ≤ 23.5%',
    fields: [
      { id: 'o2', label: 'Measured O₂', type: 'number', default: 20.9, min: 0, max: 30, step: 0.1, unit: '%' },
    ],
    compute: (i) => {
      const o = Number(i.o2);
      const safe = o >= 19.5 && o <= 23.5;
      return {
        result: o, resultLabel: 'O₂ Concentration', resultUnit: '%',
        steps: [
          { label: 'Measured O₂', value: `${o}%` },
          { label: 'Safe Range', value: '19.5–23.5%' },
          { label: 'Status', value: safe ? 'Safe' : 'Unsafe' },
        ],
        bands: [
          { max: 19.5, label: 'Deficient', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'O₂ < 19.5% — do not enter; ventilate and retest.' },
          { max: 23.5, label: 'Safe', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'O₂ within safe range — continue monitoring.' },
          { max: Infinity, label: 'Enriched', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200', advice: 'O₂ > 23.5% — increased fire risk; ventilate.' },
        ],
        standards: ['OSHA 1910.146', 'NIOSH'],
      };
    },
  },
  {
    slug: 'purging-time',
    name: 'Purging Time',
    category: 'confined-space',
    icon: Wind,
    short: 'Time to purge a confined space.',
    description: 'Estimate the time required to purge a confined space to a target concentration using ventilation.',
    formula: 't = (V / Q) × ln(C_initial / C_target)',
    fields: [
      { id: 'vol', label: 'Space Volume', type: 'number', default: 30, min: 0, step: 1, unit: 'm³' },
      { id: 'q', label: 'Ventilation Rate', type: 'number', default: 0.5, min: 0.01, step: 0.01, unit: 'm³/s' },
      { id: 'ci', label: 'Initial Concentration', type: 'number', default: 1000, min: 1, step: 10, unit: 'ppm' },
      { id: 'ct', label: 'Target Concentration', type: 'number', default: 50, min: 1, step: 1, unit: 'ppm' },
    ],
    compute: (i) => {
      const v = Number(i.vol), q = Number(i.q), ci = Number(i.ci), ct = Number(i.ct);
      const t = (v / q) * Math.log(ci / ct);
      return {
        result: Math.round(t * 10) / 10, resultLabel: 'Purge Time', resultUnit: 's',
        steps: [
          { label: 'Volume', value: `${v} m³` },
          { label: 'Ventilation', value: `${q} m³/s` },
          { label: 'ln(Ci/Ct)', value: Math.log(ci / ct).toFixed(2) },
          { label: 't = (V/Q) × ln(Ci/Ct)', value: `${(v / q).toFixed(1)} × ${Math.log(ci / ct).toFixed(2)} = ${t.toFixed(1)} s` },
        ],
        bands: riskBands([60, 300, 600, 100000], ['Short', 'Moderate', 'Long', 'Very Long'], [
          'Quick purge.', 'Moderate — plan accordingly.', 'Long — verify with gas testing.', 'Very long — consider larger fan.',
        ]),
        notes: ['Assumes perfect mixing; real purge times are longer.', 'Always verify with gas testing before entry.'],
        standards: ['OSHA 1910.146', 'NFPA 820'],
      };
    },
  },
  {
    slug: 'gas-test-frequency',
    name: 'Gas Test Frequency',
    category: 'confined-space',
    icon: Gauge,
    short: 'Recommended gas test frequency.',
    description: 'Determine the recommended gas testing frequency for confined space entry based on hazard level.',
    formula: 'Frequency = f(hazard level)',
    fields: [
      { id: 'hazard', label: 'Hazard Level', type: 'select', default: '2', options: [
        { value: '1', label: 'Low — inert/known atmosphere' }, { value: '2', label: 'Medium — process connected' }, { value: '3', label: 'High — unknown/variable' },
      ] },
    ],
    compute: (i) => {
      const h = Number(i.hazard);
      const freq = h === 1 ? 60 : h === 2 ? 30 : 15;
      return {
        result: freq, resultLabel: 'Test Interval', resultUnit: 'min',
        steps: [{ label: 'Hazard Level', value: ['Low', 'Medium', 'High'][h - 1] }, { label: 'Recommended Interval', value: `${freq} min` }],
        bands: [
          { max: 60, label: 'High Hazard', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Test every 15 min; continuous monitoring recommended.' },
          { max: 45, label: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: 'Test every 30 min.' },
          { max: Infinity, label: 'Low', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Test every 60 min; pre-entry test mandatory.' },
        ],
        notes: ['Always test before entry and after any break in work.', 'Continuous monitoring is preferred.'],
        standards: ['OSHA 1910.146', 'NIOSH'],
      };
    },
  },

  // ===== OCCUPATIONAL HEALTH =====
  {
    slug: 'bmi',
    name: 'BMI Calculator',
    category: 'occupational-health',
    icon: HeartPulse,
    short: 'Body Mass Index.',
    description: 'Compute Body Mass Index from weight and height.',
    formula: 'BMI = weight / height²',
    fields: [
      { id: 'weight', label: 'Weight', type: 'number', default: 75, min: 0, step: 0.5, unit: 'kg' },
      { id: 'height', label: 'Height', type: 'number', default: 1.75, min: 0, step: 0.01, unit: 'm' },
    ],
    compute: (i) => {
      const w = Number(i.weight), h = Number(i.height);
      const bmi = w / (h * h);
      return {
        result: Math.round(bmi * 10) / 10, resultLabel: 'BMI', resultUnit: 'kg/m²',
        steps: [
          { label: 'Weight', value: `${w} kg` },
          { label: 'Height', value: `${h} m` },
          { label: 'BMI = W / H²', value: `${w} / ${h * h} = ${bmi.toFixed(1)}` },
        ],
        bands: [
          { max: 18.5, label: 'Underweight', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: 'Below normal — nutritional review.' },
          { max: 25, label: 'Normal', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Healthy weight range.' },
          { max: 30, label: 'Overweight', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200', advice: 'Above normal — lifestyle review.' },
          { max: Infinity, label: 'Obese', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Obese — medical review recommended.' },
        ],
        standards: ['WHO'],
      };
    },
    popular: true,
  },
  {
    slug: 'hydration',
    name: 'Hydration Requirement',
    category: 'occupational-health',
    icon: Droplets,
    short: 'Daily water intake for workers.',
    description: 'Estimate the daily water requirement for a worker based on body weight and activity level.',
    formula: 'Water = Weight × Activity Factor',
    fields: [
      { id: 'weight', label: 'Body Weight', type: 'number', default: 75, min: 0, step: 1, unit: 'kg' },
      { id: 'activity', label: 'Activity Level', type: 'select', default: '35', options: [
        { value: '30', label: 'Sedentary (30 ml/kg)' }, { value: '35', label: 'Moderate (35 ml/kg)' }, { value: '40', label: 'Heavy work (40 ml/kg)' }, { value: '50', label: 'Hot work (50 ml/kg)' },
      ] },
    ],
    compute: (i) => {
      const w = Number(i.weight), a = Number(i.activity);
      const water = (w * a) / 1000;
      return {
        result: Math.round(water * 10) / 10, resultLabel: 'Daily Water', resultUnit: 'L',
        steps: [
          { label: 'Weight', value: `${w} kg` },
          { label: 'Activity Factor', value: `${a} ml/kg` },
          { label: 'Water = W × F', value: `${w} × ${a} = ${water * 1000} ml = ${water.toFixed(1)} L` },
        ],
        bands: riskBands([2, 3, 4, 100], ['Low', 'Moderate', 'High', 'Very High'], [
          'Low activity.', 'Moderate — typical office.', 'Heavy work — schedule breaks.', 'Hot work — frequent hydration; monitor heat stress.',
        ]),
        notes: ['Increase intake in hot environments; monitor urine color.', 'Caffeine and alcohol increase requirement.'],
        standards: ['NIOSH', 'ACGIH'],
      };
    },
  },
  {
    slug: 'manual-handling',
    name: 'Manual Handling',
    category: 'occupational-health',
    icon: Weight,
    short: 'Recommended weight limit (simplified).',
    description: 'Estimate a simplified recommended weight limit for manual handling using multipliers.',
    formula: 'RWL = 23 × HM × VM × DM × AM × FM × CM (kg)',
    fields: [
      { id: 'h', label: 'Horizontal Distance', type: 'number', default: 25, min: 0, step: 1, unit: 'cm' },
      { id: 'v', label: 'Vertical Height', type: 'number', default: 75, min: 0, step: 1, unit: 'cm' },
      { id: 'd', label: 'Vertical Distance Moved', type: 'number', default: 25, min: 0, step: 1, unit: 'cm' },
      { id: 'freq', label: 'Frequency Multiplier', type: 'select', default: '0.8', options: [{ value: '1', label: 'Infrequent (1.0)' }, { value: '0.8', label: 'Occasional (0.8)' }, { value: '0.5', label: 'Frequent (0.5)' }] },
    ],
    compute: (i) => {
      const h = Number(i.h), v = Number(i.v), d = Number(i.d), fm = Number(i.freq);
      const hm = 25 / h, vm = 1 - 0.003 * Math.abs(v - 75), dm = 0.82 + 4.5 / d, am = 1, cm = 1;
      const rwl = 23 * hm * vm * dm * am * fm * cm;
      return {
        result: Math.round(rwl * 10) / 10, resultLabel: 'Recommended Weight Limit', resultUnit: 'kg',
        steps: [
          { label: 'HM = 25/H', value: hm.toFixed(2) },
          { label: 'VM = 1 − 0.003|V−75|', value: vm.toFixed(2) },
          { label: 'DM = 0.82 + 4.5/D', value: dm.toFixed(2) },
          { label: 'FM', value: String(fm) },
          { label: 'RWL = 23 × HM × VM × DM × FM', value: `${rwl.toFixed(1)} kg` },
        ],
        bands: riskBands([10, 15, 20, 100], ['Light', 'Moderate', 'Heavy', 'Very Heavy'], [
          'Light load.', 'Moderate — acceptable for most.', 'Heavy — assess task.', 'Very heavy — mechanize or team lift.',
        ]),
        notes: ['Simplified NIOSH equation; full equation includes asymmetry and coupling multipliers.'],
        standards: ['NIOSH', 'ISO 11228-1'],
      };
    },
  },
  {
    slug: 'niosh-lifting',
    name: 'NIOSH Lifting Equation',
    category: 'occupational-health',
    icon: Weight,
    short: 'Lifting Index from RWL.',
    description: 'Compute the Lifting Index (LI) — ratio of actual load to the Recommended Weight Limit.',
    formula: 'LI = Actual Load / RWL',
    fields: [
      { id: 'load', label: 'Actual Load', type: 'number', default: 15, min: 0, step: 0.5, unit: 'kg' },
      { id: 'rwl', label: 'Recommended Weight Limit', type: 'number', default: 18, min: 0.1, step: 0.5, unit: 'kg' },
    ],
    compute: (i) => {
      const l = Number(i.load), rwl = Number(i.rwl);
      const li = l / rwl;
      return {
        result: Math.round(li * 100) / 100, resultLabel: 'Lifting Index', resultUnit: '',
        steps: [
          { label: 'Actual Load', value: `${l} kg` },
          { label: 'RWL', value: `${rwl} kg` },
          { label: 'LI = Load / RWL', value: `${l} / ${rwl} = ${li.toFixed(2)}` },
        ],
        bands: riskBands([1, 1.5, 3, 100], ['Safe', 'Caution', 'High', 'Hazardous'], [
          'LI ≤ 1 — acceptable.', 'LI > 1 — some workers at risk.', 'LI > 1.5 — most workers at risk.', 'LI > 3 — hazardous; redesign task.',
        ]),
        notes: ['LI > 1 indicates increased risk for some workers.'],
        standards: ['NIOSH', 'ISO 11228-1'],
      };
    },
  },
  {
    slug: 'fatigue-risk',
    name: 'Fatigue Risk',
    category: 'occupational-health',
    icon: Brain,
    short: 'Fatigue score from hours awake & sleep.',
    description: 'Estimate a fatigue risk score from hours awake and recent sleep duration.',
    formula: 'Score = (Hours Awake − 8) × 5 + (8 − Sleep) × 8',
    fields: [
      { id: 'awake', label: 'Hours Awake', type: 'number', default: 14, min: 0, step: 1, unit: 'hrs' },
      { id: 'sleep', label: 'Sleep in Last 24h', type: 'number', default: 7, min: 0, max: 24, step: 0.5, unit: 'hrs' },
    ],
    compute: (i) => {
      const a = Number(i.awake), s = Number(i.sleep);
      const score = Math.max(0, (a - 8) * 5 + (8 - s) * 8);
      return {
        result: Math.round(score), resultLabel: 'Fatigue Score', resultUnit: '/100',
        steps: [
          { label: 'Hours Awake', value: String(a) },
          { label: 'Sleep', value: `${s} hrs` },
          { label: 'Score = (Awake−8)×5 + (8−Sleep)×8', value: `${score}` },
        ],
        bands: riskBands([20, 40, 60, 100], ['Low', 'Moderate', 'High', 'Severe'], [
          'Low fatigue.', 'Moderate — monitor.', 'High — restrict safety-critical tasks.', 'Severe — stand down from safety-critical work.',
        ]),
        notes: ['Simplified model; use FAID or SAFTE-FAST for formal fatigue management.'],
        standards: ['ILO', 'API RP 755'],
      };
    },
  },

  // ===== ENVIRONMENTAL =====
  {
    slug: 'carbon-footprint',
    name: 'Carbon Footprint',
    category: 'environmental',
    icon: Leaf,
    short: 'CO₂e from energy consumption.',
    description: 'Estimate carbon footprint (CO₂e) from electricity and fuel consumption.',
    formula: 'CO₂e = Electricity × EF_elec + Fuel × EF_fuel',
    fields: [
      { id: 'elec', label: 'Electricity', type: 'number', default: 50000, min: 0, step: 100, unit: 'kWh' },
      { id: 'efelec', label: 'Electricity EF', type: 'number', default: 0.5, min: 0, step: 0.01, unit: 'kgCO₂/kWh' },
      { id: 'fuel', label: 'Diesel', type: 'number', default: 5000, min: 0, step: 10, unit: 'L' },
      { id: 'effuel', label: 'Diesel EF', type: 'number', default: 2.68, min: 0, step: 0.01, unit: 'kgCO₂/L' },
    ],
    compute: (i) => {
      const e = Number(i.elec), ef = Number(i.efelec), f = Number(i.fuel), ff = Number(i.effuel);
      const co2 = e * ef + f * ff;
      return {
        result: Math.round(co2), resultLabel: 'Carbon Footprint', resultUnit: 'kg CO₂e',
        steps: [
          { label: 'Electricity CO₂', value: `${e} × ${ef} = ${(e * ef).toFixed(0)} kg` },
          { label: 'Fuel CO₂', value: `${f} × ${ff} = ${(f * ff).toFixed(0)} kg` },
          { label: 'Total CO₂e', value: `${co2.toFixed(0)} kg` },
        ],
        bands: riskBands([10000, 50000, 200000, Infinity], ['Low', 'Moderate', 'High', 'Very High'], [
          'Low emissions.', 'Moderate — reduction plan recommended.', 'High — mandatory reduction.', 'Very high — strategic decarbonization.',
        ]),
        notes: ['Emission factors vary by region and fuel; use local grid EF.'],
        standards: ['ISO 14064', 'GHG Protocol'],
      };
    },
    popular: true, featured: true,
  },
  {
    slug: 'fuel-consumption',
    name: 'Fuel Consumption',
    category: 'environmental',
    icon: Car,
    short: 'Fuel used per distance.',
    description: 'Compute fuel consumption (L/100 km) from fuel volume and distance.',
    formula: 'Consumption = (Fuel / Distance) × 100',
    fields: [
      { id: 'fuel', label: 'Fuel Used', type: 'number', default: 50, min: 0, step: 1, unit: 'L' },
      { id: 'dist', label: 'Distance', type: 'number', default: 500, min: 1, step: 1, unit: 'km' },
    ],
    compute: (i) => {
      const f = Number(i.fuel), d = Number(i.dist);
      const c = (f / d) * 100;
      return {
        result: Math.round(c * 10) / 10, resultLabel: 'Fuel Consumption', resultUnit: 'L/100km',
        steps: [
          { label: 'Fuel', value: `${f} L` },
          { label: 'Distance', value: `${d} km` },
          { label: 'Consumption = (F/D)×100', value: `${c.toFixed(1)} L/100km` },
        ],
        bands: riskBands([5, 8, 12, 100], ['Efficient', 'Average', 'High', 'Very High'], [
          'Efficient vehicle.', 'Average.', 'High — consider efficiency measures.', 'Very high — review fleet.',
        ]),
        standards: ['ISO 14001'],
      };
    },
  },
  {
    slug: 'waste-generation',
    name: 'Waste Generation',
    category: 'environmental',
    icon: Recycle,
    short: 'Waste per unit output.',
    description: 'Compute waste generation rate per unit of production or person.',
    formula: 'Rate = Total Waste / Output',
    fields: [
      { id: 'waste', label: 'Total Waste', type: 'number', default: 500, min: 0, step: 10, unit: 'kg' },
      { id: 'output', label: 'Output (units or persons)', type: 'number', default: 100, min: 1, step: 1 },
    ],
    compute: (i) => {
      const w = Number(i.waste), o = Number(i.output);
      const r = w / o;
      return {
        result: Math.round(r * 100) / 100, resultLabel: 'Waste Rate', resultUnit: 'kg/unit',
        steps: [
          { label: 'Waste', value: `${w} kg` },
          { label: 'Output', value: String(o) },
          { label: 'Rate = W / O', value: `${r.toFixed(2)} kg/unit` },
        ],
        bands: riskBands([1, 5, 10, 1000], ['Low', 'Moderate', 'High', 'Very High'], [
          'Low waste generation.', 'Moderate.', 'High — reduction plan.', 'Very high — review process.',
        ]),
        standards: ['ISO 14001'],
      };
    },
  },
  {
    slug: 'water-consumption',
    name: 'Water Consumption',
    category: 'environmental',
    icon: Droplets,
    short: 'Water use per person/unit.',
    description: 'Compute water consumption per person or per unit of output.',
    formula: 'Rate = Total Water / Persons',
    fields: [
      { id: 'water', label: 'Total Water', type: 'number', default: 10000, min: 0, step: 100, unit: 'L' },
      { id: 'persons', label: 'Persons (or units)', type: 'number', default: 100, min: 1, step: 1 },
    ],
    compute: (i) => {
      const w = Number(i.water), p = Number(i.persons);
      const r = w / p;
      return {
        result: Math.round(r), resultLabel: 'Water per Person', resultUnit: 'L/person',
        steps: [
          { label: 'Water', value: `${w} L` },
          { label: 'Persons', value: String(p) },
          { label: 'Rate = W / P', value: `${r.toFixed(0)} L/person` },
        ],
        bands: riskBands([50, 100, 200, 10000], ['Low', 'Moderate', 'High', 'Very High'], [
          'Low consumption.', 'Moderate.', 'High — conservation plan.', 'Very high — review usage.',
        ]),
        standards: ['ISO 14001'],
      };
    },
  },
  {
    slug: 'spill-volume',
    name: 'Spill Volume',
    category: 'environmental',
    icon: Droplets,
    short: 'Spill volume from flow & duration.',
    description: 'Estimate the volume of a spill from the leak flow rate and duration.',
    formula: 'Volume = Flow Rate × Duration',
    fields: [
      { id: 'flow', label: 'Leak Flow Rate', type: 'number', default: 10, min: 0, step: 0.5, unit: 'L/min' },
      { id: 'duration', label: 'Duration', type: 'number', default: 30, min: 0, step: 1, unit: 'min' },
    ],
    compute: (i) => {
      const f = Number(i.flow), d = Number(i.duration);
      const v = f * d;
      return {
        result: Math.round(v), resultLabel: 'Spill Volume', resultUnit: 'L',
        steps: [
          { label: 'Flow Rate', value: `${f} L/min` },
          { label: 'Duration', value: `${d} min` },
          { label: 'Volume = F × D', value: `${f} × ${d} = ${v} L` },
        ],
        bands: riskBands([50, 200, 1000, 100000], ['Minor', 'Moderate', 'Major', 'Severe'], [
          'Minor — absorbents sufficient.', 'Moderate — containment required.', 'Major — reportable spill; notify authorities.', 'Severe — emergency response.',
        ]),
        notes: ['Reportable quantities vary by jurisdiction; notify environmental authority if threshold exceeded.'],
        standards: ['EPA', 'OSHA 1910.120'],
      };
    },
  },

  // ===== PROCESS SAFETY =====
  {
    slug: 'sil-estimator',
    name: 'SIL Estimator',
    category: 'process-safety',
    icon: Atom,
    short: 'Safety Integrity Level from PFD.',
    description: 'Estimate the Safety Integrity Level (SIL 1–4) from the average Probability of Failure on Demand (PFDavg).',
    formula: 'SIL = f(PFDavg)',
    fields: [
      { id: 'pfd', label: 'PFDavg', type: 'select', default: '3', options: [
        { value: '4', label: '≥ 10⁻⁵ to < 10⁻⁴ (SIL 1)' }, { value: '3', label: '≥ 10⁻⁴ to < 10⁻³ (SIL 2)' }, { value: '2', label: '≥ 10⁻³ to < 10⁻² (SIL 3)' }, { value: '1', label: '≥ 10⁻⁴ to < 10⁻³ (SIL 4)' },
      ] },
    ],
    compute: (i) => {
      const sil = Number(i.pfd);
      return {
        result: sil, resultLabel: 'SIL', resultUnit: '',
        steps: [{ label: 'PFDavg range', value: ['10⁻⁵–10⁻⁴', '10⁻⁴–10⁻³', '10⁻³–10⁻²', '10⁻⁴–10⁻³'][sil - 1] }, { label: 'SIL', value: String(sil) }],
        bands: [
          { max: 1, label: 'SIL 1', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Low integrity — minor consequences.' },
          { max: 2, label: 'SIL 2', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: 'Moderate integrity.' },
          { max: 3, label: 'SIL 3', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200', advice: 'High integrity — serious consequences.' },
          { max: Infinity, label: 'SIL 4', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Very high integrity — catastrophic consequences.' },
        ],
        notes: ['SIL determination per IEC 61511; use LOPA or risk graph for assignment.'],
        standards: ['IEC 61508', 'IEC 61511'],
      };
    },
    popular: true, featured: true,
  },
  {
    slug: 'lopa-helper',
    name: 'LOPA Helper',
    category: 'process-safety',
    icon: Layers,
    short: 'Check if IPLs reduce risk to tolerable.',
    description: 'Layer of Protection Analysis helper — check whether independent protection layers reduce the risk to a tolerable frequency.',
    formula: 'Mitigated Frequency = InitEvent × Π(IPL PFD)',
    fields: [
      { id: 'init', label: 'Initiating Event Frequency', type: 'number', default: 0.1, min: 0, step: 0.01, unit: '/yr' },
      { id: 'ipl1', label: 'IPL 1 PFD', type: 'number', default: 0.01, min: 0.0001, step: 0.001 },
      { id: 'ipl2', label: 'IPL 2 PFD', type: 'number', default: 0.1, min: 0.0001, step: 0.001 },
      { id: 'tolerable', label: 'Tolerable Frequency', type: 'number', default: 0.0001, min: 0, step: 0.00001, unit: '/yr' },
    ],
    compute: (i) => {
      const init = Number(i.init), ipl1 = Number(i.ipl1), ipl2 = Number(i.ipl2), tol = Number(i.tolerable);
      const mit = init * ipl1 * ipl2;
      const ok = mit <= tol;
      return {
        result: mit.toExponential(2) as any, resultLabel: 'Mitigated Frequency', resultUnit: '/yr',
        steps: [
          { label: 'Initiating Event', value: `${init}/yr` },
          { label: 'IPL 1 PFD', value: String(ipl1) },
          { label: 'IPL 2 PFD', value: String(ipl2) },
          { label: 'Mitigated = Init × IPL1 × IPL2', value: `${mit.toExponential(2)}/yr` },
          { label: 'Tolerable', value: `${tol.toExponential(2)}/yr` },
          { label: 'Status', value: ok ? 'Adequate' : 'More IPLs needed' },
        ],
        bands: [
          { max: tol, label: 'Adequate', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Risk reduced to tolerable level.' },
          { max: Infinity, label: 'Inadequate', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Add more IPLs or reduce initiating frequency.' },
        ],
        notes: ['IPLs must be independent, auditable, and validated.', 'Each IPL must reduce risk by ≥ 10.'],
        standards: ['IEC 61511', 'CCPS LOPA'],
      };
    },
  },
  {
    slug: 'consequence-ranking',
    name: 'Consequence Ranking',
    category: 'process-safety',
    icon: AlertTriangle,
    short: 'Rank consequence severity tier.',
    description: 'Rank a process safety consequence into severity tiers based on potential release, injury, or cost.',
    formula: 'Tier = f(release magnitude)',
    fields: [
      { id: 'release', label: 'Release Magnitude', type: 'select', default: '3', options: [
        { value: '1', label: 'Minor (small, contained)' }, { value: '2', label: 'Moderate (on-site effect)' }, { value: '3', label: 'Major (off-site impact)' }, { value: '4', label: 'Catastrophic' },
      ] },
    ],
    compute: (i) => {
      const r = Number(i.release);
      return {
        result: r, resultLabel: 'Consequence Tier', resultUnit: '',
        steps: [{ label: 'Release Magnitude', value: ['Minor', 'Moderate', 'Major', 'Catastrophic'][r - 1] }, { label: 'Tier', value: String(r) }],
        bands: [
          { max: 1, label: 'Tier 1', color: 'text-green-600', bg: 'bg-green-50 border-green-200', advice: 'Minor — local management.' },
          { max: 2, label: 'Tier 2', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', advice: 'Moderate — site investigation.' },
          { max: 3, label: 'Tier 3', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200', advice: 'Major — formal PSM investigation.' },
          { max: Infinity, label: 'Tier 4', color: 'text-red-600', bg: 'bg-red-50 border-red-200', advice: 'Catastrophic — executive & regulatory notification.' },
        ],
        standards: ['API RP 754', 'CCPS'],
      };
    },
  },
  {
    slug: 'bowtie-checklist',
    name: 'Bow Tie Barrier Checklist',
    category: 'process-safety',
    icon: ClipboardCheck,
    short: 'Check barrier completeness.',
    description: 'Score a bow-tie barrier checklist to assess whether threats and consequences have adequate preventive and mitigative barriers.',
    formula: 'Score = (Barriers Present / Required) × 100',
    fields: [
      { id: 'preventive', label: 'Preventive Barriers Present', type: 'number', default: 3, min: 0, max: 10 },
      { id: 'preventiveReq', label: 'Preventive Barriers Required', type: 'number', default: 3, min: 1, max: 10 },
      { id: 'mitigative', label: 'Mitigative Barriers Present', type: 'number', default: 2, min: 0, max: 10 },
      { id: 'mitigativeReq', label: 'Mitigative Barriers Required', type: 'number', default: 3, min: 1, max: 10 },
    ],
    compute: (i) => {
      const p = Number(i.preventive), pr = Number(i.preventiveReq), m = Number(i.mitigative), mr = Number(i.mitigativeReq);
      const score = ((Math.min(p, pr) / pr) * 0.6 + (Math.min(m, mr) / mr) * 0.4) * 100;
      return {
        result: Math.round(score), resultLabel: 'Barrier Score', resultUnit: '%',
        steps: [
          { label: 'Preventive', value: `${p}/${pr}` },
          { label: 'Mitigative', value: `${m}/${mr}` },
          { label: 'Score', value: `${score.toFixed(0)}%` },
        ],
        bands: riskBands([60, 80, 90, 100], ['Poor', 'Fair', 'Good', 'Excellent'], [
          'Insufficient barriers — add controls.', 'Fair — review gaps.', 'Good — sustain.', 'Excellent barrier coverage.',
        ]),
        notes: ['Each barrier must be independent, effective, auditable, and validated.'],
        standards: ['CCPS Bow-Tie', 'IEC 61511'],
      };
    },
  },
];

export const getCalculator = (slug: string) => CALCULATORS.find((c) => c.slug === slug);
export const getCategoryCalculators = (catId: string) => CALCULATORS.filter((c) => c.category === catId);
export const FEATURED_CALCULATORS = CALCULATORS.filter((c) => c.featured);
export const POPULAR_CALCULATORS = CALCULATORS.filter((c) => c.popular);
export const NEW_CALCULATORS = CALCULATORS.filter((c) => c.isNew);
