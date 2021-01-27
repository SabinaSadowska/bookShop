import React from "react";
import ReactDOM from "react-dom";
import Books from "./components/BooksPage/Books";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Basket from "./components/BasketPage/Basket";
import Form from "./components/FormPage/Form";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
