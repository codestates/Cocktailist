import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Nav({ onSignin, onSignout, autoSearchHandler }) {
  const history = useHistory();
  const [isOn, setIsOn] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  // const [activeClass, setClass] = useState('');
  const buttonHandler = (e) => {
    !isButton ? setIsButton(true) : setIsButton(false);
    isButton ? setMenuButton(false) : setMenuButton(false);
  };
  const menuButtonHandler = () => {
    !menuButton ? setMenuButton(true) : setMenuButton(false);
    menuButton ? setIsButton(false) : setIsButton(false);
  };
  const convertSignout = () => {
    history.push('/');
    setIsOn(true);
  };
  return (
    <header className='header'>
      <div>
        <Link to='/'>
          <img
            src='./images/intro_logo_img.svg'
            alt='logo'
            className='nav-logo-left'
          />
          <img
            src='./images/logo_Cocktailist.png'
            alt='logo'
            className='nav-logo-left1'
          />
        </Link>
        {isButton ? (
          <label>
            <input
              className='nav-search-modal'
              type='search'
              placeholder='  검색어를 입력하세요'
              onChange={autoSearchHandler}
            />
          </label>
        ) : null}
        <img
          src='./images/search_icon.svg'
          alt='logo'
          className='nav-logo-right1-active'
          onClick={buttonHandler}
        />

        {menuButton ? (
          <div className='nav-mypage-modal'>
            <div>
              <Link to='/mypage'>
                <h3>mypage</h3>
              </Link>

              <Link to='/signin'>
                <h3 onClick={convertSignout}>{isOn ? 'signout' : 'signin'}</h3>
              </Link>
            </div>
          </div>
        ) : null}
        <img
          src='./images/menu_icon.svg '
          alt='logo'
          className='nav-logo-right'
          onClick={menuButtonHandler}
        />
      </div>

      <div className='nav-menu-letter'>
        <Link to='/cocktails'>Cocktails</Link>
        <Link to='/community'>Community</Link>
      </div>
    </header>
  );
}
