import Layout from 'Layout';
import { CreateApplication } from 'module/Application/component/CreateApplication/CreateApplication';
// import { SideBar } from 'module/SideBar/component/SideBar/SideBar';

import { Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<SideBarContext />} /> */}
      <Route path="create-help" element={<CreateApplication />} />
      {/* <Route index element={<Navigate to="create-help" replace={true} />} /> */}

      {/* <Route path="help-list" element={<WhoNeedHelpList />} /> */}
      {/* <Route path="*" element={<Navigate to="create-help" replace={true} />} /> */}
    </Route>
  </Routes>
);

export default App;
