import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavouriteButton from '../containers/FavouriteButton';
import styles from '../assets/GameCard.module.css';

const GameCard = ({ game }) => {
  const {
    id, title, image, genre,
  } = game;

  return (
    <div className={styles.card}>
      <Link to={`/game/${id}`} className={styles.link}>
        <img src={image} alt={title} className={styles.image} />
      </Link>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p>{genre}</p>
        <FavouriteButton gameID={id} />
      </div>
    </div>
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
