import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import buttonStyles from './button.module.css';
import styles from './AddActivityToRoutine.module.css';


const AddActivityToRoutine = (props) => {
    const jwt = props.jwt;
    const BASE_URL = props.BASE_URL;
    const routineId = props.routineId;
    const [activities, setActivities] = useState('');
    const [activity, setActivity] = useState('');
    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');

    useEffect(() => {
        async function fetchActivities() {
            try {
                const response = await fetch(`${BASE_URL}/activities`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const json = await response.json();
                setActivities(json);
    
            } catch (error) {
                console.error(error);
            }
        };
        fetchActivities();
    }, [BASE_URL, jwt]);
    
    async function addActivityToRoutine() {
        try {
            const response = await fetch(
                `${BASE_URL}/routines/${routineId}/activities`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}`,
                },
                body: JSON.stringify({
                    activityId: activity,
                    count: count,
                    duration: duration
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
    };
  
    let handleActivityChange = (e) => {
        setActivity(e.target.value)
      }

    return (
        <form className={styles.routines_top} onSubmit={(e) => {
            
            setCount('');
            setDuration('');
            e.preventDefault();
        }}>
            <div>
            
                <select onChange={handleActivityChange}>

                    <option> -- Select an activity -- </option>

                    {Array.from(activities).map((activity) =>
                        <option key={activity.id} value={activity.id}>{activity.name}</option>
                    )}
                </select>

                <input className={styles.input}
                    placeholder='Enter Count'
                    onChange={(e) => setCount(e.target.value)} />
                <input className={styles.input}
                    placeholder='Enter Duration'
                    onChange={(e) => setDuration(e.target.value)} />

                <Link to="/myroutines"><button className={buttonStyles.button} onClick={addActivityToRoutine}>Add Activity</button></Link>

            </div>
        </form>

    );



};

export default AddActivityToRoutine;