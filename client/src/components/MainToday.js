import React from 'react';

export default function MainToday() {
  return (
    <div className='main-today'>
      <h1>Today's Cocktail</h1>
      <div>
        <img
          src='./images/main_mojito.svg '
          alt='mojito'
          className='main-today-img'
        />
        <h2>mojito</h2>
        {/* <figcaption>mojito</figcaption> */}
      </div>
      <span>
        쿠바의 전통 음료 모히또는 후덥지근한 여름밤과 잘 어울려요.
        <br /> 청량함의 끝! <br />
        에메랄드빛 칵테일 한모금 어떠세요?
      </span>
    </div>
  );
}
