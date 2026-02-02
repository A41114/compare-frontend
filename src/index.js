
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

import { HistoryRouter } from 'redux-first-history/rr6';
import { history } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('🧭 history object:', history);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
//   </React.StrictMode>
// );

// reportWebVitals();
