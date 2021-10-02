import React from 'react';
import MainPopular from '../components/MainPopular';
import MainToday from '../components/MainToday';

export default function MypageContainer() {
  return (
    <div>
      <MainToday />
      <MainPopular />
    </div>
  );
}
