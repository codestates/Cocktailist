import React from 'react';

export default function Signup({ signinHandler }) {
  const closeHandler = () => {
    const signupModal = document.querySelector('.signup-modal');
    const button = document.querySelectorAll('button');
    console.log(button);
    console.log(signupModal);

    const background = document.body;
    background.style.backgroundColor = ' #f5f5f5;';
    button[0].style.backgroundColor = ' #f5f5f5;';
    button[1].style.backgroundColor = ' #f5f5f5;';
    signupModal.style.display = 'none';
    background.style.pointerEvents = 'all';
  };

  return (
    <div className='signup-modal'>
      <div className='signup-logo'>
        <img src='./images/intro_logo_img.svg' alt='logo' />
        <img src='./images/logo_Cocktailist.png' alt='logo' />
      </div>
      <button className='signup-button-close' onClick={closeHandler}>
        X
      </button>
      <form action='#' method='POST'>
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
          <input type='submit' value='Sign up' className='signup-button' />
        </p>
        <p className='signup-link'>
          <button onClick={signinHandler}>
            Already have an acoount? signin
          </button>
        </p>
      </form>
    </div>
  );
}
