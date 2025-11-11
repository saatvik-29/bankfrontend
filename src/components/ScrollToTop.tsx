import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure the page has rendered
    const scrollToTop = () => {
      try {
        // Try smooth scroll first
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
    };

    // Use setTimeout to ensure the scroll happens after the route change
    const timeoutId = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};