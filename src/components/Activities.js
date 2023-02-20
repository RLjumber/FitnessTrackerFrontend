import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import buttonStyles from './button.module.css';
import styles from './Activities.module.css';



const Activities = (props) => {
    const [activities, setActivities] = useState([]);
    const BASE_URL = props.BASE_URL;
    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        fetch(`${BASE_URL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(result => {
                setActivities(result)
                
            })
            .catch(console.error);
    }, [BASE_URL]);

    
    
    //Sort the activiites in descending order, when new one created shows up first
    const numDescending = [...activities].sort((a, b) => b.id - a.id);
  
    return (
        <div>
            <div className={styles.top}>
                <h2>Activities</h2>
                {jwt
                    ? <Link to="/addactivity"><button className={buttonStyles.button}>Add Activity</button></Link>
                    : null}
            </div>

            <ul className={styles.container}>
                {numDescending.map(activity => {
                    return (
                        <li key={activity.id} className={styles.activity}>
                            <p>Name: {activity.name}</p>
                            <p>Description: {activity.description}</p>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

export default Activities;