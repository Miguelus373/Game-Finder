import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loggedIn } from '../helpers/session';
import styles from '../assets/Navbar.module.css';
import Arrow from '../assets/images/arrow.svg';
import Menu from '../assets/images/menu.svg';

const Navbar = ({ title, backArrow }) => {
  const history = useHistory();

  return (
    <nav className={styles.navbar}>
      {backArrow
      && (
      <button type="button" onClick={history.goBack} className={styles.back}>
        <img src={Arrow} alt="Go back" className={styles.backArrow} />
      </button>
      )}
      <h4 className={styles.title}>
        {title}
      </h4>
      {loggedIn() && (
      <Link to="/menu" className={styles.menu}>
        <img src={Menu} alt="Menu" />
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
