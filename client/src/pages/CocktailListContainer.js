import React from 'react';
import CocktailList from '../components/CocktailList';

export default function CocktailListContainer({ signinCloseHandler }) {
  return (
    <div className='main-body' onClick={signinCloseHandler}>
      <CocktailList />
    </div>
  );
}