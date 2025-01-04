import React, { useEffect, useRef, useState } from 'react'
import '../css/fgt-password.css'
import axios from 'axios'
import { assets } from '../assets/images/images'
import { toast } from 'react-toastify'

const ForgotPassword = ({ setDisplay }) => {

  const emailRef = useRef('')
  const OTPref = useRef('')
  const newPasswordRef = useRef('')
  const confirm_newPasswordRef = useRef('')

  const [refOTP, setRefOTP] = useState(null)

  //SATE FOR DISPLAYING MAIL INPUT OR OTP INPUT
  // Values - 'mail', 'otp', 'reset'
  const [view, setView] = useState('mail')

  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    console.log('This is the ref otp from the state', refOTP);
  }, [refOTP])

  //FUNTIONS
  //CHECKS USER WITH EMAIL AND INVOKES THE RESET-PW FUNCTION
  const checkUser = async (email) => {
    const getUserAPI = `http://localhost:5000/api/users/${email}`
    try {
      const response = await axios.get(getUserAPI)
      if (response.data) {
        setUserProfile(response.data)
        console.log('User found:', response.data);

        resetPassword(email)
      } else {
        toast.error('User not found')
      }
    } catch (error) {
      console.log('Error fetching user for reset password', error);
      toast.error('An error occured')
    }
  }

  //FUNCTION USED TO GET THE OTP FROM API
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

  //VERIFY THE OTP
  const verifyOTP = () => {
    const OTP_validated = (refOTP == OTPref.current.value)
    if (OTP_validated) {
      setView('reset')
    }
  }

  //ACTUALLY CHANGES THE PASSWORD
  const changePassword = async () => {
    const pw_change_api = `http://localhost:5000/api/users/change-password/${userProfile._id}`
    const payload = {
      newPassword: newPasswordRef.current.value,
      email: userProfile.email
    }

    try {
      const response = await axios.patch(pw_change_api, payload)
      console.log('Response from changing password', response.data);
    } catch (error) {
      console.log('Error changing password', error);
    }
  }


  return (
    <div className='fgt-password fade-in'>

      <div className='fgtb-1'><img src={assets.fgt_bubble_01} alt="" /></div>
      <div className='fgtb-2'><img src={assets.fgt_bubble_02} alt="" /></div>


      {
        view == 'mail' ? (
          <>
            <div className='content'>
              <div className='fgt-top'>
                <div className='floater'>
                  <h3 className='pt-text'>Reset Password</h3>
                  <p>Enter your email</p>
                  <input ref={emailRef} type="email" placeholder='Email' />
                </div>
              </div>

              <div className='welcome-actions'>

                <button onClick={() => checkUser(emailRef.current.value)} className='g-st'>Next</button>

                <div className='h-ac'>
                  <p onClick={() => setDisplay('intro')}>Cancel</p>
                </div>

              </div>
            </div>
          </>
        ) : view == 'otp' ? (
          <>
            <div className='content-2'>

              <div className='floater'>
                <div className='profile-shower'>
                  <img src={userProfile.displayPicture} alt="" />

                  <h2 className='my-3'>Hello, {userProfile.firstName}!</h2>

                  <p>Enter the 6-digit OTP sent your email</p>

                  <input ref={OTPref} type="email" placeholder='Enter OTP' />
                </div>

              </div>


              <div className='welcome-actions'>

                <button onClick={() => verifyOTP()} className='g-st'>Next</button>

                <div className='h-ac'>
                  <p onClick={() => { setDisplay('login') }}>Back to Login</p>
                  {/* <button ><img src={assets.right_arrow} alt="" /></button> */}
                </div>

              </div>
            </div>
          </>
        ) : view == 'reset' ? (
          <>
            <div className='content-2'>

              <div className='floater'>
                <div className='profile-shower'>
                  <img src={userProfile.displayPicture} alt="" />

                  <h2 className='my-3'>Hello, {userProfile.firstName}!</h2>

                  <p>Create a new password for your account. It is advisable to use something you would remember.</p>

                  <input ref={newPasswordRef} type="email" placeholder='Enter New Password' />

                  <input ref={confirm_newPasswordRef} type="email" placeholder='Confirm Password' />
                </div>

              </div>


              <div className='welcome-actions'>

                <button onClick={() => verifyOTP()} className='g-st'>Next</button>

                <div className='h-ac'>
                  <p onClick={() => { setDisplay('login') }}>Back to Login</p>
                  {/* <button ><img src={assets.right_arrow} alt="" /></button> */}
                </div>

              </div>
            </div>
          </>
        ) : (
          <></>
        )
      }


    </div>
  )
}

export default ForgotPassword