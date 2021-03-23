import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      <Link to="/menu">
        Menu
      </Link>
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
