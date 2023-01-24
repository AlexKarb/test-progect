import loadable from 'service/loadable';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { useSideBarOpen } from 'module/SideBar/hooks/useSideBarOpen';
import { LoginPage } from 'module/pages/LoginPage/LoginPage';
import { SingInPage } from 'module/pages/SingInPage/SingInPage';
import { Administration } from 'module/Administration/component/Administration/Administration';
import { PrivateRoutes, PublicRoutes } from 'routes';

// import { Administration } from 'module/Administration/component/Administration/Administration';
const Layout = loadable('Layout/Layout');
const HomePage = loadable('module/pages/HomePage');
const CreateApplication = loadable('module/pages/CreateApplication');
const ActiveApplication = loadable('module/pages/ActiveApplication');
const ArchiveList = loadable('module/pages/ArchiveList');
const CompletedApplication = loadable('module/pages/CompletedApplication');
const DeletedApplication = loadable('module/pages/DeletedApplication');
const InProgressApplication = loadable('module/pages/InProgressApplication');
const Statistics = loadable('module/pages/Statistics');

const App = () => {
  const [attributes, setSidebarOpen] = useSideBarOpen();
  return (
    <>
      <Sidebar {...attributes}>
        <Suspense fallback={<MainSpiner />}>
          <Routes>
            <Route path="/" element={<Layout sidebarOpen={setSidebarOpen} />}>
              <Route path="login" element={<PublicRoutes element={<LoginPage />} />} />
              <Route path="singin" element={<PublicRoutes element={<SingInPage />} />} />
              <Route index path="/" element={<PrivateRoutes element={<HomePage />} />} />
              <Route
                path="create-help"
                element={<PrivateRoutes element={<CreateApplication />} />}
              />
              <Route
                path="active"
                element={<PrivateRoutes element={<ActiveApplication />} />}
              />
              <Route
                path="in-progress"
                element={<PrivateRoutes element={<InProgressApplication />} />}
              />
              <Route
                path="archive"
                element={<PrivateRoutes element={<ArchiveList />} />}
              />
              <Route
                path="archive/completed"
                element={<PrivateRoutes element={<CompletedApplication />} />}
              />
              <Route
                path="archive/deleted"
                element={<PrivateRoutes element={<DeletedApplication />} />}
              />
              <Route
                path="statistics"
                element={<PrivateRoutes element={<Statistics />} />}
              />
              <Route
                path="administration"
                element={<PrivateRoutes element={<Administration />} />}
              />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Route>
          </Routes>
        </Suspense>
      </Sidebar>
    </>
  );
};

export default App;
