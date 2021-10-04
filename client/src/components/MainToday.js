import React from 'react';

export default function MainToday() {
  return (
    <div className='main-today'>
      <h1>Today's Cocktail</h1>
      <ul className='main-today-img-container'>
        <li>
          <img
            src='./images/mojito.svg '
            alt='mojito'
            className='main-today-img'
          />
          <h2>mojito</h2>
          {/* <figcaption>mojito</figcaption> */}
        </li>

        <li>
          <img
            src='./images/mojito.svg'
            alt='mojito'
            className='main-today-img'
          />
          <h2>mojito</h2>
        </li>
      </ul>
    </div>
  );
}
