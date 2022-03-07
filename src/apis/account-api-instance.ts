import axios from 'axios';
import {ausmed_account_base_url} from './secrete';
import {AUTH_TOKEN_KEY} from './api-const-tokens';

const accountApiInstance = axios.create({
  baseURL: ausmed_account_base_url, headers: {
    "Content-type": "application/json"
  }
});
if (localStorage.getItem(AUTH_TOKEN_KEY)) {
  accountApiInstance.defaults.headers.common['x-auth-token'] = localStorage.getItem(AUTH_TOKEN_KEY) as string;
}

export default accountApiInstance;
