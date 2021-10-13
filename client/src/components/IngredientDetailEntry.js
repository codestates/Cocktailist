import React from "react";
const IngredientDetailEntry = ({ ingredient }) => {
  const { id, name, image, cocktails } = ingredient;
  return (
    <div className="ingredientPage-container">
      <div className="ingredientPage-box">
        <div className="ingredientPage-image">
          <img src={ingredient.image} alt={ingredient.name}></img>
        </div>
        <span>{ingredient.name}</span>
      </div>
      <div className="ingredientPage-cocktails">
        <div className="main-today-ingredent-title">Cocktails</div>
        {cocktails === undefined || cocktails.length === 0 ? (
          <div className="ingredientPage-cocktails-container">NOT FOUND</div>
        ) : (
          <div className="ingredientPage-cocktails-container">
            {cocktails.map((el, idx) => (
              <div key={idx} className="ingredientPage-cocktails-box">
                <img src={el.image} alt={el.name}></img>
                <div className="ingredientPage-cocktails-name">{el.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientDetailEntry;
