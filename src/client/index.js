import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import Signin from "./js/containers/signin.js";
import Signup from "./js/containers/signup.js";
import Navigation from "./js/containers/navigation.js";
import Error from "./js/containers/error.js";
import Home from "./js/containers/home.js";
import Root from "./js/containers/root.js";
import StyleGuide from "./js/containers/styleguide.tsx";

import reducers from './js/reducer';
import Account from "./js/containers/account.js";
import Cart from "./js/containers/cart/cart.js";
import Header from "./js/components/Header.tsx";
import DetailProduct from "./js/containers/detail_product.tsx";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                {/* <Navigation/> */}
                <Header />
                <Switch>
                    <Route exact={true} path='/' component={Root}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/signin' component={Signin}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/styleguide' component={StyleGuide}/>
                    <Route path="/product/:product_name" component={DetailProduct}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);