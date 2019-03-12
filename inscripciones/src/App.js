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
		  tablaContent
	  }

	  this.addMateria = this.addMateria.bind(this);
	  this.deleteMateria = this.deleteMateria.bind(this);
  }

  addMateria(dato){	  
	//   switch(dato.turn){
	// 	  case 'morning':
	// 	 	    tablaContent[0].morning[dato.day] = dato.materia;
	// 	  		break;
	// 	  case 'late':
	// 	  		tablaContent[0].late[dato.day] = dato.materia;
	// 	  		break;
	// 	  case 'night':
	// 	  		tablaContent[0].night[dato.day] = dato.materia;
	// 			  break;
	// 	  default:
		  
	// 	  	break;
	//   }	

	//   this.setState({
	// 	  tablaContent
	//   });
	// const indice = ((parseInt(dato.day) + 1) * (parseInt(dato.turn) + 1) );// + 3 * (parseInt(dato.turn));
	const indice = ( dias.length * parseInt(dato.turn) ) + parseInt(dato.day) + 1 ;
	console.log('indice:',indice);
	console.log('tabla content: ', this.state.tablaContent);
	this.setState({
		tablaContent : this.state.tablaContent.map((item)=>{
			if(item.id === indice ){
				item.matter = dato.materia;
				item.day = dato.day;
				item.turn = dato.turn;
			}
			return item;
		})
	})
	console.log('estoy en addMateria', this.tablaContent)
  }

  deleteMateria(materia){
	console.log('estoy en deleteMateria()');
  }

  render() {
    return (
      <div className="App mb-5">
	  	<Menu />
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
