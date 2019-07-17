import React, { Fragment } from 'react';
import './App.css';

export class Example1 extends React.Component {
  
  // inicializar objeto state
  state = {
    posts: []
  }
  
  // luego de renderizado el componente
  // llama al metodo component didmount que dispara una llamada a la api
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
      console.log('codigo status ', resp.status);
      return resp.json();
    })
    // los datos recibidos de la api, los ingreso a el state inicial.
    // para hacer una actualizacion del state debo usar el metodo setState({})
    .then(datos => {
      console.log(datos)
      this.setState({
        posts: datos
      })
    })
  }

  // ahora renderizo los datos contenidos en el objeto state.posts que es un arreglo
  // tambien quiero hacer que los titulos empiecen con el primer caracter en Mayuscula
  render() {

    return(
      <Fragment>
      <h1>Posts recibidos:</h1>
      <ul>
        {this.state.posts.map((post, index) => {
          const word = post.title.slice(1, );
          const title = post.title.charAt(0);
          const mayusc = title.toUpperCase();
          const entire = mayusc + word;
          return(
            <li key={post.id}>{entire}</li>
          )
        })}
      </ul>
      </Fragment>
    )
  }
}