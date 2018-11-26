import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import './css/app.scss';

import Signin from "./js/containers/signin";
import Signup from "./js/containers/signup";
import Navigation from "./js/containers/navigation";
import Error from "./js/containers/error";
import Home from "./js/containers/home";
import Root from "./js/containers/root";
import StyleGuide from "./js/containers/styleguide";

import reducers from './js/reducer';
import Account from "./js/containers/account";
import Cart from "./js/containers/cart/cart";
import Header from "./js/components/Header";
import DetailProduct from "./js/containers/product_detail";

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
                    <Route path="/:product_name" component={DetailProduct}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);