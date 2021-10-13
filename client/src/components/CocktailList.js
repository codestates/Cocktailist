<<<<<<< HEAD
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
                        src={cocktail.image}
                        alt={cocktail.name}
                        className='cocktails-img'
                        onClick={() => setCocktailId(cocktail.id)}
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
=======
import React from "react";
  
  const CocktailList = ({ cocktail }) => {

  return (
    <div className="cocktailist-box">
      <img className="cocktailist-image" src={cocktail.image} alt={cocktail.name} />
      <div className="cocktailist-name">{cocktail.name}</div>
>>>>>>> d6551f703ebcefb5921da2c141c241f85c24d020
    </div>
  );
};

export default CocktailList;