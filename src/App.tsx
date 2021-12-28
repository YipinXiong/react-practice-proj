import React from 'react';
import './App.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {ausmed_base_url} from './apis/secrete';

function setupGlobalAxiosTokenAndBaseUrl():void {
  axios.defaults.baseURL = ausmed_base_url;
  if (localStorage.getItem('auth_token')) {
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('auth_token') as string;
  }
}

function App() {
  setupGlobalAxiosTokenAndBaseUrl();
  return (<Link to={'/login'}>Login</Link>);
}

export default App;
