import loadable from 'service/loadable';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';
import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// import { Administration } from 'module/Administration/component/Administration/Administration';

const Layout = loadable('Layout/Layout');
const HomePage = loadable('module/pages/HomePage');

const CreateApplication = lazy(() =>
  import('module/pages/CreateApplication/CreateApplication')
);
const ActiveApplication = lazy(() =>
  import('module/pages/ActiveApplication/ActiveApplication')
);
const ArchiveList = lazy(() => import('module/pages/ArchiveList/ArchiveList'));
const CompletedApplication = lazy(() =>
  import('module/ApplicationList/component/type/CompletedApplication')
);
const DeletedApplication = lazy(() =>
  import('module/ApplicationList/component/type/DeletedApplication')
);
const InProgressApplication = lazy(() =>
  import('module/pages/InProgressApplication/InProgressApplication')
);
const Statistics = lazy(() => import('module/pages/Statistics'));

const App = () => {
  return (
    <>
      <Suspense fallback={<MainSpiner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="create-help" element={<CreateApplication />} />
            <Route path="active" element={<ActiveApplication />} />
            <Route path="in-progress" element={<InProgressApplication />} />
            <Route path="archive" element={<ArchiveList />} />
            <Route
              path="archive/completed"
              element={<CompletedApplication />}
            />
            <Route path="archive/deleted" element={<DeletedApplication />} />
            <Route path="statistics" element={<Statistics />} />
            {/* <Route path="administration" element={<Administration />} /> */}

            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
