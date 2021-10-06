import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignIn({ successUserInfo }) {
  const history = useHistory();
  const [signin, setSignin] = useState(true);
  const [signinActiveClass, setSigninClass] = useState('signin-modal');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const setError = (error) => {
    setText(error.toString());
    setIsAlert(true);
  };
  const onChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;
    switch (name) {
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      case 'signin':
        return setSignin(checked);
      default:
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!signin) {
      console.log('error');
    } else {
      console.log(event.target);
      successUserInfo(event.target);
    }
  };
  const closeHandler = (event) => {
    event.preventDefault();
    setSigninClass('signin-modal-none');
    history.push('/');
  };
  return (
    <div className={signinActiveClass}>
      <div className='signin-logo'>
        <img src='./images/intro_logo_img.svg' alt='logo' />
        <img src='./images/logo_Cocktailist.png' alt='logo' />
      </div>
      <button className='signin-button-close' onClick={closeHandler}>
        X
      </button>
      <form action='/' method='POST' onSubmit={onSubmit}>
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
            checked={signin}
          />
        </p>
        <p className='signin-link'>
          <button type='submit'>Signup</button>
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
