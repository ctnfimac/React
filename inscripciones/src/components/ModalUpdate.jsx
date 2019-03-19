import React from 'react'

const ModalUpdate = ()=>(
		 <div className="modal fade p-2 show red d-block" id="modalUpdate" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<form id="formu" className="text-center border border-light p-5 white" onSubmit = {this.setMateria}>
						<p className="h4 mb-4">Inscription</p>
						<div className="md-form">
							<input 
								type="text" 
								name="materia" 
								className="form-control mb-4" 
								onChange={this.actualizoForm} 
							/>
							<label>Matter's name</label>
						</div>

						<select 
							name="day"
							className="browser-default custom-select custom-select-sm mb-3"
							onChange={this.actualizoForm}
						>
							<option>Choose your day</option>
							{dias}
						</select>

						<select 
							name="turn"
							className="browser-default custom-select custom-select-sm mb-3"
							onChange={this.actualizoForm}
						>
							<option>Choose your turn</option>
							{horarios}
						</select>
						<div className="md-form">
							<textarea 
								id="description" 	
								name="description"
								onChange={this.actualizoForm} 
								className="md-textarea form-control"
								rows="3">
							</textarea>
							<label>Description</label>
						</div>
						<button className="btn btn-info btn-block" type="submit">Add</button>
					</form>
				</div>
			</div>
		</div>
)

/*
	<form id="formu" className="text-center border border-light p-5 white" onSubmit = {this.setMateria}>
				<p className="h4 mb-4">Inscription</p>
				<div className="md-form">
					<input 
						type="text" 
						name="materia" 
						className="form-control mb-4" 
						onChange={this.actualizoForm} 
					/>
					<label>Matter's name</label>
				</div>

				<select 
					name="day"
					className="browser-default custom-select custom-select-sm mb-3"
					onChange={this.actualizoForm}
				>
					<option>Choose your day</option>
					{dias}
				</select>

				<select 
					name="turn"
					className="browser-default custom-select custom-select-sm mb-3"
					onChange={this.actualizoForm}
				>
					<option>Choose your turn</option>
					{horarios}
				</select>
				<div className="md-form">
					<textarea 
						id="description" 	
						name="description"
						onChange={this.actualizoForm} 
						className="md-textarea form-control"
						rows="3">
					</textarea>
					<label>Description</label>
				</div>
    			<button className="btn btn-info btn-block" type="submit">Add</button>
			</form>
*/