import React from 'react';
import {NavLink} from 'react-router-dom';

interface BasicSidebarEntry {
  displayName: string;
  route: string;
}

interface SidebarEntry extends BasicSidebarEntry {
  subEntries?: BasicSidebarEntry[];
}

const DashboardNavBar = () => {
  const sidebarEntries: SidebarEntry[] = [{displayName: 'dashboard', route: '/'},
    {displayName: 'Administration', route: 'admin-staff'},
    {displayName: 'Teams', route: 'teams'},
    {displayName: 'Job Roles', route: 'job-roles'},
    {displayName: 'Compliance', route: 'compliance-plan'},
    {displayName: 'Your Library', route: 'your-library'},
    {displayName: 'Ausmed Library', route: 'ausmed-library'},
    {displayName: 'Reporting', route: 'reports'},
    {displayName: 'Settings', route: 'settings'}];
  return (
      <nav>
        <ul>
          {sidebarEntries.map((entry) =>
              <li key={entry.route}>
                <NavLink to={entry.route}>
                  {entry.displayName}
                </NavLink>
              </li>
          )}
        </ul>
      </nav>
  );
};

export default DashboardNavBar;
