import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';

export function DashboardHeader() {
  return (
      <header className="d-flex border-bottom w-100 align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <button className="btn btn-md d-md-none">
            <FontAwesomeIcon icon={faAlignJustify}/>
          </button>
          <span className="pl-2 d-inline-block ms-md-3">Welcome to Yipin&apos;s practice</span>
        </div>

        <Link to={'/login'}>Login</Link>
      </header>
  );
}
