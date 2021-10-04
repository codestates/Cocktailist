const { user } = require("../../models")

module.exports = async (req, res) => {
  const { email } = req.body;
  await user.destroy({
    where: { email }
  })
}

/*
  클라이언트에서 confirm 버튼을 클릭 할 때 
  서버로 유저의 email을 보내줌
  서버는 해당 유저의 email을 destroy를 통해 데이터베이스에서 삭제 해준다.
*/
