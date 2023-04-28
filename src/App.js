import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './Components/AppBar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Restaurant from './Pages/Restaurant';
import ResponsiveNavBar from './Components/ResponsiveNavbar';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  return (
    <div className="App">
      {/* <AppBar />
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    {/* <ResponsiveNavBar /> */}
    <div className='bg-black w-full h-screen'>
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
      <Route path='/forgot'>
        <ForgotPassword />
      </Route>
    </Switch>
    </div>
    
    </div>
  );
}

export default App;
