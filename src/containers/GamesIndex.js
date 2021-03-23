import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import GameCard from '../components/GameCard';
import * as API from '../requests/api';
import { setGames } from '../actions/index';
import Navbar from '../components/Navbar';

const GamesIndex = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  let games = useSelector(state => state.games);
  const user = useSelector(state => state.user);

  if (pathname === '/favourites') {
    if (!user.favs) { history.push('/'); return false; }

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

  if (games.length >= 0) {
    return (
      <>
        <Navbar title="Games" />

        {games.length === 0 && <p>No favourites Games yet</p>}

        {games.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </>
    );
  }
  return (<h2>Loading</h2>);
};

export default GamesIndex;
