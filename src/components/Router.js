import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Test from '../pages/Test';
import NotFound from './NotFound';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
