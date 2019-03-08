import React, {Component} from 'react'


class Tabla extends Component{
	render(){
		return(
			<table className="table border white">
				<thead>
					<tr>
					<th><i className="fas fa-leaf mr-2 purple-text" aria-hidden="true"></i>Lunes</th>
					<th><i className="fas fa-leaf mr-2 blue-text" aria-hidden="true"></i>Martes</th>
					<th><i className="fas fa-leaf mr-2 teal-text" aria-hidden="true"></i>Miércoles</th>
					<th><i className="fas fa-leaf mr-2 indigo-text" aria-hidden="true"></i>Jueves</th>
					<th><i className="fas fa-leaf mr-2 amber-text" aria-hidden="true"></i>Viernes</th>
					<th><i className="fas fa-leaf mr-2 brown-text" aria-hidden="true"></i>Sabado</th>
					</tr>
				</thead>

				<tbody>
					<tr>
					<th><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>Cell 4</th>
					<td><i className="far fa-gem mr-2 grey-text" aria-hidden="true"></i>Cell 1</td>
					<td><i className="fas fa-download mr-2 grey-text" aria-hidden="true"></i>Cell 2</td>
					<td><i className="fas fa-book mr-2 grey-text" aria-hidden="true"></i>Cell 3</td>
					<td><i className="fas fa-book mr-2 grey-text" aria-hidden="true"></i>Cell 3</td>
					<td><i className="fas fa-book mr-2 grey-text" aria-hidden="true"></i>Cell 3</td>
					</tr>
					<tr>
					<th><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>Cell 4</th>
					<td><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>Cell 4</td>
					<td><i className="fas fa-gift mr-2 grey-text" aria-hidden="true"></i>Cell 5</td>
					<td><i className="fas fa-image mr-2 grey-text" aria-hidden="true"></i>Cell 6</td>
					<td><i className="fas fa-image mr-2 grey-text" aria-hidden="true"></i>Cell 6</td>
					<td><i className="fas fa-image mr-2 grey-text" aria-hidden="true"></i>Cell 6</td>
					</tr>
					<tr>
					<th scope="row"><i className="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>Cell 4</th>
					<td><i className="fas fa-magic mr-2 grey-text" aria-hidden="true"></i>Cell 7</td>
					<td><i className="fas fa-table mr-2 grey-text" aria-hidden="true"></i>Cell 8</td>
					<td><i className="fas fa-edit mr-2 grey-text" aria-hidden="true"></i>Cell 9</td>
					<td><i className="fas fa-edit mr-2 grey-text" aria-hidden="true"></i>Cell 9</td>
					<td><i className="fas fa-edit mr-2 grey-text" aria-hidden="true"></i>Cell 9</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Tabla;