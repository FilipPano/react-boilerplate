import React from 'react';
import styles from './styles.module.scss';
import Greeting from './components/UserName';
import useUser from 'services/users/user/hook';
import Container from 'components/layout/Container';
import Button from 'components/Button';

const HomePage = () => {
  const [getUser, { user }] = useUser();

  return (
    <div className={styles['home-page']}>
      <Container>
        <div className={styles.greeting}>
          <Greeting userName={user.name} />

          <div className={styles['user-button']}>
            <Button onClick={getUser}>
              GET A USER
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
