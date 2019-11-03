import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {

  //este metodo é executado assim que é exibido o componente em tela
  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async ()=>{
    const response = await api.get('/products')

    console.log(response.data.docs);
  }
  render(){
    return <h1>Hello Aewinformatica</h1>
  }
}