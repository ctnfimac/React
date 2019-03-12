import React from 'react';
import logo from './../logo.svg';

const Menu = (props) => (
	<nav className="navbar navbar-expand-lg navbar-dark primary-color d-flex justify-content-between">
		<li className="navbar-brand">Inscripción</li>
 		<li className="navbar-brand">
		 	<span className="fas fa-clipboard-list text-white"></span>
		 	<span className="ml-1 rounded-circle info-color-dark p-0 pl-1 pr-1 text-2">{props.nItems}</span>
		</li>
 		<img src={logo} className="App-logo" alt="logo" width="100px" height="50px"/>
 	</nav>
)

export default Menu;