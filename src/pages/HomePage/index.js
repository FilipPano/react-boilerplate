import React from 'react';
import { useUser } from 'services/users/user/hook';
import { Container } from 'components/layout/Container';
import { Button } from 'components/Button';
import { Greeting } from './components/Greeting';
import styles from './styles.module.scss';

export const HomePage = () => {
  const { getUser, user, isLoading } = useUser();

  return (
    <div className={styles.homePage}>
      <Container>
        <div className={styles.greeting}>
          <Greeting userName={user && user.name} />

          <div className={styles.userButton}>
            <Button onClick={getUser}>
              {isLoading ? 'Fetching...' : 'GET USER'}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
