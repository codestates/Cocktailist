
import React, { useState } from 'react';
import axios from 'axios';
import picLogo from '../img/intro_logo_img.svg';
import textLogo from '../img/logo_Cocktailist.png';

function MypageModal({ userInfo, setModalClick, accessToken }) {
  const ec2_url =
    'http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000';
  const localhostUrl = 'http://localhost:8000';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPasswordConfirm] = useState('');
  const [mobile, setMobile] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'username':
        return setUsername(value);
      case 'password':
        return setPassword(value);
      case 'password_confirm':
        return setPasswordConfirm(value);
      case 'mobile':
        return setMobile(value);
      default:
    }
  };

  const saveBtn = () => {

    if(password === password_confirm) {
      axios.post(`${ec2_url}/mypages/updateProfile`, {
        username,
        password,
        mobile
      }, {
        headers: {
          authorization: `token ${accessToken}`,
        }
      );
      setModalClick(false);
      window.location.href = 'http://localhost:3000';
    }
  };

  return (

    <div className='mypage-modal'>
      <div className='signup-logo'>
        <img src={picLogo} alt='logo' />
        <img src={textLogo} alt='logo' />
      </div>
      <button
        className='mypage-button-close'
        onClick={() => setModalClick(false)}
      >
        X
      </button>
      <p>
        <h2>회원 정보 수정</h2>
      </p>
      <form>
        <p>
          <label htmlFor='mypage-email'>Email: </label>
          <input
            type='email'
            name='email'
            value={userInfo.email}
            onChange={onChange}
            id='mypage-email'
            placeholder='Email'
          />
        </p>
        <p>
          <label htmlFor='mypage-username'>Name: </label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={onChange}
            id='mypage-username'
            placeholder='Name'
          />
        </p>

        <p>
          <label htmlFor='mypage-password'>Password: </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            id='mypage-password'
            placeholder='Password'
          />
        </p>

        <p>
          <label htmlFor='mypage-password-confirm'>Password: </label>
          <input
            type='password'
            name='password_confirm'
            value={password_confirm}
            onChange={onChange}
            id='mypage-password-confirm'
            placeholder='Password Confirm'
          />
        </p>

        <p>
          <label htmlFor='mypage-mobile'>Mobile: </label>
          <input
            type='tel'
            name='mobile'
            value={mobile}
            onChange={onChange}
            id='mypage-mobile'
            placeholder='Mobile'
          />
        </p>

        <p>
          <input
            type='submit'
            name='isMypage'
            value='Save'
            className='mypage-button'
            onClick={saveBtn}
          />
        </p>
      </form>
    </div>
  );
}

export default MypageModal;
