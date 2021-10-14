import React from "react";

const Ingredients = ({ ingredient }) => {
  const { id, name, image } = ingredient;
  return (
    <div id={id} className="ingredient-box">
      <div id={id} className="ingredient-image">
        <img id={id} src={image} alt={name}></img>
      </div>
      <span id={id} className="ingredient-name">
        {name}
      </span>
    </div>
  );
};

export default Ingredients;
