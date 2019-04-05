import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Admin from './../Sections/Admin/Admin'
import {usuarios} from './../../datos/usuarios.json'


class PrivateRoute extends Component{

	constructor(...props){
		super(...props);
		this.state={
			usuarios
		}
		this.buscaUsuarioActivo = this.buscaUsuarioActivo.bind(this);
	}

	buscaUsuarioActivo(){
		let existe = 0;
		existe = this.state.usuarios.filter(usuario=>usuario.activo === true).length
		//console.log('existe: ', existe)
		return existe === 0  ? false : true ; 
	}

	render(){

		return(
			<Route 
				render={ (...props)=>(
					(this.buscaUsuarioActivo())? 
						<Admin />
					: 
						<Redirect to='/login'/>	
				)}
			/>
		)
	}
}

// const PrivateRoute = (...props) => (
	
// );

export default PrivateRoute;