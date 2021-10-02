import MainpageContainer from './pages/MainpageContainer';
import MypageContainer from './pages/MypageContainer';
import Nav from './components/Nav';
import CommunityContainer from './pages/CommunityContainer';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import MypageModal from './components/MypageModal';

function App() {
  const history = useHistory();
  const signinHandler = () => {
    const signinModal = document.querySelector('.signin-modal');
    const button = document.querySelectorAll('button');
    console.log(button);
    console.log(signinModal);

    const background = document.body;
    background.style.backgroundColor = 'rgb(200,200,200)';
    button[0].style.backgroundColor = ' #f5f5f5;';
    button[1].style.backgroundColor = ' #f5f5f5;';
    signinModal.style.display = 'inline-block';
    background.style.pointerEvents = 'all';
  };
  const signupHandler = () => {
    const signupModal = document.querySelector('.signup-modal');
    const button = document.querySelectorAll('button');
    console.log(button);
    console.log(signupModal);

    const background = document.body;
    background.style.backgroundColor = 'rgb(200,200,200)';
    button[0].style.backgroundColor = ' #f5f5f5;';
    button[1].style.backgroundColor = ' #f5f5f5;';
    signupModal.style.display = 'inline-block';
    background.style.pointerEvents = 'all';
  };

  const onSignout = () => {
    if (window.confirm('Do you want to log out?')) {
      history.push('/');
    }
  };
  const onMypage = () => {
    history.push('/mypage');
  };

  return (
    <div className='app'>
      <Router>
        <Nav signinHandler={signinHandler} />
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
        </Switch>
        <SignIn signupHandler={signupHandler} />
        <Signup signinHandler={signinHandler} />
        <MypageModal
          signinHandler={signinHandler}
          onSignout={onSignout}
          onMypage={onMypage}
        />
      </Router>
    </div>
  );
}

export default App;
