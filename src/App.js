import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import NewProduct from './components/Products/NewProduct';
import EditProduct from './components/Products/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/new" component={NewProduct} />
          <Route
            exact
            path="/products/edit/:id"
            component={EditProduct}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
