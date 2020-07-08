import React from 'react';
import './App.css';
import ListaProductos from './componentes/ListaProductos';
import ListaResueltos from './componentes/ListaResueltos';

function App() {
  return (
    <div className="App">
      <main className="main">
        <ListaProductos />
         <ListaResueltos />
      </main>
    </div>
  );
}

export default App;
