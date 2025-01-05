import React, { useEffect, useRef, useState } from 'react';
import '../css/fgt-password.css';
import axios from 'axios';
import { assets } from '../assets/images/images';
import { toast } from 'react-toastify';
import Spinner from './spinner';

const ForgotPassword = ({ setDisplay }) => {
  const emailRef = useRef('');
  const OTPref = useRef('');

  const [loading, setLoading] = useState(false)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [refOTP, setRefOTP] = useState(null); 

  // State for displaying current view: 'mail', 'otp', or 'reset'
  const [view, setView] = useState('mail');

  const [userProfile, setUserProfile] = useState({}); // Stores user profile data

  useEffect(() => {
    console.log('This is the ref OTP from the state:', refOTP);
  }, [refOTP]);

  // FUNCTIONS

  // Checks if the user exists with the entered email and invokes the reset-password function
  const checkUser = async (email) => {
    const getUserAPI = `http://localhost:5000/api/users/${email}`;
    try {
      setLoading(true)
      const response = await axios.get(getUserAPI);
      if (response.data) {
        setUserProfile(response.data);
        console.log('User found:', response.data);
        resetPassword(email);
      } else {
        toast.error('User not found');
      }
    } catch (error) {
      console.log('Error fetching user for reset password:', error);
      toast.error('An error occurred');
    } finally {
      setLoading(false)
    }
  };

  // Sends request to the API to get the OTP for the user
  const resetPassword = async (email) => {
    const resetAPI = 'http://localhost:5000/api/users/reset-password';
    const payload = { email };
    try {
      setLoading(true)
      const response = await axios.post(resetAPI, payload);
      const refOTP = await response.data.otp;
      console.log('Response:', response);
      setRefOTP(refOTP); 
      if (response.status === 200) {
        setView('otp');
      }
    } catch (error) {
      console.log('Error getting OTP:', error);
      toast.error('Error requesting OTP');
    } finally {
      setLoading(false)
    }
  };

  // Verifies the entered OTP
  const verifyOTP = () => {
    const OTP_validated = (refOTP === OTPref.current.value);
    if (OTP_validated) {
      setRefOTP(''); 
      OTPref.current.value = '';
      setView('reset'); 
    } else {
      toast.error('Invalid OTP');
    }
  };

  // Changes the user's password
  const changePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const pw_change_api = `http://localhost:5000/api/users/change-password/${userProfile.email}`;
    const payload = {
      newPassword: newPassword,
      email: userProfile.email,
    };

    try {
      setLoading(true)
      const response = await axios.patch(pw_change_api, payload);
      console.log('Response from changing password:', response.data);
      toast.success('Password changed successfully');
      setTimeout(() => {
        setDisplay('login');
      }, 3000);
    } catch (error) {
      console.log('Error changing password:', error);
      toast.error('Error changing password');
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className='fgt-password fade-in'>
      <div className='fgtb-1'>
        <img src={assets.fgt_bubble_01} alt='' />
      </div>
      <div className='fgtb-2'>
        <img src={assets.fgt_bubble_02} alt='' />
      </div>

      {view === 'mail' ? (
        // Email input view
        <div className='content'>
          <div className='fgt-top'>
            <div className='floater'>
              <h3 className='pt-text'>Reset Password</h3>
              <p>Enter your email</p>
              <input ref={emailRef} type='email' placeholder='Email' />
            </div>
          </div>
          <div className='welcome-actions'>
            <button onClick={() => checkUser(emailRef.current.value)} className='g-st'>
              { loading ? <Spinner /> : 'Next' }
            </button>
            <div className='h-ac'>
              <p onClick={() => setDisplay('intro')}>Cancel</p>
            </div>
          </div>
        </div>
      ) : view === 'otp' ? (
        // OTP input view
        <div className='content-2'>
          <div className='floater'>
            <div className='profile-shower'>
              <img src={userProfile.displayPicture} alt='' />
              <h2 className='my-3'>Hello, {userProfile.firstName}!</h2>
              <p>Enter the 6-digit OTP sent to your email</p>
              <input ref={OTPref} type='text' placeholder='Enter OTP' />
            </div>
          </div>
          <div className='welcome-actions'>
            <button onClick={verifyOTP} className='g-st'>
              Next
            </button>
            <div className='h-ac'>
              <p onClick={() => setDisplay('login')}>Back to Login</p>
            </div>
          </div>
        </div>
      ) : view === 'reset' ? (
        // Reset password view
        <div className='content-2'>
          <div className='floater'>
            <div className='profile-shower'>
              <img src={userProfile.displayPicture} alt='' />
              <h2 className='my-3'>Hello, {userProfile.firstName}!</h2>
              <p>
                Create a new password for your account. It is advisable to use something
                you would remember.
              </p>
              <input
                type='password'
                placeholder='Enter New Password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='welcome-actions'>
            <button onClick={changePassword} className='g-st'>
              { loading ? <Spinner /> : 'Change Password' }
            </button>
            <div className='h-ac'>
              <p onClick={() => setDisplay('login')}>Back to Login</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ForgotPassword;


