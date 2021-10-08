import React, { useState } from 'react';
import Nav from './components/Nav';
import MainpageContainer from './pages/MainpageContainer';
import MypageContainer from './pages/MypageContainer';
import CommunityContainer from './pages/CommunityContainer';
import CocktailListContainer from './pages/CocktailListContainer';
import CocktailRecipe from './components/CocktailRecipe';
import SignIn from './components/SignIn';

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

  const onSignout = (event) => {
    event.preventDefault();
    if (window.confirm('Do you want to log out?')) {
      history.push('/');
      setIsSignin(false);
      setSigninModal(false);
      setSignupModal(false);
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
            {isSignin ? (
              <MypageContainer
                userInfo={userInfo}
                accessToken={accessToken}
                setAccessToken={setAccessToken}
              />
            ) : (
              <SignIn
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
            isSignup={isSignup}
            toggleSigninModal={toggleSigninModal}
            setSignupModal={toggleSignupModal}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
