import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
//import SubHeader from './Header/SubHeader';
import Checkout from './Checkout/Checkout';
import Product from './Product/Product';
import Banner3 from './Images/MI02.jpg';
import Login from './Login/Login';
import Products from './Product/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header/>
            <Home/>      
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/products">
            <Header/>
            <Products/>
          </Route>
          <Route path={`/product/:id`}>
            <Header/>
            <Product 
                        
                        title="Redmi 9 Plus AquaBlue 8GB RAM 128GB Storage"
                        price={15000}
                        image={Banner3}
                        discount="30"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
