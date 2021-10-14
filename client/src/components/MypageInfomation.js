import React from 'react';
import axios from 'axios';

function MypageInfomation({userInfo, setModalClick, accessToken}) {

  const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
const localhostUrl = "http://localhost:8000";

  const deleteAccount = () => {
    axios.get(`${ec2_url}/mypages/deleteAccount`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        authorization: `token ${accessToken}`,
      }
    })
    .then(() => {
      window.location.replace(`/`);
    })
  }

  return (
    <div>
      <h1>Profile</h1>
      <button className="deleteBtn" onClick={deleteAccount}>delete account</button>
      <div className="userInfo">
        <div className="info">
          <div className="infoN">
            <div className="infoName">email:</div>
            <div className="infoName">username:</div>
            <div className="infoName">mobile:</div>
          </div>
          <div>
            <div className="infoProfile">{userInfo.email}</div>
            <div className="infoProfile">{userInfo.username}</div>
            <div className="infoProfile">{userInfo.mobile}</div>
          </div>
        </div>
      </div>
      <button className="editBtn" onClick={() => {setModalClick(true)}}>edit</button>
    </div>
  );
}

export default MypageInfomation;