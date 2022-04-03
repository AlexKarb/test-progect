import { useSideBarOpen } from '../hooks/useSideBarOpen';
import Sidebar from 'react-sidebar';
import { SideBarContext } from './SideBarContext/SideBarContext';
import { Burger } from './Burger/Burger';
// import { useState } from 'react';

export const SideBarElement = () => {
  const [sidebarOpen, setSidebarOpen] = useSideBarOpen();

  return (
    <Sidebar
      sidebar={<SideBarContext toClose={() => setSidebarOpen(false)} />}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      touchHandleWidth={0}
      dragToggleDistance={0}
      styles={{ role: { display: 'none' } }}
    >
      <Burger openSideBar={setSidebarOpen} />
    </Sidebar>
  );
};
