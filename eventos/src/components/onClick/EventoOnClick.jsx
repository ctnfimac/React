import React, {Component} from 'react'
import './EventoOnClick.css'


const COLORES = [
    '#a29bfe', 
    'steelblue', 
    '#fab1a0', 
    'white', 
    'forestgreen'
]


class EventoOnClick extends Component{

    constructor(){
        super()
        this.state = { color : '#fff'}
    }

    _renderButton = (color) =>{
        return(
            <button 
                key = {color}  
                onClick={ () => this.setState({color:color}) }
                className= 'btn-option' 
                style = {{ backgroundColor : color}} 
            >   
            </button>
        )
    }
    
    render(){
        return(
            <section className="eventonclick">
                <div className="container">
                    <h2 className="titulo">Evento onClick</h2>
                    <div className="event-content">
                        <div className="menu">
                            { Object.values(COLORES).map(this._renderButton)}
                        </div>
                        <Panel color= {this.state.color}/>
                    </div>
                </div>
            </section>
        )
    }
}

class Panel extends Component{

    constructor(props){
        super(props)
        this.state = {
            color: props.color
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(this.props.color !== prevProps.color){
    //         this.setState(prevProps)
    //         console.log('entro al if')
    //     }       
    //     console.log('entro',prevProps,this.props.color )ab1a0
    //     console.log('prevState', prevState)
    // }

    componentWillReceiveProps(nextProps){
        this.setState({ color: nextProps.color})
    }

    render(){
        return(
            <div className="panel" style={{backgroundColor:this.state.color}}></div>
        )
    }
}


export default EventoOnClick;