import OrgUsersStore from './org-users.store';
import SignedInUserStore from './signed-in-user.store';
import {AxiosInstance} from 'axios';
import {TransportInstances} from '../apis/api-index';
import TeamsStore from './teams.store';
import JobRolesStore from './job-roles.store';

export class RootStore {
  orgUserStore: OrgUsersStore;
  signInUserStore: SignedInUserStore;
  teamsStore: TeamsStore;
  jobRolesStore: JobRolesStore;

  constructor(accountHttpClient: AxiosInstance, resourceHttpClient: AxiosInstance) {
    const httpClients: TransportInstances = {accountHttpClient, resourceHttpClient};
    this.orgUserStore = new OrgUsersStore(this, httpClients);
    this.signInUserStore = new SignedInUserStore(this, httpClients);
    this.teamsStore = new TeamsStore(this, httpClients);
    this.jobRolesStore = new JobRolesStore(this, httpClients);
  }
}
