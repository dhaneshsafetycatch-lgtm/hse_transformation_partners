import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import PageHero from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import CalculatorEngine from '../components/CalculatorEngine';
import CalculatorCTA from '../components/CalculatorCTA';
import { getCalculator, CALC_CATEGORIES, CALCULATORS } from '../data/calculators';

const RECENT_KEY = 'hse-calc-recent';

export default function CalculatorPage() {
  const { slug } = useParams<{ slug: string }>();
  const calc = slug ? getCalculator(slug) : undefined;

  useEffect(() => {
    if (!slug) return;
    try {
      const recent = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
      const updated = [slug, ...recent.filter((s: string) => s !== slug)].slice(0, 10);
      localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    } catch {}
  }, [slug]);

  useEffect(() => {
    if (calc) {
      document.title = `${calc.name} | HSE Calculators | HSE Transformation Partners`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', calc.description);
    }
    return () => { document.title = 'HSE Transformation Partners'; };
  }, [calc]);

  if (!calc) return <Navigate to="/calculators" replace />;

  const category = CALC_CATEGORIES.find((c) => c.id === calc.category);
  const related = CALCULATORS.filter((c) => c.category === calc.category && c.slug !== calc.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={category?.name ?? 'Calculator'}
        breadcrumb={calc.name}
        title={<>{calc.name}</>}
        subtitle={calc.description}
      />

      {/* Breadcrumb */}
      <div className="bg-ink-950 border-t border-white/5">
        <div className="container-x py-4">
          <nav className="flex items-center gap-2 font-btn text-xs text-white/40">
            <Link to="/" className="hover:text-cyan-light transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/calculators" className="hover:text-cyan-light transition-colors">Calculators</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/calculators?cat=${calc.category}`} className="hover:text-cyan-light transition-colors">{category?.name}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-cyan-light">{calc.name}</span>
          </nav>
        </div>
      </div>

      {/* Calculator */}
      <section className="section-pad bg-cloud">
        <div className="container-x">
          <Link to="/calculators" className="inline-flex items-center gap-1.5 font-btn text-sm text-ink-700/60 hover:text-cyan transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> All Calculators
          </Link>
          <Reveal>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light shadow-elev">
                  <calc.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-ink-900">{calc.name}</h1>
                  <p className="text-sm text-ink-700/60">{category?.name}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <CalculatorEngine calc={calc} />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-x">
            <h2 className="font-display text-xl font-bold text-ink-900 mb-6">Related Calculators</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((c) => (
                <Link key={c.slug} to={`/calculators/${c.slug}`} className="group rounded-2xl bg-cloud border border-ink-900/8 p-4 card-hover hover:border-cyan/40">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                      <c.icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <span className="font-display text-sm font-bold text-ink-900 group-hover:text-cyan transition-colors">{c.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CalculatorCTA />
    </>
  );
}
