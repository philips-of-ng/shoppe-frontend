import React, { useContext } from 'react';
import '../css/profile.css';
import { AuthContext } from '../context/AuthContext';
import { Routes, Route, useNavigate } from 'react-router-dom';

//SECTIONS
import NewItems from '../components/sections/NewItems';
import Categories from '../components/sections/Categories';
import FlashSales from '../components/sections/FlashSales';
import JustForYou from '../components/sections/JustForYou';
import TopProducts from '../components/sections/TopProducts';

import Settings from './Settings';
import PHANav from '../components/PHANav';

const Profile = () => {

  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  console.log('Profile from profile page', user);

  return (
    <div className='profile'>

      <PHANav />

      <div className='profile-content'>

        <section className='profile-section-one'>
          <h1>Hello, {user.firstName}!</h1>

          <div className='announcement'>
            <div className='text'>
              <h5>Announcement</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat nobis pariatur quos voluptatem quo Ullam?</p>
            </div>

            <div className='buttons'>
              <i className='go bx bx-right-arrow-alt' ></i>
              <i className='cancel bx bx-x' ></i>
            </div>

          </div>
        </section>


        <section>
          <NewItems />
        </section>

        <section>
          <Categories />
        </section>

        <section>
          <FlashSales />
        </section>

        <section>
          <TopProducts />
        </section>

        <section>
          <JustForYou />
        </section>



        <button onClick={() => logout(null)}>Logout</button>

      </div>

    </div>
  );
};

export default Profile;
