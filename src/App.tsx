import React, {useState} from 'react';
import './App.scss';
import DashboardHeader from './components/DashboardHeader';
import DashboardNavBar from './components/DashboardNavbar';
import {Outlet} from 'react-router-dom';


function App() {
  const [hideHamburgerMenu, setHideHamburgerMenu] = useState(true);
  return (
      <div className="d-flex flex-column overflow-hidden" style={{height: '100vh'}}>
        <div className="global-header">
          <DashboardHeader toggleHamburger={setHideHamburgerMenu} currentHideHamburger={hideHamburgerMenu}/>
        </div>
        <div className="d-flex position-relative global-content-wrapper">
          <div
              className={`global-nav-bar d-flex ${hideHamburgerMenu ? 'hide-hamburger-menu' : 'show-hamburger-menu'}`}>
            <DashboardNavBar setHideHamburgerMenu={setHideHamburgerMenu}/>
          </div>
          <div className="global-content-area">
            <Outlet/>
          </div>
        </div>
      </div>);
}

export default App;
