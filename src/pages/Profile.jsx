import React, { useContext } from 'react'
import '../css/profile.css'
import { AuthContext } from '../context/AuthContext'

const Profile = () => {

  const { user, logout } = useContext(AuthContext)

  console.log('Profile from profile page', user);

  return (
    <div className='profile'>

      <div className='profile-nav'>
        <div className='left'>
          <img src={user.displayPicture} alt="" />

          <div>
            <p>My Activity</p>
          </div>
        </div>

        <div className='right'>
          <button>
            <i class='bx bx-scan'></i>
          </button>

          <button>
            <i class='bx bx-list-ul' ></i>
          </button>

          <button>
            <i class='bx bx-cog' ></i>
          </button>
        </div>
      </div>

      <div className='profile-content'>

        <section className='profile-section-one'>
          <h1>Hello, {user.firstName}!</h1>

          <div className='announcement'>
            <div className='text'>
              <h5>Announcement</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat nobis pariatur quos voluptatem quo Ullam?</p>
            </div>

            <div className='buttons'>
              <i class='go bx bx-right-arrow-alt' ></i>
              <i class='cancel bx bx-x' ></i>
            </div>

          </div>
        </section>


        <button onClick={() => logout(null)}>Logout</button>

      </div>

    </div>
  )
}

export default Profile