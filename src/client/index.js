import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import Signin from "./js/containers/signin.js";
import Signup from "./js/containers/signup.js";
import Error from "./js/containers/error.js";
import Home from "./js/containers/home.js";
import Root from "./js/containers/root.js";
import StyleGuide from "./js/containers/styleguide.tsx";

import reducers from './js/reducer';
import account from "./js/containers/account.js";

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// initialState
const initialState = {}

// Create store
const store = createStore(reducers, initialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Navigating</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/signin">Signin</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/styleguide">Style Guide</Link></li>
                </ul>
                <Switch>
                    <Route exact={true} path='/' component={Root}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/account' component={account}/>
                    <Route path='/signin' component={Signin}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/styleguide' component={StyleGuide}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);