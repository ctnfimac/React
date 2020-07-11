import React from 'react';
import ListaProductos from './componentes/ListaProductos';
import ListaResueltos from './componentes/ListaResueltos';
import './styles/styles.scss';

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
