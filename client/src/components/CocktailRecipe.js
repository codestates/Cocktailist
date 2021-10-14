import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
const localhostUrl = "http://localhost:8000";

export default function CocktailRecipe({ isSignin, userInfo, accessToken }) {
  const appRef = useRef();
  const cocktailId = useParams();
  const [recipe, setRecipe] = useState([]);
  const [fav, setFav] = useState(false);
  const getRecipes = () => {
    axios
      .get(`${ec2_url}/cocktails/${cocktailId.id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  };
  const getMyFavorite = () => {
    if (isSignin) {
      axios
        .get(`${ec2_url}/mypages/myFavorite`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            authorization: `token ${accessToken}`,
          },
        })
        .then((res) => {
          const myFavorite = res.data.map((el) => el.cocktailId);
          return myFavorite;
        })
        .then((myfav) => {
          if (myfav.includes(cocktailId)) {
            appRef.current.textContent = "cancel favorite";
            setFav(true);
          } else {
            appRef.current.textContent = "add favorite";
            setFav(false);
          }
        });
    }
  };
  const addFavorite = () => {
    if (!fav) {
      axios
        .post(
          `${ec2_url}/cocktails/favorite`,
          {
            userId: userInfo.id,
            cocktailId: cocktailId.id,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              authorization: `token ${accessToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setFav(true);
          appRef.current.textContent = "cancel favorite";
        });
    } else {
      axios
        .post(
          `${ec2_url}/cocktails/cancelfavorite`,
          {
            userId: userInfo.id,
            cocktailId: cocktailId.id,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              authorization: `token ${accessToken}`,
            },
          }
        )
        .then((res) => {
          setFav(false);
          appRef.current.textContent = "add favorite";
        });
    }
  };
  useEffect(() => {
    getRecipes();
    getMyFavorite();
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
                <figcaption>
                  <button
                    className="cocktail-detail-favorite"
                    ref={appRef}
                    onClick={addFavorite}
                  >
                    add favorite
                  </button>
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
