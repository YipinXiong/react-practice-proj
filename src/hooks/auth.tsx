import React from 'react';
import { InitPayload} from '../interfaces/interfaces.index';

export const AuthContext = React.createContext<InitPayload | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [initPayload, setInitPayload] = React.useState<InitPayload | null>(null);
  return <AuthContext.Provider value={initPayload}>{children}</AuthContext.Provider>;
}
