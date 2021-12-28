import React from 'react';
import {AuthContextType, ILoginFormData, InitPayload} from '../interfaces/interfaces.index';
import {AuthService} from '../apis/auth';

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
