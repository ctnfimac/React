import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navegacion extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                <Link className="navbar-brand" to="/inicio">API</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/post" className="nav-link">Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/delete" className="nav-link">Delete</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/put" className="nav-link">Put</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Get
                        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to="/inicio" className="dropdown-item">all</Link>
                                <Link to="/get" className="dropdown-item">one</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Navegacion;