import { React } from 'react'
import styles from './Home.module.css';

const Home = (props) => {
      const myUserName = props.myUserName;

      return (
            <div className={styles.container}>
                  <h1>Welcome to FitnessTrac.ker</h1>
                  <h2>Logged in as {myUserName}</h2>
            </div>
      );
}

export default Home;