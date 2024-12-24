import React from 'react'
import '../css/start.css'

const Login = ({ setDisplay }) => {
  return (
    <div className='login fade-in'>

      <div className='content'>
        <div className='login-top'>
          <h1>Login</h1>
          <p>Glad to see you back. <i className='bx bx-heart'></i></p>
          <input type="email" placeholder='Email' />
        </div>

        <div className='welcome-actions'>

          <button className='g-st'>Next</button>

          <div className='h-ac'>

            <p onClick={() => setDisplay('intro')}>Cancel</p>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Login