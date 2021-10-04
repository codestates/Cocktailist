import React from 'react';

export default function MypageModal({ signinHandler, onSignout, onMypage }) {
  return (
    <div className='mypage-modal'>
      <div>
        <h3 onClick={onMypage}>mypage</h3>
        <h3 onClick={signinHandler}>sign in</h3>
        <h3 onClick={onSignout}>sign out</h3>
      </div>
    </div>
  );
}
