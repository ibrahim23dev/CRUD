import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast'
import store from './Store/index'
import { Provider } from 'react-redux'
import './index.css';
import './index.css';
import App from './App'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
        <App />
        <Toaster
          toastOptions={{
            position: 'top-right',
            style: {
              background: '#283046',
              color: 'white'
            }
          }}
        />
    </Provider>
  
);


