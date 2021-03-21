import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { signUp } from '../requests/api';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const cookies = new Cookies();
  const history = useHistory();

  const createUser = async () => {
    const response = await signUp(username);
    const data = await response.json();

    if (response.ok) {
      cookies.set('currentUser', data.user, { path: '/' });
      cookies.set('userToken', data.token, { path: '/' });
      history.push('/games');
    } else {
      cookies.remove('currentUser');
      cookies.remove('token');
      setErrorMessage(`Username ${data.username[0]}`);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
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
          onClick={createUser}
        >
          Create Account
        </button>
      </form>

      <p>
        Already have an account?
        {' '}
        <Link to="/login">
          Log In
        </Link>
      </p>
    </>
  );
};

export default SignUp;
