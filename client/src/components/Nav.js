import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ signinHandler }) {
  return (
    <header className='header'>
      <div>
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
        <Link to='/mypage'>
          <img
            src='./images/search.svg'
            alt='logo'
            className='nav-logo-right1'
          />
        </Link>
        <Link to='/mypage'>
          <img
            src='./images/menu.svg '
            alt='logo'
            className='nav-logo-right'
            onClick={signinHandler}
          />
        </Link>
      </div>
      <div className='nav-menu-letter'>
        <Link to='/cocktaillist'>Cocktail List</Link>
        <Link to='/community'>Community</Link>
      </div>
    </header>
  );
}
