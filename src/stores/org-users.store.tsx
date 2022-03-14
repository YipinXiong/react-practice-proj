import {action, computed, makeObservable, observable, runInAction} from "mobx"
import {IOrgUser} from '../interfaces/interfaces.index';
import RootStore from './root.store';
import {TransportInstances} from '../apis/api-index';
import singletonOrgUserService from '../apis/org-user.service';

export default class OrgUsersStore {
  allOrgUsers: IOrgUser[] = [];
  rootStore: RootStore;
  httpClients: TransportInstances;

  constructor(_rootStore: RootStore, httpClients: TransportInstances) {
    makeObservable(this, {
      allOrgUsers: observable,
      activeOrgUsers: computed,
      pendingOrgUsers: computed,
      rejectedOrgUsers: computed,
      rootStore: false,
      fetchAllOrgUsers: action,
      httpClients: false,
    })
    this.httpClients = httpClients;
    this.rootStore = _rootStore;
  }

  get activeOrgUsers(): IOrgUser[] {
    return this.allOrgUsers.filter((orgUser) => orgUser.status === 'Active');
  }

  get inactiveOrgUsers(): IOrgUser[] {
    return this.allOrgUsers.filter(({status}) => status === 'In-active');
  }

  get pendingOrgUsers(): IOrgUser[] {
    return this.allOrgUsers.filter(({status}) => status === 'Pending');
  }

  get rejectedOrgUsers(): IOrgUser[] {
    return this.allOrgUsers.filter(({status}) => status === 'Rejected');
  }

  async fetchAllOrgUsers() {
    if (this.rootStore.signInUserStore.token) {
      const allOrgUsers = await singletonOrgUserService.fetchOrgUsers();
      runInAction(() => {
        this.allOrgUsers = allOrgUsers;
      })
    }
  }
}
