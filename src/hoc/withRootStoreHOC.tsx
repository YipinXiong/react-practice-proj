import * as React from 'react';
import {ComponentType} from 'react';
import {useRootStore} from '../hooks/app-root-store.store';
import RootStore from '@root-store';

interface WithRootStoreInProps {
  rootStore: RootStore;
}

type ExcludedRootStoreInProps<P> = Omit<P, keyof WithRootStoreInProps>;

function withRootStore<P extends WithRootStoreInProps = WithRootStoreInProps>(WrappedComponent: ComponentType<P>): ComponentType<ExcludedRootStoreInProps<P>> {
  /* This is the bug that you need to as P and spread it ahead of rootStore*/
  return function withRootStoreComp(props: ExcludedRootStoreInProps<P>) {
    const rootStore = useRootStore();
    return <WrappedComponent {...props as P} rootStore={rootStore}/>;
  };
}

export default withRootStore;
