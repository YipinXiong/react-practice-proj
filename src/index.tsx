import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import {AuthProvider, RequireAuth} from './hooks/auth.hook';
import CompliancePlan from './components/CompliancePlan';
import ConnectToStoreAdminStaffList from './components/AdminStaff';
import YourLibrary from './components/YourLibrary';
import Reports from './components/Reports';
import Settings from './components/Settings';
import AusmedLibrary from './components/AusmedLibrary';
import Dashboard from './components/Dashboard';
import {RootStoreProvider} from './hooks/app-root-store.store';
import JobRolesList from './components/JobRolesList';
import ConnectedToStoreTeamList from './components/TeamsList';
import InjectRootStoreRenderHoc from './hoc/InjectRootStoreRenderHoc';
import ConnectToStoreTeamDetailsPage from './components/TeamDetailsPage';


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <RootStoreProvider>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/" element={<RequireAuth><App/>
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
                <Route path="your-library" element={<YourLibrary/>}/>
                <Route path="ausmed-library" element={<AusmedLibrary/>}/>
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
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
