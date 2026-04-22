import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current page's pathname (e.g., "/about", "/projects")
  const { pathname } = useLocation();

  // This effect runs every single time the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // It renders nothing
};

export default ScrollToTop;