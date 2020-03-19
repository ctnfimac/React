import React, { Component } from 'react';
import ConditionalSection  from './sections/conditional';
import ListaDeNumeros from './sections/numeros';

class App extends Component{
  constructor(){
    super()
    this.state = {
      numeros: NaN 
    }
  }

  componentWillMount(){
    this.setState({
      numeros : [1,2,3,4,5,6]
    })
  }

  render(){
    return (
      <div className="App">
        <ConditionalSection estado = {true} />
        <ListaDeNumeros numeros = { this.state.numeros } />
      </div>
    );
  }
}

export default App;
