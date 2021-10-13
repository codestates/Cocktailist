import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CocktailRecipe from './CocktailRecipe';
// import axios from 'axios';
// import { useHistory } from 'react-router';

export default function CocktailList({ cocktails }) {
  // const history = useHistory();
  const [recipeCocktails, setRecipeCocktails] = useState([]);
  const [cocktailId, setCocktailId] = useState([]);
  console.log('recipeCocktails');
  console.log(recipeCocktails);
  console.log('cocktailId');
  console.log(cocktailId);

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
                <Link to={`cocktails/${cocktailId}`}>
                  <li key={idx}>
                    <figure>
                      <img
                        id={cocktail.id}
                        src={cocktail.image}
                        alt={cocktail.name}
                        className='cocktails-img'
                      />
                      <figcaption>
                        <p>{cocktail.name}</p>
                      </figcaption>
                    </figure>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
