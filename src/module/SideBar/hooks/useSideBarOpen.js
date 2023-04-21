import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SideBarContext } from '../component/SideBarContext/SideBarContext';
import { getIsLoggedInValue } from 'service/redux/auth/authSlice';

const mql = window.matchMedia(`(min-width: 1024px)`);

export const useSideBarOpen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  const isLoggedIn = useSelector(getIsLoggedInValue);

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
    sidebar: isLoggedIn ? (
      <SideBarContext toClose={() => setSidebarOpen(false)} />
    ) : (
      <></>
    ),
    open: sidebarOpen,
    onSetOpen: setSidebarOpen,
    docked: sidebarDocked,
    touchHandleWidth: 0,
    dragToggleDistance: 0,
  };

  return [attributes, setSidebarOpen];
};
