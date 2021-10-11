import React from 'react';
import Profile from '../components/Profile'
import Mypost from '../components/Mypost'
import Favorite from '../components/Favorite'
import axios from 'axios'

export default    function MypageContainer({ userInfo ,accessToken}) {

  // axios.get('http://localhost:8000/mypages/myFavorite',{
  //   headers: { authorization: `Bearer ${accessToken}` }
  //       }, {
  //       withCredentials: true
  //   }).then(data => {
  //       console.log(data.data)

  //   })
   
  
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
