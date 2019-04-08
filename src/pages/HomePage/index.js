import React from 'react';
import styles from './styles.module.scss';
import ReactBoilerPlateContainer from 'containers/ReactBoilerplateContainer';

const HomePage = () => (
  <div className={styles['home-page']}>
    <ReactBoilerPlateContainer />
  </div>
);

export default HomePage;
