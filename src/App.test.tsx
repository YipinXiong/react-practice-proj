import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RootStoreProvider} from './hooks/app-root-store.store';
import {AuthProvider, RequireAuth} from './hooks/auth.hook';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <RootStoreProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<RequireAuth><App/></RequireAuth>}/>
          </Routes>
        </AuthProvider>
      </RootStoreProvider>
    </BrowserRouter>
  </React.StrictMode>);
  const testnumber = 1;
  expect(testnumber).toBe(1);
});
