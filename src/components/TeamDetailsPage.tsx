// @flow
import * as React from 'react';
import {FunctionComponent} from 'react';
import {useParams} from 'react-router-dom';
import {observer} from 'mobx-react';
import RootStore from '@root-store';
import withRootStore from '../hoc/withRootStoreHOC';

const ObservedTeamDetailsPage = observer<FunctionComponent<{ rootStore: RootStore }>>(({rootStore}) => {
  const params = useParams();
  const foundTeam = rootStore.teamsStore.allTeams.find(team => team.teamID === params.teamID);
  return (
      foundTeam ?
          <div className="card">
            <p>Here is Team details page: {params.teamID}</p>
            <p>Team Name: {foundTeam.name}</p>
            <p>Team Type: {foundTeam.teamType}</p>
          </div> : <div>
            there is no team found in the store. The id is {params.teamID}
          </div>
  );
});

const ConnectToStoreTeamDetailsPage = withRootStore(ObservedTeamDetailsPage);


export default ConnectToStoreTeamDetailsPage;
