import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import RoutineCard from './RoutineCard';
import buttonStyles from './button.module.css';
import styles from './EditMyRoutine.module.css';

const EditMyRoutine = (props) => {
      const jwt = props.jwt;
      const BASE_URL = props.BASE_URL;
      const routineId = props.routineId;
      const [goal, setGoal] = useState('');
      const [name, setName] = useState('');

            async function editMyRoutine() {
                  try {
                        const response = await fetch(
                              `${BASE_URL}/routines/${routineId}`, {
                              method: "PATCH",     
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${jwt}`
                              },
                              body: JSON.stringify({
                                    name: name,
                                    goal: goal
                              }),
                        });

                        const json = await response.json();
                        
                        console.log(json);

                  } catch (error) {
                        console.error(error);
                  }
            };
    
      return (
            <div className={styles.container}>
                  <form className={styles.routines_top} onSubmit={(e) => {
                        setName('');
                        setGoal('');
                        e.preventDefault();
                  }}>
                        <div>
                              <input className={styles.input}
                                    placeholder='Enter Name'
                                    onChange={(e) => setName(e.target.value)} />
                              <input className={styles.input}
                                    placeholder='Enter Goal'
                                    onChange={(e) => setGoal(e.target.value)} />
                              
                              <Link to="/myroutines"><button className={buttonStyles.button} onClick={editMyRoutine}>Edit Routine</button></Link>
                        </div>
                  </form>


            </div>
      );
}

export default EditMyRoutine;