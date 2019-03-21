import React from 'react'
import Navigation from '../../Navigation/Navigation';
import './Portfolio.css'

const Portfolio = ()=>(
	<React.Fragment>
		<Navigation />
		<div class="card card-image card-image__portfolio">
			<div class="text-white text-center py-5 px-4 my-5">
				<div>
					<h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>PortFolio</strong></h2>
				</div>
			</div>
		</div>
	</React.Fragment>
)

export default Portfolio