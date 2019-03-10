import React, {Component} from 'react';
import logo from './../logo.svg';

class Menu extends Component{
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark primary-color d-flex justify-content-between">
				<a className="navbar-brand" href="#">Inscripción</a>
				<a className="navbar-brand" href="#"><span className="fas fa-clipboard-list text-white">(0)</span></a>
				<img src={logo} className="App-logo" alt="logo" width="100px" height="50px"/>
			</nav>
		);
	}
}


export default Menu;