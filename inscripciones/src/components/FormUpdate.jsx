import React , { Component } from 'react';

class FormUpdate extends Component{

	constructor(props){
		
		super(props);
			this.state = {
				materia: '',
				day: '',
				turn: '',
				description: ''
			}
		
		this.actualizoForm = this.actualizoForm.bind(this);
		this.updateMateria = this.updateMateria.bind(this);
	}

	actualizoForm(e){
		const {value,name} = e.target;
		this.setState ({
			[name] : value
		})
	}

	updateMateria(e){
		e.preventDefault();
		
		if(this.state.materia !== '' || this.state.day !== '' || this.state.turn !== '' || this.state.description !== ''){
			const datos = {
				id: this.props.modalUpdateInfo.id,
				materia : this.state.materia,
				day :  this.state.day,
				turn : this.state.turn,
				description : this.state.description
			}
			
			this.props.editMatter(datos);
			// para que no se quede guardado la materia anterior al modificar una nueva
			this.setState({
				materia: '',
				day: '',
				turn: '',
				description: ''
			})
		}

		
	}

	render(){
		return(
			<div className="modal fade p-2 p-2 left" id="modalUpdate"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-side modal-bottom-left" role="document">
					<div className="modal-content">
						<div className="modal-header success-color p-3 mdb-color white-text">
							<h3 className="modal-title text-center" id="exampleModalLabel">UPDATE MATTER</h3>
							<button type="button" className="close white-text" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
						<form id="formUpdate" className="text-center border border-light p-5 white" onSubmit = {this.updateMateria}>
							{/* <p className="h4 mb-4">Inscription</p> */}
							<div className="md-form">
								<input 
									type="text" 
									name= "materia"
									className="form-control mb-4" 
									placeholder= {this.props.modalUpdateInfo.matter}
									onChange = { this.actualizoForm }
								/>
							</div>

							{/* <select 
								name="day"
								className="browser-default custom-select custom-select-sm mb-3"
								onChange = { this.actualizoForm }
							>
								<option>{dias[this.props.modalUpdateInfo.day]}</option>
								{	dias.map((dia,i)=>
										<option value={i} key={i}>{dia}</option>
									)
								}
							</select> */}

							{/* <select 
								name="turn"
								className="browser-default custom-select custom-select-sm mb-3"
								onChange = { this.actualizoForm }
							>
								<option>{horarios[this.props.modalUpdateInfo.turn]}</option>
								{	horarios.map((horario,i)=>
										<option value={i} key={i}>{horario}</option>
									)
								}
							</select> */}
							<div className="md-form">
								<textarea 
									id="description" 	
									name="description"
									className="md-textarea form-control"
									placeholder = {this.props.modalUpdateInfo.description}						
									rows="3"
									onChange = { this.actualizoForm }
								>
								</textarea>
						
							</div>
							<div class="modal-footer">
								<button type="button" className="btn btn-info btn-block m-1" type="submit">Update</button>
								<button type="button" className="btn btn-warning btn-block m-1" type="submit" data-dismiss="modal">Close</button>
							</div>
						</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default FormUpdate;