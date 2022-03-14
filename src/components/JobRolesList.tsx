import React, {FC} from 'react';
import {observer} from 'mobx-react';
import RootStore from '@root-store';

const JobRolesList = observer<FC<{ rootStore: RootStore }>>(({rootStore}) => {
  return (
      <div>{rootStore.jobRolesStore?.allJobRoles.map((jobRole) => <div
          key={jobRole.jobRoleID}>{jobRole.title}</div>)}</div>
  );
})

export default JobRolesList;
