import React, { useState } from 'react';
import axios from 'axios';

export default function MypageContainer({ accessToken, setAccessToken }) {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [mobile, setMobile] = useState('');
  const [image, setImage] = useState('');

  const accessTokenRequest = () => {
    const tokenUrl = 'http://localhost:8000/updateProfile';
    axios
      .get(tokenUrl, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className='mypageContainer'>
      <div className='title'>Mypage</div>
      <hr />
      <br />
      <br />
      <div>
        안녕하세요. <span className='name'>{email ? userName : 'Guest'}</span>
        님! jwt 로그인이 완료되었습니다.
      </div>
      <br />
      <br />
      <div className='item'>
        <span className='item'>나의 이메일: </span> {email}
      </div>
      <div className='item'>
        <span className='item'>username: </span> {userName}
      </div>
      <div className='item'>
        <span className='item'>mobile: </span> {mobile}
      </div>
      <div className='item'>
        <span className='item'>image: </span> {image}
      </div>
      <br />
      <br />
      <div className='btnContainer'>
        <button className='tokenBtn red' onClick={accessTokenRequest}>
          access token request
        </button>
        <button className='tokenBtn navy'>refresh token request</button>
      </div>
    </div>
  );
}
