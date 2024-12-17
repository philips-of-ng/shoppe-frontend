import React from 'react'
import '../css/start.css'
import { assets } from '../assets/images/images'
import { useState } from 'react'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Start = () => {

  //THIS IS THE STATE THAT SETS WHAT IS CURRENTLY DISPLAYED
  //VALUE - 'intro', 'login', 'sign-up'
  const [display, setDisplay] = useState('intro')

  //PASSWORD VISIBILITY STATE
  const [passwordVisible, setPasswordVisible] = useState(false)

  //FORM DATA STATE
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    password: '',
    display_picture: null
  })
  const [inputPicture, setInputPicture] = useState(null)
  const [loadingSignUp, setLoadingSignUp] = useState(false)




  const handleSignUp = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!formData.firstName) {
      toast.error(`Please input your first name...`)
      return
    } else if (!formData.lastName) {
      toast.error(`Please input your last name...`)
      return
    } else if (!formData.email) {
      toast.error(`Please input your email...`)
      return
    } else if (!formData.password) {
      toast.error(`Please create a password...`)
      return
    } else if (!passwordRegex.test(formData.password)) {
      toast.error(`Ensure password contains:
      
        - One uppercase character

        - One lowercase character

        - One digit

        - At least 8 characters

        - At least one special character
        `)
    }

    formData.fullName = `${formData.firstName} ${formData.lastName}`
    const dataObject = formData
    console.log(dataObject);
    console.log(dataObject.display_picture);


    try {

      const api = 'http://localhost:3020'
      // setLoadingSignUp(true)
      
    } catch (error) {
      
    }

  }



  return (
    // THIS THE LANDING PART

    <>
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
            <div className='login fade-in'>
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
          </>
        ) : display == 'sign-up' ? (
          <>
            <div className='sign-up fade-in'>

              <div className='shape shape-1'></div>
              <div className='shape shape-2'></div>
              <div className='shape shape-3'></div>


              <div className='content'>

                <h1>Create <br /> Account</h1>

                <div className='f-con'>

                  <form>

                    <label className='input-picture-label' style={{ width: 'fit-content' }} htmlFor="">

                      <label htmlFor="image">
                        <img className='input-picture' src={inputPicture == null ? assets.upload_image : inputPicture} alt="" />
                      </label>


                      {/* THIS IMAGE SERVES AS AN IMAGE-REMOVE BUTTON */}

                      {
                        inputPicture != null ? (
                          <>
                            <img title='Remove Image' className='input-picture-close' src={assets.close_icon} alt="" onClick={() => {
                              setInputPicture(null)
                              setFormData((prev) => ({...prev, display_picture: null}))
                            } } />
                          </>
                        ) : (
                          <>
                          </>
                        )
                      }


                      <input accept='.jpg, .png, .svg' style={{ display: 'none' }} type="file" id='image' hidden onChange={(e) => {
                        e.preventDefault()
                        const file = e.target.files[0]
                        setFormData((prev) => ({ ...prev, display_picture: file }))
                        setInputPicture(URL.createObjectURL(file))
                      }} />
                    </label>

                    <div className='name-inputs'>
                      <input type="text" placeholder='First name'
                        onChange={(e) => {
                          console.log(e.target.value);
                          setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                        }}
                      />

                      <input type="text" placeholder='Last name'
                        onChange={(e) => {
                          console.log(e.target.value);
                          setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                        }}
                      />
                    </div>

                    <input type="email" placeholder='Enter your email'
                      onChange={(e) => {
                        console.log(e.target.value);
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }}
                    />

                    <div className='input-div'>
                      <input type={passwordVisible ? 'text' : 'password'} placeholder='Create new password'
                        onChange={(e) => {
                          console.log(e.target.value);
                          setFormData((prev) => ({ ...prev, password: e.target.value }))
                        }}
                      />

                      <button onClick={(e) => {
                        e.preventDefault()
                        setPasswordVisible((prev) => !prev)
                      }}>
                        {passwordVisible ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                      </button>


                    </div>

                  </form>
                </div>

              </div>

              <div className='welcome-actions'>

                <button className='g-st' onClick={() => handleSignUp()}>
                  {
                    loadingSignUp ? (
                      <>
                        Loading...
                      </>
                    ) : (
                      <>
                        Done
                      </>
                    )
                  }
                </button>

                <div className='h-ac'>
                  <p onClick={() => setDisplay('intro')}>Cancel</p>
                </div>

              </div>
            </div>
          </>
        ) : (
          <></>
        )
      }

    </>





  )
}

export default Start