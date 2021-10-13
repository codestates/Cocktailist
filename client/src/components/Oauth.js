import React, { useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export default function Oauth(setAccessToken, setIsSignin) {
  const url = `http://localhost:8000/auth/oauth`;
  const getAccessToken = async (code) => {
    await axios
      .post(url, { code }, { withCredential: true })
      .then((res) => console.log(res));
    // 우리 서버로 code를 전송합니다.
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  });
  const clientId = process.env.GITHUB_CLIENT_ID;
  const callbackURL = process.env.CLIENT_CALLBACK_URL;
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user:email`;

  const socialLoginHandler = () => {
    console.log(window.location);
    window.location.assign(githubUrl);
  };

  return (
    <button onClick={socialLoginHandler}>GitHub로 로그인하기</button>
    // 유저를 GitHub 인증 페이지로 이동시켜서 로그인하게 합니다.
    // 로그인이 성공하면 redirect_uri로 지정된 URL에 code가 쿼리스트링으로 붙은 채로 리다이렉트됩니다.
  );
}
