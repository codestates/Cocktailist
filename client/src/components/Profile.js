import React, { Component } from 'react';
import axios from 'axios'

const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";


const Profile = ({userInfo}) => {
   
    // const deleteAccount = (id) => {
    //     axios.post(`${ec2_url}/auth/delete`,{
    //         id
    //     })
    // }
    return (
        <React.Fragment>

    <h4 style={{padding:'20px 10px 0 0'}}>Profile</h4>
    <div style = {{width:'80%'}} >

    <button style={{backgroundColor:'gray', borderRadius:'5%', padding:'2px', margin:'5px 1px 0 10px', width:'80px' }}>Edit</button>
    <button style={{backgroundColor:'gray', borderRadius:'5%', padding:'2px', margin:'5px 0 0 0', width:'80px' }}>Delete</button>
        <div style = {{display:'flex', backgroundColor:'gray', opacity:'80%', width:'95%', margin:'2px 10px 10px 10px'}}>
            <div style = {{margin: '20px'}}>
                <img style={{width:'100px', height :'100px', margin: '15px'}} />
            </div>
            
            <div style = {{margin: '15px', padding:'20px'}}>
                <h5>username: {userInfo.username}</h5>
                <h5>email: {userInfo.email}</h5>
                <h5>mobile: {userInfo.mobile}</h5>
            </div>
       
        </div>
        <div>

       
        </div>
    </div>
        </React.Fragment>
    )
    
}
 
export default Profile;