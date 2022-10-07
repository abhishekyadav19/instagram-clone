import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import './assests/css/index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);


