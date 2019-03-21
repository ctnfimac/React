import React, { Component } from 'react';
import Login from './components/Sections/Login/Login'
import Portfolio from './components/Sections/Portfolio/Portfolio'
import Contact  from './components/Sections/Contact/Contact'

// import { BrowserRouter as Router, Route, Link } from "./react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<Route path="/" exact component={Login}></Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/portfolio" component={Portfolio}></Route>
			<Route path="/contact" component={Contact}></Route>
		</BrowserRouter>	
    );
  }
}

export default App;
