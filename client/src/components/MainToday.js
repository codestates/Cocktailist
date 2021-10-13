import React from 'react';
import { Link } from 'react-router-dom';

export default function MainToday({ todayCocktails }) {
  const { id, image, name, ingredients } = todayCocktails;

  return (
    <div className='main-today'>
      <h1>Today's Cocktail</h1>
      <div className='main-today-div'>
        <ul className='main-today-img-container'>
          <li>
            <Link to={`/cocktails/${id}`}>
              <figure>
                <img src={image} alt={name} className='main-today-img' />
                <figcaption>
                  <p>{name}</p>
                </figcaption>
              </figure>
            </Link>
          </li>
        </ul>

        <ul className='main-today-ingredent-container'>
          {ingredients &&
            ingredients.map((cocktail, idx) => {
              const encodeImg = encodeURI(cocktail.image);
              const decodeImg = decodeURI(encodeImg);
              return (
                <li key={idx}>
                  <figure>
                    <img
                      src={decodeImg}
                      alt={cocktail.name}
                      className='main-ingredient-img'
                    />
                    <figcaption>
                      <p>{cocktail.name}</p>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
