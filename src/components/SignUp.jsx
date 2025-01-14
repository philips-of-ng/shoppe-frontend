import React, { useState, useEffect } from 'react';
import { assets } from '../assets/images/images';
import '../css/start.css';
import '../css/signup.css'
import { toast } from 'react-toastify';
import axios from 'axios';

const SignUp = ({ setDisplay }) => {
  // Password visibility states
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    password: '',
    rePassword: '', // For confirm password input
    display_picture: null,
  });

  const [inputPicture, setInputPicture] = useState(null);
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  

  // Handle form submission
  const handleSignUp = async () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate inputs
    if (!formData.firstName) {
      toast.error('Please input your first name...');
      return;
    } else if (!formData.lastName) {
      toast.error('Please input your last name...');
      return;
    } else if (!formData.email) {
      toast.error('Please input your email...');
      return;
    } else if (!formData.password) {
      toast.error('Please create a password...');
      return;
    } 
    
    // else if (!passwordRegex.test(formData.password)) {
    //   toast.error(
    //     'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.'
    //   );
    //   return;} 
      
      else if (formData.password !== formData.rePassword) {
      toast.error('Passwords do not match.');
      return;
    }

    formData.fullName = `${formData.firstName} ${formData.lastName}`;

    const dataObject = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      displayPicture: 'link-to-pic'
    };

    console.log(dataObject);
    // console.log(dataObject.display_picture);

    try {
      setLoadingSignUp(true);
      const api = 'http://localhost:5000/api/users';
      const response = await axios.post(api, dataObject)
      console.log('Response', response);
      toast.success('Sign-up successful!');
      toast.success('Redirecting you to login page')
      setTimeout(() => {
        setDisplay('login')
      }, 5000);
    } catch (error) {
      if (error.status == 409) {
        toast.error('A user with the same email already exists in our database')
      }
      console.error('Error signing up:', error);
      // toast.error('Something went wrong. Please try again.');
    } finally {
      setLoadingSignUp(false);
    }
  };

  // Cleanup object URLs created for images
  useEffect(() => {
    return () => {
      if (inputPicture) URL.revokeObjectURL(inputPicture);
    };
  }, [inputPicture]);

  return (
    <div className="sign-up fade-in">

      <div className='sb-1'>
        <img src={assets.signup_bubble_01} alt="" />
      </div>

      <div className='sb-2'>
        <img src={assets.signup_bubble_02} alt="" />
      </div>


      <div className="content">
        <h1 className='pt-text'>
          Create <br /> Account
        </h1>

        <div className="f-con">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Image Upload */}
            <label
              className="input-picture-label"
              style={{ width: 'fit-content' }}
              htmlFor="image"
            >
              <label htmlFor="image">
                <img
                  className="input-picture"
                  src={inputPicture == null ? assets.upload_image : inputPicture}
                  alt="Upload"
                />
              </label>

              {/* Remove Image Button */}
              {inputPicture != null && (
                <img
                  title="Remove Image"
                  className="input-picture-close"
                  src={assets.close_icon}
                  alt="Remove"
                  onClick={() => {
                    setInputPicture(null);
                    setFormData((prev) => ({ ...prev, display_picture: null }));
                  }}
                />
              )}

              <input
                accept=".jpg, .png, .svg"
                style={{ display: 'none' }}
                type="file"
                id="image"
                hidden
                onChange={(e) => {
                  e.preventDefault();
                  const file = e.target.files[0];
                  if (!file) return;

                  // Validate file type and size
                  if (
                    !['image/jpeg', 'image/png', 'image/svg+xml'].includes(
                      file.type
                    )
                  ) {
                    toast.error(
                      'Invalid file type. Only JPG, PNG, and SVG are allowed.'
                    );
                    return;
                  }
                  if (file.size > 2 * 1024 * 1024) {
                    toast.error('File size exceeds 2MB.');
                    return;
                  }

                  setFormData((prev) => ({
                    ...prev,
                    display_picture: file,
                  }));
                  setInputPicture(URL.createObjectURL(file));
                }}
              />
            </label>

            {/* Name Inputs */}
            <div className="name-inputs">
              <input
                id="first-name"
                type="text"
                placeholder="First name"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />

              <input
                id="last-name"
                type="text"
                placeholder="Last name"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>

            {/* Email Input */}
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />

            {/* Password Inputs */}
            <div className="input-div">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Create new password"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <button
                onClick={(e) => {
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

            <div className="input-div">
              <input
                type={rePasswordVisible ? 'text' : 'password'}
                placeholder="Confirm password"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rePassword: e.target.value,
                  }))
                }
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRePasswordVisible((prev) => !prev);
                }}
              >
                {rePasswordVisible ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
          </form>
        </div>



        <div className="welcome-actions">
          <button
            className="g-st"
            disabled={loadingSignUp}
            onClick={handleSignUp}
          >
            {loadingSignUp ? 'Loading...' : 'Done'}
          </button>

          <div className="h-ac">
            <p className="cancel" onClick={() => setDisplay('intro')}>
              Cancel
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SignUp;
