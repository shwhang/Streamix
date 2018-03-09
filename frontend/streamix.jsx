import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store, preloadedState;

  if (window.currentUser) {
    preloadedState = {
      session: { currentUser: window.currentUser }
    }

    if (window.currentProfile) {
      preloadedState.profiles = {
        currentProfile: window.currentProfile,
        allProfiles: [],
        avatars: []
      }
    }

    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.currentProfile;

  } else {
    store = configureStore();
  }

  //TODO: Remove Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
