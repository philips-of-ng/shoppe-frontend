import React from 'react'
import '../css/start.css'
import { assets } from '../assets/images/images'
import { useState } from 'react'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const Start = () => {

  //THIS IS THE STATE THAT SETS WHAT IS CURRENTLY DISPLAYED
  //VALUE - 'intro', 'login', 'sign-up'
  const [display, setDisplay] = useState('intro')


  return (
    // THIS THE LANDING PART

    <div className='start-element'>

      {
        display == 'intro' ? (
          <></>
        ) : (
          <>
            <div className='shape shape-1'></div>
            <div className='shape shape-2'></div>
            <div className='shape shape-3'></div>
          </>
        )
      }





      <div>
        {
          display == 'intro' ? (
            <>
              <div className='intro fade-in'>

                <div className='welcome'>

                  <div>

                    <div className='center-circle'>
                      <img src={assets.first_logo} alt="" />
                    </div>
                    <h1>Shoppe</h1>
                    <p>We've got everything you need. Right at your fingertips.</p>

                  </div>

                </div>

                <div className='welcome-actions'>

                  <button onClick={() => setDisplay('sign-up')} className='g-st'>Let's get started</button>

                  <div className='h-ac'>
                    <p>Already have an account?</p>
                    <button onClick={() => { setDisplay('login') }}><img src={assets.right_arrow} alt="" /></button>
                  </div>

                </div>
              </div>
            </>
          ) : display == 'login' ? (
            <>
              <Login setDisplay={setDisplay} />
            </>
          ) : display == 'sign-up' ? (
            <>
              <SignUp setDisplay={setDisplay} />
            </>
          ) : (
            <></>
          )
        }
      </div>




    </div>





  )
}

export default Start