import React from 'react';

export default function MypageModal({ signinHandler, onSignout, onMypage }) {
  return (
    <div className='mypage-modal'>
      <div>
        <h3 onClick={onMypage}>mypage</h3>
        <h3 onClick={signinHandler}>signin</h3>
        <h3 onClick={onSignout}>signout</h3>
      </div>
    </div>
  );
}
