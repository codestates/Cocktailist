import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Signup({
  toggleSigninModal,
  setSignupModal,
  setIsSignup,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState('');
  const [username, setUser] = useState('');
  const [mobile, setMobile] = useState('');
  const [errText, setErrText] = useState('');
  const history = useHistory();
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'username':
        return setUser(value);
      case 'password':
        return setPassword(value);
      case 'passwordconfirm':
        return setPasswordConfirm(value);
      case 'email':
        return setEmail(value);
      case 'mobile':
        return setMobile(value);
      case 'signin':
        return setIsSignup(true);
      default:
    }
  };
  const wrongPassword = () => {
    password !== passwordconfirm
      ? setErrText('패스워드가 일치하지 않습니다.')
      : setErrText('');
  };

  const onSignup = async (event) => {
    event.preventDefault();
    username === '' ||
    email === '' ||
    password === '' ||
    mobile === '' ||
    passwordconfirm === ''
      ? setErrText('모든 항목을 필수입니다')
      : setErrText('');

    const signupUrl = 'http://localhost:8000/signup';
    const successLogin = await axios.post(
      signupUrl,
      { username, email, password, mobile },
      {
        'Content-Type': 'application/json',
        withCredentials: true,
      }
    );
    console.log('data');
    console.log(successLogin.data);

    if (successLogin) {
      setUser(successLogin.data.username);
      setEmail(successLogin.data.email);
      setMobile(successLogin.data.mobile);
      setPassword(successLogin.data.password);
    } else {
      setErrText('모든 항목은 필수입니다.');
    }
    setSignupModal(false);
    history.push('/mypage');
  };

  return (
    <div className='signup-modal'>
      <div className='signup-logo'>
        <img src='./images/intro_logo_img.svg' alt='logo' />
        <img src='./images/logo_Cocktailist.png' alt='logo' />
      </div>
      <button
        className='signup-button-close'
        onClick={() => setSignupModal(false)}
      >
        X
      </button>
      <form method='POST' onClick={onSignup}>
        <p>
          <label htmlFor='signup-username'>Name</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={onChange}
            id='signup-username'
            placeholder='Name'
          />
        </p>
        <p>
          <label htmlFor='signup-email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            id='signup-email'
            placeholder='Email'
          />
        </p>
        <p>
          <label htmlFor='signup-password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            id='signup-password'
            placeholder='Password'
          />
        </p>
        <p>
          <label htmlFor='signup-password-confirm'>Password</label>
          <input
            type='password'
            name='passwordconfirm'
            value={passwordconfirm}
            onChange={onChange}
            onClick={wrongPassword}
            id='signup-password-confirm'
            placeholder='Password Confirm'
          />
        </p>
        <p>
          <label htmlFor='signup-mobile'>Mobile</label>
          <input
            type='text'
            name='mobile'
            value={mobile}
            onChange={onChange}
            id='signup-mobile'
            placeholder='Mobile'
          />
        </p>
        <p>
          <input type='submit' value='Sign up' className='signup-button' />
        </p>
        {errText !== '' ? <div>{errText}</div> : null}
        <p className='signup-link'>
          <button onClick={() => toggleSigninModal(true)}>
            Already have an acoount? signin
          </button>
        </p>
      </form>
    </div>
  );
}
