import * as React from 'react';
import {Fragment} from 'react';
import {useRootStore} from '../hooks/app-root-store.store';
import RootStore from '@root-store';

const InjectRootStoreRenderHoc = (props: { renderWithStore: (rootStore: RootStore) => React.ReactElement }) => {
  const rootStore = useRootStore();
  return (
      <Fragment>
        {props.renderWithStore(rootStore)}
      </Fragment>
  );
};

export default InjectRootStoreRenderHoc;
