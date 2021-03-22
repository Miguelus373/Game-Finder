import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => (
  <div>
    <h1>GAME FINDER</h1>
    <Link to="/signup">
      Create an Account
    </Link>
    <br />
    <Link to="/login">
      Log In
    </Link>
  </div>
);

export default MainPage;
