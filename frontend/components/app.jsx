import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './home/home_container';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ HomeContainer } />
      <Route exact path="/signup" component={ SessionFormContainer } />
      <Route exact path="/login" component={ SessionFormContainer } />
    </Switch>
  </div>
)

export default App;
