import React from 'react';

export default function MainPopular({ popularCocktails }) {
  console.log('popularCocktails');
  console.log(popularCocktails);
  return (
    <div className='main-popular'>
      <div>
        <h1>Popular Cocktail</h1>

        <ul className='main-popular-img-container'>
          {!popularCocktails ? (
            <div>로딩중...</div>
          ) : (
            <ul className='main-popular-img-container'>
              {popularCocktails.map((cocktail, idx) => (
                <li key={idx}>
                  <figure>
                    <img
                      src={cocktail.image}
                      alt={cocktail.name}
                      className='main-today-img'
                    />
                    <figcaption>
                      <p>{cocktail.name}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
