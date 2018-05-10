import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HomeContainer from './home/home_container';
import SessionFormContainer from './session/session_form_container';
import ProfileIndexContainer from './profile/profile_index_container';
import ProfileFormContainer from './profile/profile_form_container';
import ProfileContainer from './profile/profile_container';
import VideoContainer from './video/video_container';
import GenreShowContainer from './library/genre_show_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ HomeContainer } />
      <AuthRoute exact path="/signup" component={ SessionFormContainer } />
      <AuthRoute exact path="/login" component={ SessionFormContainer } />
      <ProtectedRoute exact path="/profiles" component={ProfileIndexContainer} />

      <ProtectedRoute exact path ="/manage/add" component={ProfileFormContainer} />
      <ProtectedRoute exact path ="/manage/edit/:id" component={ProfileFormContainer} />

      <ProtectedRoute exact path="/browse/:id" component={ProfileContainer} />


      <ProtectedRoute exact path="/browse/videos/:id" component={VideoContainer} />

      <ProtectedRoute exact path="/browse/:id/genres/:id" component={GenreShowContainer} />

    </Switch>
    <ProtectedRoute exact path="/manage/profiles" component={ProfileIndexContainer} />
  </div>
)

export default App;
