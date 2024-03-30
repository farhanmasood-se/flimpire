import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store.js';
import ToggleColorMode from './utils/ToggleColorMode.jsx';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorMode>
    </Provider>
    ,
  </React.StrictMode>,
);
