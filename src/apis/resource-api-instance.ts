import axios from 'axios';
import {ausmed_resource_base_url} from './secrete';
import {AUTH_TOKEN_KEY} from './api-const-tokens';

const resourceAPIInstance = axios.create({
  baseURL: ausmed_resource_base_url, headers: {
    "Content-type": "application/json"
  }
});
if (localStorage.getItem(AUTH_TOKEN_KEY)) {
  resourceAPIInstance.defaults.headers.common['x-auth-token'] = localStorage.getItem(AUTH_TOKEN_KEY) as string;
}

export default resourceAPIInstance;
