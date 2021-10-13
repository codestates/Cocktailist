import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
const localhostUrl = "http://localhost:8000";

export default function Signup({
  toggleSigninModal,
  setSignupModal,
  setIsSignup,
  isSignup,
  signinModal,
  setSigninModal,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});
  const passwordValidation = useRef({});
  passwordValidation.current = watch("password", "");
  const check = watch("password_confirm");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [username, setUser] = useState("");
  const [mobile, setMobile] = useState("");
  const [errText, setErrText] = useState("");
  const history = useHistory();
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "username":
        return setUser(value);
      case "password":
        return setPassword(value);
      case "password_confirm":
        return setPasswordConfirm(value);
      case "email":
        return setEmail(value);
      case "mobile":
        return setMobile(value);
      case "isSignup":
        return setIsSignup(true);
      default:
    }
  };

  const onSignup = async () => {
    username === "" ||
    email === "" ||
    password === "" ||
    mobile === "" ||
    password_confirm === ""
      ? setErrText("모든 항목을 필수입니다")
      : setErrText("");

    const signupUrl = `${localhostUrl}/signup`;
    const successLogin = await axios.post(
      signupUrl,
      { username, email, password, mobile },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          withCredentials: true,
        },
      }
    );

    if (successLogin.data.message === "email exists") {
      setIsSignup(true);
      setErrText("이메일이 존재합니다.");
      setUser("");
      setEmail("");
      setMobile("");
      setPassword("");
    } else if (successLogin) {
      setUser(successLogin.data.username);
      setEmail(successLogin.data.email);
      setMobile(successLogin.data.mobile);
      setPassword(successLogin.data.password);
      setIsSignup(false);
      setSignupModal(false);
      setSigninModal(true);
      history.push("/");
    }
  };

  return (
    <div className="signup-modal">
      <div className="signup-logo">
        <img src="./images/intro_logo_img.svg" alt="logo" />
        <img src="./images/logo_Cocktailist.png" alt="logo" />
      </div>
      <button
        className="signup-button-close"
        onClick={() => setSignupModal(false)}
      >
        X
      </button>
      <form method="POST" onClick={handleSubmit(onSignup)}>
        <p>
          <label htmlFor="signup-email">Email</label>
          <input
            {...register("email", {
              required: "Please enter a Email",
              pattern: {
                value: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid Email",
              },
            })}
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            id="signup-email"
            placeholder="Email"
          />
        </p>
        {errors.email && <p className="wornMSG">{errors.email.message}</p>}
        <p>
          <label htmlFor="signup-username">Name</label>
          <input
            {...register("username", {
              required: "Please enter a Name",
              minLength: {
                value: 5,
                message: "Password must have at least 5 characters",
              },
            })}
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            id="signup-username"
            placeholder="Name"
          />
        </p>
        {errors.username && (
          <p className="wornMSG">{errors.username.message}</p>
        )}

        <p>
          <label htmlFor="signup-password">Password</label>
          <input
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 5,
                message: "Password must have at least 5 characters",
              },
            })}
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            id="signup-password"
            placeholder="Password"
          />
        </p>
        {errors.password && (
          <p className="wornMSG">{errors.password.message}</p>
        )}
        <p>
          <label htmlFor="signup-password-confirm">Password</label>
          <input
            {...register("password_confirm", {
              required: "You must specify a password",
              validate: (value) =>
                value === passwordValidation.current ||
                "The passwords do not match",
            })}
            type="password"
            name="password_confirm"
            value={password_confirm}
            onChange={onChange}
            id="signup-password-confirm"
            placeholder="Password Confirm"
          />
        </p>
        {errors.password_confirm && (
          <p className="wornMSG">{errors.password_confirm.message}</p>
        )}
        <p>
          <label htmlFor="signup-mobile">Mobile</label>
          <input
            {...register("mobile", {
              required: "Please enter a Mobile",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            type="tel"
            name="mobile"
            value={mobile}
            onChange={onChange}
            id="signup-mobile"
            placeholder="Mobile"
          />
        </p>
        {errors.mobile && <p className="wornMSG">{errors.mobile.message}</p>}
        <p>
          <input
            type="submit"
            name="isSignup"
            value="Sign up"
            className="signup-button"
          />
        </p>

        {isSignup ? <div>{errText}</div> : null}
        <p className="signup-link">
          <button onClick={() => toggleSigninModal(true)}>
            Already have an acoount? signin
          </button>
        </p>
      </form>
    </div>
  );
}
