import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component {

  //criando variavel de estado para que sempre que a variavel products for alterada o render atualizar
  state = {
    products: [],
    productInfo: {},
    page:1,
  };

  //este metodo é executado assim que é exibido o componente em tela
  componentDidMount(){
    this.loadProducts();
  }

  //colocando o parametro page sendo o default 1
  loadProducts = async (page = 1) => {
    // utilizar `` quando tiver ${varivel}
    const response = await api.get(`/products?page=${page}`);

    //criando duas variaveis docs e productInfo usando rest operator
    const {docs, ...productInfo} = response.data;

    // colocando para alterar o estado do numero da pagina 
    this.setState({ products: docs,productInfo,page });
  };

  prevPage = () =>{
    // pegando os valores do state
    const {page,...productInfo} = this.state;

    //se estiver na primeira pagina nao faz nada
    if(page === 1) return;

    const pageNumber = page - 1;
    //chama o metodo passando a varivel com o numero da pagina
    this.loadProducts(pageNumber);
  }
  nextPage = () =>{

    // pegando os valores do state
    const {page,productInfo} = this.state;

    //se estiver na ultima pagina nao faz nada
    if(page === productInfo.pages) return;

    const pageNumber = page + 1;
    //chama o metodo passando a varivel com a proxima pagina
    this.loadProducts(pageNumber);
  }
  render(){
    //desestruturacao para buscar a variavel products dentro do state
    const { products,page,productInfo } = this.state;
    return (
      <div className= "product-list">
        {/* usando o map para percorrer a lista e criar um produto para cada item da lista */}
        {products.map(product =>(
          /*usando map sempre informar key */
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            
            <a href="">Acessar</a>
          </article>
        ))}
        <div className="actions">
          condicao pra desabilitar o botao
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages}onClick={this.nextPage}>Próxima</button>
        </div>
      </div>
    );
  }
}