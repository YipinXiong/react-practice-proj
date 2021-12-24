import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
const items = [{
  title: 'What is react?',
  content: 'React is a very popular frameworks'
}];

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accordion/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
