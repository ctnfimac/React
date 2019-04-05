import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Sections/Login/Login'
import Portfolio from './components/Sections/Portfolio/Portfolio'
import Contact  from './components/Sections/Contact/Contact'
import Admin from './components/Sections/Admin/Admin';
import PrivateRoute from './components/Navigation/PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
		<Router>
			<Navigation />
			<Switch>
				<Route path="/" exact component={Login}></Route>
				<Route path="/login" component={Login} >
				</Route>
				<Route path="/portfolio" component={Portfolio}></Route>
				<PrivateRoute path="/admin" component={Admin} />
				<Route path="/contact" component={Contact}></Route>
			</Switch>
		</Router>
			
    );
  }
}

export default App;
