import React from 'react';
import styles from './styles.module.scss';

const Container = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default Container;
