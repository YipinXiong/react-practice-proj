import {screen} from '@testing-library/react';

test('renders learn react link', () => {
  /*  const mockRootStore = {jobRolesStore: {isLoading: true}} as unknown as RootStore;
    const fromRender = render(<Dashboard/>);*/
  const titleElement = screen.getByTestId("dashboard-title");
  expect(titleElement).toBeInTheDocument();
});
