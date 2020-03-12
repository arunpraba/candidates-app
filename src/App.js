import React from 'react';
import Nav from './components/Nav';
import Router from './Router';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="app-container">
        <Router />
      </div>
    </div>
  );
};

export default App;
