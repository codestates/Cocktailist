import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import MainpageContainer from './pages/MainpageContainer';
import MypageContainer from './pages/MypageContainer';
import CocktailListContainer from './pages/CocktailListContainer';
import CommunityContainer from './pages/CommunityContainer';
import SignIn from './components/SignIn';
import NoTokenMypage from './components/NoTokenMypage';
import axios from 'axios';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Signup from './components/Signup';
import CocktailRecipe from './components/CocktailRecipe';

function App() {
  const history = useHistory();
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = () => {
    axios
      .get('http://localhost:8000/cocktails')
      .then((res) => setCocktails(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCocktails();
  }, []);

  const onSignout = (event) => {
    event.preventDefault();
    if (window.confirm('Do you want to log out?')) {
      setIsSignin(false);
      setSigninModal(false);
      setSignupModal(false);
      setUserInfo(null);
      history.push('/');
    }
  };
  const toggleSigninModal = () => {
    signinModal ? setSigninModal(false) : setSigninModal(true);
  };
  const toggleSignupModal = () => {
    signupModal ? setSignupModal(false) : setSignupModal(true);
    setSigninModal(false);
  };
  const onSignin = (data) => {
    console.log('signin');
    console.log(data);
    setIsSignin(true);
    setSigninModal(false);
    setAccessToken(data);
  };
  const onMypage = () => {
    history.push('/mypage');
  };

  return (
    <div id='app'>
      <Router>
        <Nav
          toggleSigninModal={toggleSigninModal}
          signinModal={signinModal}
          isSignin={isSignin}
          onSignin={onSignin}
          onSignout={onSignout}
          onMypage={onMypage}
          cocktails={cocktails}
          userInfo={userInfo}
        />
        <Switch>
          <Route exact={true} path='/'>
            <MainpageContainer id='mainpage-container' />
          </Route>
          <Route exact={true} path='/mypage'>
            {userInfo ? (
              <MypageContainer
                userInfo={userInfo}
                accessToken={accessToken}
                toggleSigninModal={toggleSigninModal}
                toggleSignupModal={toggleSignupModal}
                setIsSignin={setIsSignin}
                onSignin={onSignin}
                setUserInfo={setUserInfo}
              />
            ) : (
              <NoTokenMypage
                accessToken={accessToken}
                toggleSigninModal={toggleSigninModal}
                toggleSignupModal={toggleSignupModal}
                setIsSignin={setIsSignin}
                onSignin={onSignin}
                setUserInfo={setUserInfo}
              />
            )}
          </Route>
          <Route exact={true} path='/community'>
            <CommunityContainer />
          </Route>
          <Route exact={true} path='/cocktails'>
            <CocktailListContainer cocktails={cocktails} />
          </Route>
          <Route exact={true} path='/:id'>
            <CocktailRecipe />
          </Route>
        </Switch>

        {signinModal && (
          <SignIn
            accessToken={accessToken}
            toggleSigninModal={toggleSigninModal}
            toggleSignupModal={toggleSignupModal}
            setIsSignin={setIsSignin}
            onSignin={onSignin}
            setUserInfo={setUserInfo}
            setAccessToken={setAccessToken}
          />
        )}
        {signupModal && (
          <Signup
            setSigninModal={setSigninModal}
            isSignup={isSignup}
            toggleSigninModal={toggleSigninModal}
            setSignupModal={toggleSignupModal}
            setIsSignup={setIsSignup}
            signinModal={signinModal}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
