import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../css/view.css'
import NavTab from '../components/Navtab'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import WishList from './WishList'
import Menu from './Menu'
import Cart from './Cart'
import Profile from './Profile'

const View = () => {

  const { user } = useContext(AuthContext)
  useEffect(() => {
    console.log('User details from context API', user);

    console.log('Location from view:', location);
    
  }, [user])

  useEffect(() => {
    const setDynamicHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setDynamicHeight();
    window.addEventListener('resize', setDynamicHeight);
    return () => window.removeEventListener('resize', setDynamicHeight);
  }, []);


  // -- Home, Profile, Liked, Cart, 
  const [activePage, setActivePage] = useState('')
  
  return (
    <div className='view'>

      {/* DIVS IN CASE THERE IS BACKGROUND SHAPES */}
      <div></div>
      <div></div>
      <div></div>


      <div className='view-content'>

        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='wishlist' element={<WishList />} />
            <Route path='menu' element={<Menu />} />
            <Route path='cart' element={<Cart />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </div>

        <NavTab />
      </div>

    </div>
  )
}

export default View