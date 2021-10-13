import React from "react";
//import Ingredient from './Ingredient';

export default function MainToday({ todayCocktails }) {
  const { image, name, ingredients } = todayCocktails;

  return (
    <div className="main-today">
      <h2>Today's Cocktail</h2>
      <div className="main-today-div">
        <ul className="main-today-img-container">
          <li>
            <figure>
              <img src={image} alt={name} className="main-today-img" />
              <figcaption>
                <p>{name}</p>
              </figcaption>
            </figure>
          </li>
        </ul>
        <div>
          <div className="main-today-ingredent-title">Ingredient</div>
          <div className="main-today-ingredent-container">
            <ul>
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
                          className="main-ingredient-img"
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
      </div>
    </div>
  );
}
