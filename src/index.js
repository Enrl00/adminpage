import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { CustomTheme } from './provider/ThemeProvider';
import { OrderProvider } from './provider/OrderProvider';
import { MenuProvider } from './provider/MenuProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomTheme>
      <OrderProvider>
        <MenuProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MenuProvider>
      </OrderProvider>
    </CustomTheme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
