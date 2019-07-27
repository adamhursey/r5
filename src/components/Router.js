import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from './NotFound';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/user/:userId" component={Home} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
