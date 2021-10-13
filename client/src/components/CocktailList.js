import React from 'react';
import { Link } from 'react-router-dom';

export default function CocktailList({ cocktails }) {
  return (
    <div className='cocktail-container'>
      <div>
        <h1>Cocktails</h1>

        <ul className='cocktail-img-container'>
          {!cocktails ? (
            <li>
              <p>
                <h1>로딩중...</h1>
              </p>
            </li>
          ) : (
            <ul className='cocktail-img-container'>
              {cocktails.map((cocktail, idx) => (
                <li key={idx}>
                  <Link to={`/cocktails/${cocktail.id}`}>
                    <figure>
                      <img
                        src={cocktail.image}
                        alt={cocktail.name}
                        className='cocktails-img'
                      />
                      <figcaption>
                        <p>{cocktail.name}</p>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
