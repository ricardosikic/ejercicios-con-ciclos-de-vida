import React, { Fragment } from 'react';

export class Example3 extends React.Component {
    
    // inicializo el obj state en 0
    state = {
        count: 10,
    }
    
    // luego de renderizado el componente llamo al metodo componentDidMount()
    componentDidMount() {
        this.timeID = setInterval(() => {
            this.setState({
                count: this.state.count -1
            })
        }, 500);
    }

    // cuando hay cualquier cambio dentro del state llamo al metodo componentdidupdate
    // para limpiar el counter una vez alcanzado el 0
    componentDidUpdate() {
        if(this.state.count === 0) {
            clearInterval(this.timeID)
            console.log('limpio')
        }
    }
    
    componentWillUnmount() {
            clearInterval(this.timeID);
            console.log('contador limpio')
    }

    render() {
        return(
            <Fragment>
                <h3>timer</h3>
                {this.state.count}
            </Fragment>
        );
    }
}