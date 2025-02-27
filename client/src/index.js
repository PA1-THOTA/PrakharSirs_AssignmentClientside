import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { EmployeeContextProvider } from './Context';
import "./css/universal.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EmployeeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EmployeeContextProvider>
);

