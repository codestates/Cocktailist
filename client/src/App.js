import React, { useState } from 'react';
import Nav from './components/Nav';
import MainpageContainer from './pages/MainpageContainer';
import MypageContainer from './pages/MypageContainer';
import CommunityContainer from './pages/CommunityContainer';
import CocktailListContainer from './pages/CocktailListContainer';
import CocktailRecipe from './components/CocktailRecipe';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

function App() {
  const [isSignin, setIsSignin] = useState(false);
  // const [isSignup, setIsSignup] = useState(false);
  // const [user, setUser] = useState(false);
  const history = useHistory();
  const signinCloseHandler = (event) => {
    event.preventDefault();
    // const signinModal = document.querySelector('.signin-modal');
    // signinModal.style.display = 'none';
    setIsSignin(false);
    // setIsSignup(false);
    const background = document.body;
    background.style.backgroundColor = 'rgb(255,255,255)';
  };

  const onSignout = (event) => {
    if (window.confirm('Do you want to log out?')) {
      onSignup();
    }
  };
  const onSignup = () => {
    isSignin ? setIsSignin(false) : setIsSignin(true);
    const background = document.body;
    background.style.backgroundColor = 'rgb(200,200,200)';
  };
  const onSiginin = () => {
    isSignin ? setIsSignin(false) : setIsSignin(true);
    const background = document.body;
    background.style.backgroundColor = 'rgb(200,200,200)';
  };
  const onMypage = () => {
    history.push('/mypage');
  };

  return (
    <div className='app'>
      <Router>
        <Nav onSignup={onSignup} onSignout={onSignout} onMypage={onMypage} />
        <Switch>
          <Route exact={true} path='/'>
            <MainpageContainer signinCloseHandler={signinCloseHandler} />
          </Route>
          <Route exact={true} path='/mypage'>
            <MypageContainer signinCloseHandler={signinCloseHandler} />
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
        {!isSignin ? (
          <Signup onSignup={onSignup} />
        ) : (
          <SignIn onSiginin={onSiginin} />
        )}
      </Router>
    </div>
  );
}

export default App;
