import React, {useState} from 'react';
import GlobalHeader from './GloablHeader/GlobalHeader';
import GlobalNavMenu from './GlobalNavMenu/GlobalNavMenu';
import {Outlet} from 'react-router-dom';
import './GlobalLayout.scss';

const GlobalLayout = () => {
  const [hideHamburgerMenu, setHideHamburgerMenu] = useState(true);
  return (
      <div className="d-flex flex-column overflow-hidden" style={{height: '100vh'}}>
        <div className="global-header">
          <GlobalHeader toggleHamburger={setHideHamburgerMenu} currentHideHamburger={hideHamburgerMenu}/>
        </div>
        <div className="d-flex position-relative global-content-wrapper">
          <div
              className={`global-nav-bar d-flex ${hideHamburgerMenu ? 'hide-hamburger-menu' : 'show-hamburger-menu'}`}>
            <GlobalNavMenu setHideHamburgerMenu={setHideHamburgerMenu}/>
          </div>
          <div className="global-content-area">
            <Outlet/>
          </div>
        </div>
      </div>)
}

export default GlobalLayout;
