import React, { useState } from 'react';
import Nav from './components/Nav';
import MainpageContainer from './pages/MainpageContainer';
import MypageContainer from './pages/MypageContainer';
import CocktailListContainer from './pages/CocktailListContainer';
import CommunityContainer from './pages/CommunityContainer';
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
  const [isSignin, setIsSignin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [coctailInfo, setCocktailInfo] = useState(null);

  const onSignout = (event) => {
    if (window.confirm('Do you want to log out?')) {
      history.push('/');
    }
  };

  const onMypage = () => {
    history.push('/mypage');
  };
  const autoSearchHandler = () => {
    console.log('search');
  };
  return (
    <div className='app'>
      <Router>
        <Nav
          isSignin={isSignin}
          setIsSignin={setIsSignin}
          userInfo={userInfo}
          onSignout={onSignout}
          onMypage={onMypage}
          autoSearchHandler={autoSearchHandler}
        />
        <Switch>
          <Route exact={true} path='/'>
            <MainpageContainer />
          </Route>
          <Route exact={true} path='/mypage'>
            <MypageContainer />
          </Route>
          <Route exact={true} path='/community'>
            <CommunityContainer />
          </Route>
          <Route exact={true} path='/cocktails'>
            <CocktailListContainer
              coctailInfo={coctailInfo}
              setCocktailInfo={setCocktailInfo}
            />
          </Route>
          <Route exact={true} path='/cocktails/:id'>
            <CocktailRecipe />
          </Route>
          <Route exact={true} path='/signin'>
            <SignIn setUserInfo={setUserInfo} />
          </Route>
          <Route exact={true} path='/signup'>
            <Signup />
          </Route>
        </Switch>

        <SignIn />
      </Router>
    </div>
  );
}

export default App;
