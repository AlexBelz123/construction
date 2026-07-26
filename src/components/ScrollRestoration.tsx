import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '@/lib/scroll';

export default function ScrollRestoration() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      scrollToSection(hash);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [hash, pathname]);

  return null;
}
