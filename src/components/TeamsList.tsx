import React, {FC} from 'react';
import {observer} from 'mobx-react';
import RootStore from '@root-store';
import {Link, Outlet} from 'react-router-dom';

const TeamList = observer<FC<{ rootStore: RootStore }>>(({rootStore}) => {
  return (
      <>
        <div>{rootStore.teamsStore?.allTeams.map((team) => <Link key={team.teamID}
                                                                 to={`${team.teamID}`}>{team.name}</Link>)}</div>
        <Outlet/>
      </>
  );
})

export default TeamList;
