import React from 'react';
import MainPopular from '../components/MainPopular';
import MainToday from '../components/MainToday';

export default function MypageContainer({ signinCloseHandler }) {
  return (
    <div className='main-body' onClick={signinCloseHandler}>
      <MainToday />
      <MainPopular />
    </div>
  );
}
