import React, { useState } from 'react'
import { assets } from '../assets/images/images'
import '../css/start.css'



const SignUp = ({ setDisplay }) => {

  // const [display, setDisplay] = useState('intro')


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

    }

    formData.fullName = `${formData.firstName} ${formData.lastName}`
    const dataObject = formData
    console.log(dataObject);
    console.log(dataObject.display_picture);

    try {
      const api = 'http://localhost:3020'

    } catch (error) {

    }

  }

  return (
    <div className='sign-up fade-in'>

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
                      setFormData((prev) => ({ ...prev, display_picture: null }))
                    }} />
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
          {loadingSignUp ? 'Loading' : 'Done'}
        </button>

        <div className='h-ac'>
          <p className='cancel' onClick={() => setDisplay('intro')}>Cancel</p>
        </div>

      </div>
    </div>
  )
}

export default SignUp