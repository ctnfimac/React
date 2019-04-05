import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Admin from './../Sections/Admin/Admin'

const PrivateRoute = () => (
	<Route 
		render={ (props)=>(
			(true)? 
				<Admin />
			: 
				<Redirect to='/login'/>	
		)}
	/>
);

export default PrivateRoute;