import React, {FC} from 'react';
import {observer} from 'mobx-react';
import RootStore from '@root-store';
import {Link} from 'react-router-dom';
import withRootStore from '../hoc/withRootStoreHOC';

const TeamList = observer<FC<{ rootStore: RootStore }>>(({rootStore}) => {
  return (
      <>
        <div className="d-flex flex-wrap gap-2 p-2">{rootStore.teamsStore?.allTeams.map((team) =>
            <Link key={team.teamID} className="d-block card p-4 text-decoration-none" to={`${team.teamID}`}>
              <div className="fw-bold">{team.name}</div>
              <div className="small fw-light text-secondary">{team.description}</div>
              <div
                  className="small fw-light text-black">{rootStore.teamsStore.getActiveOrgUserNumByID(team.teamID)} Active
                User(s)
              </div>
            </Link>)}</div>
      </>
  );
})

const ConnectedToStoreTeamList = withRootStore(TeamList);
export default ConnectedToStoreTeamList;
