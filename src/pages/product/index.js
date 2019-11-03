import React, {Component} from  "react";
import api from '../../services/api';

import './styles.css';

export default class Product  extends Component{

  state = {
    product: {}
  };

  async componentDidMount(){

    // desestruturacao do dom
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    // preenchendo o objeto product do state com os dados encontrados
    this.setState({ product : response.data });
  }
  render(){
    const { product } = this.state;
    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href={product.url}>{product.url}</a>
        </p>
      </div>
    );
  }
}