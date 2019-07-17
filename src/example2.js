import React, { Fragment } from 'react';

export class Example2 extends React.Component {
    
    // inicializo un objeto state con 2 atributos
    state = {
        posts: [],
        isLoaded: false
    }
    
    // llamo al metodo componentDidMount() y este a su vez llama a la funcion/metodo getData
    // esta se encarga del fetch
    componentDidMount(){
        this.getData();
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => {
            console.log('status ', resp.status);
            return resp.json();
        })
        .then(datos => {
            // una vez recibida la data del endpoint
            console.log(datos);
            this.setState({
                posts: datos,
                // como recibi la data
                isLoaded: true
            })
        })
    }

    render(){
        return(
            <Fragment>
              <h2>Datos disponibles</h2>
              <ul>
                  {this.state.isLoaded ? (
                      this.state.posts.map((post, index) => {
                          return(<li key={post.id}>{post.title}</li>)
                      })
                  ):(
                     <h4>lo siento no hay posts disponibles</h4>
                  )
                }
              </ul>
            </Fragment>
        );
    }
}