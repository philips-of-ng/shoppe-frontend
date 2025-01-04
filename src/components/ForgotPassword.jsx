import React, { useEffect, useRef, useState } from 'react'
import '../css/fgt-password.css'
import axios from 'axios'
import { assets } from '../assets/images/images'
import { toast } from 'react-toastify'

const ForgotPassword = ({ setDisplay }) => {

  const emailRef = useRef('')

  const [refOTP, setRefOTP] = useState(null)

  //SATE FOR DISPLAYING MAIL INPUT OR OTP INPUT
  // Values - 'mail', 'otp', 'reset'
  const [view, setView] = useState('mail')

  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    console.log('This is the ref otp from the state', refOTP);
  }, [refOTP])

  //FUNTIONS

  const checkUser = async (email) => {
    const getUserAPI = `http://localhost:5000/api/users/${emailRef.current.value}`
    try {
      const response = await axios.get(getUserAPI)
      if (response.data) {
        setUserProfile(response.data)
      }
    } catch (error) {
      console.log('Error fetching user for reset password', error);
      toast.error('An error occured')
    }
  }

  const resetPassword = async (email) => {

    const resetAPI = 'http://localhost:5000/api/users/reset-password'
    const payload = {
      email: email
    }

    try {
      //OTP REUQEST RESPONSE
      const response = await axios.post(resetAPI, payload)
      const refOTP = await response.data.otp
      console.log('Response', response);
      setRefOTP(refOTP)

      if (response.statusText == 'OK') {
        setView('otp')
      }
    } catch (error) {
      console.log('Error getting OTP', error);
    }
  }

  return (
    <div className='fgt-password fade-in'>

      <div className='fgtb-1'><img src={assets.fgt_bubble_01} alt="" /></div>
      <div className='fgtb-2'><img src={assets.fgt_bubble_02} alt="" /></div>

      {/* <div className='content'>
        <div className='fgt-top'>
          <div className='floater'>
            <h3 className='pt-text'>Reset Password</h3>
            <p>Enter your email</p>
            <input ref={emailRef} type="email" placeholder='Email' />
          </div>
        </div>

        <div className='welcome-actions'>

          <button onClick={() => resetPassword(emailRef.current.value)} className='g-st'>Next</button>

          <div className='h-ac'>
            <p onClick={() => setDisplay('intro')}>Cancel</p>
          </div>

        </div>
      </div> */}


      <div className='content-2'>
        <div className='floater'>
          <div className='login-top'>

            <div className='login-prof fgt-prof'>
              <img src={userProfile.displayPicture} alt="" />

              <h2>Reset Password</h2>
            </div>

            <div className='my-4'>

              <p>Enter your Email</p>

              <input type="email"  />

              {/* <p className='my-2 fw-bold' onClick={() => {
                setDisplay('fgt-password')
              }}>Forgot your password?</p> */}

            </div>

          </div>
        </div>

        <div className='welcome-actions'>

          <button className='g-st'>Next - Get OTP</button>

          <div className='h-ac'>
            <p>Not you?</p>
            <button onClick={() => { setDisplay('login') }}><img src={assets.right_arrow} alt="" /></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ForgotPassword