import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HomeContainer from './home/home_container';
import SessionFormContainer from './session/session_form_container';
import ProfileManagementContainer from './profile/profile_management_container';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ HomeContainer } />
      <AuthRoute exact path="/signup" component={ SessionFormContainer } />
      <AuthRoute exact path="/login" component={ SessionFormContainer } />
      <ProtectedRoute exact path="/profiles" component={ProfileManagementContainer} />
    </Switch>
  </div>
)

export default App;
