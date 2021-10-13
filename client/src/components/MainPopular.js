import React from 'react';

export default function MainPopular({ popularCocktails }) {
  return (
    <div className='main-popular'>
      <div>
        <h1>Popular Cocktail</h1>

        <ul className='main-popular-img-container'>
          {!popularCocktails ? (
            <div>로딩중...</div>
          ) : (
            <div className='main-scroll-box'>
              <ul className='main-popular-img-container'>
                {popularCocktails.map((cocktail, idx) => (
                  <li key={idx}>
                    <figure>
                      <img
                        src={cocktail.image}
                        alt={cocktail.name}
                        className='main-popular-img'
                      />
                      <figcaption>
                        <p>{cocktail.name}</p>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
