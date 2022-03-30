import Layout from 'components/Layout';
import CreateHelp from 'components/CreateHelp/CreateHelp';
import CreateHelper from 'components/CreateHelper/CreateHelper';
import Helpers from 'components/HelpersList/HelpersList';
import Home from 'components/Home/Home';
import WhoNeedHelpList from 'components/WhoNeedHelpList/WhoNeedHelpList';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="helpers-list" element={<Helpers />} />
      <Route path="create-helpers" element={<CreateHelper />} />
      <Route path="help-list" element={<WhoNeedHelpList />} />
      <Route path="create-help" element={<CreateHelp />} />
      <Route path="*" element={<Navigate to="home" replace={true} />} />
      <Route index element={<Navigate to="home" replace={true} />} />
    </Route>
  </Routes>
);

export default App;
