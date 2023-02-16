import React from 'react'
import { useState, useEffect } from 'react';

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';


const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(result => {
                setActivities(result)
                console.log("Activities: ", result);
            })
            .catch(console.error);
        }, []);

        console.log("SCARY", activities)

        return (
            <div>
                <ul>
                    {activities.map(activity => {
                        return(
                            <li key={activity.id} className="activity">
                                <p>{activity.name}</p>
                                <p>{activity.description}</p>
                                <p>{activity.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

export default Activities;