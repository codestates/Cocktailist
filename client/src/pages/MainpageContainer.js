import React, { useEffect, useState } from 'react';
import MainPopular from '../components/MainPopular';
import MainToday from '../components/MainToday';
import axios from 'axios';
const ec2_url =
  'http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000';
const localhostUrl = 'http://localhost:8000';
export default function MypageContainer() {
  const [popularCocktails, setPopularCocktails] = useState([]);
  const [todayCocktails, setTodayCocktails] = useState([]);

  const getTodayCocktail = () => {
    axios
      .get(`${localhostUrl}/cocktails/recommendation`, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .then((res) => setTodayCocktails(res.data))
      .catch((err) => console.log(err));
  };
  const getPopularCocktail = () => {
    axios
      .get(`${localhostUrl}/cocktails/mostpopular`, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .then((res) => setPopularCocktails(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTodayCocktail();
    getPopularCocktail();
  }, []);

  return (
    <div className='main-body'>
      <MainToday todayCocktails={todayCocktails} />
      <MainPopular popularCocktails={popularCocktails} />
    </div>
  );
}
