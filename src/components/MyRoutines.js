import React, { useEffect, useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import RoutineCard from './RoutineCard';
import styles from './MyRoutines.module.css';
import buttonStyles from './button.module.css';

const MyRoutines = (props) => {
      const BASE_URL = props.BASE_URL;
      const [routines, setRoutines] = useState([]);
      const jwt = props.jwt;
      const myUserName = props.myUserName;
      const history = useHistory();

      useEffect(() => {
            async function fetchMyRoutines() {
                  try {
                        const response = await fetch(
                              `${BASE_URL}/users/${myUserName}/routines`, {
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${jwt}`
                              },
                        });

                        const json = await response.json();
                        setRoutines(json);
                        

                  } catch (error) {
                        console.error(error);
                  }
            };
            fetchMyRoutines();
      }, [BASE_URL, jwt, myUserName]);

      const numDescending = [...routines].sort((a, b) => b.id - a.id);

      return (

            <div className={styles.container}>

                  <Link to="/addroutine"><button className={buttonStyles.button}>Add New Routine</button></Link>
                  <div>
                        <h2>My Routines</h2>
                  </div>

                  {numDescending.map((routine) =>
                        <div key={routine.id} className={styles.routines_text}>
                              <RoutineCard
                                    key={routine.id}
                                    routine={routine}
                              />
                              <span className={styles.postcard_button}>
                                    <button className={buttonStyles.button}
                                          onClick={() => {
                                                history.push(`/myroutines/${routine.id}`);
                                          }
                                          }>Edit/Delete Routine</button>
                                    <button className={buttonStyles.button}
                                          onClick={() => {
                                                history.push(`/addactivity/${routine.id}`);
                                          }}
                                    >Add Activity</button>
                                
                              </span>

                        </div>
                  )
                  }
            </div>
      );
}


export default MyRoutines;
