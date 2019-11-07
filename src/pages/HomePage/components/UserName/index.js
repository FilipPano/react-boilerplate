import React from 'react';
import styles from './styles.module.scss';

const Greeting = ({ userName }) => (
  <div className={styles.greeting}>
    Hello
    <span className={styles['user-name']}>
      {userName}
    </span>
  </div>
);

export default Greeting;
