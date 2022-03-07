import {action, computed, makeObservable, observable, runInAction} from "mobx"
import {TeamModel} from '../interfaces/interfaces.index';
import {RootStore} from './root.store';
import {TransportInstances} from '../apis/api-index';
import {CACHE_ORG_ID_KEY} from '../apis/api-const-tokens';

export default class TeamsStore {
  allTeams: TeamModel[] = [];
  rootStore: RootStore;
  httpClients: TransportInstances;

  constructor(_rootStore: RootStore, httpClients: TransportInstances) {
    makeObservable(this, {
      allTeams: observable,
      rootStore: false,
      fetchAllTeams: action,
      httpClients: false,
      managedTeams: computed,
    })
    this.httpClients = httpClients;
    this.rootStore = _rootStore;
    this.fetchAllTeams();
  }

  get managedTeams() {
    if (this.rootStore.signInUserStore.orgUser?.managedTeams) {
      if (this.rootStore.signInUserStore.orgUser.isManager) {
        return this.allTeams;
      }
      return this.allTeams.filter(rawTeam => this.rootStore.signInUserStore.orgUser?.managedTeams.includes(rawTeam.teamID));
    }
    return [];
  }

  async fetchAllTeams() {
    if (this.rootStore.signInUserStore.token) {
      const orgID = localStorage.getItem(CACHE_ORG_ID_KEY);
      const allRawTeams = await this.httpClients.accountHttpClient.get<TeamModel[]>(`/orgs/${orgID}/teams`).then(({data}) => data, (error) => {
        console.log('fetch teams error: ', error);
        return [];
      });
      runInAction(() => {
        this.allTeams = allRawTeams;
      })
    }
  }
}
