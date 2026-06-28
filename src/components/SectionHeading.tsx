import { Reveal } from './Reveal';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', theme = 'light' }: Props) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Reveal><div className={align === 'center' ? 'flex justify-center' : ''}><span className="eyebrow">{eyebrow}</span></div></Reveal>}
      <Reveal delay={80}>
        <h2 className={`mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-ink-900'}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className={`mt-4 text-base md:text-lg leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-ink-700'}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
