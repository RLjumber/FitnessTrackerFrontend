import { React } from 'react'
//import { Link } from 'react-router-dom';
import styles from './Home.module.css';
//import buttonStyles from './button.module.css';

const Home = (props) => {
      const myUserName = props.myUserName;

      return (
            <div className={styles.container}>
                  <h1>Welcome to FitnessTrac.ker</h1>
                  <h2>Logged in as {myUserName}</h2>

                  {/* <Link to="/profile">
                        <button className={buttonStyles.button}>View Profile</button>
                  </Link> */}
            </div>
      );
}

export default Home;