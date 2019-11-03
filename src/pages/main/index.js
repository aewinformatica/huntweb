import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {

  //criando variavel de estado para que sempre que a variavel products for alterada o render atualizar
  state = {
    products: []
  };

  //este metodo é executado assim que é exibido o componente em tela
  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async ()=>{
    const response = await api.get('/products')

    this.setState({products: response.data.docs});
  }
  render(){
    return (
      <div className= "product-list">
        {/* usando o map para percorrer a lista e criar um produto para cada item da lista */}
        {this.state.products.map(product =>(
          /*usando map sempre informar key */
          <h2 key={product._id}>{product.title}</h2>
        ))}
      </div>
    );
  }
}