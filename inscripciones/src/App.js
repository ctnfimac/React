import React, { Component } from 'react';
import './App.css';

// components
import Menu from './components/Menu';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';


class App extends Component {
  render() {
    return (
      <div className="App mb-5">
	  	<Menu />
		<main className="mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4">
						<Formulario />
					</div>
					<div className="col-lg-8">
						<Tabla />
					</div>
				</div>
			</div>	
		</main>	
      </div>
    );
  }
}

export default App;
