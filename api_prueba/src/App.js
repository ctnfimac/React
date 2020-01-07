import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Menu from './components/Menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion/Navegacion';
import Inicio from './components/Secciones/Inicio/Inicio';
//import { render } from 'react-dom';

class App extends Component {
    render(){
        return (
            <Router>
                <Navegacion />
                <Switch>
                    <Route path = "/" exact component = {Inicio}></Route>
                    <Route path = "/inicio" component = {Inicio}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
