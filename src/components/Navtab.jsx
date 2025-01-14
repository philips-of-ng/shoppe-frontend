import React, { useEffect, useState } from 'react';
import '../css/navtab.css'
import { useLocation, useNavigate } from 'react-router-dom';

const NavTab = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState('home');

  useEffect(() => {
    const currentLocation = location.pathname
    setActive(currentLocation)
  }, [location])


  return (
    <div className="nav-tab">
      <button
        className={`one-nt-btn ${active.startsWith('/home') || active === '/' ? 'active' : ''}`}
        data-name="home"
        onClick={() => navigate('/')}
      >
        <i className="bx bx-home-alt"></i>
      </button>
      <button
        className={`one-nt-btn ${active.startsWith('/wishlist') ? 'active' : ''}`}
        data-name="wishlist"
        onClick={() => navigate('/wishlist')}
      >
        <i className="bx bx-heart"></i>
      </button>

      <button
        className={`one-nt-btn ${active.startsWith('/menu') ? 'active' : ''}`}
        data-name="menu"
        onClick={() => navigate('/menu')}
      >
        <i className='bx bx-menu' ></i>
      </button>
      <button
        className={`one-nt-btn ${active.startsWith('/cart') ? 'active' : ''}`}
        data-name="cart"
        onClick={() => navigate('/cart')}
      >
        <i className="bx bx-shopping-bag"></i>
      </button>
      <button
        className={`one-nt-btn ${active.startsWith('/profile') ? 'active' : ''}`}
        data-name="user"
        onClick={() => navigate('/profile')}
      >
        <i className="bx bx-user"></i>
      </button>
    </div>
  );
};

export default NavTab;
