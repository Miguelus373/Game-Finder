import React, { useState } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { session } from '../requests/api';

const Session = () => {
  const { pathname } = useLocation();

  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const cookies = new Cookies();
  const history = useHistory();

  const createSession = async () => {
    const response = await session(username, pathname);
    const data = await response.json();

    if (response.ok) {
      cookies.set('currentUserID', data.user_id, { path: '/' });
      cookies.set('userToken', data.token, { path: '/' });
      history.push('/games');
    } else {
      cookies.remove('currentUser');
      cookies.remove('token');
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
    <>
      <h1>{tittle ?? 'Log In'}</h1>
      <p>{errorMessage}</p>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your Username"
        />
        <button
          type="button"
          onClick={createSession}
        >
          {buttonTxt ?? 'Login'}
        </button>
      </form>

      <p>
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
    </>
  );
};

export default Session;
