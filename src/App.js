import './App.css';
import Navigation from './components/navigation';
import SignIn from './pages/auth/Signin'
import { Route, Switch, useHistory } from 'react-router'
import Products from './pages/products/products';

function App() {
  const history = useHistory();
  const LogOut = () => {
    localStorage.removeItem("auth.token");
    history.replace("/");
  };

  return (
    <div className="container">
      <Navigation/>
      <Switch>
        <Route path='/' exact>
          <SignIn/>
        </Route>
        <Route path='/home'>
          <button className='btn' onClick={LogOut}>
            Log out
          </button>
          <Products/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
