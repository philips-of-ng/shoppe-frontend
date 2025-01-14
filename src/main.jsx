import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext, AuthProvider } from './context/AuthContext.jsx'
import { ShopContext, ShopProvider } from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopProvider>
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </ShopProvider>

  ,
)
