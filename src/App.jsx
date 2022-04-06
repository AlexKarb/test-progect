import Layout from 'Layout/Layout';
import { Administration } from 'module/Administration/component/Administration/Administration';
import { CreateApplication } from 'module/Application/component/CreateApplication/CreateApplication';
import { ActiveApplication } from 'module/ApplicationList/component/type/ActiveApplication/ActiveApplication';
import { ArchiveList } from 'module/ApplicationList/component/type/ArchiveList/ArchiveList';
import { CompletedApplication } from 'module/ApplicationList/component/type/CompletedApplication/CompletedApplication';
import { DeletedApplication } from 'module/ApplicationList/component/type/DeletedApplication/DeletedApplication';
import { InProgressApplication } from 'module/ApplicationList/component/type/InProgressApplication/InProgressApplication';
import { MyProfile } from 'module/MyProfile/MyProfile';
import { Statistics } from 'module/Statistics/component/Statistics/Statistics';

import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="my-profile" element={<MyProfile />} />
      <Route path="create-help" element={<CreateApplication />} />
      <Route path="active" element={<ActiveApplication />} />
      <Route path="in-progress" element={<InProgressApplication />} />
      <Route path="archive" element={<ArchiveList />}>
        <Route path="completed" element={<CompletedApplication />} />
        <Route path="deleted" element={<DeletedApplication />} />
      </Route>
      <Route path="statistics" element={<Statistics />} />
      <Route path="administration" element={<Administration />} />

      <Route path="*" element={<Navigate to="create-help" replace={true} />} />
    </Route>
  </Routes>
);

export default App;
