import React from 'react';

const TablaFilaItem = (props)=>{
	if(props.matter==="") return <th key={props.id}><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i></th>
	else return <th key={props.id}>{props.matter}
					<button  
							className="border border-0 pt-1 white fas fa-trash-alt float-right red-text"
							/*onClick = { this.delete("morning") }*/ >
					</button>
				</th>
}



export default TablaFilaItem ;