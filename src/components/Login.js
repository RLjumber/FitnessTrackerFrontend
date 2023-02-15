import React from 'react'
import { useHistory, Link } from "react-router-dom";
import buttonStyles from './button.module.css';
import styles from './Login.module.css';

const Login = (props) => {
      const history = useHistory();
      const BASE_URL = props.BASE_URL;
      
      const setMyUserName = props.setMyUserName

      async function loginButton() {
            try {
                  const body = JSON.stringify({
                              username: props.username,
                              password: props.password
                  });
                  const response = await
                        fetch(`${BASE_URL}/users/login`, {
                              method: "POST",
                              headers: {
                                    'Content-Type': 'application/json',
                              },
                              body,
                        }
                        );

                  const json = await response.json();

                  console.log(json)

                  if (json.error) {

                        alert(json.message);

                  } else {

                        localStorage.setItem('jwt', json.token);
                        setMyUserName(props.username)
                        alert(json.message);
                        history.push("/home")

                  }
            } catch (error) {
                  console.error(error);
            }
      }

      function logOutButton() {
            localStorage.clear('jwt');
            alert('Logged out');
            window.location.reload(false);
      }

      return (
            <form className={styles.container} onSubmit={(e) => {
                  props.setUsername('');
                  props.setPassword('');
                  e.preventDefault();
            }}>
                  <div className={styles.input_all}>
                        <h2>Login/Logout</h2>


                        <input className={styles.input} required="required" placeholder='Username' value={props.username}
                              onChange={(e) => props.setUsername(e.target.value)} />

                        <input className={styles.input} required="required" placeholder='Password' type={'password'} value={props.password}
                              onChange={(e) => props.setPassword(e.target.value)} />


                        <button className={buttonStyles.button} onClick={loginButton}>Enter username and password</button>

                        <div className={styles.logout_button}>
                              <button className={buttonStyles.button} onClick={logOutButton}>Log Out</button>
                        </div>


                        <h3>If user not found, create one:</h3>
                        <Link to="/signup"><button className={buttonStyles.button}>Sign Up</button></Link>

                  </div>
            </form>
      );
}

export default Login;