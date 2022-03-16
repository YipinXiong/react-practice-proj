// @flow
import * as React from 'react';
import {Fragment, FunctionComponent} from 'react';
import {useParams} from 'react-router-dom';
import {observer} from 'mobx-react';
import RootStore from '@root-store';
import withRootStore from '../hoc/withRootStoreHOC';
import SinglePageHeaderWithBackRoute from './shared/SinglePageHeaderWithBackRoute';

const ObservedTeamDetailsPage = observer<FunctionComponent<{ rootStore: RootStore }>>(({rootStore}) => {
  const params = useParams();
  const foundTeam = rootStore.teamsStore.allTeams.find(team => team.teamID === params.teamID);
  return (
      foundTeam ?
          <Fragment>
            <SinglePageHeaderWithBackRoute/>
            <div className="card">
              <p>Here is Team details page: {params.teamID}</p>
              <p>Team Name: {foundTeam.name}</p>
              <p>Team Type: {foundTeam.teamType}</p>
            </div>
          </Fragment> : <div>
            there is no team found in the store. The id is {params.teamID}
          </div>
  );
});

const ConnectToStoreTeamDetailsPage = withRootStore(ObservedTeamDetailsPage);


export default ConnectToStoreTeamDetailsPage;
