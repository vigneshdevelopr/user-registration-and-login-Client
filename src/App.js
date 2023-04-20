import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './Components/AppBar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Restaurant from './Pages/Restaurant';

function App() {
  return (
    <div className="App">
      {/* <AppBar />
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Switch>
      <Route exact path="/">
      <Login />

      </Route>
      <Route path='/register'>
        <Signup />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route path='/restaurant'>
        <Restaurant />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
