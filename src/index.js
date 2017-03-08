import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import Signup from './components/Signup';
import Index from './components/Index';
import User from './components/User';
import Add from './components/Add';
import Signin from './components/Signin';
import Detail from './components/Detail';

require('bootstrap/dist/css/bootstrap.css');
let router = (
    <Router history={hashHistory}>
        <Route path="/" component={Index}>
            <Route path="user" component={User}  />

            <Route path="signup" component={Signup}  />

            <Route path="add" component={Add}  />

            <Route path="signin" component={Signin} />

            <Route path="detail/:id" component={Detail} />

        </Route>
    </Router>
    
);
ReactDOM.render(router , document.querySelector('#app'));