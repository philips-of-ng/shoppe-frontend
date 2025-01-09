import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/Home';
import { useContext, useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './context/AuthContext';
import View from './pages/View';

function App() {

  const { user } = useContext(AuthContext)

  useEffect(() => {
    document.title = 'Shoppe 2'
  })

  return (
    <Routes>
      
      <Route path='/*' element={ user ? <View /> : <Start />} />

    </Routes>
  );
}

export default App;

