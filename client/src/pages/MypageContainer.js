import React from 'react';
//import SignIn from '../components/SignIn';

export default function MypageContainer({ signinCloseHandler }) {
  return (
    <div onClick={signinCloseHandler}>
      <h1>Profile</h1>
    </div>
  );
}
