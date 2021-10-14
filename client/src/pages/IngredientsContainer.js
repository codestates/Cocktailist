import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Ingredients from "../components/Ingredients";
const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
const localhostUrl = "http://localhost:8000";
const IngredientsContainer = () => {
  const [ingredients, setIngredients] = useState([]);
  const getIngredients = () => {
    axios
      .get(`${localhostUrl}/cocktails/ingredients`)
      .then((res) => setIngredients(res.data));
  };

  useEffect(() => {
    getIngredients();
  }, []);
  return (
    <div className="ingredients-body">
      <h2>Ingredients</h2>
      <div className="ingredients-container">
        {ingredients.map((el, idx) => (
          <Link key={idx} to={`/ingredients/${el.id}`}>
            <Ingredients ingredient={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IngredientsContainer;
