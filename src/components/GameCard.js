import React from 'react';
import PropTypes from 'prop-types';

const GameCard = ({ game }) => {
  const {
    title, image, genre, description,
  } = game;

  return (
    <>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <span>{genre}</span>
      <p>{description}</p>
    </>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
