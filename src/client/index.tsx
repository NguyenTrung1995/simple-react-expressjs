import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import './css/app.scss';

import Signin from "./js/containers/signin";
import Signup from "./js/containers/signup";
import Navigation from "./js/containers/navigation";
import Errored from "./js/containers/error";
import Home from "./js/containers/home";
import Root from "./js/containers/root";
import StyleGuide from "./js/containers/styleguide";

import rootReducer from './js/reducer';
import Account from "./js/containers/account";
import Cart from "./js/containers/cart/cart";
import Header from "./js/components/Header";
import DetailProduct from "./js/containers/product_detail";
import UpLoadImage from "./js/containers/UpLoadImage";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                {/* <Navigation/> */}
                <Header />
                {/* <Switch> */}
                <Route exact path='/' component={Root}/>
                <Route path='/home' component={Home}/>
                <Route path='/account' component={Account}/>
                <Route path='/signin' component={Signin}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/styleguide' component={StyleGuide}/>
                <Route path='/:product_name' component={DetailProduct}/>
                <Route path='/upload' component={UpLoadImage}/>
                {/* <Route component={Errored}/> */}
                {/* </Switch> */}
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);