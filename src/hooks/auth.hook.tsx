import React, {useEffect} from 'react';
import {AuthContextType, ILoginFormData, InitPayload} from '../interfaces/interfaces.index';
import {AUTH_TOKEN_KEY, CACHE_ORG_CODE_KEY} from '../apis/api-const-tokens';
import {Navigate, useLocation} from 'react-router-dom';
import singletonOrgUserService from '../apis/org-user.service';
import {useRootStore} from './app-root-store.store';

export const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
  const [initPayload, setInitPayload] = React.useState<InitPayload | null>(null);
  const rootStore = useRootStore();
  useEffect(() => {
    const cacheToken = localStorage.getItem(AUTH_TOKEN_KEY);
    const cacheOrgCode = localStorage.getItem(CACHE_ORG_CODE_KEY);
    if (cacheToken && cacheOrgCode) {
      singletonOrgUserService.renewToken(cacheOrgCode)
          .then((initPayload) => {
            setInitPayload(initPayload ? initPayload : null);
            rootStore.signInUserStore.setInitPayload(initPayload as InitPayload);
            rootStore.orgUserStore.fetchAllOrgUsers();
            rootStore.teamsStore.fetchAllTeams();
            rootStore.jobRolesStore.fetchJobRoles();
          });
    }
  }, []);
  const signin = (loginForm: ILoginFormData, callBack?: VoidFunction) => {
    singletonOrgUserService.signin(loginForm).then((initPayload) => {
      setInitPayload(initPayload ? initPayload : null);
      rootStore.signInUserStore.setInitPayload(initPayload as InitPayload);
      rootStore.orgUserStore.fetchAllOrgUsers();
      rootStore.teamsStore.fetchAllTeams();
      rootStore.jobRolesStore.fetchJobRoles();
      callBack && callBack();
    })
  };
  const signout = () => {
    singletonOrgUserService.signout();
  };

  const value: AuthContextType = {initPayload, signout, signin};
  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
}


export function RequireAuth({children}: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();
  const cacheToken = localStorage.getItem(AUTH_TOKEN_KEY);
  const cacheOrgCode = localStorage.getItem(CACHE_ORG_CODE_KEY);
  if (!auth?.initPayload && !cacheOrgCode && !cacheToken) {
    return <Navigate to="/login" state={{from: location}} replace/>;
  }
  return children;
}
