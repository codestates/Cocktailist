import React from 'react';
import CocktailList from '../components/CocktailList';

export default function CocktailListContainer({ cocktails }) {
  return (
    <div className='main-body'>
      <CocktailList cocktails={cocktails} />
    </div>
  );
}
