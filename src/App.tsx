import React from 'react';
import './App.scss';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {RootStoreProvider} from './hooks/app-root-store.store';
import {AuthProvider, RequireAuth} from './hooks/auth.hook';
import Login from './components/Login';
import InjectRootStoreRenderHoc from './hoc/InjectRootStoreRenderHoc';
import Dashboard from './components/Dashboard/Dashboard';
import CompliancePlan from './components/CompliancePlan';
import ConnectToStoreAdminStaffList from './components/AdminStaff';
import ConnectedToStoreTeamList from './components/TeamsList';
import ConnectToStoreTeamDetailsPage from './components/TeamDetailsPage';
import JobRolesList from './components/JobRolesList';
import DragToResize from './components/DragToResize/DragToResize';
import FlexLayoutDemo from './components/FlexLayoutDemo/FlexLayoutDemo';
import Reports from './components/Reports';
import Settings from './components/Settings';
import GlobalLayout from './components/GlobalLayout/GlobalLayout';

function App() {
  return (<React.StrictMode>
    <BrowserRouter>
      <RootStoreProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<RequireAuth><GlobalLayout/>
            </RequireAuth>}>
              <Route index element={<InjectRootStoreRenderHoc
                  renderWithStore={(store) => <Dashboard rootStore={store}/>}/>}/>
              <Route path="compliance-plan" element={<CompliancePlan/>}/>
              <Route path="admin-staff" element={<ConnectToStoreAdminStaffList/>}/>
              <Route path="teams" element={<Outlet/>}>
                <Route index element={<ConnectedToStoreTeamList/>}/>
                <Route path=":teamID" element={<ConnectToStoreTeamDetailsPage/>}/>
              </Route>
              <Route path="job-roles"
                     element={<InjectRootStoreRenderHoc
                         renderWithStore={(store) => <JobRolesList rootStore={store}/>}/>}>
              </Route>
              <Route path="drag-to-resize" element={<DragToResize/>}/>
              <Route path="flex-box" element={<FlexLayoutDemo/>}/>
              <Route path="reports" element={<Reports/>}/>
              <Route path="settings" element={<Settings/>}/>
            </Route>
            <Route path="*" element={
              <main style={{padding: "1rem"}}>
                <p>There is nothing here!</p>
              </main>
            }
            />
          </Routes>
        </AuthProvider>
      </RootStoreProvider>
    </BrowserRouter>
  </React.StrictMode>)
}

export default App;
