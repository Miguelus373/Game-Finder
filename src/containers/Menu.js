import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../actions';
import * as API from '../requests/api';

const Menu = () => {
  const user = useSelector(state => state.user.info);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const history = useHistory();

  const logout = () => {
    cookies.remove('currentUserID');
    cookies.remove('userToken');
    history.push('/');
  };

  useEffect(() => {
    const { currentUserID, userToken } = cookies.getAll();

    API.user(currentUserID, userToken)
      .then(user => {
        dispatch(setUser(user));
      });
  }, []);

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
