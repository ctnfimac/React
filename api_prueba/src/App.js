import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Menu from './components/Menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion/Navegacion';
import Inicio from './components/Secciones/Inicio/Inicio';
import Post from './components/Secciones/Post/Post';
import Delete from './components/Secciones/Delete/Delete'
import Put from './components/Secciones/Put/Put';
import Get from './components/Secciones/Get/Get';
//import { render } from 'react-dom';

class App extends Component {
    render(){
        return (
            <Router>
                <Navegacion />
                <Switch>
                    <Route path = "/" exact component = {Inicio}></Route>
                    <Route path = "/inicio" component = {Inicio}></Route>
                    <Route path = "/post" component = {Post}></Route>
                    <Route path = "/delete" component = {Delete}></Route>
                    <Route path = "/put" component = {Put}></Route>
                    <Route path = "/get" component = {Get}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
