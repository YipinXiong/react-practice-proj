import React, {FC} from 'react';
import {observer} from 'mobx-react';
import RootStore from '../stores/root.store';

const AdminStaffList = observer<FC<{ rootStore: RootStore }>>(({rootStore}) => {
  return <div>
    {rootStore.orgUserStore.activeOrgUsers.map(activeOrgUser => <div
        key={activeOrgUser.orgUserID}>{activeOrgUser.userDetail.fullName}</div>)}
  </div>
})

export default AdminStaffList;
