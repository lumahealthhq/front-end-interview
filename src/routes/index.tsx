import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ReferalForm from '../pages/ReferalForm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={ReferalForm} />
  </Switch>
);

export default Routes;
