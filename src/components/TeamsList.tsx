import React, {FC, useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import RootStore from '@root-store';
import {Link} from 'react-router-dom';
import withRootStore from '../hoc/withRootStoreHOC';
import {TeamModel} from '../interfaces/interfaces.index';

const TeamList = observer<FC<{ rootStore: RootStore }>>(({rootStore}) => {
  const [searchTerm, setSearchTeam] = useState('');
  const [renderedTeams, setRenderedTeams] = useState<TeamModel[]>(rootStore.teamsStore?.allTeams || []);
  useEffect(() => {
    const prevChangeTimeoutFunction = setTimeout(() => {
      setRenderedTeams(rootStore.teamsStore?.allTeams.filter((team) => team.name?.toLowerCase().includes(searchTerm.toLowerCase())))
    }, 500);
    return () => {
      if (prevChangeTimeoutFunction) clearTimeout(prevChangeTimeoutFunction);
    };
  }, [searchTerm, rootStore.teamsStore.allTeams]);
  return (
      <>
        <div className="mb-3 px-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">Search Team Name</label>
          <input type="search" className="form-control" value={searchTerm}
                 onChange={(e) => setSearchTeam(e.target.value)}
                 id="exampleFormControlInput1" placeholder="Search Team Names"/>
        </div>
        {rootStore.teamsStore.loading ? <div className="text-black text-warning px-2">Loading Teams</div> :
            <div className="grid-thirds gap-2 p-2">{renderedTeams.map((team) =>
                <Link key={team.teamID} className="d-block card p-4 text-decoration-none" to={`${team.teamID}`}>
                  <div className="fw-bold">{team.name}</div>
                  <div className="small fw-light text-secondary">{team.description}</div>
                  <div
                      className="small fw-light text-black">{rootStore.teamsStore.getActiveOrgUserNumByID(team.teamID)} Active
                    User(s)
                  </div>
                </Link>)}</div>}
      </>
  );
})

const ConnectedToStoreTeamList = withRootStore(TeamList);
export default ConnectedToStoreTeamList;
