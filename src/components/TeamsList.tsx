import React, {FC} from 'react';
import {observer} from 'mobx-react';
import RootStore from '@root-store';

const TeamList = observer<FC<{ rootStore: RootStore }>>(({rootStore}) => {
  return (
      <div>{rootStore.teamsStore?.allTeams.map((team) => <div key={team.teamID}>{team.name}</div>)}</div>
  );
})

export default TeamList;
