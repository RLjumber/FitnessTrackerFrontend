import React, { useState } from 'react';
import { Link } from "react-router-dom";
import buttonStyles from './button.module.css';
import styles from './AddActivity.module.css';

const AddActivity = (props) => {
      const jwt = props.jwt;
      const BASE_URL = props.BASE_URL;
      const [description, setDescription] = useState('');
      const [name, setName] = useState('');

      async function addActivity() {
            try {

                  const response = await fetch(
                        `${BASE_URL}/activities`, {
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
                              placeholder='Enter Description'
                              onChange={(e) => setDescription(e.target.value)} />

                        <Link to="/activities"><button className={buttonStyles.button} onClick={addActivity}>Create</button></Link>
                  </div>
            </form>
      );
}

export default AddActivity;