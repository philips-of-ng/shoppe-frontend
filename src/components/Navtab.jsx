import React, { useEffect, useState } from 'react';
import '../css/navtab.css'
import { useLocation, useNavigate } from 'react-router-dom';

const NavTab = ({ }) => {

  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState('home');

  useEffect(() => {
    const currentLocation = location.pathname.replaceAll('/', '')
    setActive(currentLocation)
  }, [location])


  return (
    <div className="nav-tab">
      <button
        className={`one-nt-btn ${active === 'home' ? 'active' : ''}`}
        data-name="home"
        onClick={() => navigate('/home')}
      >
        <i className="bx bx-home-alt"></i>
      </button>
      <button
        className={`one-nt-btn ${active === 'wishlist' ? 'active' : ''}`}
        data-name="wishlist"
        onClick={() => navigate('/wishlist')}
      >
        <i className="bx bx-heart"></i>
      </button>

      <button
        className={`one-nt-btn ${active === 'menu' ? 'active' : ''}`}
        data-name="menu"
        onClick={() => navigate('/menu')}
      >
        <i class='bx bx-list-ol' ></i>
      </button>
      <button
        className={`one-nt-btn ${active === 'cart' ? 'active' : ''}`}
        data-name="cart"
        onClick={() => navigate('/cart')}
      >
        <i className="bx bx-shopping-bag"></i>
      </button>
      <button
        className={`one-nt-btn ${active === 'profile' ? 'active' : ''}`}
        data-name="user"
        onClick={() => navigate('/profile')}
      >
        <i className="bx bx-user"></i>
      </button>
    </div>
  );
};

export default NavTab;
