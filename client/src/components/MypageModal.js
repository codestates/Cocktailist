import React, { useState } from "react";
import axios from "axios";

function MypageModal({ userInfo, setModalClick, accessToken }) {
  const ec2_url =
    "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
  const localhostUrl = "http://localhost:8000";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [mobile, setMobile] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "username":
        return setUsername(value);
      case "password":
        return setPassword(value);
      case "password_confirm":
        return setPasswordConfirm(value);
      case "mobile":
        return setMobile(value);
      default:
    }
  };

  const saveBtn = () => {
    if(password === password_confirm) {
      axios.post(`${localhostUrl}/mypages/updateProfile`, {
        username,
        password,
        mobile
      }, {
        headers: {
          authorization: `token ${accessToken}`,
        }
      });
      setModalClick(false)
      window.location.href = "http://localhost:3000/mypage";
    } 
  };

  return (
    <>
      <div className="mainModal">
        <button onClick={() => setModalClick(false)}>X</button>
        <img
          src="./images/logo_Cocktailist.png"
          alt="logo"
          className="cocktailistLogo"
        />
        <div className="editInfo">
          <div className="emailInfo">`email: {userInfo.email}`</div>
          <div>
            username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
            ></input>
          </div>
          <div>
            password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            ></input>
          </div>
          <div>
            confirm pw:
            <input
              type="password"
              name="password_confirm"
              value={password_confirm}
              onChange={onChange}
            ></input>
          </div>
          <div>
            mobile:
            <input
              type="tel"
              name="mobile"
              value={mobile}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <button onClick={saveBtn}>save</button>
      </div>
    </>
  );
}

export default MypageModal;
