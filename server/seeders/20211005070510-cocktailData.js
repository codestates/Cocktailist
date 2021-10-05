'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('cocktails', [{
      id: 1,
      name: "Sex on the Beach(섹스 온 더 비치)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 2,
      name: "Mojito(모히토)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 3,
      name: "Blue Hawaii(블루 하와이)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 4,
      name: "Cosmopolitan(코스모폴리탄)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 5,
      name: "Bacardi(바카디)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 6,
      name: "Screwdriver(스크류드라이버)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 7,
      name: "Martini(마티니)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 8,
      name: "Margarita(마가리타)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 9,
      name: "Bloody Mary(블러드 메리)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 10,
      name: "Orgasm(오르가즘)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 11,
      name: "Pink Lady(핑크 레이디)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 12,
      name: "Kahlua Coffee(깔루아 커피)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 13,
      name: "Midori Sour(미도리 사워)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 14,
      name: "Black Russian(블랙 러시안)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 15,
      name: "Tequila Sunrise(테킬라 선라이즈)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 16,
      name: "B-52(비 오십이)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 17,
      name: "Rusty Nail(러스티 네일)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 18,
      name: "Singapore Sling(싱가포르 슬링)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 19,
      name: "Sea Breeze(시 브리즈)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 20,
      name: "Kiss of Fire(키스 오브 파이어)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 21,
      name: "Peach Crush(피치크러쉬)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 22,
      name: "Mai-Tai(마이타이)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 23,
      name: "Long Island Iced Tea(롱 아일랜드 아이스티)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 24,
      name: "Grasshopper(그래스 호퍼)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 25,
      name: "B & B(비앤비)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 26,
      name: "Manhattan(맨하탄)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 27,
      name: "Mimosa(미모사)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 28,
      name: "Kami Kaze(카미카제)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 29,
      name: "Gin & Tonic(진 앤 토닉)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 30,
      name: "Blue Moon(블루 문)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 31,
      name: 'White Russian(화이트 러시안)',
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 32,
      name: "Red_Eye(레드 아이)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 33,
      name: "Orange Blossom(오렌지 블로섬)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 34,
      name: "Angel's Kiss(엔젤스 키스)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 35,
      name: "Big_Apple(빅 애플)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 36,
      name: "Classic_Martini(클래식 마티니)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 37,
      name: "Cinderella(신데렐라)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 38,
      name: "Golden_Cadillac(골든 캐딜락)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 39,
      name: "Gluhwein(글루바인)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 40,
      name: "Cherry Blossom(체리블로섬)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 41,
      name: "sangria(상그리아)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 42,
      name: "Shirley Temple(셜리 템플)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 43,
      name: "Old Fashioned(올드 패션드)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 44,
      name: "Negroni(네그로니)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 45,
      name: "Brandy Alexander(브랜디 알렉산더)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 46,
      name: "Tom Collins(톰콜린스)",
      image: "",
      favorite_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 47,
      name: "kir(키르)",
      image: "",
      favorite_count: 0,
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
    await queryInterface.bulkDelete('cocktails', null, {})
  }
};
