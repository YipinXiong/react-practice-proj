import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/login';
import {AuthProvider, RequireAuth} from './hooks/auth';
import axios from 'axios';
import {ausmed_base_url} from './apis/secrete';

function setupGlobalAxiosTokenAndBaseUrl(): void {
  axios.defaults.baseURL = ausmed_base_url;
  if (localStorage.getItem('auth_token')) {
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('auth_token') as string;
  }
}

setupGlobalAxiosTokenAndBaseUrl();

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/'} element={<RequireAuth><App/>
            </RequireAuth>}>
            </Route>
            <Route path="*" element={
              <main style={{padding: "1rem"}}>
                <p>There is nothing here!</p>
              </main>
            }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
