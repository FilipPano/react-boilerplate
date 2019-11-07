import React from 'react';
import styles from './styles.module.scss';

const Button = ({ type = 'button', children, onClick }) => (
  <button
    type={type}
    className={styles.button}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
