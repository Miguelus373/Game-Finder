import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { loggedIn } from '../helpers/session';
import styles from '../assets/GameDetails.module.css';

const GameDetails = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const id = parseInt(pathname.split('/')[2], 10);
  const game = useSelector(state => state.games.find(game => game.id === id));

  if (!loggedIn() || !game) { history.push('/'); return false; }

  const {
    title, image, description, genre,
  } = game;

  return (
    <div className={styles.container}>
      <Navbar title={title} backArrow />
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.wrapper}>
        <p className={styles.about}>
          About this Game:
        </p>
        <br />
        <p className={styles.description}>
          {description}
        </p>
      </div>
      <p className={styles.genre}>{genre}</p>
      <p className={styles.button}>
        Buy for $ 19.99
      </p>
    </div>
  );
};

export default GameDetails;
