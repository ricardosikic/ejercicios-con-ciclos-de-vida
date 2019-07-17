import React, { Fragment } from 'react';
import './App.css';


export class Example4 extends React.Component {
    state = {
        counter: 1,
        alert: false
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                counter: this.state.counter +1
            })
            if(this.state.counter === 10) {
                this.setState({
                    alert: true
                })
            }
        }, 500);

        
    }
    
    // luego que actualiza hasta ese valor se limpia el timer
    componentDidUpdate(){
        if(this.state.counter === 10) {
            clearInterval(this.timerID)

        }
    }
    render() {
        return(
            <Fragment>
                <h1>hello example4</h1>
                <Contador {...this.state}/>
            </Fragment>
        );
    }
}

// a traves de props paso data a mi componente hijo que consume del state padre.
// para que pueda pasarle data debo llamarlo en el componente que le pasara la data

const Contador = (props) => {
    const {counter, alert} = props;
    console.log(alert);
    return(
    <Fragment>
        <h4>contador: {counter}</h4>
        {/* aplico un condicional ternario que activa una animacion por medio de los CSS */}
        <div className={alert ? 'display' : 'hide'}>
            <h1>llegaste!</h1>
        </div>
    </Fragment>
    );
}

