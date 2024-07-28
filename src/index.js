import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import configureStore from './state/store';
import App from './App';

const store = configureStore();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Auth0Provider
          domain="dev-xxkwnnlm1n2i3vli.us.auth0.com"
          clientId="nmJt6sQqpCfJshVSSGdzQy3c4qYpDy9W"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
      >
      <Provider store={store}>
          <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
