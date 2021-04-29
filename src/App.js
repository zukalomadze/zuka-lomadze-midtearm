import './App.css';
import Navigation from './components/navigation';
import SignIn from './pages/auth/Signin'
import { Route, Switch } from 'react-router'
import Products from './pages/products/products';

function App() {
  return (
    <div className="container">
      <Navigation/>
      <Switch>
        <Route path='/' exact>
          <SignIn/>
        </Route>
        <Route path='/home'>
          <Products/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
