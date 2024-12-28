import React, { useState } from 'react'
import '../css/start.css'
import { useRef } from 'react'

const Login = ({ setDisplay }) => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const otpRef = useRef()

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    otp: ''
  })

  const [collectedInfo, setCollectedInfo] = useState([])
  // const [passwordCharacter, setPasswordCharacter] = useState(['a', 'b', 'c', 'a', 'b', 'c'])
  const [passwordCharacter, setPasswordCharacter] = useState([])

  return (
    <div className='login fade-in'>

      {/* <div className='content'>
        <div className='login-top'>
          <h1>Login</h1>
          <p>Glad to see you back. <i className='bx bx-heart'></i></p>
          <input ref={emailRef} type="email" placeholder='Email' />
        </div>

        <div className='welcome-actions'>

          <button onClick={(e) => {
            e.preventDefault()
            console.log('This is the email from the ref', emailRef.current.value);
            setLoginInfo((prev) => ({ ...prev, email: emailRef.current.value }))
          }} className='g-st'>Next</button>

          <div className='h-ac'>
            <p onClick={() => setDisplay('intro')}>Cancel</p>
          </div>

        </div>
      </div> */}


      <div className='content-2'>
        <div className='login-top'>

          <div className='login-prof'>
            <i class='bx bx-user-circle'></i>
          </div>

          <div>

            <div className='circles'>
              {
                passwordCharacter.map((char, index) => {
                  return (
                    <div key={index} className='one-circle'></div>
                  )
                })
              }
            </div>

            <input maxLength={8} type="text" ref={passwordRef} onChange={() => {
              console.log(passwordRef.current.value);
              const thePassword = passwordRef.current.value
              console.log('Split Password', thePassword.split(''));
              setPasswordCharacter(thePassword.split(''))  
            }} />



          </div>

        </div>

        <div className='welcome-actions'>

          <button onClick={(e) => {
            e.preventDefault()
            console.log('This is the email from the ref', emailRef.current.value);
            setLoginInfo((prev) => ({ ...prev, email: emailRef.current.value }))
          }} className='g-st'>Next</button>

          <div className='h-ac'>
            <p onClick={() => setDisplay('intro')}>Cancel</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login