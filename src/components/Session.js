import React, { useState } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { session } from '../helpers/api';
import { loggedIn } from '../helpers/session';
import styles from '../assets/Session.module.css';

const Session = () => {
  const cookies = new Cookies();
  const history = useHistory();

  if (loggedIn()) { history.push('/menu'); return false; }

  const { pathname } = useLocation();

  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const createSession = async () => {
    const response = await session(username, pathname);
    const data = await response.json();

    if (response.ok) {
      cookies.set('currentUserID', data.user_id, { path: '/' });
      cookies.set('userToken', data.token, { path: '/' });
      history.push('/menu');
    } else {
      setErrorMessage(`Username ${data.username}`);
    }
  };

  let tittle; let buttonTxt; let linkPath; let ask; let redirect;

  if (pathname === '/signup') {
    tittle = 'Sign Up';
    buttonTxt = 'Create Account';
    linkPath = '/login';
    ask = 'Already';
    redirect = 'Log In';
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{tittle ?? 'Log In'}</h1>
      <p className={styles.message}>
        Welcome!
        {' '}
        {tittle ?? 'Log In'}
        {' '}
        and start managing your games
      </p>
      <p className={styles.error}>{errorMessage}</p>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your Username"
          className={styles.input}
        />
        <br />
        <button
          type="button"
          onClick={createSession}
          className={styles.button}
        >
          {buttonTxt ?? 'Login'}
        </button>
      </form>

      <p className={styles.redirect}>
        <span>
          {ask ?? 'Don\'t'}
          {' '}
          have an account?
        </span>
        {' '}
        <Link to={linkPath ?? '/signup'}>
          {redirect ?? 'Sign Up'}
        </Link>
      </p>
    </div>
  );
};

export default Session;
