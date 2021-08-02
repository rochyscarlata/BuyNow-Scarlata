import React from "react";
import NavBar from "../NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContext from "../../providers/CartProvider";
import Cart from "../Cart/Cart";
import Checkout from '../Checkout/Checkout';

function Main() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Nuestros productos:" />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer greeting="Nuestros productos:" />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default Main;
