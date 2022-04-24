import Layout from 'Layout/Layout';
import { Administration } from 'module/Administration/component/Administration/Administration';
import { CreateApplication } from 'module/Application/component/CreateApplication/CreateApplication';
import { ActiveApplication } from 'module/ApplicationList/component/type/ActiveApplication';
import { ArchiveList } from 'module/ApplicationList/component/type/ArchiveList/ArchiveList';
import { CompletedApplication } from 'module/ApplicationList/component/type/CompletedApplication';
import { DeletedApplication } from 'module/ApplicationList/component/type/DeletedApplication';
import { InProgressApplication } from 'module/ApplicationList/component/type/InProgressApplication';
import { HomePage } from 'module/HomePage/HomePage';
import { Statistics } from 'module/Statistics/component/Statistics/Statistics';

import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<HomePage />} />

      <Route path="create-help" element={<CreateApplication />} />
      <Route path="active" element={<ActiveApplication />} />
      <Route path="in-progress" element={<InProgressApplication />} />
      <Route path="archive" element={<ArchiveList />} />
      <Route path="archive/completed" element={<CompletedApplication />} />
      <Route path="archive/deleted" element={<DeletedApplication />} />
      <Route path="statistics" element={<Statistics />} />
      <Route path="administration" element={<Administration />} />

      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Route>
  </Routes>
);

export default App;
