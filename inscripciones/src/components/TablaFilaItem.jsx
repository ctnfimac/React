import React from 'react';

const TablaFilaItem = (props)=>{
	if(props.matter==="") return <th key={props.id}><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i></th>
	else return <th key={props.id} className="d-flex justify-content-around">
					{props.matter} 
					<ul className="fa-ul p-0 m-0">
						<button  
								className="m-0 border border-0 pt-1 white fas fa-trash-alt red-text"
								onClick = { props.delete.bind(this,props.id) } >
						</button>
						<button 
								data-toggle="modal" 
								data-target={ "#m" + props.id}
								className="m-0 fas fa-eye border border-0 pt-1 white red-text text-warning"
						></button>
					</ul>
				</th>
}

export default TablaFilaItem ;