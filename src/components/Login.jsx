import React, { useState } from 'react'
import '../css/start.css'
import { useRef } from 'react'

const Login = ({ setDisplay }) => {

  const [passwordVisible, setPasswordVisible] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const otpRef = useRef()

  const [logingIn, setLogingIn] = useState(false)

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    otp: ''
  })

  const [collectedInfo, setCollectedInfo] = useState({
    nil: 'yes',
    email: 'no',
    password: 'no'
  })

  const collectEmail = (e) => {
    e.preventDefault()
    console.log('This is the email from the ref', emailRef.current.value);
    setLoginInfo((prev) => ({ ...prev, email: emailRef.current.value }))
    setCollectedInfo((prev) => ({ ...prev, nil: 'no', email: 'yes' }))
  }

  const collectPassword = (e) => {
    e.preventDefault()
    console.log('This is the password from the ref', passwordRef.current.value);
    setLoginInfo((prev) => ({ ...prev, password: passwordRef.current.value }))

    handleLogin()
  }


  const handleLogin = () => {

    setLogingIn(true)
    
    console.log('This is the login info', loginInfo);
    const loginPayload = {
      email: loginInfo.email,
      password: passwordRef.current.value
    }

    console.log('PAYLOAD', loginPayload);
  }

  return (
    <div className='login fade-in'>

      {
        collectedInfo.nil == 'yes' ? (

          <div className='content'>
            <div className='login-top'>
              <h1 className='pt-text'>Login</h1>
              <p>Glad to see you back. <i className='bx bx-heart'></i></p>
              <input ref={emailRef} type="email" placeholder='Email' />
            </div>

            <div className='welcome-actions'>

              <button onClick={collectEmail} className='g-st'>Next</button>

              <div className='h-ac'>
                <p onClick={() => setDisplay('intro')}>Cancel</p>
              </div>

            </div>
          </div>

        ) : collectedInfo.email == 'yes' ? (

          <div className='content-2 fade-in'>
            <div className='login-top'>

              <div className='login-prof'>
                <i class='bx bx-user-circle'></i>
              </div>

              <div className='my-4'>

                <p className='enter-pc' >Enter your password</p>

                <div className="input-div">

                  <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' ref={passwordRef} onChange={() => {
                    console.log(passwordRef.current.value);
                    const thePassword = passwordRef.current.value
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

            <div className='welcome-actions'>

              <button onClick={collectPassword} className='g-st'>{logingIn ? 'Loading...' : 'Next'}</button>

              <div className='h-ac'>
                <p onClick={() => setDisplay('intro')}>Cancel</p>
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