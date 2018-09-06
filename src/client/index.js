import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Signin from "./js/containers/signin.js";
import Signup from "./js/containers/signup.js";
import Error from "./js/containers/error.js";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Signin</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
            <Switch>
                <Route exact={true} path='/' component={Signin}/>
                <Route path='/signup' component={Signup}/>
                <Route component={Error}/>
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);