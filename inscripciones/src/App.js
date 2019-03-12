import React, { Component } from 'react';
import './App.css';

// components
import Menu from './components/Menu';
import Formulario from './components/Formulario';
// import Tabla from './components/Tabla';
import Tabla from './components/Tablax';

import {header, tablaContent} from './datos/tabla.json'

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
	  switch(dato.turn){
		  case 'morning':
		 	    tablaContent[0].morning[dato.day] = dato.materia;
		  		break;
		  case 'late':
		  		tablaContent[0].late[dato.day] = dato.materia;
		  		break;
		  case 'night':
		  		tablaContent[0].night[dato.day] = dato.materia;
				  break;
		  default:
		  
		  	break;
	  }	

	  this.setState({
		  tablaContent
	  });

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
