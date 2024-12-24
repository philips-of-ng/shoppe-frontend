import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/Home';
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    document.title = 'Shoppe'
  })

  return (
    <Routes>
      {
        loggedIn ? (
          <>
            <Route path='/' element={<Home />} />
          </>
        ) : (
          <>
            <Route path='/' element={<Start />} />
          </>
        )
      }
      
    </Routes>
  );
}

export default App;

