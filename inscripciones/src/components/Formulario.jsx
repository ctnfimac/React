import React, { Component } from 'react';

class Formulario extends Component{
	render(){
		return(
			<form  className="text-center border border-light p-5 white">
				<p class="h4 mb-4">Inscripción</p>
				<input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name" />

				<select class="browser-default custom-select custom-select-lg mb-3">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>

				<select class="browser-default custom-select custom-select-lg mb-3">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
    			<button class="btn btn-info btn-block" type="submit">Sign in</button>
			</form>
		)
	}
}

export default Formulario;