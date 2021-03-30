import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import GameCard from '../components/GameCard';
import * as API from '../helpers/api';
import { setGames } from '../actions/index';
import Navbar from '../components/Navbar';
import { loggedIn } from '../helpers/session';
import styles from '../assets/GameIndex.module.css';

const GamesIndex = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  let games = useSelector(state => state.games);
  let title; let loading;

  if (!loggedIn()) { history.push('/'); return false; }

  if (pathname === '/favourites') {
    title = 'Favourites';
    loading = 'No Games in favourites';

    const favs = useSelector(state => state.user.favs)
      .map(fav => fav.game_id);

    games = games.filter(game => favs.includes(game.id));
  }

  const dispatch = useDispatch();

  useEffect(() => {
    API.games()
      .then(games => {
        dispatch(setGames(games));
      });
  }, []);

  return (
    <>
      <Navbar title={title ?? 'Games'} />
      <div className={styles.container}>

        {games.length === 0 && <p>{loading ?? 'Loading'}</p>}

        {games.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </>
  );
};

export default GamesIndex;
