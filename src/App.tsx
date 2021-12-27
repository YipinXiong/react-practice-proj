import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

const items = [{
  title: 'What is react?',
  content: 'React is a very popular frameworks'
}];

function App() {
  return (<Accordion/>);
}

export default App;
