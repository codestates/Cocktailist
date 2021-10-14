import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CocktailRecipe() {
  const cocktailId = useParams();
  const [recipe, setRecipe] = useState([]);
  const getRecipes = () => {
    axios
      .get(`http://localhost:8000/cocktails/${cocktailId.id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getRecipes();
  }, []);
  function handleClick(e) {
    window.location.replace(`/ingredients/${e.target.id}`);
  }
  const { image, name, ingredients, recipes } = recipe;
  return (
    <div className="main-body">
      <div className="main-today">
        <h2>Cocktail Detail</h2>
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
          <h4>Ingredients</h4>
          <ul className="main-today-ingredent-container">
            {ingredients &&
              ingredients.map((cocktail, idx) => (
                <li id={cocktail.id} key={idx} onClick={handleClick}>
                  <figure id={cocktail.id}>
                    <img
                      id={cocktail.id}
                      src={cocktail.image}
                      alt={cocktail.name}
                      className="main-ingredient-img"
                    />
                    <figcaption>
                      <p id={cocktail.id}>{cocktail.name}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
          </ul>
        </div>
        <div className="main-today-recipe-box">
          <h4 className="main-today-recipe-title">Recipe</h4>
          <ul className="main-today-recipe-container">
            {recipes &&
              recipes.map((reci, idx) => (
                <li key={idx}>
                  <p>{reci}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
