import React, { useEffect, useState } from 'react'
import RoutineCard from './RoutineCard';
import styles from './Routines.module.css';

const Routines = (props) => {
      const BASE_URL = props.BASE_URL;
      const [routines, setRoutines] = useState([]);
      
      useEffect(() => {
            async function fetchRoutines() {
                  try {
                        const response = await fetch(
                              `${BASE_URL}/routines`, {
                              headers: {
                                    'Content-Type': 'application/json',
                              },
                        });

                        const json = await response.json();
                        setRoutines(json);
                        console.log(json);

                  } catch (error) {
                        console.error(error);
                  }
            };
            fetchRoutines();
      }, [BASE_URL]);

      return (
            <div className={styles.container}>
                  <div className={styles.routines_top}>
                        <h2>Routines</h2>
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
      );
}

export default Routines;