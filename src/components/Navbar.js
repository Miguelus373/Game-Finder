import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loggedIn } from '../helpers/session';

const Navbar = ({ title, backArrow }) => {
  const history = useHistory();

  return (
    <nav>
      {backArrow
      && (
      <button type="button" onClick={history.goBack}>
        {'<'}
      </button>
      )}
      <h3>
        {title}
      </h3>
      {loggedIn() && (
      <Link to="/menu">
        Menu
      </Link>
      )}
      {!loggedIn() && (
      <Link to="/">
        Login
      </Link>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  backArrow: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  backArrow: false,
};

export default Navbar;
