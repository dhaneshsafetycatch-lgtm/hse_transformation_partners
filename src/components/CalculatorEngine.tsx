import { useMemo, useState, useEffect } from 'react';
import { Copy, Printer, Share2, RotateCcw, Check, Info, AlertTriangle, ShieldCheck, BookOpen } from 'lucide-react';
import type { CalcDefinition } from '../data/calculators';

type Props = { calc: CalcDefinition };

type HistoryEntry = { inputs: Record<string, number | string>; result: number; ts: number };

export default function CalculatorEngine({ calc }: Props) {
  const defaults = useMemo(() => {
    const d: Record<string, number | string> = {};
    calc.fields.forEach((f) => { d[f.id] = f.default ?? (f.type === 'number' ? 0 : ''); });
    return d;
  }, [calc]);

  const [inputs, setInputs] = useState<Record<string, number | string>>(defaults);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => { setInputs(defaults); }, [defaults]);

  const result = useMemo(() => {
    try { return calc.compute(inputs); } catch { return null; }
  }, [calc, inputs]);

  const band = result?.bands.find((b) => result.result <= b.max) ?? result?.bands[result.bands.length - 1];

  const handleChange = (id: string, v: string) => {
    setInputs((prev) => ({ ...prev, [id]: v }));
  };

  const handleReset = () => { setInputs(defaults); setHistory([]); };

  const handleCopy = () => {
    if (!result) return;
    const text = `${calc.name}\nResult: ${result.result} ${result.resultUnit}\n${result.steps.map((s) => `${s.label}: ${s.value}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (!result) return;
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: calc.name, text: `${calc.name}: ${result.result} ${result.resultUnit}`, url }); } catch {}
    } else { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  const handlePrint = () => window.print();

  const loadExample = () => setInputs(defaults);

  const saveToHistory = () => {
    if (!result) return;
    setHistory((prev) => [{ inputs: { ...inputs }, result: result.result, ts: Date.now() }, ...prev].slice(0, 5));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* Input form */}
      <div className="lg:col-span-2">
        <div className="rounded-2xl glass-dark p-6 lg:sticky lg:top-28">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <calc.icon className="h-5 w-5 text-cyan-light" /> Inputs
            </h3>
            <button onClick={loadExample} className="font-btn text-xs text-cyan-light hover:text-cyan transition-colors flex items-center gap-1">
              <Info className="h-3.5 w-3.5" /> Example
            </button>
          </div>

          <div className="space-y-4">
            {calc.fields.map((f) => (
              <div key={f.id}>
                <label className="block font-btn text-xs font-medium text-white/70 mb-1.5">
                  {f.label}{f.unit && <span className="text-white/40 ml-1">({f.unit})</span>}
                </label>
                {f.type === 'select' ? (
                  <select
                    value={String(inputs[f.id])}
                    onChange={(e) => handleChange(f.id, e.target.value)}
                    className="w-full rounded-xl bg-ink-900/60 border border-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
                  >
                    {f.options?.map((o) => <option key={o.value} value={o.value} className="bg-ink-900">{o.label}</option>)}
                  </select>
                ) : (
                  <input
                    type="number"
                    value={String(inputs[f.id])}
                    min={f.min} max={f.max} step={f.step}
                    onChange={(e) => handleChange(f.id, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl bg-ink-900/60 border border-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
                  />
                )}
                {f.help && <p className="mt-1 text-xs text-white/40">{f.help}</p>}
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-2">
            <button onClick={saveToHistory} className="btn-cyan flex-1 text-xs py-2.5">Save Result</button>
            <button onClick={handleReset} className="btn-outline text-xs py-2.5 px-4" aria-label="Reset">
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3 space-y-5">
        {result && band && (
          <>
            {/* Result hero */}
            <div className={`rounded-2xl border-2 ${band.bg} p-6`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-btn text-xs uppercase tracking-widest text-ink-700/70">{result.resultLabel}</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className={`font-display text-4xl font-bold ${band.color}`}>{result.result}</span>
                    <span className="text-sm text-ink-700/60">{result.resultUnit}</span>
                  </div>
                  <div className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-btn text-xs font-semibold ${band.color} bg-white/60`}>
                    <AlertTriangle className="h-3.5 w-3.5" /> {band.label}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={handleCopy} className="rounded-lg border border-ink-900/10 bg-white px-3 py-2 text-xs font-medium text-ink-700 hover:bg-ink-900/5 transition-colors flex items-center gap-1.5">
                    {copied ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />} {copied ? 'Copied' : 'Copy'}
                  </button>
                  <button onClick={handleShare} className="rounded-lg border border-ink-900/10 bg-white px-3 py-2 text-xs font-medium text-ink-700 hover:bg-ink-900/5 transition-colors flex items-center gap-1.5">
                    <Share2 className="h-3.5 w-3.5" /> Share
                  </button>
                  <button onClick={handlePrint} className="rounded-lg border border-ink-900/10 bg-white px-3 py-2 text-xs font-medium text-ink-700 hover:bg-ink-900/5 transition-colors flex items-center gap-1.5">
                    <Printer className="h-3.5 w-3.5" /> Print
                  </button>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-800 leading-relaxed">{band.advice}</p>
            </div>

            {/* Formula & steps */}
            <div className="rounded-2xl bg-white border border-ink-900/8 p-6 shadow-glass">
              <h4 className="font-display text-sm font-bold text-ink-900 flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4 text-cyan" /> Calculation Formula
              </h4>
              <div className="rounded-xl bg-cloud px-4 py-3 font-mono text-sm text-ink-800 mb-4">{calc.formula}</div>

              <h4 className="font-display text-sm font-bold text-ink-900 mb-3">Step-by-Step Calculation</h4>
              <ol className="space-y-2">
                {result.steps.map((s, idx) => (
                  <li key={idx} className="flex items-center justify-between rounded-lg bg-cloud/60 px-3.5 py-2.5">
                    <span className="text-sm text-ink-700">{s.label}</span>
                    <span className="font-mono text-sm font-semibold text-ink-900">{s.value}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Interpretation */}
            {result.interpretation && (
              <div className="rounded-2xl bg-white border border-ink-900/8 p-6 shadow-glass">
                <h4 className="font-display text-sm font-bold text-ink-900 mb-2">Interpretation</h4>
                <p className="text-sm text-ink-700 leading-relaxed">{result.interpretation}</p>
              </div>
            )}

            {/* Recommendations */}
            <div className="rounded-2xl bg-white border border-ink-900/8 p-6 shadow-glass">
              <h4 className="font-display text-sm font-bold text-ink-900 flex items-center gap-2 mb-3">
                <ShieldCheck className="h-4 w-4 text-cyan" /> Recommendations
              </h4>
              <p className="text-sm text-ink-700 leading-relaxed">{band.advice}</p>
            </div>

            {/* Standards */}
            {result.standards && result.standards.length > 0 && (
              <div className="rounded-2xl bg-white border border-ink-900/8 p-6 shadow-glass">
                <h4 className="font-display text-sm font-bold text-ink-900 mb-3">Applicable Standards (guidance only)</h4>
                <div className="flex flex-wrap gap-2">
                  {result.standards.map((s) => (
                    <span key={s} className="rounded-lg bg-primary-800/8 border border-primary-800/15 px-3 py-1.5 font-btn text-xs font-medium text-primary-800">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering notes */}
            {result.notes && result.notes.length > 0 && (
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
                <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4" /> Engineering Notes
                </h4>
                <ul className="space-y-1.5">
                  {result.notes.map((n, idx) => (
                    <li key={idx} className="text-sm text-amber-900/80 leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-600 shrink-0" /> {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* History */}
            {history.length > 0 && (
              <div className="rounded-2xl bg-white border border-ink-900/8 p-6 shadow-glass">
                <h4 className="font-display text-sm font-bold text-ink-900 mb-3">Calculation History</h4>
                <div className="space-y-2">
                  {history.map((h, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded-lg bg-cloud/60 px-3.5 py-2.5">
                      <span className="text-xs text-ink-600">{new Date(h.ts).toLocaleTimeString()}</span>
                      <span className="font-mono text-sm font-semibold text-ink-900">{h.result} {result.resultUnit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <div className="rounded-2xl bg-ink-950 p-6">
              <p className="text-xs text-white/50 leading-relaxed">
                <strong className="text-white/70">Disclaimer:</strong> This calculator is provided for educational and
                estimation purposes only. Results should be verified by a qualified HSE professional. HSE Transformation
                Partners accepts no liability for decisions based solely on these calculations. Always refer to current
                standards and regulations, and consult a competent person for site-specific applications.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
