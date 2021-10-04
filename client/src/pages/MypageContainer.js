import React from 'react';


export default function MypageContainer({ signinCloseHandler }) {
  return (
    <div onClick={signinCloseHandler}>
      <h1>Profile</h1>
    </div>
  );
}
