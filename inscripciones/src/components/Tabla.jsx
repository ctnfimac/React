import React, {Component} from 'react'
import {header, tablaContent} from './../datos/tabla.json'

class Tabla extends Component{
	constructor(props){
		super(props);
		this.state = {
			header,
			tablaContent
		}
	}
	render(){

		// datos traidos del json
		const tablacabecera = this.state.header.map((item,i)=>
			<th key={i}><i className={ "fas fa-leaf mr-2 " + item.color} aria-hidden="true"></i>{item.dia}</th>
		);
		
		const tablaMorning = this.state.tablaContent[0].morning.map((item,i)=>
			<th key={i}><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>{item}</th>
		);

		const tablaLate = this.state.tablaContent[0].late.map((item,i)=>
			<th key={i}><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>{item}</th>
		);
		
		const tablaNight = this.state.tablaContent[0].night.map((item,i)=>
			<th key={i}><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>{item}</th>
		);

		return(
			<table className="table table-bordered white">
				<thead>
					<tr>
					 	{tablacabecera}
					</tr>
				</thead>

				<tbody>
					<tr>
						{tablaMorning}
					</tr>
					<tr>
						{tablaLate}
					</tr>
					<tr>
						{tablaNight}
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Tabla;