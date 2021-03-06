import React, { useState } from "react";
import axios from "axios";
import Oauth from "./Oauth";
import picLogo from "../img/intro_logo_img.svg";
import textLogo from "../img/logo_Cocktailist.png";
const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
const localhostUrl = "http://localhost:8000";

export default function SignIn({
  toggleSignupModal,
  toggleSigninModal,
  setIsSignin,
  onSignin,
  setUserInfo,
  setAccessToken,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errText, setErrText] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "password":
        return setPassword(value);
      case "email":
        return setEmail(value);
      case "signin":
        return setIsSignin(true);
      default:
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    email === "" || password === ""
      ? setErrText("이메일과 비밀번호를 입력하세요")
      : setErrText("");
    const signinUrl = `${ec2_url}/auth/signin`;
    const data = await axios
      .post(
        signinUrl,
        { email, password },
        {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .catch((err) => console.log(err));
    if (!data) {
      setErrText("이메일과 비밀번호를 정확히 입력하세요");
    } else {
      onSignin(data.data.accessToken);
      setUserInfo(data.data.data);
    }
  };

  return (
    <div className="signin-modal">
      <div className="signin-logo">
        <img src={picLogo} alt="logo" />
        <img src={textLogo} alt="logo" />
      </div>
      <button
        className="signin button-close"
        onClick={() => toggleSigninModal(false)}
      >
        X
      </button>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="signin-email">Email</label>
          <input
            name="email"
            value={email}
            onChange={onChange}
            type="email"
            id="signin-email"
            placeholder="Email"
          />
        </p>
        <p>
          <label htmlFor="signin-password">Password</label>
          <input
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            id="signin-password"
            placeholder="Password"
          />
        </p>
        <p>
          <input
            name="submit"
            type="submit"
            value="Sign in"
            className="signin-button"
          />
        </p>
        {errText.length !== 0 ? <div className="wormMSG">{errText}</div> : null}
        <p className="signin-link">
          <button onClick={() => toggleSignupModal(true)}>Signup</button>
        </p>
      </form>
      <Oauth setAccessToken={setAccessToken} setIsSignin={setIsSignin} />
    </div>
  );
}
