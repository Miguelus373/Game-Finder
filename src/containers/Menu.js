import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../actions';
import * as API from '../helpers/api';
import { loggedIn, currentUserId, userToken } from '../helpers/session';
import styles from '../assets/Menu.module.css';
import profileIcon from '../assets/images/profile_icon.png';

const Menu = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const dispatch = useDispatch();

  if (!loggedIn()) { history.push('/'); return false; }

  useEffect(() => {
    const [userID, token] = [currentUserId(), userToken()];

    API.user(userID, token)
      .then(user => {
        dispatch(setUser(user));
      });
  }, []);

  const logout = () => {
    cookies.remove('currentUserID');
    cookies.remove('userToken');
    history.push('/');
  };

  const user = useSelector(state => state.user);

  if (user.info) {
    const { info: { username }, favs } = user;
    return (
      <div className={styles.menu}>
        <img src={profileIcon} alt="Profile Icon" className={styles.icon} />
        <h3 className={styles.username}>
          @
          {username}
        </h3>
        <Link to="/games" className={styles.link}>
          Games
        </Link>
        <Link to="/favourites" className={styles.link}>
          Favourites
          {' '}
          <span className={styles.counter}>{favs.length}</span>
        </Link>
        <p className={styles.link}>
          Messages
          <span className={styles.counter}>2</span>
        </p>
        <p className={styles.link}>Friends</p>
        <hr className={styles.line} />
        <p className={styles.link}>Help</p>
        <button type="button" onClick={logout} className={styles.logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className={styles.loading}>
      <h2>Logging In...</h2>
    </div>
  );
};

export default Menu;
