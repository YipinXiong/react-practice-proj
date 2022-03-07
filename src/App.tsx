import React from 'react';
import './App.scss';
import {DashboardHeader} from './components/DashboardHeader';
import DashboardNavBar from './components/DashboardNavbar';
import {Outlet} from 'react-router-dom';


function App() {
  return (
      <div className="d-flex flex-column overflow-hidden" style={{height: '100vh'}}>
        <div className="global-header">
          <DashboardHeader/>
        </div>
        <div className="d-flex position-relative global-content-wrapper">
          <div className="global-nav-bar">
            <DashboardNavBar/>
          </div>
          <div className="global-content-area">
            <Outlet/>
          </div>
        </div>
      </div>);
}

export default App;
