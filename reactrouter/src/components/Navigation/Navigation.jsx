import React from 'react'
import {
	Link,
	Redirect,
 	withRouter // permite switch para modificar el valor de una ruta
} from 'react-router-dom'

const Navigation = (props) => {
	// const { history } = props;
	return(
		<nav class="mb-1 navbar navbar-expand-lg navbar-dark red darken-3">
			<a class="navbar-brand" href="/">Christian Peralta</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
				aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent-4">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<Link class="nav-link" to="/portfolio">Portfolio</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/contact">Contact</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/login">Login</Link>
					</li>	
				</ul>
			</div>
			{false && <Redirect to="/dashboard" /> }
		</nav>
	)
}


export default withRouter(Navigation);