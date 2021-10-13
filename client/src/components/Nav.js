import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import picLogo from "../img/intro_logo_img.svg";
import textLogo from "../img/logo_Cocktailist.png";
import searchIcon from "../img/search_icon.svg";
import menuIcon from "../img/menu_icon.svg";

export default function Nav({
  isSignin,
  signinModal,
  toggleSigninModal,
  onSignout,
  cocktails,
  userInfo,
}) {
  const [isButton, setIsButton] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const buttonHandler = () => {
    !isButton ? setIsButton(true) : setIsButton(false);
    isButton ? setMenuButton(false) : setMenuButton(false);
  };
  const menuButtonHandler = () => {
    !menuButton ? setMenuButton(true) : setMenuButton(false);
    menuButton ? setIsButton(false) : setIsButton(false);
  };

  return (
    <header className="header">
      <div className="nav-toolbar">
        <div className="nav-left-container">
          <Link to="/">
            <img src={picLogo} alt="logo" className="nav-logo-left" />
          </Link>
          <Link to="/">
            <img src={textLogo} alt="logo" className="nav-logo-left1" />
          </Link>
          {userInfo && (
            <div>
              <h4>{userInfo.username}님 반갑습니다.</h4>
            </div>
          )}
        </div>

        <ul className="nav-right-container">
          <li>
            {isButton ? (
              <label>
                <input
                  className="nav-search-modal"
                  type="search"
                  placeholder="검색어를 입력하세요"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </label>
            ) : null}

            <img
              src={searchIcon}
              alt="logo"
              className="nav-logo-right1"
              onClick={buttonHandler}
            />
          </li>
          <li>
            {menuButton ? (
              <div className="nav-mypage-modal">
                <div className="nav--mypage-container">
                  <Link to="/mypage">
                    <h3>mypage</h3>
                  </Link>

                  {isSignin ? (
                    <h3 onClick={onSignout}>signout</h3>
                  ) : (
                    <h3 onClick={() => toggleSigninModal(true)}>signin</h3>
                  )}
                </div>
              </div>
            ) : null}
            <img
              src={menuIcon}
              alt="logo"
              className="nav-logo-right"
              onClick={menuButtonHandler}
            />
          </li>
        </ul>
      </div>
      {searchTerm !== "" && isButton ? (
        <SearchModal cocktails={cocktails} searchTerm={searchTerm} />
      ) : null}
      <div className="nav-menu-letter">
        <Link to="/cocktails">Cocktails</Link>
        <Link to="/ingredients">Igredients</Link>
      </div>
    </header>
  );
}
