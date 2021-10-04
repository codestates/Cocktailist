import React from 'react';

export default function SignIn({ onSiginin }) {
  const closeHandler = (event) => {
    event.preventDefault();
    const signinModal = document.querySelector('.signin-modal');
    const button = document.querySelector('.signin-button-close');
    console.log(button);
    console.log(signinModal);

    const background = document.body;
    console.log('background');
    console.log(background);
    signinModal.style.display = 'none';
    background.style.backgroundColor = 'rgb(255,255,255)';
  };

  return (
    <div className='signin-modal'>
      <div className='signin-logo'>
        <img src='./images/intro_logo_img.svg' alt='logo' />
        <img src='./images/logo_Cocktailist.png' alt='logo' />
      </div>
      <button className='signin-button-close' onClick={closeHandler}>
        X
      </button>
      <form action='/' method='POST'>
        <p>
          <label htmlFor='signin-email'>Email</label>
          <input type='email' id='signin-email' placeholder='Email' />
        </p>
        <p>
          <label htmlFor='signin-password'>Password</label>
          <input type='text' id='signin-password' placeholder='Password' />
        </p>
        <p>
          <input type='submit' value='Sign in' className='signin-button' />
        </p>
        <p className='signin-link'>
          <button onClick={onSiginin}>Signup</button>
        </p>
        <div className='signin-oauth'>
          <a href='SocialN.js'>
            <img src='./images/google_logo.svg' alt='google' />
          </a>
          <a href='SocialN.js'>
            <img src='./images/github.svg' alt='github' />
          </a>
        </div>
      </form>
    </div>
  );
}
