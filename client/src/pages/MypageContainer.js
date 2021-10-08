import React from 'react';

export default function MypageContainer({ closeHandler }) {
  return (
    <div onClick={closeHandler}>
      <h1>Profile</h1>
    </div>
  );
}
