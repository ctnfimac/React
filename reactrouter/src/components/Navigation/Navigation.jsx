import React from 'react'
import {
	Link,
	Redirect,
 	withRouter // permite switch para modificar el valor de una ruta
} from 'react-router-dom'

const Navigation = (props) => {
	const { history } = props;
	return(
		<React.Fragment>
		<button onClick ={ () => history.push('/Login')}>
			go to login
		</button>
		<ul>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/portfolio">Portfolio</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>

	{false && <Redirect to="/dashboard" /> }
	</React.Fragment>
	)
}


export default withRouter(Navigation);