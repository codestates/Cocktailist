import React from 'react';

export default function CocktailList() {
  return (
  <div>
    <div className='cocktail-list'>
      <div>
      <h1>Popular Cocktail</h1>
      <ul>
        <li>
          <img src='./images/1_sex_on_the_beach.svg' alt='' />
          <h2>sex on the beach</h2>
        </li>
        <li>
          <img src='./images/2_mojito.svg' alt='' />
          <h2>mojito</h2>
        </li>
        <li>
          <img src='./images/3_blue_hawaii.svg' alt='' />
          <h2>blue hwaii</h2>
        </li>
        <li>
          <img src='./images/main_mojito.svg' alt='' />
          <h2>mojito</h2>
        </li>
        <li>
          <img src='./images/4_cosmopolitan.svg' alt='' />
          <h2>cosmopolitan</h2>
        </li>
        <li>
          <img src='./images/5_bacardi.svg' alt='' />
          <h2>bacardi</h2>
        </li>
      </ul>
      </div>
    </div>
  </div>
  );
}