import * as React from 'react';
import {Fragment} from 'react';
import {useRootStore} from '../hooks/app-root-store.store';
import RootStore from '@root-store';

/**
 * @param props: a callback fn that will return ReactElement which needs to inject rootStore from props
 * This function is just a practice of the `render prop` concept
 */
const InjectRootStoreRenderHoc = (props: { renderWithStore: (rootStore: RootStore) => React.ReactElement }) => {
  const rootStore = useRootStore();
  return (
      <Fragment>
        {props.renderWithStore(rootStore)}
      </Fragment>
  );
};

export default InjectRootStoreRenderHoc;
