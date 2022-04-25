import loadable from 'service/loadable';
import { MainSpiner } from 'module/Spiner/MainSpiner';
import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// import { Administration } from 'module/Administration/component/Administration/Administration';

const Layout = loadable('Layout/Layout');
const HomePage = loadable('module/HomePage');

const CreateApplication = lazy(() =>
  import(
    'module/CreateApplication/component/CreateApplication/CreateApplication'
  )
);
const ActiveApplication = lazy(() =>
  import('module/ApplicationList/component/type/ActiveApplication')
);
const ArchiveList = lazy(() =>
  import('module/ApplicationList/component/type/ArchiveList/ArchiveList')
);
const CompletedApplication = lazy(() =>
  import('module/ApplicationList/component/type/CompletedApplication')
);
const DeletedApplication = lazy(() =>
  import('module/ApplicationList/component/type/DeletedApplication')
);
const InProgressApplication = lazy(() =>
  import('module/ApplicationList/component/type/InProgressApplication')
);
const Statistics = lazy(() =>
  import('module/Statistics/component/Statistics/Statistics')
);

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
