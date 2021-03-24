import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavouriteButton from '../containers/FavouriteButton';

const GameCard = ({ game }) => {
  const {
    id, title, image, genre,
  } = game;

  return (
    <>
      <Link to={`/game/${id}`}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <span>{genre}</span>
      </Link>
      <FavouriteButton gameID={id} />
    </>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
