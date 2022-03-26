import {render, screen} from '@testing-library/react';
import GlobalHeader from './GlobalHeader';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

test('should successfully rendered header', () => {
  const mockToggle = () => {
    return;
  };
  render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<GlobalHeader currentHideHamburger={false}
                                             toggleHamburger={mockToggle}/>}/></Routes></BrowserRouter>);
  const titleElement = screen.getByTestId("header-title");
  expect(titleElement).toBeInTheDocument();
  expect(titleElement.textContent).toContain('Yipin');
});
