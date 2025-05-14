import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

// Correct way to render in React 18
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Wrap with BrowserRouter to enable routing */}
    <App />
  </BrowserRouter>
);

