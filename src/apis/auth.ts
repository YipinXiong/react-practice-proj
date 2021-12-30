import axios from 'axios';
import {ILoginFormData, InitPayload} from '../interfaces/interfaces.index';

export const AUTH_TOKEN_KEY = 'x-auth-token';
export const CACHE_ORG_CODE_KEY = 'orgCode';
const AuthService = {
  signin(loginForm: ILoginFormData): Promise<void | InitPayload> {
    const {password, username, orgCode} = loginForm;
    return axios.post<InitPayload>(`/account/orgs/byCode/${orgCode}/signIn`, {username, password})
        .then(({data}) => {
          localStorage.setItem(AUTH_TOKEN_KEY, data.token);
          localStorage.setItem(CACHE_ORG_CODE_KEY, orgCode);
          return data;
        })
        .catch(function (error) {
          console.log('login error', error);
        });
  },
  signout(callback?: VoidFunction) {
    if (callback) {
      setTimeout(callback, 100);
    }
  },
  renewToken(orgCode: string, token: string): Promise<void | InitPayload> {
    axios.defaults.headers.common['x-auth-token'] = token;
    return axios.get<InitPayload>(`/account/orgs/byCode/${orgCode}/renewToken`)
        .then(({data}) => data)
        .catch(function (error) {
          console.log('renewToken error', error);
        });
  }
};

export {AuthService};
