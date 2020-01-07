import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navegacion extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-primary">
                <Link className="navbar-brand" to="/#">API</Link>
                <ul className="ul-inline my-2 my-lg-0">
                    <Link to="/inicio" className="btn my-2 my-sm-0 ml-1 text-white">GET (all)</Link>
                    <Link to="/post" className="btn my-2 my-sm-0 ml-1 text-white">POST</Link>
                    <Link to="/delete" className="btn my-2 my-sm-0 ml-1 text-white">DELETE</Link>
                    <Link to="/put" className="btn my-2 my-sm-0 ml-1 text-white">PUT</Link>
                    <Link to="/get" className="btn my-2 my-sm-0 ml-1 text-white">GET (one)</Link>
                </ul>
            </nav>
        )
    }
}

export default Navegacion;