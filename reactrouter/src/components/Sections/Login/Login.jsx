import React, { Component } from 'react'
import './Login.css'


class Login extends Component{
	constructor(props){
		super(props);
		this.login = this.login.bind(this);
	}

	login(e){
		this.props.loginDeUsuario(e);
	}

	render(){
		return(
			<React.Fragment>
				<div className="card card-image card-image__login">
					<div className="text-white text-center py-5 px-4 my-5">
						<div>
							<div className = "col-sm-8 col-md-6 col-lg-4 m-auto">
								<div id="respuesta"></div>
								<form  onSubmit={this.login} className="text-center border border-light p-5" id="formLogin">
									<p className="h4 mb-4">Login</p>
									<input type="email" name="email" id="email" className="form-control mb-4" placeholder="E-mail" />
									<input type="password" name="password" id="password" className="form-control mb-4" placeholder="Password" />
									<button className="btn btn-info btn-block my-4" type="submit">Entrar</button>
								</form> 
						
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Login