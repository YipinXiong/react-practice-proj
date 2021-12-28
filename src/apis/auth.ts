import axios from 'axios';
import {ILoginFormData, InitPayload} from '../interfaces/interfaces.index';

const AuthService = {
  isAuthenticated: false,
  signin(loginForm: ILoginFormData): Promise<void | InitPayload> {
    const {password, username, orgCode} = loginForm;
    this.isAuthenticated = true;
    return axios.post<InitPayload>(`/account/orgs/byCode/${orgCode}/signIn`, {username, password})
        .then(({data}) => data)
        .catch(function (error) {
          console.log(error);
        });
  },
  signout(callback?: VoidFunction) {
    this.isAuthenticated = false;
    if (callback) {
      setTimeout(callback, 100);
    }
  },
};

export {AuthService};
