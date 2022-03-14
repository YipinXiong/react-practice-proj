import {action, makeObservable, observable, runInAction} from "mobx"
import {JobRoleModel} from '../interfaces/interfaces.index';
import RootStore from './root.store';
import {TransportInstances} from '../apis/api-index';
import {CACHE_ORG_ID_KEY} from '../apis/api-const-tokens';

export default class JobRolesStore {
  allJobRoles: JobRoleModel[] = [];
  rootStore: RootStore;
  httpClients: TransportInstances;

  constructor(_rootStore: RootStore, httpClients: TransportInstances) {
    makeObservable(this, {
      allJobRoles: observable,
      rootStore: false,
      fetchJobRoles: action,
      httpClients: false,
    })
    this.httpClients = httpClients;
    this.rootStore = _rootStore;
    this.fetchJobRoles();
  }

  async fetchJobRoles() {
    if (this.rootStore.signInUserStore.token) {
      const orgID = localStorage.getItem(CACHE_ORG_ID_KEY);
      const allRawJobRoles = await this.httpClients.accountHttpClient.get<JobRoleModel[]>(`/orgs/${orgID}/jobRoles`).then(({data}) => data, (error) => {
        console.log('fetch job Roles error: ', error);
        return [];
      });
      runInAction(() => {
        this.allJobRoles = allRawJobRoles;
      })
    }
  }
}
