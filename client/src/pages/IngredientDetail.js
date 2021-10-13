import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import IngredientDetailEntry from "../components/IngredientDetailEntry";
const ec2_url =
  "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
const localhostUrl = "http://localhost:8000";
const IngredientDetail = () => {
  const { id } = useParams();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInfo, setIngredientInfo] = useState("");
  let history = useHistory();
  const getIngredients = () => {
    axios
      .get(`${localhostUrl}/cocktails/ingredients`)
      .then((res) => setIngredients(res.data));
  };
  const getIngredient = (id) => {
    axios
      .get(`${localhostUrl}/cocktails/ingredients/${id}`)
      .then((res) => setIngredientInfo(res.data));
  };
  useEffect(() => {
    getIngredient(id);
    getIngredients();
  }, []);

  function handleClick(e) {
    window.location.replace(`/ingredients/${e.target.id}`);
  }
  return (
    <div className="ingredients-body">
      <h2>Ingredients</h2>
      <IngredientDetailEntry ingredient={ingredientInfo} />
      <div className="ingredients-scroll">
        <div>Other ingredients</div>
        {ingredients.map((el, idx) => (
          <div
            key={idx}
            id={el.id}
            className="ingredients-scroll-item"
            onClick={(e) => handleClick(e)}
          >
            <img id={el.id} src={el.image} alt={el.name}></img>
            <div id={el.id}>{el.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientDetail;
