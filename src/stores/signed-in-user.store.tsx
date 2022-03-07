import {CurrentContract, InitPayload, IOrganisation, IOrgUser, User} from '../interfaces/interfaces.index';
import {action, makeObservable, observable} from 'mobx';
import {RootStore} from './root.store';
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
          rootStore: false,
          httpClients: false,
        }
    )
    this.httpClients = httpClients;
    this.rootStore = _rootStore;
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
