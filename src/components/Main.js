import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loggedIn } from '../helpers/session';
import styles from '../assets/Main.module.css';

const MainPage = () => {
  const history = useHistory();

  if (loggedIn()) { history.push('/menu'); }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GAME FINDER</h1>
      <div className={styles.wrapper}>
        <Link to="/signup" className={styles.button}>
          Create an Account
        </Link>
        <Link to="/login" className={styles.button}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
