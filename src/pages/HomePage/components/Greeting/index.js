import React from 'react';
import styles from './styles.module.scss';

export const Greeting = ({ userName }) => (
  <div className={styles.greeting}>
    Hello
    <span className={styles.userName}>
      {userName || 'Unknown user'}
    </span>
  </div>
);
