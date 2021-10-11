import React, { useEffect, useState } from "react";
import MainPopular from "../components/MainPopular";
import MainToday from "../components/MainToday";
import axios from "axios";
const ec2_url =
  "http://ec2-13-125-206-66.ap-northeast-2.compute.amazonaws.com:8000";
export default function MypageContainer() {
  const [todayCocktails, setTodayCocktails] = useState([]);
  const [popularCocktails, setPopularCocktails] = useState([]);

  const getTodayCocktail = () => {
    axios
      .get(`${ec2_url}/cocktails/recommendation`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => setTodayCocktails(res.data));
  };
  const getPopularCocktail = () => {
    axios
      .get(`${ec2_url}/cocktails/mostpopular`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => setPopularCocktails(res.data));
  };
  useEffect(() => {
    getTodayCocktail();
    getPopularCocktail();
  }, []);

  return (
    <div className="main-body">
      <MainToday todayCocktails={todayCocktails} />

      <MainPopular popularCocktails={popularCocktails} />
    </div>
  );
}
