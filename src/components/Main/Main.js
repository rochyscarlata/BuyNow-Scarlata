import React from 'react';
import NavBar from '../NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Main() {
    return (
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
      </Switch>
    </BrowserRouter>
    )
}

export default Main
