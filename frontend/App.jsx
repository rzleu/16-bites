import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Onboarding from './components/Onboarding';
import Root from './components/Root';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/discover'></Route>
        <Route path='/licensing'></Route>

        <Route path='/licensing/contribute'></Route>

        <Route path='/licensing/requirements'></Route>

        <Route path='/licensing/content'></Route>

        <Route path='/licensing/distribution'></Route>

        <Route path='/licensing/grants'></Route>

        <Route path='/resource_hub'></Route>
        <Route path='/onboarding' component={Onboarding}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/' component={Root}></Route>
      </Switch>
    </>
  );
}

export default App;
