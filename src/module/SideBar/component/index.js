import { useSideBarOpen } from '../hooks/useSideBarOpen';
import { SideBarContext } from './SideBarContext/SideBarContext';
import { Header } from './Header/Header';
import Sidebar from 'react-sidebar';

export const SideBarElement = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useSideBarOpen();

  return (
    <Sidebar
      sidebar={<SideBarContext toClose={() => setSidebarOpen(false)} />}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      touchHandleWidth={0}
      dragToggleDistance={0}
    >
      <Header openSideBar={setSidebarOpen} />
      {children}
    </Sidebar>
  );
};