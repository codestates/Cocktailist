import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CocktailRecipe({ cocktailId }) {
  // const [recipe, setRecipe] = useState([]);
  // const getRecipes = () => {
  //   axios
  //     .get(`http://localhost:8000/cocktails/${cocktailId}`)
  //     .then((res) => setRecipe(res.data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getRecipes();
  // }, []);
  // console.log('recipe');
  // console.log(recipe);
  // const { image, name, ingredients, recipes } = recipe;
  return (
    <div className="main-today">
      <h1>Cocktail Recipe</h1>
      {/* <div className='main-today-div'>
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
      <ul className='main-today-ingredent-container'>
        {recipes &&
          recipes.map((reci, idx) => (
            <li key={idx}>
              <p>{reci}</p>
            </li>
          ))}
      </ul> */}
    </div>
  );
}
