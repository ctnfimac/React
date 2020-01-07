import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Menu from './components/Menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion/Navegacion';
import Inicio from './components/Secciones/Inicio/Inicio';

function App() {
  return (
      <Router >
          <Navegacion />
          <Switch>
              <Route path = "/" exact Component = {Inicio}></Route>
          </Switch>
      </Router>
  );
}

export default App;
