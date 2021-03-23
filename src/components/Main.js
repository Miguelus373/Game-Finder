import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

const MainPage = () => {
  const cookies = new Cookies();
  const history = useHistory();

  if (cookies.get('currentUserID')) { history.push('/menu'); }

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
