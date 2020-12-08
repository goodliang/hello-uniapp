import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './list.jsx';
import ProductForm from './edit.jsx';

const ProductRouter = () => {
  return (
    <Switch>
      <Route path="/product/list" component={ProductList}></Route>
      <Route path="/product/creat" component={ProductForm}></Route>
      <Route path="/product/detail/:id" component={ProductForm}></Route>
      <Route path="/product/edit/:id" component={ProductForm}></Route>
      <Redirect exact from="/product" to="/product/list"></Redirect>
    </Switch>
  );
};
export default ProductRouter;
