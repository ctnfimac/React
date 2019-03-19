import React, {Component} from 'react'
import {header, tablaContent} from './../datos/tabla.json'
import {dias,horarios} from './../datos/form.json';
import TablaFila from './TablaFila';

class Tabla extends Component{
	constructor(props){
		super(props);
		this.state = {
			header,
			tablaContent,
		}
		const ndias = dias.length * horarios.length;
		for( let i = this.state.tablaContent.length + 1 ; i <= (ndias ) ; i++ ){
				this.state.tablaContent.push(
					{
						"id": i ,
						"matter": "",
						"turn": "",
						"day": "",
						"description": ""
					}
				);
		}
		this.delete = this.delete.bind(this);
		this.editMatterModal = this.editMatterModal.bind(this);
	}

	delete(index){
		 this.props.deleteMateria(index);
	}


	editMatterModal(index){
		//console.log('abro modal: ' , index);
		const datoMateria = this.state.tablaContent.filter(tabla => tabla.id === index)
		this.props.editMatterModal(datoMateria[0])
	}

	render(){
		// datos traidos del json
		const tablacabecera = this.state.header.map((item,i)=>
			<th key={i}><i className={ "fas fa-leaf mr-2 " + item.color} aria-hidden="true"></i>{item.dia}</th>
		);
		
		const arrayDeFilas = new Array(horarios.length);
		for( let i = 0 ; i < horarios.length ; i++){
			arrayDeFilas[i] = this.state.tablaContent.filter(item=>item.id > (i * 6) && item.id <= (6*(i+1)));
		}
	
		return(
			<table className="table table-bordered white">
				<thead>
					<tr>
					 	{tablacabecera}
					</tr>
				</thead>

				<tbody>
					{
						arrayDeFilas.map((fila , i)=>
							<TablaFila 
								key = { fila + i }
								fila = {fila} 
								delete = { this.delete }
								openModal = { this.editMatterModal }
							/>
						)
					}
				</tbody>
			</table>
		);
	}
}

export default Tabla;