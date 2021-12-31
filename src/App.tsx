import React from 'react';
import './App.scss';
import {DashboardHeader} from './components/DashboardHeader';
import DashboardNavBar from './components/DashboardNavbar';
import {Outlet} from 'react-router-dom';


function App() {
  return (
      <div className="container-fluid">
        <div className="row">
          <DashboardHeader/>
        </div>
        <div className="row">
          <div className="col-md-3 g-0">
            <DashboardNavBar/>
          </div>
          <div className="col-12 col-md-9">
            <Outlet/>
          </div>
        </div>
      </div>);
}

export default App;
