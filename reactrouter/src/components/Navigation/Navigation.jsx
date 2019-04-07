import React, {Component} from 'react'

import {
	Link
} from 'react-router-dom'


class Navigation extends Component{

	constructor(props){
		super(props)
		
		this.cerrarSession = this.cerrarSession.bind(this)
		// this.hayUsuario = this.hayUsuario.bind(this)
	}

	cerrarSession(){
		this.props.cerrarSession();
	}

	// hayUsuario(){
	// 	let usuariosEncontrados = 0;
	// 	usuariosEncontrados = this.state.usuarios.filter((usuario)=> usuario.activo === true).length
	// 	console.log(usuariosEncontrados)
	// 	return usuariosEncontrados;
	// }

	render(){
		
		const profile = (true) ? 
			<li className="nav-item dropdown">
				<button className="nav-link dropdown-toggle unique-color-dark" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true"
				aria-expanded="false">
				<i className="fas fa-user"></i> Profile </button>
				<div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
				<Link className="nav-link dropdown-item text-dark pl-4" to="/admin">Admin</Link>
				<button className="dropdown-item" onClick={this.cerrarSession}>Salir</button>
				</div>
			</li>
			: '' ;

		return(
			<nav className="mb-1 navbar navbar-expand-lg navbar-dark unique-color-dark">
				<a className="navbar-brand" href="/">ReactRouter</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
					aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent-4">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/portfolio">Portfolio</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">Contact</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/login">Login</Link>
						</li>
						{profile}		
					</ul>
				</div>
			</nav>
		)
	}
}


export default Navigation;