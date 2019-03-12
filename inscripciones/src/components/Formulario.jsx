import React, { Component } from 'react';

import {dias, horarios} from './../datos/form.json';

class Formulario extends Component{

	constructor(props){
		super(props);
			this.state = {
				dias,
				horarios,
				materia: '',
				day: '',
				turn: ''		
			}
		this.addMateria = props.addMateria;
		this.setMateria = this.setMateria.bind(this);
		this.actualizoForm = this.actualizoForm.bind(this);
	}

	actualizoForm(e){
		const {value,name} = e.target;
		this.setState ({
			[name] : value
		})
	}

	setMateria(e){
		e.preventDefault();
		const datos = {
			materia : this.state.materia,
			day :  this.state.day,
			turn : this.state.turn
		}
		document.getElementById("formu").reset();
		this.props.addMateria(datos);
	}

	render(){
		const dias = this.state.dias.map((dia,i)=>
			<option value={i} key={i}>{dia}</option>
		);
		
		const horarios = this.state.horarios.map((horario,i)=>
			<option value={i} key={i}>{horario}</option>
		);

		return(
			<form id="formu" className="text-center border border-light p-5 white" onSubmit = {this.setMateria}>
				<p className="h4 mb-4">Inscription</p>
				<input 
						type="text" 
						name="materia" 
						className="form-control mb-4" 
						placeholder="Matter´s name" 
						onChange={this.actualizoForm}
				/>

				<select 
					name="day"
					className="browser-default custom-select custom-select-lg mb-3"
					onChange={this.actualizoForm}
				>
					<option>Choose your day</option>
					{dias}
				</select>

				<select 
					name="turn"
					className="browser-default custom-select custom-select-lg mb-3"
					onChange={this.actualizoForm}
				>
					<option>Choose your turn</option>
					{horarios}
				</select>
    			<button className="btn btn-info btn-block" type="submit">Add</button>
			</form>
		)
	}
}

export default Formulario;