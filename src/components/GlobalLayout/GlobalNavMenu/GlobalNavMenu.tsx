import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

interface BasicSidebarEntry {
  displayName: string;
  route: string;
}

interface SidebarEntry extends BasicSidebarEntry {
  subEntries?: BasicSidebarEntry[];
}

interface Props {
  setHideHamburgerMenu: (val: boolean) => void;
}

const GlobalNavMenu: FC<Props> = ({setHideHamburgerMenu}) => {
  const sidebarEntries: SidebarEntry[] = [{displayName: 'dashboard', route: '/'},
    {displayName: 'Administration', route: 'admin-staff'},
    {displayName: 'Teams', route: 'teams'},
    {displayName: 'Job Roles', route: 'job-roles'},
    {displayName: 'Compliance', route: 'compliance-plan'},
    {displayName: 'Flexbox', route: 'flex-box'},
    {displayName: 'Drag to resize', route: 'drag-to-resize'},
    {displayName: 'Reporting', route: 'reports'},
    {displayName: 'Settings', route: 'settings'}];
  return (
      <nav>
        <ul>
          {sidebarEntries.map((entry) =>
              <li key={entry.route}>
                <NavLink to={entry.route} onClick={() => setHideHamburgerMenu(true)}>
                  {entry.displayName}
                </NavLink>
              </li>
          )}
        </ul>
      </nav>
  );
};

export default GlobalNavMenu;
