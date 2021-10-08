'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [{
      id: 1,
      title: "더운 여름밤 모히또 한잔 어때요?",
      content: "더울 때 모히또 마시면 아주 좋습니다. 무조건 드셔보세요!",
      image: "../image/",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 2,
      title: "남성미 뿜뿜 멘하튼!",
      content: "멘하튼을 드셔보세요. 시가도 있으면 금상첨화!",
      image: "../image/",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 3,
      title: "블루하와이",
      content: "달콤새콤 맛있는 칵테일",
      image: "../image/",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
