import { useEffect, useState } from 'react';
import { SideBarContext } from '../component/SideBarContext/SideBarContext';

const mql = window.matchMedia(`(min-width: 1024px)`);

export const useSideBarOpen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  useEffect(() => {
    const mediaQueryChanged = () => {
      setSidebarOpen(false);
      setSidebarDocked(mql.matches);
    };

    mql.addEventListener('change', mediaQueryChanged);

    return () => {
      mql.removeEventListener('change', mediaQueryChanged);
    };
  });

  const attributes = {
    sidebar: <SideBarContext toClose={() => setSidebarOpen(false)} />,
    open: sidebarOpen,
    onSetOpen: setSidebarOpen,
    docked: sidebarDocked,
    touchHandleWidth: 0,
    dragToggleDistance: 0,
  };

  return [attributes, setSidebarOpen];
};
