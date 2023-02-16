import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import buttonStyles from './button.module.css';
import styles from './Routines.module.css';
import RoutineCard from './RoutineCard';

const AddRoutine = (props) => {
      const jwt = props.jwt;
      const BASE_URL = props.BASE_URL;
      const [goal, setGoal] = useState('');
      const [name, setName] = useState('');
      const [routines, setRoutines] = useState('');
      const [isPublic, setIsPublic] = useState(false);
      const username = props.username;


    //   async function addRoutine() {
    //         try {

    //               const response = await fetch(
    //                     `${BASE_URL}/routines`, {
    //                     method: "POST",
    //                     headers: {
    //                           "Content-Type": "application/json",
    //                           "Authorization": `Bearer ${jwt}`,
    //                     },
    //                     body: JSON.stringify({
    //                           name: name,
    //                           goal: goal,
    //                           isPublic: isPublic
    //                     }),
    //               }
    //               );

    //               const json = await response.json();
    //               if (json.error) {
    //                     alert(json.error);
    //               }
    //         } catch (error) {
    //               console.error(error);
    //         }
    //   }

  
    useEffect(() => {
            async function getUserRoutines() {
                try {
                    const response = await fetch(
                    `${BASE_URL}/users/:${username}/routines`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${jwt}`,
                        }
                    }
                    )
                    const json = await response.json();
                    setRoutines(json);
                    console.log(json)

                } catch (error) {
                    console.error(error)
                }
            };
            getUserRoutines();
        }, [BASE_URL, jwt, username]);


    const handleCheckbox = () => {
        setIsPublic(!isPublic);
    };


      return (
        <div>
                {/* <form className={styles.container} onSubmit={(e) => {
                    setName('');
                    setGoal('');
                    e.preventDefault();
                }}>
                    <div className={styles.input_all}>
                            <input className={styles.input}
                                placeholder='Enter Name'
                                onChange={(e) => setName(e.target.value)} />
                            <input className={styles.input}
                                placeholder='Enter Goal'
                                onChange={(e) => setGoal(e.target.value)} />
                            <label>
                              <input type="checkbox" checked={isPublic} onChange={handleCheckbox} />Public
                            </label>

                            <Link to="/myroutines"><button className={buttonStyles.button} onClick={addRoutine}>Create Routine</button></Link>
                    </div>
                </form> */}

                <div className={styles.container}>

                    <div className={styles.routines_top}>
                        <h2>My Routines</h2>
                    </div>

                {routines.map((routine) => 
                        <div key={routine.id} className={styles.routines_text}>
                            <RoutineCard
                                key={routine.id}
                                routine={routine}
                            />
                        </div>
                    )
                }
                </div>

        </div>
      );
}

export default AddRoutine;