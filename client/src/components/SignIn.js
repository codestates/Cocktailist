import React, { useState } from 'react';
import axios from 'axios';

export default function SignIn({
  toggleSignupModal,
  toggleSigninModal,
  setIsSignin,
  onSignin,
  setUserInfo,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errText, setErrText] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      case 'signin':
        return setIsSignin(true);
      default:
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    email === '' || password === ''
      ? setErrText('이메일과 비밀번호를 입력하세요')
      : setErrText('');

    const signinUrl = 'http://cocktailists.shop/signin';
    const data = await axios.post(
      signinUrl,
      { email, password },
      {
        'Content-Type': 'application/json',
        withCredentials: true,
      }
    );
    console.log('--------------');
    console.log(data);
    if (!data) {
      alert('이메일과 비밀번호를 정확히 입력하세요');
      setErrText('이메일과 비밀번호를 정확히 입력하세요');
    } else {
      console.log('data.data');
      console.log(data);
      onSignin(data.data.accessToken);
      setUserInfo(data.data.data);
    }
  };

  return (
    <div className='signin-modal'>
      <div className='signin-logo'>
        <img src='./images/intro_logo_img.svg' alt='logo' />
        <img src='./images/logo_Cocktailist.png' alt='logo' />
      </div>
      <button
        className='signin-button-close'
        onClick={() => toggleSigninModal(false)}
      >
        X
      </button>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor='signin-email'>Email</label>
          <input
            name='email'
            value={email}
            onChange={onChange}
            type='email'
            id='signin-email'
            placeholder='Email'
          />
        </p>
        <p>
          <label htmlFor='signin-password'>Password</label>
          <input
            name='password'
            value={password}
            onChange={onChange}
            type='password'
            id='signin-password'
            placeholder='Password'
          />
        </p>
        <p>
          <input
            name='submit'
            type='submit'
            value='Sign in'
            className='signin-button'
          />
        </p>
        {errText.length !== 0 ? <div>{errText}</div> : null}
        <p className='signin-link'>
          <button onClick={() => toggleSignupModal(true)}>Signup</button>
        </p>
      </form>

      <div className='signin-oauth'>
        <a href='SocialN.js'>
          <img src='./images/google_logo.svg' alt='google' />
        </a>
        <a href='SocialN.js'>
          <img src='./images/github.svg' alt='github' />
        </a>
      </div>
    </div>
  );
}
