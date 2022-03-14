import {CurrentContract, InitPayload, IOrganisation, IOrgUser, User} from '../interfaces/interfaces.index';
import {action, computed, makeObservable, observable} from 'mobx';
import RootStore from './root.store';
import {TransportInstances} from '../apis/api-index';

export default class SignedInUserStore {
  user: User | null = null;
  org: IOrganisation | null = null;
  currentContract: CurrentContract | null = null;
  token = '';
  orgUser: IOrgUser | null = null;
  rootStore: RootStore;
  httpClients: TransportInstances;

  constructor(_rootStore: RootStore, httpClients: TransportInstances) {
    makeObservable(this, {
          user: observable,
          orgUser: observable,
          org: observable,
          currentContract: observable,
          token: observable,
          setInitPayload: action,
          managedTeams: computed,
          rootStore: false,
          httpClients: false,
        }
    )
    this.httpClients = httpClients;
    this.rootStore = _rootStore;
  }

  get managedTeams() {
    if (Array.isArray(this.rootStore.teamsStore?.allTeams)) {
      if (this.orgUser?.isManager) {
        return this.rootStore.teamsStore.allTeams;
      }
      return this.rootStore.teamsStore.allTeams.filter(rawTeam => this.orgUser?.managedTeams.includes(rawTeam.teamID));
    }
    return [];
  }

  setInitPayload(initPayload: InitPayload) {
    const {org, orgUser, user, currentContract, token} = initPayload;
    this.org = org;
    this.user = user;
    this.orgUser = orgUser;
    this.currentContract = currentContract;
    this.token = token;
  }
}
