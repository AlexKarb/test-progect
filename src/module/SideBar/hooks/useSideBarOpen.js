import { useEffect, useState } from 'react';

export const useSideBarOpen = () => {
  const mql = window.matchMedia(`(min-width: 2220px)`);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  useEffect(() => {
    const mediaQueryChanged = mql => {
      mql.matches && setSidebarOpen(false);
      mql.matches && setSidebarDocked(true);
    };

    mediaQueryChanged(mql);

    mql.addEventListener('change', mediaQueryChanged);
  }, [mql]);

  return [sidebarOpen, sidebarDocked, setSidebarOpen];
};
