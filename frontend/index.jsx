import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
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
