import React, { useState } from 'react';
import { Link } from "react-router-dom";
import buttonStyles from './button.module.css';
import styles from './Routines.module.css';

const AddRoutine = (props) => {
      const jwt = props.jwt;
      const BASE_URL = props.BASE_URL;
      const [goal, setGoal] = useState('');
      const [name, setName] = useState('');

      async function addRoutine() {
            try {

                  const response = await fetch(
                        `${BASE_URL}/myroutines`, {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                              "Authorization": `Bearer ${jwt}`,
                        },
                        body: JSON.stringify({
                              name: name,
                              description: description
                        }),
                  }
                  );

                  const json = await response.json();
                  if (json.error) {
                        alert(json.error);
                  }
            } catch (error) {
                  console.error(error);
            }
      }

      return (
            <form className={styles.container} onSubmit={(e) => {
                  setName('');
                  setDescription('');
                  e.preventDefault();
            }}>
                  <div className={styles.input_all}>
                        <input className={styles.input}
                              placeholder='Enter Name'
                              onChange={(e) => setName(e.target.value)} />
                        <input className={styles.input}
                              placeholder='Enter Goal'
                              onChange={(e) => setGoal(e.target.value)} />

                        <Link to="/myroutines"><button className={buttonStyles.button} onClick={addRoutine}>Create</button></Link>
                  </div>
            </form>
      );
}

export default AddRoutine;