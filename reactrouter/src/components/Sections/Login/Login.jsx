import React, { Component } from 'react'
import './Login.css'
import {usuarios} from './../../../datos/usuarios.json'

class Login extends Component{
	constructor(...props){
		super(...props);

		this.state = {
			usuarios
		}

		this.login = this.login.bind(this);
		this.buscaUsuario = this.buscaUsuario.bind(this);
		console.log(this.state.usuarios)
	}

	login(e){
		e.preventDefault();
		let datos = {
			email: e.target.email.value,
			password: e.target.password.value
		}
		const usuarioEncontrado = this.buscaUsuario(datos);
		if(usuarioEncontrado !== undefined ){
			this.setState({
				usuarios : this.state.usuarios.map((usuario)=>{
					if(usuario.id === usuarioEncontrado.id)
							usuario.activo = true
					return usuario;
				})
			})
		}
	}

	buscaUsuario(datos){
		console.log('email: ', datos.email)
		console.log('password: ', datos.password)
		const usuariosEncontrados = this.state.usuarios.filter((usuario)=> usuario.email === datos.email &&usuario.password === datos.password)
		return usuariosEncontrados[0];
	}

	render(){
		return(
			<React.Fragment>
				<div className="card card-image card-image__login">
					<div className="text-white text-center py-5 px-4 my-5">
						<div>
							<form  onSubmit={this.login} className="text-center border border-light p-5 col-sm-8 col-md-6 col-lg-4 m-auto">
								<p className="h4 mb-4">Login</p>
								<input type="email" name="email" id="email" className="form-control mb-4" placeholder="E-mail" />
								<input type="password" name="password" id="password" className="form-control mb-4" placeholder="Password" />
								<button className="btn btn-info btn-block my-4" type="submit">Entrar</button>
							</form> 
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Login