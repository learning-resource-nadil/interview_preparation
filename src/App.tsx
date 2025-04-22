import React from 'react';
import logo from './logo.svg';
import './App.css';
import ValueButtton from './Interview/buttton';
import NameInput from './Interview/NameInput'
import IncremntValue from './Interview/IncremntValue'
function App() {
  return (
    <div className="App">
      <ValueButtton/>
      <NameInput/>
      <IncremntValue/>
    </div>
  );
}

export default App;
