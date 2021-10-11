import React, { Component } from 'react';
import axios from 'axios'



const Profile = ({userInfo}) => {
   

    return (
        <React.Fragment>

    <h4>Profile</h4>
    <div style = {{display:'flex', backgroundColor:'gray', opacity:'80%', width:'80%', margin:'10px'}}>
       
        <div style = {{margin: '20px'}}>
            <img style={{width:'100px', height :'100px', margin: '15px'}} />
        </div>
        <div style = {{margin: '15px'}}>
             <h5>username: {userInfo.username}</h5>
    <h5>email: {userInfo.email}</h5>
    <h5>mobile: {userInfo.mobile}</h5>
        </div>
    </div>
        </React.Fragment>
    )
    
}
 
export default Profile;