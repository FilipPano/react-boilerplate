import React from 'react';
import styles from './styles.module.scss';

const Button = ({ description, onClick }) => (
  <button
    type="button"
    className={styles.button}
    onClick={onClick}
  >
    {description}
  </button>
);

export default Button;
