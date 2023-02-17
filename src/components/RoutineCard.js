import React from 'react'
import styles from './RoutineCard.module.css';

const RoutineCard = (props) => {
      const routine = props.routine;
      const activities = props.routine.activities
      return (
            <div className={styles.card}>

                  <span><h2 className={styles.text}>{routine.name}</h2></span>
                  <span><h3 className={styles.text}>{routine.goal}</h3></span>
                  <span><h4 className={styles.text}>Creator: {routine.creatorName}</h4></span>
                  <span><h3 className={styles.text}>Activities:</h3></span>
                  {activities.map((activity) =>

                        <div key={activity.id} className={styles.text}>
                              <span className={styles.text}>{activity.name}</span> 
                              <span className={styles.text}>Description: {activity.description}</span>
                              <span className={styles.text}>Duration: {activity.duration}</span>
                              <span className={styles.text}>Count: {activity.count}</span>
                        </div>

                  )}

            </div>
      );
}

export default RoutineCard;