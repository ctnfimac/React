import React from 'react'


const Post = () => (
    <section className="api mt-5" id="api">
        <div className="container p-2">
            <div className="row justify-content-center">
                <h3 className="mb-4 col-sm-12 text-center">Agregar un Registro a la tabla Personas</h3>
                <div className="mb-4 bg-dark col-sm-12 col-md-6 pb-3">
                    <div className=" justify-content-md-between pl-5 pt-4">
                        <div className="opcion">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button id="agregar" className="btn btn-success" type="button">Agregar Persona</button>
                                </div>
                            </div>  
                        </div>
                        <form>
                            <div className="form-group row">
                                <label for="codigo" className="col-sm-2 col-form-label text-white">Código</label>
                                <div className="col-sm-6">
                                <input type="text" className="form-control" id="add_codigo" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="nombre" className="col-sm-2 col-form-label text-white">Nombre</label>
                                <div className="col-sm-6">
                                <input type="text" className="form-control" id="add_nombre" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="apellido" className="col-sm-2 col-form-label text-white">Apellido</label>
                                <div className="col-sm-6">
                                <input type="text" className="form-control" id="add_apellido" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="nacimiento" className="col-sm-2 col-form-label text-white">Nacimiento</label>
                                <div className="col-sm-6">
                                <input type="text" className="form-control" id="add_nacimiento" />
                                </div>
                            </div>
                        </form>
                        <div id="rta_agregarPersona" className="table-responsive" ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


export default Post;