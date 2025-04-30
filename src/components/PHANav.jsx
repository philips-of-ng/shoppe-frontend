import React from 'react'
import '../css/pha-nav.css'
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

// THIS IS THE GENRAL NAV FOR HISTORY, ACTIVITIES AND PROFILE PAGES

const PHANav = () => {

    const { user, logout } = useContext(AuthContext);
  
  return (
    <div className='profile-nav'>
      <div className='left'>
        <img src={user.displayPicture} alt="" />

        <div>
          <p>My Activity</p>
        </div>
      </div>

      <div className='right'>
        <button>
          <i className='bx bx-scan'></i>
        </button>

        <button onClick={() => navigate('/history')}>
          <i className='bx bx-time'></i>
        </button>

        <button onClick={() => navigate('/profile/settings')}>
          <i className='bx bx-cog' ></i>
        </button>
      </div>
    </div>
  )
}

export default PHANav