import { Reveal, useCounter, useReveal } from './Reveal';
import { STATS } from '../data/content';

function StatItem({ stat, index }: { stat: typeof STATS[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const value = useCounter(stat.value, visible);
  const display = value >= 1000 ? `${(value / 1000).toFixed(0)}K` : value.toString();
  return (
    <div
      ref={ref}
      className="relative text-center"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
        {display}{stat.suffix}
      </div>
      <div className="mt-2 font-btn text-xs md:text-sm uppercase tracking-widest text-white/50">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-dark px-6 py-10 md:px-12 md:py-12 shadow-elev">
            <div className="absolute -top-20 -right-20 h-60 w-60 bg-cyan/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 bg-accent/10 blur-[80px] rounded-full" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((s, i) => <StatItem key={s.label} stat={s} index={i} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
