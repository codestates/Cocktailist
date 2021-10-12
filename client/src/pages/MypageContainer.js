import React from 'react';
import Profile from '../components/Profile'
import Mypost from '../components/Mypost'
import Favorite from '../components/Favorite'
import axios from 'axios'

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
    <React.Fragment>

    <div>

    </div>
    <div>
        <Profile userInfo={userInfo}/>
        <Favorite accessToken ={accessToken}  />
        <Mypost accessToken = {accessToken} />
       
    </div>
    </React.Fragment>
 
  
  );
}
