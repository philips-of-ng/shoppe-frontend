import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext, AuthProvide } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvide>
    <React.StrictMode>
      <ToastContainer />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AuthProvide>
  ,
)
