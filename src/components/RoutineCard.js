import React from 'react'
import styles from './RoutineCard.module.css';

const RoutineCard = (props) => {
      const routine = props.routine;
      const activities = props.routine.activities
      return (
            <div className={styles.card}>

                  <span><h3 className={styles.text}>{routine.name}</h3></span>
                  <span><h4 className={styles.text}>Goal: {routine.goal}</h4></span>
                  <span><h4 className={styles.text}>Creator: {routine.creatorName}</h4></span>
                  <span><h4 className={styles.text}>Activities:</h4></span>
                  {activities.map((activity) =>

                        <div key={activity.id} className={styles.text}>
                              <span className={styles.text}>Name: {activity.name}</span> 
                              <span className={styles.text}>Description: {activity.decription}</span>
                              <span className={styles.text}>Duration: {activity.duration}</span>
                              <span className={styles.text}>Count: {activity.count}</span>
                        </div>

                  )}

            </div>
      );
}

export default RoutineCard;