import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Routines from './components/Routines';
import Activities from './components/Activities';
import MyRoutines from './components/MyRoutines';
import Home from './components/Home';
import styles from './App.module.css';
function App() {
  const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';
  
  const jwt = localStorage.getItem('jwt');
  const [myUserName, setMyUserName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');





  return (
    <div className="App">
      <Router >
        <header className={styles.top}>
          <Link to="/home"> Home </Link>
          <Link to="/"> Login/Logout </Link>
          <Link to="/signup"> Signup </Link>
          <Link to="/routines"> Routines </Link>
          <Link to="/activities"> Activities </Link>
          {jwt &&
            <>
              <Link to="/myroutines"> My Routines  </Link>
            </>
          }
        </header>
        <Switch>
          <Route exact path={"/home"}>
            <Home
              myUserName={myUserName}
              setMyUserName={setMyUserName} />
          </Route>

          <Route exact path={"/"}>
            <Login
              username={username} setUsername={setUsername}
              password={password} setPassword={setPassword} myUserName={myUserName} setMyUserName={setMyUserName} BASE_URL={BASE_URL} 
              />
          </Route>

          <Route exact path={"/signup"}>
            <Signup
              password={password}
              setPassword={setPassword}
              username={username}
              setUsername={setUsername}
              myUserName={myUserName}
              setMyUserName={setMyUserName}
              BASE_URL={BASE_URL} />
          </Route>

          <Route exact path = {"/activities"}>
            <Activities />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
