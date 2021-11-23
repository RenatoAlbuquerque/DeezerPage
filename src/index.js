import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ItensProvider from './providers/itens.js';

ReactDOM.render(
  <React.StrictMode>
    <ItensProvider>
      <App />
    </ItensProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
