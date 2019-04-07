import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Sections/Login/Login'
import Portfolio from './components/Sections/Portfolio/Portfolio'
import Contact  from './components/Sections/Contact/Contact'
import Admin from './components/Sections/Admin/Admin';
import PrivateRoute from './components/Navigation/PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {usuarios} from './datos/usuarios.json'

class App extends Component {

  constructor(...props){
	  super(...props)
	  this.state={
		  usuarios,
		  usuariosActivos: 0
	  }
	  this.cerrarSession = this.cerrarSession.bind(this)
	  this.loginDeUsuario = this.loginDeUsuario.bind(this)
	  this.buscaUsuario = this.buscaUsuario.bind(this);

  }

  cerrarSession(){
	  this.setState({
		  usuarios : this.state.usuarios.map(usuario => {
			if(usuario.activo === true) usuario.activo = false
			return usuario
		  }),
		  usuariosActivos : this.state.usuarios.filter(usuario => usuario.activo === true).length
	  })
  }

  loginDeUsuario(e){
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
				}),
				usuariosActivos : this.state.usuarios.filter(usuario => usuario.activo === true).length
			});
			document.getElementById('respuesta').innerHTML = '';
			document.getElementById('respuesta').innerHTML = '<div class="alert alert-dismissible alert-success">'
						+'<button type="button" class="close" data-dismiss="alert">&times;</button>'
						+'<strong>Enhorabuena!</strong> ya puede acceder a su panel de Admin'
					+'</div>'
			document.getElementById('formLogin').reset();
		}else{
			document.getElementById('respuesta').innerHTML = '<div class="alert alert-dismissible alert-danger">'
					+'<button type="button" class="close" data-dismiss="alert">&times;</button>'
					+'<strong>Error!</strong> El usuario ingresado no existe'
					+'</div>';
			document.getElementById('formLogin').reset();
		}
    }

  	buscaUsuario(datos){
		const usuariosEncontrados = this.state.usuarios.filter((usuario)=> usuario.email === datos.email &&usuario.password === datos.password)
		return usuariosEncontrados[0];
	}

  render() {
    return (
		<Router>
			<Navigation 
					cerrarSession = { this.cerrarSession } 
					usuariosActivos = {this.state.usuariosActivos}
			/>
			<Switch>
				<Route path="/" exact component={Login}></Route>
				<Route path="/login"
					   render={(routeProps) => (<Login {...routeProps} loginDeUsuario={this.loginDeUsuario}/>) } 
				>
				</Route>
				<Route path="/portfolio" component={Portfolio}></Route>
				<PrivateRoute path="/admin" component={Admin} />
				<Route path="/contact" component={Contact}></Route>
			</Switch>
		</Router>
			
    );
  }
}

export default App;
