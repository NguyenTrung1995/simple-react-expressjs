import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Signin from "./js/containers/signin.js";
import Signup from "./js/containers/signup.js";
import Error from "./js/containers/error.js";
import Home from "./js/containers/home.js";
import Root from "./js/containers/root.js";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Navigating</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
            <Switch>
                <Route exact={true} path='/' component={Root}/>
                <Route path='/home' component={Home}/>
                <Route path='/signin' component={Signin}/>
                <Route path='/signup' component={Signup}/>
                <Route component={Error}/>
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);