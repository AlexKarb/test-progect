import { useSideBarOpen } from './hooks/useSideBarOpen';
import { SideBarContext } from './component/SideBarContext/SideBarContext';
import { Header } from '../Header/Header';
import Sidebar from 'react-sidebar';

export const SideBarElement = ({ children }) => {
  const [sidebarOpen, sidebarDocked, setSidebarOpen] = useSideBarOpen();

  return (
    <>
      <Sidebar
        sidebar={<SideBarContext toClose={() => setSidebarOpen(false)} />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked={sidebarDocked}
        touchHandleWidth={0}
        dragToggleDistance={0}
      >
        <Header openSideBar={setSidebarOpen} />
        {children}
      </Sidebar>
    </>
  );
};
