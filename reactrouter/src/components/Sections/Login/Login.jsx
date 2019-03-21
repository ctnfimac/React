import React from 'react'
import Navigation from '../../Navigation/Navigation'
import './Login.css'

const Login = ()=>(
	<React.Fragment>
		<Navigation />
		<div class="card card-image card-image__login">
			<div class="text-white text-center py-5 px-4 my-5">
				<div>
					<h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Login</strong></h2>
					<p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
						optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
					</p>
					<a class="btn btn-outline-white btn-md"><i class="fas fa-clone left"></i> View project</a>
				</div>
			</div>
		</div>
	</React.Fragment>
)

export default Login