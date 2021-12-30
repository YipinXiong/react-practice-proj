import React from 'react';
import {AuthContextType, ILoginFormData, InitPayload} from '../interfaces/interfaces.index';
import {AuthService} from '../apis/auth';
import {Navigate, useLocation} from 'react-router-dom';

export const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [initPayload, setInitPayload] = React.useState<InitPayload | null>(null);
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

  if (!auth?.initPayload?.token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
