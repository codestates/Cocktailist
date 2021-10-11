import React from 'react';
//import Ingredient from './Ingredient';

export default function MainToday({ todayCocktails }) {
  console.log('todayCocktails');
  console.log(todayCocktails);

  const { image, name, ingredients, recipes } = todayCocktails;
  console.log('ingredients');
  console.log(ingredients);
  console.log(recipes);
  return (
    <div className='main-today'>
      <h1>Today's Cocktail</h1>
      <div>
        <ul className='main-today-img-container'>
          <li>
            <figure>
              <img src={image} alt={name} className='main-today-img' />
              <figcaption>
                <p>{name}</p>
              </figcaption>
            </figure>
          </li>
        </ul>

        <ul className='main-today-ingredent-container'>
          {ingredients &&
            ingredients.map((cocktail, idx) => (
              <li key={idx}>
                <figure>
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className='main-ingredient-img'
                  />
                  <figcaption>
                    <p>{cocktail.name}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
