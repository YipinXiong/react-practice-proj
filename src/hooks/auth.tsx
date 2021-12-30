import React, {useEffect} from 'react';
import {AuthContextType, ILoginFormData, InitPayload} from '../interfaces/interfaces.index';
import {AUTH_TOKEN_KEY, AuthService, CACHE_ORG_CODE_KEY} from '../apis/auth';
import {Navigate, useLocation} from 'react-router-dom';

export const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [initPayload, setInitPayload] = React.useState<InitPayload | null>(null);
  useEffect(() => {
    const cacheToken = localStorage.getItem(AUTH_TOKEN_KEY);
    const cacheOrgCode = localStorage.getItem(CACHE_ORG_CODE_KEY);
    if (cacheToken && cacheOrgCode) {
      AuthService.renewToken(cacheOrgCode).then((initPayload) => {
        setInitPayload(initPayload ? initPayload : null);
      });
    }
  }, []);
  const signin = (loginForm: ILoginFormData, callBack?: VoidFunction) => {
    AuthService.signin(loginForm).then((initPayload) => {
      setInitPayload(initPayload ? initPayload : null);
      callBack && callBack();
    })
  };
  const signout = () => {
    AuthService.signout();
  };

  const value: AuthContextType = {initPayload, signout, signin};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();
  const cacheToken = localStorage.getItem(AUTH_TOKEN_KEY);
  const cacheOrgCode = localStorage.getItem(CACHE_ORG_CODE_KEY);
  if (!auth?.initPayload && !cacheOrgCode && !cacheToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
