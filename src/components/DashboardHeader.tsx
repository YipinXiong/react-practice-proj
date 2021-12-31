import * as React from 'react';
import {Link} from 'react-router-dom';

export function DashboardHeader() {
  return (
      <header className="d-flex">
        <Link to={'/login'}>Login</Link>
        <span className="pl-2">Welcome to Yipin&apos;s practice</span>
      </header>
  );
}