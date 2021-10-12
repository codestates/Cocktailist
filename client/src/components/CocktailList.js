import React from "react";
  
  const CocktailList = ({ cocktail }) => {

  return (
    <div className="cocktailist-box">
      <img className="cocktailist-image" src={cocktail.image} alt={cocktail.name} />
      <div className="cocktailist-name">{cocktail.name}</div>
    </div>
  );
};

export default CocktailList;