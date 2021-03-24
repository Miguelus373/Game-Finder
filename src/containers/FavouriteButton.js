import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { currentUserId, userToken } from '../helpers/session';
import * as API from '../helpers/api';
import { setUser } from '../actions';

const FavouriteButton = ({ gameID }) => {
  const dispatch = useDispatch();
  const allFavs = useSelector(state => state.user.favs);
  const fav = allFavs.find(fav => fav.game_id === gameID);
  const [btnClass, setBtnClass] = useState(fav ? 'fav' : 'noFav');

  const handleFavourite = () => {
    const [userID, token] = [currentUserId(), userToken()];

    if (fav) {
      API.removeFromFavourites(fav.id, token);
      setBtnClass('noFav');
    } else {
      API.addToFavourites(userID, gameID, token);
      setBtnClass('fav');
    }

    API.user(userID, token).then(data => dispatch(setUser(data)));
  };

  return (
    <button type="button" onClick={handleFavourite} className={btnClass}>
      HEART
    </button>
  );
};

FavouriteButton.propTypes = {
  gameID: PropTypes.number.isRequired,
};

export default FavouriteButton;
