import React, { useEffect, useState } from 'react';
import MainPopular from '../components/MainPopular';
import MainToday from '../components/MainToday';
import axios from 'axios';
export default function MypageContainer() {
  const [popularCocktails, setPopularCocktails] = useState([]);
  const [todayCocktails, setTodayCocktails] = useState([]);

  const getTodayCocktail = () => {
    axios
      .get('http://localhost:8000/cocktails/recommendation')
      .then((res) => setTodayCocktails(res.data))
      .catch((err) => console.log(err));
  };
  const getPopularCocktail = () => {
    axios
      .get('http://localhost:8000/cocktails/mostpopular')
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
