import React from 'react'

const Modal = (props) => {
	const dias = ["monday","thusday","wednesday","thursday","friday","saturday"]
	const turnos = ["monday","late","night"]
	return <div className="modal fade p-2" id={"m"+props.datos.id}  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
			<div className="modal-header info-color-dark p-3 mdb-color white-text">
				<h3 className="modal-title" id="exampleModalLabel">{props.datos.matter.toUpperCase()}</h3>
				<button type="button" className="close white-text" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
				<h4 className="text-left font-weight-bolder">Turn : <span className="text-default">{turnos[props.datos.turn]}</span></h4>
				<h4 className="text-left font-weight-bolder">Day : <span className="text-default">{dias[props.datos.day]}</span></h4>
				<h4 className="text-left font-weight-bolder">Description : <span className="text-default">{props.datos.description}</span></h4>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				{/* <button type="button" className="btn btn-primary">Save changes</button> */}
			</div>
			</div>
		</div>
	</div>
}


export default Modal;