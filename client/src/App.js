import React, { useState } from 'react';
import Nav from './components/Nav';
import MainpageContainer from './pages/MainpageContainer';
import MypageContainer from './pages/MypageContainer';
import CocktailListContainer from './pages/CocktailListContainer';
import CommunityContainer from './pages/CommunityContainer';
import CocktailRecipe from './components/CocktailRecipe';
import SignIn from './components/SignIn';
import NoTokenMypage from './components/NoTokenMypage';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  const history = useHistory();
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  console.log('userInfo');
  console.log(userInfo);
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
    <div className='app'>
      <Router>
        <Nav
          toggleSigninModal={toggleSigninModal}
          signinModal={signinModal}
          isSignin={isSignin}
          onSignin={onSignin}
          onSignout={onSignout}
          onMypage={onMypage}
        />
        <Switch>
          <Route exact={true} path='/'>
            <MainpageContainer />
          </Route>
          <Route exact={true} path='/mypage'>
            {userInfo ? (
              <MypageContainer userInfo={userInfo} />
            ) : (
              <NoTokenMypage />
            )}
          </Route>
          <Route exact={true} path='/community'>
            <CommunityContainer />
          </Route>
          <Route exact={true} path='/cocktails'>
            <CocktailListContainer />
          </Route>
          <Route exact={true} path='/cocktails/:id'>
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
          />
        )}
        {signupModal && (
          <Signup
            setSigninModal={setSigninModal}
            isSignup={isSignup}
            toggleSigninModal={toggleSigninModal}
            setSignupModal={toggleSignupModal}
            setIsSignup={setIsSignup}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
