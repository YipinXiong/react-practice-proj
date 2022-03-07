import {AxiosInstance} from 'axios';
import {ILoginFormData, InitPayload, IOrgUser} from '../interfaces/interfaces.index';
import {AUTH_TOKEN_KEY, CACHE_ORG_CODE_KEY, CACHE_ORG_ID_KEY} from './api-const-tokens';
import accountApiInstance from './account-api-instance';

export class OrgUserService {
  constructor(private readonly _httpClientAccount: AxiosInstance) {
  }

  fetchOrgUsers(): Promise<IOrgUser[]> {
    const orgID = localStorage.getItem(CACHE_ORG_ID_KEY);
    return this._httpClientAccount.get<IOrgUser[]>(`/orgs/${orgID}/orgUsers`)
        .then(({data = []}) => data, (error) => {
          console.log('[ERROR] when fetching org users', error);
          return [];
        });
  }

  signin(loginForm: ILoginFormData): Promise<void | InitPayload> {
    const {password, username, orgCode} = loginForm;
    return this._httpClientAccount.post<InitPayload>(`/orgs/byCode/${orgCode}/signIn`, {username, password})
        .then(({data}) => {
          localStorage.setItem(AUTH_TOKEN_KEY, data.token);
          localStorage.setItem(CACHE_ORG_CODE_KEY, orgCode);
          localStorage.setItem(CACHE_ORG_ID_KEY, data.org.orgID);
          this._httpClientAccount.defaults.headers.common[AUTH_TOKEN_KEY] = data.token;
          return data;
        })
        .catch(function (error) {
          console.log('login error', error);
        });
  }

  signout(callback?: VoidFunction) {
    if (callback) {
      setTimeout(callback, 100);
    }
  }

  renewToken(orgCode: string): Promise<void | InitPayload> {
    return this._httpClientAccount.get<InitPayload>(`/orgs/byCode/${orgCode}/renewToken`)
        .then(({data}) => {
          if (data.token) {
            localStorage.setItem(AUTH_TOKEN_KEY, data.token);
            this._httpClientAccount.defaults.headers.common['x-auth-token'] = data.token;
          }
          return data;
        })
        .catch(function (error) {
          console.log('renewToken error', error);
        });
  }
}

const singletonOrgUserService = new OrgUserService(accountApiInstance);
export default singletonOrgUserService;
