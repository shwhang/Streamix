import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HomeContainer from './home/home_container';
import SessionFormContainer from './session/session_form_container';
import ProfileIndexContainer from './profile/profile_index_container';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ HomeContainer } />
      <AuthRoute exact path="/signup" component={ SessionFormContainer } />
      <AuthRoute exact path="/login" component={ SessionFormContainer } />
      <ProtectedRoute exact path="/profiles" component={ProfileIndexContainer} />
      <ProtectedRoute exact path="/manage/profiles" component={ProfileIndexContainer} />
    </Switch>
  </div>
)

export default App;
