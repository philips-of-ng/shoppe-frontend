import React, { useContext, useState } from 'react'
// import '../css/start.css'
import '../css/login.css'
import { useRef } from 'react'
import { assets } from '../assets/images/images'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from './spinner'
import { AuthContext } from '../context/AuthContext'

const Login = ({ setDisplay }) => {

  //stuffs from context API
  const { login } = useContext(AuthContext)

  const [passwordVisible, setPasswordVisible] = useState(false)

  const emailRef = useRef('')
  const passwordRef = useRef('')

  const [logingIn, setLogingIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const [collectedInfo, setCollectedInfo] = useState({
    nil: 'yes',
    email: 'no',
    password: 'no'
  })

  const [userProfile, setUserProfile] = useState({})

  const collectEmail = async (e) => {
    e.preventDefault()
    console.log('This is the email from the ref', emailRef.current.value);
    setLoginInfo((prev) => ({ ...prev, email: emailRef.current.value }))

    try {
      setLoading(true)
      const userProf = await axios.get(`http://localhost:5000/api/users/${emailRef.current.value}`)

      if (userProf) {
        setCollectedInfo((prev) => ({ ...prev, nil: 'no', email: 'yes' }))
        console.log('User Profile', userProf.data);
        setUserProfile(userProf.data)

        setTimeout(() => {
          setLoading(false)
        }, 2000);
      }

    } catch (error) {
      console.log('Error fetching user data', error);
      if (error.message.toLowerCase() == 'network error') {
        toast.error('Unable to connect or reach server')
      } else if (error.status == 404) {
        toast.error('No user with this email was found in our database')
      } else {
        toast.error('An error occured, please try again later')
      }
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }


  const handleLogin = async () => {
    setLogingIn(true)
    
    const user_credentials = {
      email: userProfile.email,
      password: passwordRef.current.value
    }

    console.log('Cred', user_credentials);

    try {
      const login_api = 'http://localhost:5000/api/users/login'
      const response = await axios.post(login_api, user_credentials)
      console.log('Response from logging in', response);
      
      if (response.data) {
        login(response.data.details)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className='login fade-in'>

      <div className='lb-1'>
        <img src={assets.login_bubble_01} alt="" />
      </div>

      <div className='lb-2'>
        <img src={assets.login_bubble_02} alt="" />
      </div>

      {
        collectedInfo.nil == 'yes' ? (
          <>
            <div className='lb-3'>
              <img src={assets.login_bubble_03} alt="" />
            </div>

            <div className='lb-4'>
              <img src={assets.login_bubble_04} alt="" />
            </div>
          </>
        ) : (
          <></>
        )
      }



      {
        collectedInfo.nil == 'yes' ? (

          <div className='content'>
            <div className='login-top'>
              <h1 className='pt-text'>Login</h1>
              <p>Glad to see you back. <i className='bx bx-heart'></i></p>
              <input ref={emailRef} type="email" placeholder='Email' />
            </div>

            <div className='welcome-actions'>

              <button onClick={collectEmail} className='g-st'>{ loading ? <Spinner /> : 'Next' }</button>

              <div className='h-ac'>
                <p onClick={() => setDisplay('intro')}>Cancel</p>
              </div>

            </div>
          </div>

        ) : collectedInfo.email == 'yes' ? (

          <div className='content-2 fade-in'>

            <div className='floater'>
              <div className='login-top'>

                <div className='login-prof'>
                  <img src={userProfile.displayPicture} alt="" />

                  <h2>Hello, {userProfile.firstName}!</h2>
                </div>

                <div className='my-4'>

                  <p className='enter-pc' >Enter your password</p>

                  <div className="input-div">

                    <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' ref={passwordRef} onChange={() => {
                      console.log(passwordRef.current.value);
                    }} />

                    <button onClick={(e) => {
                      e.preventDefault();
                      setPasswordVisible((prev) => !prev);
                    }}
                    >
                      {passwordVisible ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>


                </div>

              </div>
            </div>

            <div className='welcome-actions'>

              <button onClick={() => handleLogin()} className='g-st'>{loading ? <Spinner /> : 'Next'}</button>

              <div className='h-ac'>
                <p>Forgot password?</p>
                <button onClick={() => { setDisplay('fgt-password') }}><img src={assets.right_arrow} alt="" /></button>
              </div>

            </div>
          </div>
        ) : (
          <>
          </>
        )
      }

    </div>
  )
}

export default Login