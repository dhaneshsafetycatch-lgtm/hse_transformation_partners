import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles, TrendingUp, Clock, Star, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { CALCULATORS, CALC_CATEGORIES, FEATURED_CALCULATORS, POPULAR_CALCULATORS } from '../data/calculators';

const RECENT_KEY = 'hse-calc-recent';

export default function CalculatorsPage() {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      setRecent(JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'));
    } catch {}
  }, []);

  const filtered = useMemo(() => {
    let list = CALCULATORS;
    if (activeCat) list = list.filter((c) => c.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q) || c.short.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
    }
    return list;
  }, [query, activeCat]);

  const recentCalcs = recent.map((s) => CALCULATORS.find((c) => c.slug === s)).filter(Boolean).slice(0, 4) as typeof CALCULATORS;

  return (
    <>
      <PageHero
        eyebrow="HSE Calculators"
        breadcrumb="Calculators"
        title={<>Professional <span className="gradient-text">HSE Calculator</span> Portal</>}
        subtitle="50+ engineering-grade calculators for safety, risk, KPIs, lifting, hygiene, environmental and process safety — built for HSE professionals, engineers, and auditors."
      />

      {/* Search bar */}
      <section className="bg-ink-950 -mt-12 pb-12 relative z-10">
        <div className="container-x">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 50+ calculators — TRIR, fall clearance, sling angle..."
              className="w-full rounded-full bg-ink-900/80 border border-white/15 pl-14 pr-12 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20 transition-all"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="section-pad bg-cloud">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="eyebrow">Categories</span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink-900">Browse by Discipline</h2>
              </div>
              <span className="hidden sm:block font-btn text-sm text-ink-700/60">{CALC_CATEGORIES.length} categories · {CALCULATORS.length} calculators</span>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CALC_CATEGORIES.map((cat, i) => {
              const count = CALCULATORS.filter((c) => c.category === cat.id).length;
              return (
                <Reveal key={cat.id} delay={i * 60}>
                  <button
                    onClick={() => setActiveCat(activeCat === cat.id ? null : cat.id)}
                    className={`group w-full text-left rounded-2xl bg-white border p-6 card-hover hover:border-cyan/40 hover:shadow-glass ${activeCat === cat.id ? 'border-cyan ring-2 ring-cyan/20' : 'border-ink-900/8'}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-glow`}>
                        <cat.icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>
                      <span className="font-btn text-xs font-medium text-ink-700/50">{count} tools</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{cat.name}</h3>
                    <p className="mt-1.5 text-sm text-ink-700/60 leading-relaxed">{cat.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-btn text-xs font-medium text-cyan group-hover:gap-2.5 transition-all">
                      {activeCat === cat.id ? 'Showing' : 'Explore'} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      {!query && !activeCat && (
        <section className="section-pad bg-white">
          <div className="container-x">
            <Reveal>
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="h-5 w-5 text-accent" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900">Featured Calculators</h2>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_CALCULATORS.map((c, i) => (
                <Reveal key={c.slug} delay={i * 80}>
                  <CalcCard slug={c.slug} name={c.name} short={c.short} icon={c.icon} featured />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular + Recent */}
      {!query && !activeCat && (
        <section className="section-pad bg-cloud">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-cyan" />
                  <h2 className="font-display text-xl font-bold text-ink-900">Most Popular</h2>
                </div>
              </Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {POPULAR_CALCULATORS.slice(0, 6).map((c, i) => (
                  <Reveal key={c.slug} delay={i * 60}>
                    <CalcCard slug={c.slug} name={c.name} short={c.short} icon={c.icon} compact />
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="h-5 w-5 text-cyan" />
                  <h2 className="font-display text-xl font-bold text-ink-900">Recently Used</h2>
                </div>
              </Reveal>
              {recentCalcs.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {recentCalcs.map((c, i) => (
                    <Reveal key={c.slug} delay={i * 60}>
                      <CalcCard slug={c.slug} name={c.name} short={c.short} icon={c.icon} compact />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl bg-white border border-ink-900/8 p-8 text-center">
                  <Clock className="h-8 w-8 text-ink-700/30 mx-auto" />
                  <p className="mt-3 text-sm text-ink-700/50">Calculators you use will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Filtered results / category listing */}
      {(query || activeCat) && (
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-ink-900">
                {activeCat ? CALC_CATEGORIES.find((c) => c.id === activeCat)?.name : 'Search Results'}
                <span className="ml-2 font-btn text-sm font-normal text-ink-700/50">({filtered.length})</span>
              </h2>
              <button onClick={() => { setQuery(''); setActiveCat(null); }} className="font-btn text-sm text-cyan hover:underline">Clear filters</button>
            </div>
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <Search className="h-10 w-10 text-ink-700/30 mx-auto" />
                <p className="mt-4 text-ink-700/60">No calculators found. Try a different search.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 40}>
                    <CalcCard slug={c.slug} name={c.name} short={c.short} icon={c.icon} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Full directory when no filter */}
      {!query && !activeCat && (
        <section className="section-pad bg-white">
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-8">All Calculators</h2>
            </Reveal>
            {CALC_CATEGORIES.map((cat) => {
              const calcs = CALCULATORS.filter((c) => c.category === cat.id);
              return (
                <div key={cat.id} className="mb-10">
                  <Reveal>
                    <div className="flex items-center gap-2 mb-4">
                      <cat.icon className="h-5 w-5 text-cyan" />
                      <h3 className="font-display text-lg font-bold text-ink-900">{cat.name}</h3>
                      <span className="font-btn text-xs text-ink-700/40">({calcs.length})</span>
                    </div>
                  </Reveal>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {calcs.map((c, i) => (
                      <Reveal key={c.slug} delay={i * 30}>
                        <CalcCard slug={c.slug} name={c.name} short={c.short} icon={c.icon} compact />
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

function CalcCard({ slug, name, short, icon: Icon, featured, compact }: {
  slug: string; name: string; short: string; icon: typeof Star; featured?: boolean; compact?: boolean;
}) {
  return (
    <Link
      to={`/calculators/${slug}`}
      className={`group block rounded-2xl bg-white border border-ink-900/8 card-hover hover:border-cyan/40 hover:shadow-glass ${compact ? 'p-4' : 'p-5'}`}
    >
      <div className="flex items-start gap-3">
        <div className={`inline-flex items-center justify-center rounded-xl ${featured ? 'bg-gradient-to-br from-primary-800 to-primary-600 text-cyan-light' : 'bg-cyan/10 text-cyan'} ${compact ? 'h-10 w-10' : 'h-12 w-12'}`}>
          <Icon className={compact ? 'h-5 w-5' : 'h-6 w-6'} strokeWidth={1.6} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-display font-bold text-ink-900 ${compact ? 'text-sm' : 'text-base'}`}>{name}</h3>
          <p className={`mt-1 text-ink-700/55 leading-snug ${compact ? 'text-xs' : 'text-sm'}`}>{short}</p>
        </div>
      </div>
      <span className="mt-3 inline-flex items-center gap-1.5 font-btn text-xs font-medium text-cyan group-hover:gap-2.5 transition-all">
        Open <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
