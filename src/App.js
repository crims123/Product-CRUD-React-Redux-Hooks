import React from 'react';
import Header from './components/Header';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Header />
    </BrowserRouter >
  );
}

export default App;
