import React from "react";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from "./pages/main";
import Product from "./pages/product";


const Routes  = () => (
// derminar que utilizaremos as rotas em atraves de um browser
<BrowserRouter>
{/* permitir que apenas uma rota ao mesmo tempo */}
<Switch>
     {/* o path e o componente| usa se exact para abrir a primeira rota apenas se estive com /*/}
    <Route exact path="/" component= {Main} />
    {/* usa : para reber parametros */}
    <Route path="/products/:id" component= {Product} />
</Switch>
</BrowserRouter>
);

export default Routes;