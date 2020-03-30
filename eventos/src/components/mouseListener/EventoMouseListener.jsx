import React , { Component } from 'react'
import './EventoMouseListener.css'

class EventoMouseListener extends Component{

    constructor(){
        super()
        this.state = {
            x : 0,
            y : 0
        }
    }

    _eventOnMouseMove = (e) =>{
        const { clientX , clientY } = e
        this.setState({
            x: clientX,
            y: clientY
        })

    }

    render(){
        return(
            <section className="eventonclick">
                <div className="container">
                    <h2 className="titulo">Evento onMouseEvent</h2>
                    <div className="event-content">
                        <div className="menu">
                        </div>
                        <div  
                            style={{backgroundColor:'#fff',width:'100%', height:'300px'}}
                            onMouseMove = { this._eventOnMouseMove }
                        >
                        <span className="coordenadas">(x ; y) =  ( { this.state.x } ; { this.state.y } ) </span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default EventoMouseListener;