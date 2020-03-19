import React, { Component } from 'react';
import ConditionalSection  from './sections/conditional';
import ListaDeNumeros from './sections/numeros';
import ListaDeObjetos from './sections/objetos';
import objetos from './data/objetos'

class App extends Component{
  constructor(){
    super()
    this.state = {
      numeros: NaN 
    }
  }

  componentWillMount(){
    // let listaDeObjetos = [
    //   {
    //     codigo: 1,
    //     nombre: 'gel',
    //     precio: 200
    //   },
    //   {
    //     codigo: 2,
    //     nombre: 'barbijo',
    //     precio: 1000
    //   },
    //   {
    //     codigo: 3,
    //     nombre: 'lavandina',
    //     precio: 600
    //   }
    // ]

    this.setState({
      numeros : [1,2,3,4,5,6],
      objetos: objetos
    })

  }

  render(){
    return (
      <div className="App">
        <ConditionalSection estado = {true} />
        <ListaDeNumeros numeros = { this.state.numeros } />
        <ListaDeObjetos objetos = { this.state.objetos } />
      </div>
    );
  }
}

export default App;
