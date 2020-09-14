import React from 'react';
import { Provider } from 'react-redux';
// import store from './store';
import store from './redux/store';
import ListaProductos from './componentes/ListaProductos';
import ListaResueltos from './componentes/ListaResueltos';
import './styles/styles.scss';

const App = () => (
    <Provider store = {store}>
      <div className="App">
        <main className="main">
          <ListaProductos />
          <ListaResueltos />
        </main>
      </div>
    </Provider>
)

export default App;
