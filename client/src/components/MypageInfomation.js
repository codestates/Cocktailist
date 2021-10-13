import React from 'react';
import axios from 'axios';

function MypageInfomation({userInfo, setModalClick, accessToken}) {

  const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
const localhostUrl = "http://localhost:8000";

  const deleteAccount = () => {
    axios.get(`${localhostUrl}/mypages/deleteAccount`, {
      headers: {
        authorization: `token ${accessToken}`,
      }
    })
    .then(() => {
      window.location.href = "http://localhost:3000";
    })
  }

  return (
    <div>
      <h1>Profile</h1>
      <button className="deleteBtn" onClick={deleteAccount}>delete account</button>
      <div className="userInfo">
        <div>
          <div className="userImg">
            <button className="addImgBtn">이미지 추가</button>
            {userInfo.image},{userInfo.id}
          </div>
          <div className="info">
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