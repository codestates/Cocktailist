const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req)
  if(!userInfo) {
    res.sendStatus(404)
  } else {
    const { username, password, mobile } = req.body;
    await user.update(
      {
        username,
        password,
        mobile,
      },
      {
        where: { email: userInfo.email },
      }
    )
    .then(() => {
      res.sendStatus(201)
    })
  }
}

/*
  클라이언트에서 edit버튼을 눌러 프로필을 수정한 후 
  클라이언트에서 password와 comfirm pw가 일치하는 지 확인 후 일치할 경우
  서버로 email, username, password, mobile을 보내줌
  email은 데이터베이스에서 수정할 유저 정보를 찾기 위해
  나머지는 update를 통해 각각 수정해준다.
  서버에서 클라이언트로 수정된 데이터를 전송하지는 않는다.
  (서버에 보내준 데이터(username, password, mobile 등)을 상태에 저장을 하면 된다.)

  마이페이지에서 구현할 것
  - 프로필 수정 O
  - 프로필 이미지 추가
  - favorite 정보 띄우기 O
  - my post 정보 띄우기
  - 계정 삭제 O

  로그인을 한 후 서버에서 비밀번호를 제외한 정보(이메일, 유저네임, 전화번호 등)를 응답으로 전달
  클라이언트에서 전달받은 정보를 state에 저장 후 props로 전달

  주의할 것 email은 무조건 달라야하므로 검증 단계 필요
  드롭 다운 메뉴
*/