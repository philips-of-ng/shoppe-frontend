import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    document.title = 'Shoppe'
  })

  return (
    <Routes>
      <Route path='/get-started' element={<Start />} />
    </Routes>
  );
}

export default App;

