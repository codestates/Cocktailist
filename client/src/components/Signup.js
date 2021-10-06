import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function Signup({ onSignin }) {
  const history = useHistory();
  const [signupActiveClass, setSignupClass] = useState('signup-modal-none');

  const closeHandler = (event) => {
    event.preventDefault();
    setSignupClass('signup-modal-none');
    history.push('/');
  };
  return (
    <div className={signupActiveClass}>
      <div className='signup-logo'>
        <img src='./images/intro_logo_img.svg' alt='logo' />
        <img src='./images/logo_Cocktailist.png' alt='logo' />
      </div>
      <button className='signup-button-close' onClick={closeHandler}>
        X
      </button>
      <form action='/mypage' method='POST'>
        <p>
          <label htmlFor='signup-username'>Name</label>
          <input type='text' id='signup-username' placeholder='Name' />
        </p>
        <p>
          <label htmlFor='signup-email'>Email</label>
          <input type='email' id='signup-email' placeholder='Email' />
        </p>
        <p>
          <label htmlFor='signup-password'>Password</label>
          <input type='text' id='signup-password' placeholder='Password' />
        </p>
        <p>
          <label htmlFor='signup-password-confirm'>Password</label>
          <input
            type='text'
            id='signup-password-confirm'
            placeholder='Password Confirm'
          />
        </p>
        <p>
          <label htmlFor='signup-mobile'>Password</label>
          <input type='text' id='signup-mobile' placeholder='Mobile' />
        </p>
        <p>
          <input
            type='submit'
            value='Sign up'
            className='signup-button'
            onClick={onSignin}
          />
        </p>
        <p className='signup-link'>
          <button onClick={onSignin}>Already have an acoount? signin</button>
        </p>
      </form>
    </div>
  );
}
