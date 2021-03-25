import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/details" component={ Details } />
      <Route path="/dashboard" component={ Dashboard } />
    </Switch>
  );
}

export default Routes;