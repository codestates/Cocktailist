import React from "react";
import { Link } from "react-router-dom";
const IngredientDetailEntry = ({ ingredient }) => {
  const { id, name, image, cocktails } = ingredient;
  function handleClick(e) {
    window.location.replace(`/cocktails/${e.target.id}`);
  }
  return (
    <div className="ingredientPage-container">
      <div className="ingredientPage-box">
        <div className="ingredientPage-image">
          <img src={ingredient.image} alt={ingredient.name}></img>
        </div>
        <span>{ingredient.name}</span>
      </div>
      <div className="ingredientPage-cocktails">
        <h4 className="main-today-ingredent-title">Cocktails</h4>
        {cocktails === undefined || cocktails.length === 0 ? (
          <div className="ingredientPage-cocktails-container">NOT FOUND</div>
        ) : (
          <div className="ingredientPage-cocktails-container">
            {cocktails.map((el, idx) => (
              <div
                id={el.id}
                key={idx}
                className="ingredientPage-cocktails-box"
                onClick={handleClick}
              >
                <img id={el.id} src={el.image} alt={el.name}></img>
                <div id={el.id} className="ingredientPage-cocktails-name">
                  {el.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientDetailEntry;
