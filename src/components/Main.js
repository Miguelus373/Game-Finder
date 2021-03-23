import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loggedIn } from '../helpers/session';

const MainPage = () => {
  const history = useHistory();

  if (loggedIn()) { history.push('/menu'); }

  return (
    <>
      <h1>GAME FINDER</h1>
      <Link to="/signup">
        Create an Account
      </Link>
      <br />
      <Link to="/login">
        Log In
      </Link>
    </>
  );
};

export default MainPage;
