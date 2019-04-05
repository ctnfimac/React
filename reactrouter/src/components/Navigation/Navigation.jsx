import React from 'react'
import {
	Link
} from 'react-router-dom'

const Navigation = () => {
	return(
		<nav className="mb-1 navbar navbar-expand-lg navbar-dark red darken-3">
			<a className="navbar-brand" href="/">ReactRouter</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
				aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent-4">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/portfolio">Portfolio</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/contact">Contact</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/login">Login</Link>
					</li>	
				</ul>
			</div>
		</nav>
	)
}


export default Navigation;