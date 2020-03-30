import React from 'react';
import './App.css';

import EventoOnClick from './components/onClick/EventoOnClick'
import EventoMouseListener from './components/mouseListener/EventoMouseListener'

function App() {
  return (
    <div className="App">
      <EventoOnClick />
      <EventoMouseListener />
    </div>
  );
}

export default App;
