import React from 'react';
import MainPopular from '../components/MainPopular';
import MainToday from '../components/MainToday';

export default function MypageContainer({ closeHandler }) {
  return (
    <div className='main-body' onClick={closeHandler}>
      <MainToday />
      <MainPopular />
    </div>
  );
}
