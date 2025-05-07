import React, { useEffect } from 'react'
import '../css/pha-nav.css'
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// THIS IS THE GENRAL NAV FOR HISTORY, ACTIVITIES AND PROFILE PAGES

const PHANav = () => {

  const currentPage = useLocation().pathname
  const activePHA = useLocation().pathname.replaceAll('/', '')

  useEffect(() => {
    console.log('The current page is', currentPage);
  }, [])

  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext);

  return (
    <div className='profile-nav'>
      <div className='left'>
        <img src={user.displayPicture} alt="" />

        <div>
          <p>{currentPage.includes('history') ? 'History' : currentPage.includes('settings') ? 'Settings' : currentPage.includes('profile') ? 'Profile' : 'Unknown'}</p>
        </div>
      </div>

      <div className='right'>
        <button className={`${activePHA === 'profile' ? 'active-pha' : ''}`} onClick={() => navigate('/profile-page')}>
          <i className='bx bx-user'></i>
        </button>

        <button className={`${activePHA === 'history' ? 'active-pha' : ''}`} onClick={() => navigate('/history')}>
          <i className={`bx bx-time`}></i>
        </button>

        <button className={`${activePHA === 'settings' ? 'active-pha' : ''}`} onClick={() => navigate('/profile/settings')}>
          <i className={`bx bx-cog`}></i>
        </button>
      </div>
    </div>
  )
}

export default PHANav