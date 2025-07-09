import { JSX } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import routesConfig from '@/config/routes';
import RepoDetails from '@/pages/RepoDetails';

const RouterProvider = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path={routesConfig.HOME} element={<Home />} />
      <Route path={routesConfig.REPO_DETAILS} element={<RepoDetails />} />
    </Routes>
  </Router>
);

export default RouterProvider;
