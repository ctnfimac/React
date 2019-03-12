import React, {Component} from 'react';
import logo from './../logo.svg';

class Menu extends Component{
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark primary-color d-flex justify-content-between">
				<li className="navbar-brand">Inscripción</li>
				<li className="navbar-brand"><span className="fas fa-clipboard-list text-white">(0)</span></li>
				<img src={logo} className="App-logo" alt="logo" width="100px" height="50px"/>
			</nav>
		);
	}
}


export default Menu;