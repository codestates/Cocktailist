import React, { useEffect, useState } from 'react';
import MainPopular from '../components/MainPopular';
import MainToday from '../components/MainToday';
import axios from 'axios';
export default function MypageContainer() {
  const [todayCocktails, setTodayCocktails] = useState([]);
  const [popularCocktails, setPopularCocktails] = useState([]);

  const getTodayCocktail = () => {
    axios
      .get('http://cocktailists.shop/cocktails/recommendation')
      .then((res) => setTodayCocktails(res.data));
  };
  const getPopularCocktail = () => {
    axios
      .get('http://cocktailists.shop/cocktails/mostpopular')
      .then((res) => setPopularCocktails(res.data));
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
