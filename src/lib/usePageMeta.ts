import { useEffect } from 'react';

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

const BASE_URL = 'https://hsetransformationpartners.in';
const DEFAULT_TITLE = 'HSE Transformation Partners — Transforming Safety. Empowering Performance.';
const DEFAULT_DESC = 'HSE Transformation Partners — Global HSE Consulting, Training & Digital Solutions. Transforming Safety. Empowering Performance.';

export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = description;
      document.head.appendChild(m);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${path}`;

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) meta.setAttribute('content', DEFAULT_DESC);
      if (canonical) canonical.href = BASE_URL;
    };
  }, [title, description, path]);
}
