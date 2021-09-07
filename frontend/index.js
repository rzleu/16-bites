import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store';
import {HashRouter} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        id: window.currentUser.id,
      },
    };
  }
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    root,
  );
});
