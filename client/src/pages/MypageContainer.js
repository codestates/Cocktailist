import React, { useState } from 'react';
import MypageModal from '../components/MypageModal';
import MypageInfomation from '../components/MypageInfomation';
import MypageFavorite from '../components/MypageFavorite';

export default function MypageContainer({ userInfo, accessToken }) {
  const [modalClick, setModalClick] = useState(false);
  return (

    <div className='main-body'>

      <MypageInfomation
        userInfo={userInfo}
        setModalClick={setModalClick}
        accessToken={accessToken}
      />
      <MypageFavorite accessToken={accessToken} />
      {modalClick && (
        <MypageModal
          userInfo={userInfo}
          setModalClick={setModalClick}
          accessToken={accessToken}
        />
      )}
    </div>
  );
}
