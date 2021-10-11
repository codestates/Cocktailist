import React from 'react';
import SignIn from './SignIn';

export default function NoTokenMypage(
  accessToken,
  toggleSigninModal,
  toggleSignupModal,
  setIsSignin,
  onSignin,
  setUserInfo
) {
  return (
    <div className='no-token'>
      <h1>계정이 필요한 페이지입니다.</h1>
      <SignIn
        accessToken={accessToken}
        toggleSigninModal={toggleSigninModal}
        toggleSignupModal={toggleSignupModal}
        setIsSignin={setIsSignin}
        onSignin={onSignin}
        setUserInfo={setUserInfo}
      />
    </div>
  );
}
