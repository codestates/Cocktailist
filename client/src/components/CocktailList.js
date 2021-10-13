import React, { useState } from "react";
import { Link } from "react-router-dom";
import CocktailRecipe from "./CocktailRecipe";
// import axios from 'axios';
// import { useHistory } from 'react-router';

export default function CocktailList({ cocktails }) {
  const [recipeCocktails, setRecipeCocktails] = useState([]);
  const [cocktailId, setCocktailId] = useState([]);

  return (
    <div className="cocktail-container">
      <div>
        <h2>Cocktails</h2>

        <ul className="cocktail-img-container">
          {!cocktails ? (
            <li>
              <p>
                <h1>로딩중...</h1>
              </p>
            </li>
          ) : (
            <ul className="cocktail-img-container">
              {cocktails.map((cocktail, idx) => (
                <li key={idx}>
                  <Link to={`cocktails/${cocktailId}`}>
                    <figure>
                      <img
                        src={cocktail.image}
                        alt={cocktail.name}
                        className="cocktails-img"
                        onClick={() => setCocktailId(cocktail.id)}
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
