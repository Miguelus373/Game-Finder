import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../actions';
import * as API from '../helpers/api';
import { loggedIn, currentUserId, userToken } from '../helpers/session';

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

  const user = useSelector(state => state.user.info);

  if (user) {
    return (
      <>
        <p>
          Welcome
          {' '}
          {user.username}
        </p>
        <Link to="/games">
          Games
        </Link>
        <br />
        <Link to="/favourites">
          Favourites
        </Link>
        <hr />
        <button type="button" onClick={logout}>
          Logout
        </button>
      </>
    );
  }

  return (<h2>Loading</h2>);
};

export default Menu;
