import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Admin from './../Sections/Admin/Admin'


class PrivateRoute extends Component{

	constructor(props){
		super(props);
		this.state={
			usuarioActivo : true
		}
		this.buscaUsuarioActivo = this.buscaUsuarioActivo.bind(this);
	}

	buscaUsuarioActivo(){
		return this.state.usuarioActivo;
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