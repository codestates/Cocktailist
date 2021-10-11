import React from 'react';

export default function MypageContainer({
  userInfo,
  accessToken,
  toggleSigninModal,
  toggleSignupModal,
  setIsSignin,
  onSignin,
  setUserInfo,
}) {
  console.log('mypage now');
  console.log(userInfo);
  return (
    <div className='mypageContainer'>
      <div className='title'>Mypage</div>
      <hr />
      <br />
      <br />
      <div>
        안녕하세요.{' '}
        <span className='name'>
          {userInfo.email ? userInfo.username : 'Guest'}
        </span>
        님! jwt 로그인이 완료되었습니다.
      </div>
      <br />
      <br />
      <div className='item'>
        <span className='item'>나의 이메일: </span> {userInfo.email}
      </div>
      <div className='item'>
        <span className='item'>username: </span> {userInfo.username}
      </div>
      <div className='item'>
        <span className='item'>mobile: </span> {userInfo.mobile}
      </div>
      <div className='item'>
        <span className='item'>image: </span> {userInfo.image}
      </div>
      <br />
      <br />
      <div className='btnContainer'>
        <button className='tokenBtn red'>access token request</button>
        <button className='tokenBtn navy'>refresh token request</button>
      </div>
    </div>
  );
}
