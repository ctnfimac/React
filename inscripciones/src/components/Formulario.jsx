import React, { Component } from 'react';

import {dias, horarios} from './../datos/form.json';

class Formulario extends Component{

	constructor(props){
		super(props);
			this.state = {
				dias,
				horarios
			}
	}

	render(){
		const dias = this.state.dias.map((dia,i)=>
			<option value={i} key={i}>{dia}</option>
		);
		
		const horarios = this.state.horarios.map((horario,i)=>
			<option value={i} key={i}>{horario}</option>
		);

		return(
			<form  className="text-center border border-light p-5 white">
				<p className="h4 mb-4">Inscription</p>
				<input type="text" id="defaultSubscriptionFormPassword" className="form-control mb-4" placeholder="Matter´s name" />
				<select className="browser-default custom-select custom-select-lg mb-3">
					<option selected>Choose your day</option>
					{dias}
				</select>
				<select className="browser-default custom-select custom-select-lg mb-3">
					<option selected>Choose your turn</option>
					{horarios}
				</select>
    			<button className="btn btn-info btn-block" type="submit">Add</button>
			</form>
		)
	}
}

export default Formulario;