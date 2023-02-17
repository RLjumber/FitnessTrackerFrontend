import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Routines from './components/Routines';
import Activities from './components/Activities';
import AddActivity from './components/AddActivity';
import MyRoutines from './components/MyRoutines';
import Home from './components/Home';
import styles from './App.module.css';
import AddRoutine from './components/AddRoutine';
import EditMyRoutine from './components/EditMyRoutine';

function App() {
  const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';
  const jwt = localStorage.getItem('jwt');
  const [myUserName, setMyUserName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [creatorName, setCreatorName] = useState('');
  const [activityName, setActivityName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [count, setCount] = useState('');

  return (
    <div className={styles.App}>
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

          <Route exact path={"/routines"}>
            <Routines
              creatorName={creatorName}
              setCreatorName={setCreatorName}
              activityName={activityName}
              setActivityName={setActivityName}
              duration={duration}
              setDuration={setDuration}
              count={count}
              setCount={setCount}
              goal={goal}
              setGoal={setGoal}
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
              jwt={jwt}
              BASE_URL={BASE_URL} />
          </Route>

          <Route exact path={"/addactivity"}>
            <AddActivity
              BASE_URL={BASE_URL}
              jwt={jwt} />
          </Route>

          <Route exact path={"/activities"}>
            <Activities
              BASE_URL={BASE_URL}
            />
          </Route>

          <Route exact path={"/myroutines"}>
            <MyRoutines
              BASE_URL={BASE_URL}
              jwt={jwt}
              myUserName={myUserName}
              setMyUserName={setMyUserName}
            />
          </Route>

          <Route exact path={"/addroutine"}>
            <AddRoutine
              BASE_URL={BASE_URL}
              jwt={jwt}
            />
          </Route>

          <Route exact path={"/myroutines/:routineId"}
            render={
              (routeProps) => {
                const {
                  match: {
                    params: {
                      routineId,
                    },
                  },
                } = routeProps;
                return (
                  <EditMyRoutine
                    routineId={routineId}
                    jwt={jwt}
                    BASE_URL={BASE_URL}
                    myUserName={myUserName}
                    setMyUserName={setMyUserName}
                  />
                );
              }
            }
          />

        </Switch>
      </Router>
    </div>
  );
}

export default App;