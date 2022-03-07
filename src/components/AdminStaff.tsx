import React, {FC} from 'react';
import {useRootStore} from '../hooks/app-root-store.store';
import {observer} from 'mobx-react';
import {RootStore} from '../stores/root.store';

const AdminStaffList = observer<FC<{ rootStore: RootStore }>>(({rootStore}) => {
  return <div>
    {rootStore.orgUserStore.activeOrgUsers.map(activeOrgUser => <div
        key={activeOrgUser.orgUserID}>{activeOrgUser.userDetail.fullName}</div>)}
  </div>
})

const AdminStaff = () => {
  const rootStore = useRootStore();
  return <AdminStaffList rootStore={rootStore}/>;
};

export default AdminStaff;
