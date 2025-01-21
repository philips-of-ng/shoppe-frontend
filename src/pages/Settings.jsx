import React from 'react'
import '../css/settings.css'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div className='settings-page'>
      <div className='settings-nav'>
        <h1>Settings</h1>
      </div>

      <div className='settings-content'>
        <div>
          <h3>Personal</h3>

          <Link to={'/profile/settings/profile-info'}>
            <p>Profile</p>
            <i className='bx bx-chevron-right'></i>
          </Link>


          <Link to={'/profile/settings/profile-info'}>
            <p>Shipping Address</p>
            <i className='bx bx-chevron-right'></i>
          </Link>


          <Link to={'/profile/settings/profile-info'}>
            <p>Payment Methods</p>
            <i className='bx bx-chevron-right'></i>
          </Link>
        </div>


        <div>
          <h3>Shop</h3>

          <Link to={'/profile/settings/profile-info'}>
            <p>Country</p>
            <span>
              Nigeria

              <i className='bx bx-chevron-right'></i>
            </span>
          </Link>

          <Link to={'/profile/settings/profile-info'}>
            <p>Currency</p>
            <span>
              $ USD

              <i className='bx bx-chevron-right'></i>
            </span>
          </Link>

          <Link to={'/profile/settings/profile-info'}>
            <p>Sizes</p>
            <span>
              UK

              <i className='bx bx-chevron-right'></i>
            </span>
          </Link>

          <Link to={'/profile/settings/profile-info'}>
            <p>Terms and Conditions</p>

            <i className='bx bx-chevron-right'></i>
          </Link>



        </div>


        <div>
          <h3>Personal</h3>

          <Link to={'/profile/settings/profile-info'}>
            <p>Language</p>
            <span>
              English

              <i className='bx bx-chevron-right'></i>
            </span>
          </Link>


          <Link to={'/profile/settings/profile-info'}>
            <p>About Shoppe</p>
            <i className='bx bx-chevron-right'></i>
          </Link>

        </div>



      </div>

    </div>
  )
}

export default Settings