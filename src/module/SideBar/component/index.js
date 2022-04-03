import { useSideBarOpen } from '../hooks/useSideBarOpen';
import Sidebar from 'react-sidebar';
import { SideBarContext } from './SideBarContext/SideBarContext';
import { Header } from './Header/Header';
// import { useState } from 'react';

export const SideBarElement = () => {
  const [sidebarOpen, setSidebarOpen] = useSideBarOpen();

  return (
    <Sidebar
      sidebar={<SideBarContext toClose={() => setSidebarOpen(false)} />}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { background: 'white' } }}
    >
      <Header openSideBar={setSidebarOpen} />
    </Sidebar>
  );
};
