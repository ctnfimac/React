import React, { Component } from 'react';
import './App.css';

// components
import Menu from './components/Menu';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';

// dates
import {header, tablaContent} from './datos/tabla.json'
import {dias} from './datos/form.json';

class App extends Component {

  constructor(props){
	  super(props);
	  this.state = {
		  header, 
		  tablaContent,
		  nMaterias : 0
	  }

	  this.addMateria = this.addMateria.bind(this);
	  this.deleteMateria = this.deleteMateria.bind(this);
  }


  addMateria(dato){	
	const indice = ( dias.length * parseInt(dato.turn) ) + parseInt(dato.day) + 1 ;
	this.setState({
		tablaContent : this.state.tablaContent.map((item)=>{
			if(item.id === indice ){
				item.matter = dato.materia;
				item.day = dato.day;
				item.turn = dato.turn;
			}
			return item;
		}),
		nMaterias : this.state.tablaContent.filter(item=> item.matter !== '').length
	})
  }

  deleteMateria(index){
	this.setState({
		tablaContent: this.state.tablaContent.map((item)=>{
			if( item.id === index ){
				item.matter = "";
				item.day = "";
				item.turn = "";
			}
			return item;
		}),
		nMaterias : this.state.tablaContent.filter(item=> item.matter !== '').length
	})
  }

  render() {
    return (
      <div className="App mb-5">
	  	<Menu nItems= {this.state.nMaterias}/>
		<main className="mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4">
						<Formulario addMateria = {this.addMateria}/>
					</div>
					<div className="col-lg-8">
						<Tabla deleteMateria = { this.deleteMateria }/>
					</div>
				</div>
			</div>	
		</main>	
      </div>
    );
  }
}

export default App;
