import React from 'react';
import {RootStore} from '../stores/root.store';
import accountApiInstance from '../apis/account-api-instance';
import resourceAPIInstance from '../apis/resource-api-instance';

export const RootStoreContext = React.createContext<RootStore>(new RootStore(accountApiInstance, resourceAPIInstance));

export function useRootStore() {
  return React.useContext(RootStoreContext);
}

export const RootStoreProvider = ({children}: { children: React.ReactNode }): JSX.Element => {
  const rootStore = new RootStore(accountApiInstance, resourceAPIInstance);
  return <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
}
