import './App.css';
import Navigation from './components/navigation';
import SignIn from './pages/auth/Signin'
import { Route, Switch } from 'react-router'

function App() {
  return (
    <div className="container">
      <Navigation/>
      <Switch>
        <Route path='/' exact>
          <SignIn/>
        </Route>
        <Route path='/home'>
          Home
        </Route>
      </Switch>
    </div>
  );
}

export default App;
