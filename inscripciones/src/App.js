import React, { Component } from 'react';
import './App.css';

// components
import Menu from './components/Menu';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';
import Modal from './components/Modal';
import FormUpdate from './components/FormUpdate';

// dates
import {header, tablaContent} from './datos/tabla.json'
import {dias} from './datos/form.json';

class App extends Component {

  constructor(props){
	  super(props);
	  this.state = {
		  header, 
		  tablaContent,
		  nMaterias : 0,
		  modalUpdateInfo: 	{
								"id": "" ,
								"matter": "",
								"turn": "",
								"day": "",
								"description": ""
							}
	  }

	  this.addMateria = this.addMateria.bind(this);
	  this.deleteMateria = this.deleteMateria.bind(this);
	  this.editMatter = this.editMatter.bind(this);
	  this.editMatterModal = this.editMatterModal.bind(this);
  }


  addMateria(dato){	
	const indice = ( dias.length * parseInt(dato.turn) ) + parseInt(dato.day) + 1 ;
	this.setState({
		tablaContent : this.state.tablaContent.map((item)=>{
			if(item.id === indice ){
				item.matter = dato.materia;
				item.day = dato.day;
				item.turn = dato.turn;
				item.description = dato.description;
			}
			return item;
		}),
		nMaterias : this.state.tablaContent.filter(item=> item.matter !== '').length
	})
	document.getElementById('formu').reset();
  }

  deleteMateria(index){
	this.setState({
		tablaContent: this.state.tablaContent.map((item)=>{
			if( item.id === index ){
				item.matter = "";
				item.day = "";
				item.turn = "";
				item.description = "";
			}
			return item;
		}),
		nMaterias : this.state.tablaContent.filter(item=> item.matter !== '').length
	})
  }

  editMatter(dato){
	const materia = this.state.tablaContent.filter(contenido => contenido.id === dato.id )[0];
	// let indice = materia.id;
	// indice = (dato.turn !== "" && dato.day !== "") ? ( dias.length * parseInt(dato.turn) ) + parseInt(dato.day) + 1 : indice;
	// indice = (dato.turn !== "" && dato.day === "") ? ( dias.length * parseInt(dato.turn) ) + parseInt(materia.day) + 1 : indice;
	// indice = (dato.turn === "" && dato.day !== "") ? ( dias.length * parseInt(materia.turn) ) + parseInt(dato.day) + 1 : indice;
	
	this.setState({
		tablaContent : this.state.tablaContent.map((item)=>{
			if(item.id === dato.id){
				item.matter = (dato.materia === "") ? materia.matter : dato.materia ;
				item.description = (dato.description === "") ? materia.description : dato.description;
			}
			return item;
		}),
		nMaterias : this.state.tablaContent.filter(item=> item.matter !== '').length
	})
	document.getElementById('formUpdate').reset();
  }


  editMatterModal(dato){
	  document.getElementById('formUpdate').reset();
	this.setState({
		modalUpdateInfo: dato
	})
  }

  render() {
    return (
      <div className="App mb-5">
	  	<Menu nItems= {this.state.nMaterias}/>
		<main className="mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 mb-3">
						<Formulario addMateria = {this.addMateria}/>
					</div>
					<div className="col-lg-9">
						<Tabla 
							deleteMateria = { this.deleteMateria }
							editMatterModal = { this.editMatterModal }
						/>
					</div>
				</div>
			</div>	
		</main>
		{
			this.state.tablaContent.map((item,i)=>(
				<Modal 
					key = { i }
					datos = { item }
				/>
			))		 
		}
		{ <FormUpdate 
				modalUpdateInfo = { this.state.modalUpdateInfo }
				editMatter = { this.editMatter }
		  /> 
		}
      </div>
    );
  }
}

export default App;
