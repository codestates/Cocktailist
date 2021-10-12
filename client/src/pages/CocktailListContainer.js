import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailList from '../components/CocktailList'
  
  const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
  const CocktailListContainer = () => {
  const [cocktails, setCocktails] = useState([]);
  const getCocktails = () => {
    axios.get(`${ec2_url}/cocktails`)
    .then((res) => setCocktails(res.data))
    .catch((err) => console.log(err))
  };
  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <div id="cocktail-list">
      <div>
        {cocktails.length === 0 ? (
          <div>nothing</div>
        ) : (
          <div id="cocktail-img-container">
            {cocktails.map((el, idx) => (
              <CocktailList key={idx} cocktail={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailListContainer;