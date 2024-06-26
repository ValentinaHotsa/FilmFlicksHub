import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/film-flicks-hub">
      <App />
    </BrowserRouter>
  </StrictMode>
);
