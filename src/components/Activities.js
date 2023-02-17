import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import buttonStyles from './button.module.css';



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
                //console.log("Activities: ", result);
            })
            .catch(console.error);
    }, [BASE_URL]);

    //console.log("SCARY", activities)
    
    //Sort the activiites in descending order, when new one created shows up first
    const numDescending = [...activities].sort((a, b) => b.id - a.id);
  
    return (
        <div>
            <div >
                <h2>Activities</h2>
                {jwt
                    ? <Link to="/addactivity"><button className={buttonStyles.button}>Add Activity</button></Link>
                    : null}
            </div>

            <ul>
                {numDescending.map(activity => {
                    return (
                        <li key={activity.id} className="activity">
                            <p>{activity.name}</p>
                            <p>{activity.description}</p>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

export default Activities;